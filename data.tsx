import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/juancap228",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    }
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador Full Stack",
        subtitle: "Fuerza Aérea Uruguaya",
        description: "Desarrollo y diseño del sistema de envío de recibos de sueldo y registro de historial laboral, administración de antivirus y creación de un sistema de medición de temperatura para servidores.",
        date: "2023-Act",
    },
    {
        id: 2,
        title: "Profesor de Infraestructura Microsoft y Virtualización",
        subtitle: "Escuela Técnica Aeronáutica",
        description: "Encargado de dictar clases sobre Infraestructura Microsoft y Virtualización de Servidores, formando a futuros técnicos en administración de entornos.",
        date: "2024",
    },
    {
        id: 3,
        title: "Profesor de Técnico en Redes y Reparación de PC",
        subtitle: "Escuela Técnica Aeronáutica",
        description: "Impartí conocimientos en redes informáticas y reparación de computadoras, brindando formación práctica y teórica a los estudiantes.",
        date: "2023-ACT",
    },
    {
        id: 4,
        title: "Técnico en Soporte Informático",
        subtitle: "Fuerza Aérea Uruguaya",
        description: "Reparación de PC, instalación de software y configuración de impresoras, asegurando el correcto funcionamiento de los equipos dentro de la institución.",
        date: "2021 - 2022",
    },
];


export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
];



export const dataPortfolio = [
    {
        id: 1,
        title: "SGA - Sistema de Gestión Abastecimiento",
        image: "/sga/login.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "SGE - Sistema de Recibos de Sueldo",
        image: "/sge/login.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "BOT - Sistema de autenticacion WspJs",
        image: "/sge/tokenWhatsapp.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "SCeI - Administración",
        image: "/scei/login.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "BOT - SceIAdministración",
        image: "/scei/bot.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Control de temperatura",
        image: "/temp/esquemaLogico.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Portfolio",
        image: "/portfolio/home.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "GestyApp ",
        image: "/gesty/portada_de_prueba.png",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];