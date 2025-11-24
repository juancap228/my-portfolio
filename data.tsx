import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github, Layers } from "lucide-react";

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
        id: 3,
        title: "Skills",
        icon: <Layers size={25} color="#fff" strokeWidth={1} />,
        link: "/skills",
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
        description: "Sistema completo de gestión de abastecimiento desarrollado para optimizar procesos de inventario y logística.",
        images: ["/sga/login.png"],
        technologies: ["React", "Node.js", "MySQL"],
    },
    {
        id: 2,
        title: "SGE - Sistema de Recibos de Sueldo",
        image: "/sge/login.png",
        urlGithub: "#!",
        urlDemo: "#!",
        description: "Plataforma digital para la gestión y distribución de recibos de sueldo de forma segura y eficiente.",
        images: ["/sge/login.png"],
        technologies: ["React", "C#", "SQL Server"],
    },
    {
        id: 3,
        title: "BOT - Sistema de autenticacion WspJs",
        image: "/sge/tokenWhatsapp.png",
        urlGithub: "#!",
        urlDemo: "#!",
        description: "Bot de WhatsApp con sistema de autenticación para automatizar procesos de comunicación.",
        images: ["/sge/tokenWhatsapp.png"],
        technologies: ["Node.js", "WhatsApp API"],
    },
    {
        id: 4,
        title: "SCeI - Sistema de Administración",
        subtitle: "Sistema Empresarial de Gestión Operativa",
        image: "/scei/login.png",
        urlGithub: "#!",
        urlDemo: "#!",
        context: "El departamento manejaba todo en planillas Excel separadas: tickets de soporte, inventario de equipos, turnos de guardias, solicitudes de insumos. Cada proceso era manual, sin trazabilidad y con datos duplicados en múltiples archivos.",
        problem: "Cada vez que cargaba la página de tickets hacía 151 consultas SQL a la base de datos, tardando más de 8 segundos. No había integración con Active Directory, entonces cada nuevo empleado se creaba manualmente. Las actualizaciones requerían hacer F5 completo, perdiendo lo que estabas escribiendo en los formularios.",
        solution: "Sistema web full-stack con ASP.NET MVC usando arquitectura de 3 capas. Centralicé 18 módulos que antes eran procesos separados, optimicé el SQL agresivamente, integré LDAP para sincronizar con Active Directory, e implementé SignalR para que las actualizaciones lleguen en tiempo real sin necesidad de recargar.",
        features: [
            "Tablero Kanban drag & drop: Los tickets se mueven entre 5 estados (Por Asignar, Asignado, En Progreso, Bloqueado, Completado) arrastrando las tarjetas. Los filtros funcionan en tiempo real sin recargar la página",
            "Gestión de inventario dual: Insumos fungibles (cables, tornillos) con control de stock, e insumos no fungibles (laptops, switches) con código único para rastrear quién tiene qué",
            "Sistema de skills: Cada técnico tiene habilidades asignadas (redes, hardware, software) y cuando se crea un ticket, el sistema filtra automáticamente solo quiénes pueden hacerlo",
            "Integración LDAP con Active Directory: Los usuarios y grupos se sincronizan directamente del dominio. La autenticación usa BCrypt para hashear passwords con Forms Authentication",
            "Permisos granulares: No es solo admin/usuario. Se valida por módulo (¿puede ver Tickets?), operación (¿puede crear/editar/eliminar?) y sección organizacional (¿de qué departamento?)",
            "Auditoría asíncrona: Cada INSERT, UPDATE, DELETE se registra automáticamente en una tabla de auditoría usando fire-and-forget, sin bloquear la respuesta al usuario",
            "SignalR para actualizaciones en vivo: Cuando alguien mueve un ticket en el Kanban, se actualiza en tiempo real para todos los demás sin reload. Los modales abiertos se mantienen como estaban",
            "Gestión de guardias y licencias: Control de turnos con calendario FullCalendar, solicitudes de ausencias con workflow de aprobación por supervisor"
        ],
        results: [
            "Tiempo de carga optimizado de 8 segundos a 1.5 segundos: eliminé el problema N+1 convirtiendo 151 queries en 1 sola con JOINs",
            "Implementé 15 índices en MySQL en las columnas más consultadas (estado, fecha, sección_id) acelerando queries entre 10x y 100x",
            "Las actualizaciones con SignalR pasan de 5-10s (reload completo) a menos de 0.5s (solo se actualiza lo necesario)",
            "Cache en cliente para los filtros: si ya cargaste la lista de técnicos, no se vuelve a pedir al servidor, reduciendo requests en un 80%",
            "Optimicé el renderizado del DOM usando DocumentFragment para insertar múltiples elementos de una vez en lugar de uno por uno (50-60% más rápido)",
            "El sistema de auditoría registra todas las operaciones sin agregar tiempo de espera gracias al patrón asíncrono fire-and-forget"
        ],
        challenges: [
            "El problema N+1 era brutal: para cada ticket hacía una query adicional para traer el técnico, otra para la sección, otra para el tipo de trabajo. Lo solucioné con LEFT JOINs trayendo todo de una",
            "SignalR necesitaba notificar solo a los usuarios relevantes, no a todos. Implementé grupos por sección para que solo se notifique a quien corresponde",
            "Los permisos eran complicados de validar sin hacer el código lento. Creé un sistema de caché en sesión que precarga los permisos del usuario al login",
            "La integración LDAP con Active Directory necesitaba autenticación Windows pero también funcionamiento con usuarios locales para casos edge",
            "El drag & drop del Kanban con Sortable.js necesitaba sincronizarse con la base de datos y notificar vía SignalR sin hacer múltiples updates",
            "Implementé batch updates en el DOM: en lugar de agregar elementos uno por uno con append(), uso DocumentFragment para insertar todo junto y mejorar performance"
        ],
        images: ["/scei/login.png"],
        technologies: [
            "ASP.NET MVC 5",
            "C# 7.3",
            ".NET Framework 4.7.2",
            "MySQL 8.0",
            "ADO.NET",
            "Entity Framework",
            "SignalR 2.4",
            "jQuery 3.x",
            "Bootstrap 4.6",
            "Active Directory",
            "LDAP",
            "BCrypt.Net",
            "Newtonsoft.Json",
            "Toastr",
            "SweetAlert2",
            "FullCalendar",
            "Select2",
            "Sortable.js"
        ],
    },
    {
        id: 5,
        title: "MARLON - Bot de WhatsApp con IA",
        subtitle: "Asistente Virtual Multimodal para Inventario",
        image: "/scei-bot/bot.png",
        urlGithub: "#!",
        urlDemo: "#!",
        context: "El inventario estaba en Excel: 264 herramientas y equipos repartidos en 12 depósitos. Cuando un técnico necesitaba buscar algo, tenía que abrir el archivo, buscar manualmente, y llamar a alguien del depósito para confirmar si había stock. Si mandaba una foto de un equipo dañado, había que identificarlo manualmente.",
        problem: "Una consulta simple como '¿tenemos taladros Bosch?' tomaba 10 minutos: abrir Excel, buscar en varias hojas, llamar al depósito. Si enviabas una foto de un equipo sin etiqueta, nadie sabía qué era hasta ir físicamente a revisarlo. Todo era manual y lento.",
        solution: "Bot de WhatsApp con IA multimodal (Qwen 2.5 VL 7B) que entiende lenguaje natural y analiza imágenes. Le preguntas 'dame los taladros' y genera automáticamente la query SQL, consulta la base de datos MySQL y te responde por WhatsApp. Le mandas una foto de un switch y te dice qué modelo es y si hay en stock.",
        features: [
            "Sistema de 5 roles de IA especializados: Analista SQL (genera queries), Formateador (organiza respuestas bonitas), Asistente (responde preguntas generales), Analista de Imágenes (procesa fotos), Listador (maneja listas grandes)",
            "Análisis de imágenes multimodal: Le mandas una foto de una herramienta y hace OCR para leer números de serie, identifica el modelo, y busca automáticamente en la base de datos si hay stock",
            "Generación automática de SQL desde texto: Escribes 'listame herramientas del depósito 3' y la IA genera SELECT * FROM herramientas WHERE deposito_id = 3. Valida y sanitiza el SQL para prevenir inyecciones",
            "Paginación automática: Si pides 'todas las herramientas' (264 items), el bot no manda un mensaje gigante. Lo divide en chunks de 30 items y te los va mandando de a poco",
            "Memoria conversacional: Recuerda las últimas 10 interacciones. Si preguntaste por taladros y luego dices 'dame los del depósito 2', sabe que seguís hablando de taladros",
            "Sistema de stickers contextuales: La IA selecciona automáticamente emojis según el contexto (🔧 para herramientas, ⚠️ para alertas, ✅ para confirmaciones)"
        ],
        results: [
            "Consultas que tomaban 10 minutos ahora toman 1.5 minutos: la IA genera el SQL, consulta MySQL y responde por WhatsApp en segundos",
            "El análisis de imágenes funciona en menos de 3 segundos: convierte la imagen a base64, la manda a Qwen 2.5 VL y obtiene la descripción",
            "Precisión del 98% en generación de SQL: la IA casi siempre genera queries correctas gracias a prompts bien hechos con ejemplos específicos",
            "Maneja datasets grandes sin problemas: divide automáticamente listas de 264 items en mensajes de 30 items para no saturar WhatsApp",
            "Temperatura de 0.3 en el modelo: fuerza respuestas JSON estructuradas y consistentes en lugar de texto libre que es más difícil de parsear"
        ],
        challenges: [
            "El sistema de roles necesitaba un dispatcher inteligente: creé un rol 'Detective' que analiza el mensaje y decide qué rol especializado llamar (¿es consulta de inventario? → Analista SQL. ¿Es una imagen? → Analista de Imágenes)",
            "El SQL generado por IA podía tener inyecciones: implementé validación estricta que solo permite SELECT, prohibe DROP/DELETE desde prompts, y sanitiza parámetros usando prepared statements",
            "Las respuestas se truncaban con datasets grandes: implementé paginación que detecta si la respuesta supera X caracteres, divide en chunks de 30 items y manda múltiples mensajes",
            "La IA a veces respondía en texto plano en lugar de JSON: agregué advertencias críticas en el prompt que fuerzan formato JSON con temperatura baja (0.3) y ejemplos explícitos",
            "El análisis de imágenes no se mandaba al usuario: el flujo era imagen → análisis → búsqueda en DB → respuesta. Tuve que conectar el resultado del análisis con la búsqueda automática",
            "JSON malformado rompía el parser: implementé try-catch con sistema de reparación que intenta arreglar llaves/comillas faltantes antes de descartar la respuesta"
        ],
        images: ["/scei-bot/bot.png"],
        technologies: [
            "Node.js",
            "Express.js",
            "Qwen 2.5 VL 7B Instruct",
            "WhatsApp Business API",
            "MySQL",
            "whatsapp-web.js",
            "Puppeteer",
            "LM Studio",
            "OCR",
            "Computer Vision",
            "Prompt Engineering"
        ],
    },
    {
        id: 6,
        title: "Control de temperatura",
        image: "/temp/esquemaLogico.png",
        urlGithub: "#!",
        urlDemo: "#!",
        description: "Sistema de monitoreo de temperatura para servidores con alertas en tiempo real.",
        images: ["/temp/esquemaLogico.png"],
        technologies: ["Arduino", "Python", "IoT"],
    },
    {
        id: 7,
        title: "Portfolio",
        image: "/portfolio/home.png",
        urlGithub: "#!",
        urlDemo: "#!",
        description: "Portfolio personal desarrollado con las últimas tecnologías web modernas.",
        images: ["/portfolio/home.png"],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        id: 8,
        title: "GestyApp ",
        image: "/gesty/portada_de_prueba.png",
        urlGithub: "#!",
        urlDemo: "#!",
        description: "Aplicación de gestión empresarial con múltiples módulos integrados.",
        images: ["/gesty/portada_de_prueba.png"],
        technologies: ["React Native", "Firebase"],
    }
];

