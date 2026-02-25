import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type Language = 'pt' | 'en' | 'es'

type Translations = Record<string, string>

const pt: Translations = {
  // Nav
  'nav.about': 'Sobre',
  'nav.apps': 'Projetos',
  'nav.redesigns': 'Redesigns',
  'nav.github': 'GitHub',
  'nav.skills': 'Skills',
  'nav.awards': 'Carreira',
  'nav.contact': 'Contato',

  // Hero
  'hero.badge': 'Frontend Mobile Engineer',
  'hero.name1': 'Otávio',
  'hero.name2': 'Cunha',
  'hero.titleStrong': 'Mobile Developer',
  'hero.titleRest': '& Pesquisador de UI/UX',
  'hero.description': 'Desenvolvendo interfaces de alto impacto com o rigor da engenharia e a estética do design premium. Especialista em ecossistemas Mobile e apaixonado por performance e usabilidade.',
  'hero.cta': 'Explorar Portfólio',
  'hero.scroll': 'Deslizar',
  'hero.photo': 'Retrato Profissional',

  // About
  'about.eyebrow': 'Minha História',
  'about.title': 'Engenheiro com',
  'about.title2': 'foco em Design',
  'about.body1': 'Sou Otávio Cunha, engenheiro de software fascinado pela intersecção entre código e experiência do usuário. Como Mestrando em UI/UX e graduado pela PUCRS, transformo conceitos complexos em aplicações fluidas e intuitivas.',
  'about.body2': 'Acredito que a excelência técnica deve vir acompanhada de uma estética impecável. Meu foco é construir produtos digitais que não apenas funcionem perfeitamente, mas que também encantem em cada interação.',
  'edu.grad': 'Formado',
  'edu.inProgress': 'Em curso',
  'edu.degree1': 'Engenharia de Software',
  'edu.school1': 'PUCRS — Pontifícia Universidade Católica do RS',
  'edu.degree2': 'Mestrado em Ciência da Computação',
  'edu.school2': 'PUCRS · Linha de Pesquisa em Engenharia Humanística (UI/UX)',
  'photo.main': 'Fotografia Principal',
  'photo.2': 'Lifestyle 01',
  'photo.3': 'Lifestyle 02',

  // Apps
  'apps.eyebrow': 'Desenvolvimento de Produto',
  'apps.title': 'Projetos Mobile',
  'apps.subtitle': 'Soluções nativas e multiplataforma publicadas nas principais lojas, focadas em resolver problemas reais com design elegante.',
  'apps.viewStore': 'Ver na Loja',
  'apps.learnMore': 'Saber Mais',
  'apps.callout.label': 'Destaque',
  'apps.callout.title': 'WatchFolio: Top 100 na App Store',
  'apps.callout.desc': 'Um dos 100 aplicativos de entretenimento mais baixados no Brasil. Projeto autoral desenvolvido de ponta a ponta, validando excelência em UX e arquitetura.',
  'apps.watchfolio.category': 'Entretenimento & Mídia',
  'apps.watchfolio.desc': 'Seu diário de cinema e rede social definitiva. Organize o que assistiu, descubra títulos com IA, conecte-se com amigos e colecione cards exclusivos.',
  'apps.readfolio.category': 'Produtividade & Leitura',
  'apps.readfolio.desc': 'O companheiro ideal para leitores. Organize sua biblioteca, acompanhe metas de leitura, veja estatísticas e receba recomendações em uma interface minimalista.',
  'apps.travelfolio.category': 'Viagens & Estilo de Vida',
  'apps.travelfolio.desc': 'Planeje e eternize suas jornadas. Organize roteiros, passagens e orçamentos de forma inteligente. Guarde memórias, fotos e despesas em um só lugar.',
  'apps.nos2.category': 'Social & Estilo de Vida',
  'apps.nos2.desc': 'Fortaleça sua conexão. Crie um feed de memórias compartilhado, planeje metas do casal, troquem cartas e escolham filmes com o divertido "Tinder de Filmes".',
  'apps.minimystics.category': 'Jogos & Estratégia',
  'apps.minimystics.desc': 'Um encantador TCG com batalhas em tempo real e estratégia profunda. Colecione cartas místicas, evolua criaturas e ganhe recompensas mesmo offline.',

  // Web Projects
  'web.eyebrow': 'Engenharia de Produto',
  'web.title': 'Projetos Web',
  'web.subtitle': 'Aplicações web robustas e interfaces desktop refinadas, construídas com foco em escalabilidade e design systems.',
  'web.first': '#1 Desenvolvimento',
  'web.potterdle.category': 'Jogos & Puzzles',
  'web.potterdle.desc': 'Meu primeiro site de todos, meu primeiro projeto de software. Um site inspirado em Harry Potter com diversos jogos tematizados com a saga.',
  'web.voyage.category': 'Turismo & Planejamento',
  'web.voyage.desc': 'Um site com IA que monta a viagem perfeita analisando a data de ida e volta e pesquisando o que terá de melhor no local, incluindo tempo e preço.',
  'web.watchfolio.category': 'Streaming & Mídia Digital',
  'web.watchfolio.desc': 'Versão web do meu projeto mobile. Veja informações detalhadas de filmes, lançamentos, orçamentos, plataformas de streaming, sinopse e elenco.',
  'web.minimystics.category': 'Infraestrutura de Jogos',
  'web.minimystics.desc': 'Landing page para conhecer a história do jogo, a história dos personagens, as cartas e muito mais.',

  // Redesigns
  'redesigns.eyebrow': 'Design de Produto',
  'redesigns.title': 'Redesigns Acadêmicos',
  'redesigns.subtitle': 'Explorações visuais onde aplico heurísticas de Nielsen e design systems modernos para otimizar fluxos de apps consolidados.',
  'redesigns.cta': 'Ver Estudo de Caso',
  'redesigns.twitter.tag': 'Interface Social',
  'redesigns.twitter.desc': 'Otimização da hierarquia visual e tipográfica para uma leitura de microblogs sem distrações.',
  'redesigns.instagram.tag': 'Interface Visual',
  'redesigns.instagram.desc': 'Foco no Minimalismo Visual: redução de ruído para priorizar o conteúdo gerado pelo usuário.',
  'redesigns.primevideo.tag': 'Video Streaming',
  'redesigns.primevideo.desc': 'Refatoração da experiência de descoberta e navegação, focando em artes cinematográficas e fluidez.',
  'redesigns.spotify.tag': 'Music & Audio',
  'redesigns.spotify.desc': 'Interface emocional: o player como centro da experiência, com transições suaves e tipografia expressiva.',

  // GitHub
  'github.eyebrow': 'Engenharia de Software',
  'github.title': 'GitHub',
  'github.comingSoon': 'Arquitetando...',
  'github.comingSoonDesc': 'Repositórios selecionados de ferramentas e boilerplates em TypeScript e Swift estarão disponíveis em breve.',

  // Skills
  'skills.eyebrow': 'Stack Tecnológica',
  'skills.title': 'Tecnologias',
  'skills.subtitle': 'Domínio técnico em desenvolvimento cross-platform e princípios de design moderno.',
  'skills.languages': 'Principais Linguagens',
  'skills.frameworks': 'Ecossistemas e Ferramentas',
  'skills.design': 'Metodologias de Design',
  'languages.title': 'Comunicação',
  'languages.subtitle': 'Perspectiva Global',
  'languages.pt': 'Português',
  'languages.en': 'Inglês',
  'languages.es': 'Espanhol',
  'languages.native': 'Nativo',
  'languages.fluent': 'Fluente',
  'languages.basic': 'Intermediário',

  // Awards
  'awards.eyebrow': 'Marcos de Carreira',
  'awards.title': 'Prêmios &',
  'awards.title2': 'Formações',
  'awards.subtitle': 'Reconhecimentos que validam o compromisso com a excelência técnica e crescimento contínuo.',
  'awards.hackathon.title': '2º Lugar — Hackathon de Engenharia de Software',
  'awards.hackathon.org': 'PUCRS',
  'awards.hackathon.desc': 'Conquista em maratona de programação competitiva, resolvendo problemas reais sob alta pressão e prazos curtos.',
  'awards.apple.title': 'Certificação Apple Developer Academy',
  'awards.apple.org': 'Apple Inc.',
  'awards.apple.desc': 'Formação intensiva no ecossistema Apple, com foco em Swift, interface humanizada e diretrizes de design da marca.',
  'stats.apps': 'Apps na Loja',
  'stats.appstore': 'App Store Rank',
  'stats.awards': 'Prêmios',
  'stats.languages': 'Idiomas',

  // Contact
  'contact.eyebrow': 'Contato',
  'contact.title': 'Deseja iniciar um',
  'contact.titleGradient': 'projeto inovador',
  'contact.title2': 'comigo?',
  'contact.sub': 'Estou disponível para colaborações estratégicas e novas oportunidades como desenvolvedor sênior ou líder técnico.',
  'contact.location': 'Porto Alegre, RS — Brasil (Disponível para Trabalho Remoto Mundial)',
  'footer.copy': '© {year} Otávio Cunha · Desenvolvido com React, TypeScript & Elegância.',
}

