import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type Language = 'pt' | 'en' | 'es'

type Translations = Record<string, string>

const pt: Translations = {
  // Nav
  'nav.about': 'Sobre',
  'nav.apps': 'Apps',
  'nav.redesigns': 'Redesigns',
  'nav.github': 'GitHub',
  'nav.skills': 'Skills',
  'nav.awards': 'Conquistas',
  'nav.contact': 'Contato',

  // Hero
  'hero.badge': 'Desenvolvedor Front-End Mobile',
  'hero.name1': 'Otávio',
  'hero.name2': 'Cunha',
  'hero.titleStrong': 'Desenvolvedor Front-End Mobile',
  'hero.titleRest': '& Mestrando em UI/UX',
  'hero.description': 'Criando experiências digitais com a precisão de um engenheiro e a sensibilidade de um designer. Especialista em React Native, Swift e interfaces que as pessoas adoram usar.',
  'hero.cta': 'Ver Projetos',
  'hero.scroll': 'Rolar',
  'hero.photo': 'Sua foto aqui',

  // About
  'about.eyebrow': 'Sobre mim',
  'about.title': 'Engenheiro que',
  'about.title2': 'pensa em design',
  'about.body1': 'Sou Otávio Cunha, desenvolvedor front-end mobile apaixonado por criar interfaces que aliam funcionalidade e beleza. Formado em Engenharia de Software pela PUCRS e cursando mestrado em Ciência da Computação com foco em UI/UX.',
  'about.body2': 'Acredito que a tecnologia deve ser intuitiva, elegante e acessível. Cada pixel importa. Cada interação conta. Cada detalhe é uma oportunidade de surpreender o usuário.',
  'edu.grad': 'Graduado',
  'edu.inProgress': 'Em andamento',
  'edu.degree1': 'Engenharia de Software',
  'edu.school1': 'PUCRS — Pontificia Universidade Católica do RS',
  'edu.degree2': 'Mestrado em Ciência da Computação',
  'edu.school2': 'PUCRS · Foco em UI/UX Research',
  'photo.main': 'Foto principal',
  'photo.2': 'Foto 2',
  'photo.3': 'Foto 3',

  // Apps
  'apps.eyebrow': 'Apps Publicados',
  'apps.title': 'Meus Apps',
  'apps.subtitle': 'Aplicações mobile publicadas na App Store e Google Play, construídas com React Native e Swift.',
  'apps.viewStore': 'Ver na App Store',
  'apps.callout.label': 'Destaque',
  'apps.callout.title': 'WatchFolio no Top 100 da App Store',
  'apps.callout.desc': 'Reconhecido entre os 100 melhores apps de entretenimento na App Store brasileira. Um marco para um projeto 100% desenvolvido de forma independente.',
  'apps.watchfolio.category': 'Entretenimento',
  'apps.watchfolio.desc': 'Organize e descubra filmes e séries com uma experiência visual impressionante. Rastreie o que você assistiu e suas avaliações pessoais.',
  'apps.readfolio.category': 'Livros & Leitura',
  'apps.readfolio.desc': 'Seu diário de leitura pessoal. Acompanhe livros lidos, metas de leitura anuais e descubra novos títulos baseados no seu gosto.',
  'apps.travelfolio.category': 'Viagens',
  'apps.travelfolio.desc': 'Registre suas aventuras pelo mundo. Crie diários de viagem, salve lugares visitados e planeje próximas aventuras com mapas interativos.',
  'apps.nos2.category': 'Relacionamentos',
  'apps.nos2.desc': 'O app feito para casais. Calendários compartilhados, contagem de datas especiais, espaço privado para memórias e metas a dois.',
  'apps.minimystics.category': 'Games • Card Game',
  'apps.minimystics.desc': 'Trading Card Game digital com personagens místicos. Colecione cartas, monte decks estratégicos e batalhe com jogadores de todo o mundo.',

  // Redesigns
  'redesigns.eyebrow': 'Design Work',
  'redesigns.title': 'Redesigns',
  'redesigns.subtitle': 'Exercícios de design onde reprojeto interfaces de apps populares com foco em UX/UI e melhores práticas de design.',
  'redesigns.cta': 'Ver case',
  'redesigns.twitter.tag': 'Social Media Redesign',
  'redesigns.twitter.desc': 'Reimaginação da interface do Twitter com foco em legibilidade, hierarquia tipográfica e uma experiência de leitura mais limpa e imersiva.',
  'redesigns.instagram.tag': 'Social Media Redesign',
  'redesigns.instagram.desc': 'Nova abordagem para o Instagram priorizando o conteúdo visual acima de tudo, com navegação simplificada e gestos intuitivos.',
  'redesigns.primevideo.tag': 'Streaming Redesign',
  'redesigns.primevideo.desc': 'Redesign focado em descoberta de conteúdo com cards cinematográficos, navegação por gestos e uma experiência verdadeiramente imersiva.',
  'redesigns.spotify.tag': 'Music App Redesign',
  'redesigns.spotify.desc': 'Repensando a experiência musical com um player mais expressivo, visualizações de letras aprimoradas e descoberta de músicas mais inteligente.',

  // GitHub
  'github.eyebrow': 'Open Source',
  'github.title': 'Projetos no GitHub',
  'github.comingSoon': 'Em Breve',
  'github.comingSoonDesc': 'Projetos open source chegando em breve. Fique de olho no meu GitHub para novidades em React, TypeScript e Swift.',

  // Skills
  'skills.eyebrow': 'Tecnologia',
  'skills.title': 'Skills',
  'skills.subtitle': 'Ferramentas e tecnologias que uso para dar vida às ideias.',
  'skills.languages': 'Linguagens',
  'skills.frameworks': 'Frameworks & Tecnologias',
  'skills.design': 'Design & UX',
  'languages.title': 'Idiomas',
  'languages.subtitle': 'Comunicação global',
  'languages.pt': 'Português',
  'languages.en': 'Inglês',
  'languages.es': 'Espanhol',
  'languages.native': 'Nativo',
  'languages.fluent': 'Fluente',
  'languages.basic': 'Básico',

  // Awards
  'awards.eyebrow': 'Conquistas',
  'awards.title': 'Prêmios &',
  'awards.title2': 'Certificações',
  'awards.subtitle': 'Reconhecimentos que marcam a jornada de aprendizado e crescimento.',
  'awards.hackathon.title': '2º Lugar — Hackathon de Engenharia de Software',
  'awards.hackathon.org': 'PUCRS',
  'awards.hackathon.desc': 'Segunda colocação no hackathon de Engenharia de Software da PUCRS, competindo com equipes de toda a universidade em um desafio de 48 horas.',
  'awards.apple.title': 'Apple Developer Academy',
  'awards.apple.org': 'Apple Inc.',
  'awards.apple.desc': 'Certificação pelo Apple Developer Academy, programa com foco em desenvolvimento para o ecossistema Apple — iOS, macOS, watchOS.',
  'stats.apps': 'Apps Publicados',
  'stats.appstore': 'App Store',
  'stats.awards': 'Cursos & Prêmios',
  'stats.languages': 'Idiomas (+ nativo)',

  // Contact
  'contact.eyebrow': 'Vamos conversar',
  'contact.title': 'Pronto para',
  'contact.titleGradient': 'criar algo',
  'contact.title2': 'incrível?',
  'contact.sub': 'Estou aberto a oportunidades, colaborações e projetos interessantes. Me manda uma mensagem!',
  'contact.location': 'Porto Alegre, Rio Grande do Sul — Brasil',
  'footer.copy': '© {year} Otávio Cunha · Desenvolvido com React + TypeScript',
}

