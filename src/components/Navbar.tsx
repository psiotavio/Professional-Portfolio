import { useState, useEffect, useRef } from 'react'
import { FaSun, FaMoon, FaChevronDown } from 'react-icons/fa6'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage, type Language } from '../contexts/LanguageContext'

const flags: Record<Language, string> = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸' }
const labels: Record<Language, string> = { pt: 'PT', en: 'EN', es: 'ES' }
const langNames: Record<Language, string> = { pt: 'Português', en: 'English', es: 'Español' }

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.apps'), href: '#apps' },
    { label: t('nav.redesigns'), href: '#redesigns' },
    { label: t('nav.github'), href: '#github' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.awards'), href: '#awards' },
  ]

  const isDark = theme === 'dark'

  return (
    <>
      <nav
        className="navbar"
        style={{
          background: scrolled
            ? isDark ? 'rgba(0,0,0,0.86)' : 'rgba(255,255,255,0.90)'
            : isDark ? 'rgba(0,0,0,0.60)' : 'rgba(255,255,255,0.70)',
          borderBottomColor: scrolled ? 'var(--border-hover)' : 'var(--border)',
        }}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <button
            className="navbar__logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            OC
          </button>

          {/* Desktop links */}
          <div className="navbar__links">
            {navLinks.map((l) => (
              <button key={l.href} className="navbar__link" onClick={() => scrollTo(l.href)}>
                {l.label}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="navbar__controls">
            {/* Theme toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Modo claro' : 'Modo escuro'}
            >
              {isDark
                ? <FaSun size={14} />
                : <FaMoon size={14} />
              }
            </button>

            {/* Language selector */}
            <div className="lang-selector" ref={langRef}>
              <button
                className={`lang-selector__btn${langOpen ? ' open' : ''}`}
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Select language"
              >
                <span style={{ fontSize: '15px' }}>{flags[language]}</span>
                <span>{labels[language]}</span>
                <FaChevronDown size={10} />
              </button>

              {langOpen && (
                <div className="lang-selector__dropdown">
                  {(['pt', 'en', 'es'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      className={`lang-option${language === lang ? ' active' : ''}`}
                      onClick={() => { setLanguage(lang); setLangOpen(false) }}
                    >
                      <span className="lang-option__flag">{flags[lang]}</span>
                      {langNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <button className="navbar__cta" onClick={() => scrollTo('#contact')}>
              {t('nav.contact')}
            </button>

            {/* Hamburger */}
            <button
              className="navbar__hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span style={{
                transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
                transition: 'transform 0.2s ease',
              }} />
              <span style={{
                opacity: mobileOpen ? 0 : 1,
                transition: 'opacity 0.2s ease',
              }} />
              <span style={{
                transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
                transition: 'transform 0.2s ease',
              }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          {navLinks.map((l) => (
            <button key={l.href} className="mobile-menu__link" onClick={() => scrollTo(l.href)}>
              {l.label}
            </button>
          ))}

          {/* Mobile language buttons */}
          <div style={{
            display: 'flex',
            gap: 'var(--s1)',
            marginTop: 'var(--s2)',
            padding: '0 var(--s2)',
          }}>
            {(['pt', 'en', 'es'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => { setLanguage(lang); setMobileOpen(false) }}
                style={{
                  flex: 1,
                  padding: '8px',
                  background: language === lang ? 'var(--accent-subtle)' : 'var(--bg-card)',
                  border: `1px solid ${language === lang ? 'var(--accent)' : 'var(--border)'}`,
                  borderRadius: 'var(--r-sm)',
                  color: language === lang ? 'var(--accent)' : 'var(--text-secondary)',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontFamily: 'var(--font)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                }}
              >
                {flags[lang]} {labels[lang]}
              </button>
            ))}
          </div>

          <button className="mobile-menu__cta" onClick={() => scrollTo('#contact')}>
            {t('nav.contact')}
          </button>
        </div>
      )}
    </>
  )
}