const en: Translations = {
  // Nav
  'nav.about': 'About',
  'nav.apps': 'Projects',
  'nav.redesigns': 'Redesigns',
  'nav.github': 'GitHub',
  'nav.skills': 'Skills',
  'nav.awards': 'Career',
  'nav.contact': 'Contact',

  // Hero
  'hero.badge': 'Frontend Mobile Engineer',
  'hero.name1': 'Otávio',
  'hero.name2': 'Cunha',
  'hero.titleStrong': 'Mobile Developer',
  'hero.titleRest': '& UI/UX Researcher',
  'hero.description': "A Software Engineer focused on crafting high-end digital experiences with a designer's eye. Specialized in the Mobile ecosystem and dedicated to performance and accessibility.",
  'hero.cta': 'Explore Portfolio',
  'hero.scroll': 'Scroll',
  'hero.photo': 'Professional Portrait',

  // About
  'about.eyebrow': 'My Story',
  'about.title': 'An Engineer with a',
  'about.title2': 'focus on Design',
  'about.body1': "I am Otávio Cunha, a Software Engineer fascinated by the intersection of code and user experience. As a Master's candidate in UI/UX Research and a PUCRS graduate, I turn complex concepts into fluid and intuitive applications.",
  'about.body2': 'I believe technical excellence should be paired with impeccable aesthetics. My focus is on building digital products that not only work perfectly but also delight at every interaction.',
  'edu.grad': 'Graduated',
  'edu.inProgress': 'Ongoing',
  'edu.degree1': 'Software Engineering',
  'edu.school1': 'PUCRS — Pontifical Catholic University of RS',
  'edu.degree2': 'M.Sc. in Computer Science',
  'edu.school2': 'PUCRS · Research focused on Human-Computer Interaction (UI/UX)',
  'photo.main': 'Main Portrait',
  'photo.2': 'Lifestyle 01',
  'photo.3': 'Lifestyle 02',

  // Apps
  'apps.eyebrow': 'Product Development',
  'apps.title': 'Mobile Portfolio',
  'apps.subtitle': 'iOS and Android solutions published across global stores, built to solve real-world problems with premium design.',
  'apps.viewStore': 'Store View',
  'apps.learnMore': 'Learn More',
  'apps.callout.label': 'Spotlight',
  'apps.callout.title': 'WatchFolio: App Store Top 100',
  'apps.callout.desc': 'Ranked among the top 100 entertainment apps in Brazil. An independent project developed from scratch, showcasing UX and architecture excellence.',
  'apps.watchfolio.category': 'Entertainment & Media',
  'apps.watchfolio.desc': 'Your ultimate cinema diary and social network. Organize your watch history, discover titles with AI, connect with friends, and collect exclusive cards.',
  'apps.readfolio.category': 'Productivity & Books',
  'apps.readfolio.desc': 'The perfect companion for book lovers. Organize your library, track reading goals, view stats, and get personalized recommendations in a minimalist UI.',
  'apps.travelfolio.category': 'Travel & Lifestyle',
  'apps.travelfolio.desc': 'Plan and immortalize your journeys. Organize itineraries and budgets smartly. Store memories, photos, and expenses for every trip in one place.',
  'apps.nos2.category': 'Social & Lifestyle',
  'apps.nos2.desc': 'Strengthen your connection. Create a shared memory feed, plan couple goals, exchange letters, and pick the next movie with the "Movie Tinder."',
  'apps.minimystics.category': 'Gaming & Strategy',
  'apps.minimystics.desc': 'An enchanting TCG with real-time battles and deep strategy. Collect mystical cards, evolve creatures, and earn rewards even offline.',

  // Web Projects
  'web.eyebrow': 'Product Engineering',
  'web.title': 'Web Portfolio',
  'web.subtitle': 'Robust web applications and refined desktop interfaces, built with a focus on scalability and design systems.',
  'web.first': '#1 Development',
  'web.potterdle.category': 'Gaming & Puzzle',
  'web.potterdle.desc': 'My very first website and software project. A Harry Potter-inspired site featuring various themed games from the saga.',
  'web.voyage.category': 'Tourism & Planning',
  'web.voyage.desc': 'An AI-powered site that crafts the perfect trip by analyzing dates and scouting the best local attractions, weather, and pricing.',
  'web.watchfolio.category': 'Streaming & Digital Media',
  'web.watchfolio.desc': 'Web version of my mobile project. Explore movie details, releases, budgets, available streaming platforms, synopses, and cast.',
  'web.minimystics.category': 'Gaming Infrastructure',
  'web.minimystics.desc': 'Landing page to discover the game lore, character stories, cards, and the entire Mini Mystics universe.',

  // Redesigns
  'redesigns.eyebrow': 'Product Design',
  'redesigns.title': 'Case Studies',
  'redesigns.subtitle': 'Visual explorations using Nielsen heuristics and modern design systems to optimize established app flows.',
  'redesigns.cta': 'Explore Case Study',
  'redesigns.twitter.tag': 'Social Interface',
  'redesigns.twitter.desc': 'Optimizing visual and typographic hierarchy for a distraction-free microblogging experience.',
  'redesigns.instagram.tag': 'Visual Interface',
  'redesigns.instagram.desc': 'Focus on Minimalism: architectural noise reduction to prioritize User Generated Content.',
  'redesigns.primevideo.tag': 'Video Streaming',
  'redesigns.primevideo.desc': 'Refactoring the exploration experience, focusing on cinematic assets and interface fluidity.',
  'redesigns.spotify.tag': 'Music & Audio',
  'redesigns.spotify.desc': 'Emotional Interface: the player as the centerpiece, featuring smooth transitions and expressive typography.',

  // GitHub
  'github.eyebrow': 'Software Engineering',
  'github.title': 'GitHub',
  'github.comingSoon': 'Architecting...',
  'github.comingSoonDesc': 'Curated repositories of tools and boilerplates in TypeScript and Swift will be available soon.',

  // Skills
  'skills.eyebrow': 'Tech Stack',
  'skills.title': 'Core Competencies',
  'skills.subtitle': 'Technical mastery in cross-platform development and modern design principles.',
  'skills.languages': 'Core Languages',
  'skills.frameworks': 'Ecosystems & Tooling',
  'skills.design': 'Design Methodologies',
  'languages.title': 'Communication',
  'languages.subtitle': 'Global Perspective',
  'languages.pt': 'Portuguese',
  'languages.en': 'English',
  'languages.es': 'Spanish',
  'languages.native': 'Native',
  'languages.fluent': 'Fluent',
  'languages.basic': 'Intermediate',

  // Awards
  'awards.eyebrow': 'Career Milestones',
  'awards.title': 'Honors &',
  'awards.title2': 'Certifications',
  'awards.subtitle': 'Recognition validating commitment to technical excellence and continuous growth.',
  'awards.hackathon.title': '2nd Place — Software Engineering Hackathon',
  'awards.hackathon.org': 'PUCRS',
  'awards.hackathon.desc': 'Achievement in a competitive programming marathon, solving complex problems under high pressure and short deadlines.',
  'awards.apple.title': 'Apple Developer Academy Certification',
  'awards.apple.org': 'Apple Inc.',
  'awards.apple.desc': 'Intensive training in the Apple ecosystem, focusing on Swift, Human Interface Guidelines, and premium branding.',
  'stats.apps': 'Published Apps',
  'stats.appstore': 'App Store Rank',
  'stats.awards': 'Awards',
  'stats.languages': 'Languages',

  // Contact
  'contact.eyebrow': 'Get in Touch',
  'contact.title': 'Looking to start an',
  'contact.titleGradient': 'innovative project',
  'contact.title2': 'together?',
  'contact.sub': 'Available for strategic collaborations and new roles as a Senior Developer or Tech Lead.',
  'contact.location': 'Porto Alegre, Brazil (Open to World-Wide Remote Work)',
  'footer.copy': '© {year} Otávio Cunha · Developed with React, TypeScript & Elegance.',
}