const en: Translations = {
  'nav.about': 'About',
  'nav.apps': 'Apps',
  'nav.redesigns': 'Redesigns',
  'nav.github': 'GitHub',
  'nav.skills': 'Skills',
  'nav.awards': 'Achievements',
  'nav.contact': 'Contact',

  'hero.badge': 'Front-End Mobile Developer',
  'hero.name1': 'Otávio',
  'hero.name2': 'Cunha',
  'hero.titleStrong': 'Front-End Mobile Developer',
  'hero.titleRest': '& UI/UX Research Student',
  'hero.description': 'Creating digital experiences with the precision of an engineer and the sensitivity of a designer. Expert in React Native, Swift and interfaces people love to use.',
  'hero.cta': 'View Projects',
  'hero.scroll': 'Scroll',
  'hero.photo': 'Your photo here',

  'about.eyebrow': 'About me',
  'about.title': 'An Engineer who',
  'about.title2': 'thinks like a designer',
  'about.body1': "I'm Otávio Cunha, a front-end mobile developer passionate about creating interfaces that blend functionality and beauty. I hold a Software Engineering degree from PUCRS and I'm pursuing a Master's in Computer Science focused on UI/UX.",
  'about.body2': 'I believe technology should be intuitive, elegant and accessible. Every pixel matters. Every interaction counts. Every detail is an opportunity to delight the user.',
  'edu.grad': 'Graduated',
  'edu.inProgress': 'In progress',
  'edu.degree1': 'Software Engineering',
  'edu.school1': 'PUCRS — Pontifical Catholic University of RS',
  'edu.degree2': "M.Sc. in Computer Science",
  'edu.school2': 'PUCRS · Focus on UI/UX Research',
  'photo.main': 'Main photo',
  'photo.2': 'Photo 2',
  'photo.3': 'Photo 3',

  'apps.eyebrow': 'Published Apps',
  'apps.title': 'My Apps',
  'apps.subtitle': 'Mobile applications published on the App Store and Google Play, built with React Native and Swift.',
  'apps.viewStore': 'View on App Store',
  'apps.callout.label': 'Highlight',
  'apps.callout.title': 'WatchFolio in the App Store Top 100',
  'apps.callout.desc': 'Recognized among the top 100 entertainment apps on the Brazilian App Store. A milestone for a 100% independently developed project.',
  'apps.watchfolio.category': 'Entertainment',
  'apps.watchfolio.desc': 'Organize and discover movies and TV shows with an impressive visual experience. Track what you watched and your personal ratings.',
  'apps.readfolio.category': 'Books & Reading',
  'apps.readfolio.desc': 'Your personal reading diary. Track books you have read, annual goals and discover new titles based on your taste.',
  'apps.travelfolio.category': 'Travel',
  'apps.travelfolio.desc': 'Record your world adventures. Create travel diaries, save visited places and plan upcoming adventures with interactive maps.',
  'apps.nos2.category': 'Relationships',
  'apps.nos2.desc': 'The app made for couples. Shared calendars, special date countdowns, private space for memories and goals together.',
  'apps.minimystics.category': 'Games • Card Game',
  'apps.minimystics.desc': 'Digital Trading Card Game with mystical characters. Collect cards, build strategic decks and battle players worldwide.',

  'redesigns.eyebrow': 'Design Work',
  'redesigns.title': 'Redesigns',
  'redesigns.subtitle': 'Design exercises where I redesign popular app interfaces focused on UX/UI best practices.',
  'redesigns.cta': 'View case',
  'redesigns.twitter.tag': 'Social Media Redesign',
  'redesigns.twitter.desc': 'Reimagination of the Twitter interface focused on readability, typographic hierarchy and a cleaner, more immersive reading experience.',
  'redesigns.instagram.tag': 'Social Media Redesign',
  'redesigns.instagram.desc': 'New approach to Instagram prioritizing visual content above all, with simplified navigation and intuitive gestures.',
  'redesigns.primevideo.tag': 'Streaming Redesign',
  'redesigns.primevideo.desc': 'Redesign focused on content discovery with cinematic cards, gesture navigation and a truly immersive experience.',
  'redesigns.spotify.tag': 'Music App Redesign',
  'redesigns.spotify.desc': 'Rethinking the music experience with a more expressive player, enhanced lyrics display and smarter music discovery.',

  'github.eyebrow': 'Open Source',
  'github.title': 'GitHub Projects',
  'github.comingSoon': 'Coming Soon',
  'github.comingSoonDesc': 'Open source projects coming soon. Stay tuned to my GitHub for news in React, TypeScript and Swift.',

  'skills.eyebrow': 'Technology',
  'skills.title': 'Skills',
  'skills.subtitle': 'Tools and technologies I use to bring ideas to life.',
  'skills.languages': 'Languages',
  'skills.frameworks': 'Frameworks & Technologies',
  'skills.design': 'Design & UX',
  'languages.title': 'Languages',
  'languages.subtitle': 'Global communication',
  'languages.pt': 'Portuguese',
  'languages.en': 'English',
  'languages.es': 'Spanish',
  'languages.native': 'Native',
  'languages.fluent': 'Fluent',
  'languages.basic': 'Basic',

  'awards.eyebrow': 'Achievements',
  'awards.title': 'Awards &',
  'awards.title2': 'Certifications',
  'awards.subtitle': 'Recognition that marks the journey of learning and growth.',
  'awards.hackathon.title': '2nd Place — Software Engineering Hackathon',
  'awards.hackathon.org': 'PUCRS',
  'awards.hackathon.desc': 'Second place at the PUCRS Software Engineering Hackathon, competing with teams from across the university in a 48-hour challenge.',
  'awards.apple.title': 'Apple Developer Academy',
  'awards.apple.org': 'Apple Inc.',
  'awards.apple.desc': 'Certification by Apple Developer Academy, a program focused on development for the Apple ecosystem — iOS, macOS, watchOS.',
  'stats.apps': 'Published Apps',
  'stats.appstore': 'App Store',
  'stats.awards': 'Courses & Awards',
  'stats.languages': 'Languages (+ native)',

  'contact.eyebrow': "Let's talk",
  'contact.title': 'Ready to',
  'contact.titleGradient': 'create something',
  'contact.title2': 'amazing?',
  'contact.sub': "I'm open to opportunities, collaborations and interesting projects. Send me a message!",
  'contact.location': 'Porto Alegre, Rio Grande do Sul — Brazil',
  'footer.copy': '© {year} Otávio Cunha · Built with React + TypeScript',
}

