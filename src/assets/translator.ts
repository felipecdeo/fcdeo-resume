type Language = 'en' | 'pt';

type Dictionary = Record<Language, Record<string, string>>;

const dictionary: Dictionary = {
    en: {
        name: "Felipe Costa",
        title: "Pleno Frontend Developer",
        tagline: "Crafting digital experiences with passion and precision",
        aboutTitle: "About Me",
        about1: "Passionate frontend developer with 5+ years of experience creating beautiful, user-centric web and mobile applications.",
        about2: "I specialize in React, TypeScript, and modern JavaScript frameworks, with a keen eye for design and performance optimization.",
        about3: "Experienced in integrating and consuming REST APIs to build dynamic, data-driven interfaces.",
        projects: "Projects",
        yearsExp: "Years Exp",
        technologies: "Technologies",
        philosophy: `Code is poetry in motion. Every line should serve a purpose,every component should tell a story, and every user interaction should feel magical. - GPT, Chat.`,
        // Skills section
        skillsTitle: "Technical Arsenal",
        frontendTitle: "Front End",
        backendTitle: "Back End",
        backendNote: "(not my favorite)",
        frameworksTitle: "Frameworks & Libraries",
        toolsTitle: "Tools & Platforms",
        // Experience section
        experienceTitle: "Professional Journey",
        exp1Title: "Pleno Fullstack Developer",
        exp1Desc: "Developed a mobile application that prioritizes offline and contributed to the internal web system of the company along with the team. I also led the development of the Fkasa website within the Wake platform, integrating it with our Protheus ERP. All solutions were developed following SOLID principles and TDD methodology.",
        exp2Title: "Frontend Developer",
        exp2Desc: "In this initial role, I assisted in the development of the company’s web system, collaborating closely with the team to deliver new features and improvements. All code was written adhering to SOLID principles and tested using TDD.",
        exp3Title: "Junior Developer",
        exp3Desc: "Worked on various freelance projects, gaining experience in web development and client communication.",
        contactTitle: "Let's Connect",
        contactDesc: "I'm always excited to collaborate on innovative projects and discuss new opportunities. Feel free to reach out through any of the channels below.",
        contactEmail: "Email",
        contactPhone: "Phone",
        contactLocation: "Location",
        contactGithub: "GitHub",
        contactLinkedin: "LinkedIn",
    contactDownload: "Download Full CV",
    educationTitle: "Education",
    education1: "Bachelor of Computer Science (in progress) - UNINTER University (2025 - 2030)"
    },
    pt: {
        name: "Felipe Costa",
        title: "Desenvolvedor Frontend Pleno",
        tagline: "Criando experiências digitais com paixão e precisão",
        aboutTitle: "Sobre Mim",
        // Contact section
        contactTitle: "Vamos nos conectar",
        contactDesc: "Estou sempre aberto a colaborar em projetos inovadores e discutir novas oportunidades. Sinta-se à vontade para entrar em contato por qualquer um dos canais abaixo.",
        contactEmail: "E-mail",
        contactPhone: "Telefone",
        contactLocation: "Localização",
        contactGithub: "GitHub",
        contactLinkedin: "LinkedIn",
        contactDownload: "Baixar CV Completo",
        about1: "Desenvolvedor frontend apaixonado com mais de 5 anos de experiência criando aplicações web e mobile centradas no usuário.",
        about2: "Especialista em React, TypeScript e frameworks modernos de JavaScript, com olhar atento para design e otimização de performance.",
        about3: "Experiência em integração e consumo de APIs REST para construir interfaces dinâmicas e orientadas a dados.",
        projects: "Projetos",
        yearsExp: "Anos de Exp",
        technologies: "Tecnologias",
        philosophy: `Código é poesia em movimento. Cada linha deve ter um propósito, 
cada componente deve contar uma história e cada interação do usuário 
deve ser mágica. - GPT, Chat.`,
        // Skills section
        skillsTitle: "Arsenal Técnico",
        frontendTitle: "Front End",
        backendTitle: "Back End",
        backendNote: "(não é meu preferido)",
        frameworksTitle: "Frameworks & Bibliotecas",
        toolsTitle: "Ferramentas & Plataformas",
        // Experience section
        experienceTitle: "Jornada Profissional",
        exp1Title: "Desenvolvedor Fullstack Pleno",
        exp1Desc: "Desenvolvi um aplicativo mobile com foco em uso offline e contribuí para o sistema web interno da empresa junto ao time. Também liderei o desenvolvimento do site Fkasa na plataforma Wake, integrando-o ao nosso ERP Protheus. Todas as soluções foram desenvolvidas seguindo princípios SOLID e metodologia TDD.",
        exp2Title: "Desenvolvedor Frontend",
        exp2Desc: "Neste papel inicial, auxiliei no desenvolvimento do sistema web da empresa, colaborando de perto com o time para entregar novas funcionalidades e melhorias. Todo o código foi escrito seguindo princípios SOLID e testado com TDD.",
        exp3Title: "Desenvolvedor Júnior",
    exp3Desc: "Trabalhei em diversos projetos como freelancer, adquirindo experiência em desenvolvimento web e comunicação com clientes.",
    educationTitle: "Educação",
    education1: "Bacharelado em Ciência da Computação (em andamento) - Universidade UNINTER (2025 - 2030)"
    }
};

export function t(key: string, lang: Language = 'en'): string {
    return dictionary[lang][key] || dictionary['en'][key] || key;
}

export type { Language };