const es: Translations = {
  // Nav
  'nav.about': 'Sobre',
  'nav.apps': 'Proyectos',
  'nav.redesigns': 'Rediseños',
  'nav.github': 'GitHub',
  'nav.skills': 'Skills',
  'nav.awards': 'Carrera',
  'nav.contact': 'Contacto',

  // Hero
  'hero.badge': 'Frontend Mobile Engineer',
  'hero.name1': 'Otávio',
  'hero.name2': 'Cunha',
  'hero.titleStrong': 'Desarrollador Mobile',
  'hero.titleRest': '& Investigador de UI/UX',
  'hero.description': 'Desarrollando interfaces de alto impacto con el rigor de la ingeniería y la estética del diseño premium. Especialista en ecosistemas Mobile y apasionado por el rendimiento y la usabilidad.',
  'hero.cta': 'Explorar Portafolio',
  'hero.scroll': 'Deslizar',
  'hero.photo': 'Retrato Profesional',

  // About
  'about.eyebrow': 'Mi Historia',
  'about.title': 'Ingeniero con',
  'about.title2': 'foco en Diseño',
  'about.body1': 'Soy Otávio Cunha, ingeniero de software fascinado por la intersección entre el código y la experiencia del usuario. Como maestrando en UI/UX y graduado por la PUCRS, transformo conceptos complejos en aplicaciones fluidas e intuitivas.',
  'about.body2': 'Creo que la excelencia técnica debe ir acompañada de una estética impecable. Mi enfoque es construir productos digitales que no solo funcionen perfectamente, sino que también encanten en cada interacción.',
  'edu.grad': 'Graduado',
  'edu.inProgress': 'En curso',
  'edu.degree1': 'Ingeniería de Software',
  'edu.school1': 'PUCRS — Pontificia Universidad Católica de RS',
  'edu.degree2': 'Maestría en Ciencias de la Computación',
  'edu.school2': 'PUCRS · Línea de Investigación en Ingeniería Humanística (UI/UX)',
  'photo.main': 'Fotografía Principal',
  'photo.2': 'Estilo de vida 01',
  'photo.3': 'Estilo de vida 02',

  // Apps
  'apps.eyebrow': 'Desarrollo de Producto',
  'apps.title': 'Portafolio Mobile',
  'apps.subtitle': 'Soluciones nativas y multiplataforma publicadas en las principales tiendas, enfocadas en resolver problemas reales con diseño elegante.',
  'apps.viewStore': 'Ver en Tienda',
  'apps.learnMore': 'Saber Más',
  'apps.callout.label': 'Destacado',
  'apps.callout.title': 'WatchFolio: Top 100 en la App Store',
  'apps.callout.desc': 'Uno de los 100 aplicativos de entretenimiento más descargados en Brasil. Proyecto independiente desarrollado de punta a punta, validando excelencia en UX y arquitectura.',
  'apps.watchfolio.category': 'Entretenimiento & Medios',
  'apps.watchfolio.desc': 'Tu diario de cine y red social definitiva. Organiza lo que has visto, descubre títulos con IA, conéctate con amigos y colecciona cartas exclusivas.',
  'apps.readfolio.category': 'Productividad & Lectura',
  'apps.readfolio.desc': 'El compañero ideal para lectores. Organiza tu biblioteca, sigue metas de lectura, mira estadísticas y recibe recomendaciones en una interfaz mínima.',
  'apps.travelfolio.category': 'Viajes y Estilo de Vida',
  'apps.travelfolio.desc': 'Planifica y eterniza tus viajes. Organiza itinerarios y presupuestos de forma inteligente. Guarda recuerdos, fotos y gastos en un solo lugar.',
  'apps.nos2.category': 'Social y Estilo de Vida',
  'apps.nos2.desc': 'Fortalece la conexión con quien amas. Crea un feed de recuerdos, planifica metas, intercambia cartas y elige películas con el "Tinder de Películas".',
  'apps.minimystics.category': 'Juegos & Estrategia',
  'apps.minimystics.desc': 'Un encantador TCG con batallas en tiempo real y gran estrategia. Colecciona cartas místicas, evoluciona criaturas y gana premios incluso offline.',

  // Web Projects
  'web.eyebrow': 'Ingeniería de Producto',
  'web.title': 'Proyectos Web',
  'web.subtitle': 'Aplicaciones web robustas e interfaces desktop refinadas, construidas con un enfoque en escalabilidad y sistemas de diseño.',
  'web.first': '#1 Desarrollo',
  'web.potterdle.category': 'Juegos & Puzzle',
  'web.potterdle.desc': '¡Mi primer sitio web y proyecto de software! Un sitio inspirado en Harry Potter con varios juegos temáticos de la saga.',
  'web.voyage.category': 'Turismo & Planificación',
  'web.voyage.desc': 'Un sitio impulsado por IA que planifica el viaje perfecto analizando fechas y buscando lo mejor del destino, incluyendo clima y precios.',
  'web.watchfolio.category': 'Streaming y Medios Digitales',
  'web.watchfolio.desc': 'Versión web de mi proyecto móvil. Explora detalles de películas, lanzamientos, presupuestos, plataformas de streaming y elenco.',
  'web.minimystics.category': 'Infraestructura de Juegos',
  'web.minimystics.desc': 'Página de destino para conocer la historia del juego, los personajes, las cartas y el universo de Mini Mystics.',

  // Redesigns
  'redesigns.eyebrow': 'Diseño de Producto',
  'redesigns.title': 'Casos de Estudio',
  'redesigns.subtitle': 'Exploraciones visuales donde aplico heurísticas de Nielsen y sistemas de diseño modernos para optimizar flujos de apps consolidadas.',
  'redesigns.cta': 'Ver Caso de Estudio',
  'redesigns.twitter.tag': 'Interfaz Social',
  'redesigns.twitter.desc': 'Optimización de la jerarquía visual y tipográfica para una lectura de microblogs sin distracciones.',
  'redesigns.instagram.tag': 'Interfaz Visual',
  'redesigns.instagram.desc': 'Foco en el Minimalismo: reducción de ruido visual para priorizar el contenido del usuario.',
  'redesigns.primevideo.tag': 'Video Streaming',
  'redesigns.primevideo.desc': 'Refactorización de la experiencia de descubrimiento y navegación, enfocándose en la fluidez e imágenes cinematográficas.',
  'redesigns.spotify.tag': 'Música & Audio',
  'redesigns.spotify.desc': 'Interfaz Emocional: el reproductor como centro de la experiencia, con transiciones fluidas y tipografía expresiva.',

  // GitHub
  'github.eyebrow': 'Ingeniería de Software',
  'github.title': 'GitHub',
  'github.comingSoon': 'Arquitectando...',
  'github.comingSoonDesc': 'Próximamente estarán disponibles repositorios seleccionados de herramientas y plantillas en TypeScript y Swift.',

  // Skills
  'skills.eyebrow': 'Stack Tecnológico',
  'skills.title': 'Competencias Core',
  'skills.subtitle': 'Dominio técnico en desarrollo multiplataforma y principios de diseño moderno.',
  'skills.languages': 'Lenguajes Core',
  'skills.frameworks': 'Ecosistemas & Herramientas',
  'skills.design': 'Metodologías de Diseño',
  'languages.title': 'Comunicación',
  'languages.subtitle': 'Perspectiva Global',
  'languages.pt': 'Portugués',
  'languages.en': 'Inglés',
  'languages.es': 'Español',
  'languages.native': 'Nativo',
  'languages.fluent': 'Fluido',
  'languages.basic': 'Intermedio',

  // Awards
  'awards.eyebrow': 'Hitos de Carrera',
  'awards.title': 'Premios &',
  'awards.title2': 'Certificaciones',
  'awards.subtitle': 'Reconocimientos que avalan el compromiso con la excelencia técnica y el crecimiento continuo.',
  'awards.hackathon.title': '2º Lugar — Hackathon de Ingeniería de Software',
  'awards.hackathon.org': 'PUCRS',
  'awards.hackathon.desc': 'Logro en maratón de programación competitiva, resolviendo problemas reales bajo alta presión y plazos cortos.',
  'awards.apple.title': 'Certificación Apple Developer Academy',
  'awards.apple.org': 'Apple Inc.',
  'awards.apple.desc': 'Formación intensiva en el ecosistema Apple, con foco en Swift, Human Interface Guidelines y diseño premium.',
  'stats.apps': 'Apps Publicadas',
  'stats.appstore': 'App Store Rank',
  'stats.awards': 'Premios',
  'stats.languages': 'Idiomas',

  // Contact
  'contact.eyebrow': 'Contacto',
  'contact.title': '¿Buscas iniciar un',
  'contact.titleGradient': 'proyecto innovador',
  'contact.title2': 'conmigo?',
  'contact.sub': 'Estoy disponible para colaboraciones estratégicas y nuevas oportunidades como desarrollador sénior o líder técnico.',
  'contact.location': 'Porto Alegre, RS — Brasil (Disponible para Trabajo Remoto Global)',
  'footer.copy': '© {year} Otávio Cunha · Desarrollado con React, TypeScript & Elegancia.',
}

const allTranslations: Record<Language, Translations> = { pt, en, es }

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'pt',
  setLanguage: () => { },
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('portfolio-lang') as Language) || 'pt'
  })

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('portfolio-lang', lang)
  }

  const t = (key: string): string => {
    const val = allTranslations[language][key]
    if (!val) return allTranslations['pt'][key] || key
    return val.replace('{year}', String(new Date().getFullYear()))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
