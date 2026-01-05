export interface ComponentInfo {
    component: string;
    properties: Record<string, any>;
}

export const COMPONENT_DATA: ComponentInfo[] = [
    {
        component: 'header',
        properties: {
            appName: 'OpenLearn',
            mobileMenuOpen: false,
            navItems: [
                { id: 1, label: 'Home', href: '#', active: true },
                { id: 2, label: 'Courses', href: '#', active: false },
                { id: 3, label: 'About', href: '#', active: false },
                { id: 4, label: 'Contact', href: '#', active: false },
            ],
        },
    },
        {
        component: 'hero',
        properties: {
            title: 'Welcome to OpenLearn',
            subtitle: 'Your gateway to quality online education',
            primaryButtonText: 'Get Started',
            secondaryButtonText: 'Learn More',
        },
    },
    {
        component: 'slider',
        properties: {
            slides: [
   {
      id: 1,
      title: 'Aprendizaje Personalizado',
      description:
        'Contenido adaptado a tu nivel de conocimiento para maximizar tu aprendizaje',
      image: '🎓',
      color: 'blue',
    },
    {
      id: 2,
      title: 'Seguimiento en Tiempo Real',
      description: 'Monitorea tu progreso con estadísticas detalladas y análisis profundo',
      image: '📈',
      color: 'green',
    },
    {
      id: 3,
      title: 'Gamificación',
      description: 'Gana puntos, insignias y compite con otros estudiantes',
      image: '🏆',
      color: 'purple',
    },
    {
      id: 4,
      title: 'Multiplataforma',
      description: 'Accede desde cualquier dispositivo, en cualquier momento',
      image: '📱',
      color: 'orange',
    },
    {
      id: 5,
      title: 'Certificados Oficiales',
      description: 'Obtén certificados reconocidos al completar tus cursos',
      image: '🎖️',
      color: 'red',
    },
            ],
        },
    },
    {
        component: 'features',
        properties: {
            sectionTitle: 'Main Features',
            sectionSubtitle: 'Explore the tools we offer to enhance your learning',
            features: [
                { id: 1, title: 'Interactive Quizzes', description: 'Engage with dynamic quizzes to test your knowledge.', icon: '📝', color: 'blue' },
                { id: 2, title: 'Progress Tracking', description: 'Monitor your learning journey with detailed analytics.', icon: '📊', color: 'green' },
                { id: 3, title: 'Expert Tutors', description: 'Learn from industry experts and experienced educators.', icon: '👩‍🏫', color: 'purple' },
                { id: 4, title: 'Diverse Categories', description: 'Access a wide range of topics to broaden your horizons.', icon: '📚', color: 'yellow' },
                { id: 5, title: 'Certificates', description: 'Earn certificates to showcase your achievements.', icon: '🎓', color: 'red' },
            ],
        },
    },
    {
        component: 'footer',
        properties: {
            appName: 'OpenLearn',
            description: 'Empowering learners worldwide with quality education.',
            footerSections: [
                {
                    id: 1,
                    title: 'Company',
                    links: [
                        { id: 1, label: 'About Us', href: '#' },
                        { id: 2, label: 'Careers', href: '#' },
                        { id: 3, label: 'Blog', href: '#' },
                    ],
                },
                {
                    id: 2,
                    title: 'Resources',
                    links: [
                        { id: 1, label: 'Help Center', href: '#' },
                        { id: 2, label: 'Privacy Policy', href: '#' },
                        { id: 3, label: 'Terms of Service', href: '#' },
                    ],
                },
            ],
        },
    },
];