export const dataSkills = [
    {
        id: 1,
        category: "Backend",
        icon: "💻",
        skills: [
            { name: "C#" },
            { name: ".NET Core" },
            { name: ".NET Framework" },
            { name: "ASP.NET MVC" },
            { name: "Node.js" },
            { name: "Python" },
        ]
    },
    {
        id: 2,
        category: "Frontend",
        icon: "🎨",
        skills: [
            { name: "React" },
            { name: "Next.js" },
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Tailwind CSS" },
            { name: "Bootstrap" },
            { name: "jQuery" },
        ]
    },
    {
        id: 3,
        category: "Bases de Datos",
        icon: "🗄️",
        skills: [
            { name: "MySQL" },
            { name: "PostgreSQL" },
            { name: "SQL Server" },
            { name: "MongoDB" },
        ]
    },
    {
        id: 4,
        category: "DevOps & Tools",
        icon: "🔧",
        skills: [
            { name: "Git" },
            { name: "Docker" },
            { name: "Linux" },
            { name: "Visual Studio" },
            { name: "VS Code" },
        ]
    },
    {
        id: 5,
        category: "Tecnologías Especializadas",
        icon: "⚡",
        skills: [
            { name: "SignalR" },
            { name: "Active Directory" },
            { name: "LDAP" },
            { name: "WhatsApp API" },
            { name: "IA / LLMs" },
            { name: "Arduino/IoT" },
        ]
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