const es: Translations = {
  'nav.about': 'Sobre',
  'nav.apps': 'Apps',
  'nav.redesigns': 'Rediseños',
  'nav.github': 'GitHub',
  'nav.skills': 'Skills',
  'nav.awards': 'Logros',
  'nav.contact': 'Contacto',

  'hero.badge': 'Desarrollador Front-End Mobile',
  'hero.name1': 'Otávio',
  'hero.name2': 'Cunha',
  'hero.titleStrong': 'Desarrollador Front-End Mobile',
  'hero.titleRest': '& Estudiante de UI/UX',
  'hero.description': 'Creando experiencias digitales con la precisión de un ingeniero y la sensibilidad de un diseñador. Especialista en React Native, Swift e interfaces que la gente ama usar.',
  'hero.cta': 'Ver Proyectos',
  'hero.scroll': 'Scroll',
  'hero.photo': 'Tu foto aquí',

  'about.eyebrow': 'Sobre mí',
  'about.title': 'Ingeniero que',
  'about.title2': 'piensa en diseño',
  'about.body1': 'Soy Otávio Cunha, desarrollador front-end mobile apasionado por crear interfaces que combinan funcionalidad y belleza. Graduado en Ingeniería de Software por la PUCRS y cursando maestría en Ciencias de la Computación con enfoque en UI/UX.',
  'about.body2': 'Creo que la tecnología debe ser intuitiva, elegante y accesible. Cada píxel importa. Cada interacción cuenta. Cada detalle es una oportunidad de sorprender al usuario.',
  'edu.grad': 'Graduado',
  'edu.inProgress': 'En curso',
  'edu.degree1': 'Ingeniería de Software',
  'edu.school1': 'PUCRS — Universidad Católica Pontificia de RS',
  'edu.degree2': 'Maestría en Ciencias de la Computación',
  'edu.school2': 'PUCRS · Enfoque en UI/UX Research',
  'photo.main': 'Foto principal',
  'photo.2': 'Foto 2',
  'photo.3': 'Foto 3',

  'apps.eyebrow': 'Apps Publicadas',
  'apps.title': 'Mis Apps',
  'apps.subtitle': 'Aplicaciones móviles publicadas en App Store y Google Play, construidas con React Native y Swift.',
  'apps.viewStore': 'Ver en App Store',
  'apps.callout.label': 'Destacado',
  'apps.callout.title': 'WatchFolio en el Top 100 de App Store',
  'apps.callout.desc': 'Reconocido entre las 100 mejores apps de entretenimiento en la App Store brasileña. Un hito para un proyecto 100% desarrollado de forma independiente.',
  'apps.watchfolio.category': 'Entretenimiento',
  'apps.watchfolio.desc': 'Organiza y descubre películas y series con una experiencia visual impresionante. Rastrea lo que viste y tus valoraciones personales.',
  'apps.readfolio.category': 'Libros & Lectura',
  'apps.readfolio.desc': 'Tu diario personal de lectura. Registra libros leídos, metas anuales y descubre nuevos títulos basados en tu gusto.',
  'apps.travelfolio.category': 'Viajes',
  'apps.travelfolio.desc': 'Registra tus aventuras por el mundo. Crea diarios de viaje, guarda lugares visitados y planifica próximas aventuras con mapas interactivos.',
  'apps.nos2.category': 'Relaciones',
  'apps.nos2.desc': 'La app hecha para parejas. Calendarios compartidos, cuenta regresiva de fechas especiales, espacio privado para memorias y metas juntos.',
  'apps.minimystics.category': 'Juegos • Card Game',
  'apps.minimystics.desc': 'Juego de cartas digital con personajes místicos. Colecciona cartas, construye mazos estratégicos y batalla con jugadores de todo el mundo.',

  'redesigns.eyebrow': 'Trabajo de Diseño',
  'redesigns.title': 'Rediseños',
  'redesigns.subtitle': 'Ejercicios de diseño donde rediseño interfaces de apps populares con enfoque en UX/UI y mejores prácticas.',
  'redesigns.cta': 'Ver caso',
  'redesigns.twitter.tag': 'Rediseño Social Media',
  'redesigns.twitter.desc': 'Reimaginación de la interfaz de Twitter con enfoque en legibilidad, jerarquía tipográfica y una experiencia de lectura más limpia.',
  'redesigns.instagram.tag': 'Rediseño Social Media',
  'redesigns.instagram.desc': 'Nuevo enfoque para Instagram priorizando el contenido visual por encima de todo, con navegación simplificada y gestos intuitivos.',
  'redesigns.primevideo.tag': 'Rediseño Streaming',
  'redesigns.primevideo.desc': 'Rediseño enfocado en descubrimiento de contenido con cards cinematográficas, navegación por gestos y una experiencia verdaderamente inmersiva.',
  'redesigns.spotify.tag': 'Rediseño Music App',
  'redesigns.spotify.desc': 'Repensando la experiencia musical con un reproductor más expresivo, visualización de letras mejorada y descubrimiento más inteligente.',

  'github.eyebrow': 'Open Source',
  'github.title': 'Proyectos en GitHub',
  'github.comingSoon': 'Próximamente',
  'github.comingSoonDesc': 'Proyectos open source próximamente. Sígueme en GitHub para novedades en React, TypeScript y Swift.',

  'skills.eyebrow': 'Tecnología',
  'skills.title': 'Skills',
  'skills.subtitle': 'Herramientas y tecnologías que uso para dar vida a las ideas.',
  'skills.languages': 'Lenguajes',
  'skills.frameworks': 'Frameworks & Tecnologías',
  'skills.design': 'Diseño & UX',
  'languages.title': 'Idiomas',
  'languages.subtitle': 'Comunicación global',
  'languages.pt': 'Portugués',
  'languages.en': 'Inglés',
  'languages.es': 'Español',
  'languages.native': 'Nativo',
  'languages.fluent': 'Fluido',
  'languages.basic': 'Básico',

  'awards.eyebrow': 'Logros',
  'awards.title': 'Premios &',
  'awards.title2': 'Certificaciones',
  'awards.subtitle': 'Reconocimientos que marcan el camino de aprendizaje y crecimiento.',
  'awards.hackathon.title': '2º Lugar — Hackathon de Ingeniería de Software',
  'awards.hackathon.org': 'PUCRS',
  'awards.hackathon.desc': 'Segundo lugar en el hackathon de Ingeniería de Software de la PUCRS, compitiendo con equipos de toda la universidad en un desafío de 48 horas.',
  'awards.apple.title': 'Apple Developer Academy',
  'awards.apple.org': 'Apple Inc.',
  'awards.apple.desc': 'Certificación por Apple Developer Academy, programa enfocado en el desarrollo para el ecosistema Apple — iOS, macOS, watchOS.',
  'stats.apps': 'Apps Publicadas',
  'stats.appstore': 'App Store',
  'stats.awards': 'Cursos & Premios',
  'stats.languages': 'Idiomas (+ nativo)',

  'contact.eyebrow': 'Hablemos',
  'contact.title': 'Listo para',
  'contact.titleGradient': 'crear algo',
  'contact.title2': '¿increíble?',
  'contact.sub': 'Estoy abierto a oportunidades, colaboraciones y proyectos interesantes. ¡Envíame un mensaje!',
  'contact.location': 'Porto Alegre, Rio Grande do Sul — Brasil',
  'footer.copy': '© {year} Otávio Cunha · Construido con React + TypeScript',
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
