import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaCode, FaStar, FaCodeFork, FaUsers } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import '../../styles/v2.css'

interface GithubProfile {
    avatar_url: string;
    public_repos: number;
    followers: number;
    following: number;
    bio: string;
}

interface GithubRepo {
    id: number | string;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    updated_at: string;
}

export default function V2GithubProjects() {
    const { t } = useLanguage()
    const sectionRef = useRef<HTMLElement>(null)
    const [profile, setProfile] = useState<GithubProfile | null>(null)
    const [repos, setRepos] = useState<GithubRepo[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                // Official REST API handles CORS correctly for public profiles
                const [profileRes, reposRes] = await Promise.all([
                    fetch('https://api.github.com/users/psiotavio'),
                    fetch('https://api.github.com/users/psiotavio/repos?per_page=100')
                ])

                const profileData = await profileRes.json()
                const reposData = await reposRes.json()

                if (profileRes.ok) setProfile(profileData)

                if (reposRes.ok && Array.isArray(reposData)) {
                    // Sort by stars descending, then by recently updated to emulate "importance"
                    const sorted = reposData
                        .filter((r: any) => !r.fork)
                        .sort((a: any, b: any) => {
                            if (b.stargazers_count !== a.stargazers_count) {
                                return b.stargazers_count - a.stargazers_count;
                            }
                            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
                        })
                        .slice(0, 4)
                    setRepos(sorted)
                }

                setLoading(false)
            } catch (error) {
                console.error('Error fetching GitHub data:', error)
                setLoading(false)
            }
        }

        fetchGithubData()
    }, [])

    const itemVariants = {
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 20 } }
    }

    return (
        <section className="v2-github v2-section" id="github" ref={sectionRef}>
            <div className="v2-container-inner">
                <div className="v2-github-box">
                    <motion.div initial={{ opacity: 1 }} className="v2-github-header-icon">
                        <FaGithub size={48} />
                    </motion.div>

                    <motion.h2 className="v2-section-title" style={{ marginBottom: '0.5rem' }}>
                        {t('github.title')}
                    </motion.h2>

                    <motion.a
                        href="https://github.com/psiotavio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="v2-github-link"
                        whileHover={{ scale: 1.05 }}
                        style={{ display: 'inline-flex', marginBottom: '2.5rem' }}
                    >
                        <FaGithub size={16} /> @psiotavio
                    </motion.a>

                    {loading ? (
                        <div className="v2-github-loading">
                            <div className="v2-github-spinner" />
                        </div>
                    ) : (
                        <div className="v2-github-dynamic-content">
                            {profile && (
                                <motion.div className="v2-github-stats">
                                    <div className="v2-github-stat-item">
                                        <FaCode className="v2-stat-icon" />
                                        <span className="v2-stat-num">{profile.public_repos}</span>
                                        <span className="v2-stat-label">Repos</span>
                                    </div>
                                    <div className="v2-github-stat-item">
                                        <FaUsers className="v2-stat-icon" />
                                        <span className="v2-stat-num">{profile.followers}</span>
                                        <span className="v2-stat-label">Followers</span>
                                    </div>
                                    <div className="v2-github-stat-item">
                                        <FaStar className="v2-stat-icon" />
                                        <span className="v2-stat-num">{repos.reduce((acc, r) => acc + r.stargazers_count, 0)}</span>
                                        <span className="v2-stat-label">Stars</span>
                                    </div>
                                </motion.div>
                            )}

                            {repos.length > 0 && (
                                <div className="v2-github-repos-grid">
                                    {repos.map((repo) => (
                                        <motion.a
                                            key={repo.id}
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="v2-repo-card"
                                            whileHover={{ y: -5, borderColor: 'var(--v2-gold)' }}
                                        >
                                            <div className="v2-repo-header">
                                                <span className="v2-repo-name">{repo.name}</span>
                                                {repo.language && (
                                                    <span className="v2-repo-lang">
                                                        <span className="v2-lang-dot" /> {repo.language}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="v2-repo-desc">{repo.description || "Experimental architecture & development."}</p>
                                            <div className="v2-repo-footer">
                                                <span><FaStar size={12} /> {repo.stargazers_count}</span>
                                                <span><FaCodeFork size={12} /> {repo.forks_count}</span>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
