import { t } from "../assets/translator";

type Props = {
    lang: 'en' | 'pt';
    cvVisualRef: React.RefObject<HTMLDivElement | null>;
}

export const HiddenCV: React.FC<Props> = ({ lang, cvVisualRef }) => {
    return (
        <div
            ref={cvVisualRef}
            style={{
                position: 'absolute',
                left: '-9999px',
                top: 0,
                width: '800px',
                background: '#fff',
                color: '#222',
                fontFamily: 'Inter, Arial, sans-serif',
                padding: 32,
                borderRadius: 16,
                boxShadow: '0 2px 16px #0002',
                zIndex: -1
            }}
            aria-hidden="true"
        >
            <h1 style={{ fontSize: 32, marginBottom: 0 }}>{t('name', lang)}</h1>
            <h2 style={{ fontSize: 20, color: '#666', marginTop: 4 }}>{t('title', lang)}</h2>
            <div style={{ margin: '16px 0 8px 0', fontSize: 14 }}>
                <span style={{ marginRight: 16 }}>Email: devfelipedeo@gmail.com</span>
                <span style={{ marginRight: 16 }}>Tel: +55 14 981071444</span>
                <span>Bariri, SP</span>
            </div>
            <div style={{ marginBottom: 12, fontSize: 14 }}>
                <span style={{ marginRight: 16 }}>GitHub: github.com/felipecdeo</span>
                <span>LinkedIn: linkedin.com/in/felipedeo</span>
            </div>
            <hr style={{ margin: '16px 0' }} />
            <h3 style={{ color: '#0a6', marginBottom: 4 }}>{t('aboutTitle', lang)}</h3>
            <ul style={{ marginTop: 0, marginBottom: 12 }}>
                <li>{t('about1', lang)}</li>
                <li>{t('about2', lang)}</li>
                <li>{t('about3', lang)}</li>
            </ul>
            <h3 style={{ color: '#0a6', marginBottom: 4 }}>{t('experienceTitle', lang)}</h3>
            <div style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 600 }}>Pleno Fullstack Developer - FK Grupo (2023 - Present)</div>
                <div style={{ fontSize: 13 }}>{t('exp1Desc', lang)}</div>
                <div style={{ fontSize: 12, color: '#555' }}>React, ReactNative, TypeScript, Node.js, SQL Server, MongoDB, RabbitMQ</div>
            </div>
            <div style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 600 }}>Frontend Developer - FK Grupo (2020 - 2021)</div>
                <div style={{ fontSize: 13 }}>{t('exp2Desc', lang)}</div>
                <div style={{ fontSize: 12, color: '#555' }}>React, TypeScript, Node.js, SQL Server</div>
            </div>
            <div style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 600 }}>Junior Developer - Freelancer (2018 - 2020)</div>
                <div style={{ fontSize: 13 }}>{t('exp3Desc', lang)}</div>
                <div style={{ fontSize: 12, color: '#555' }}>JavaScript, HTML5, CSS3, Vue.js, Pug</div>
            </div>
            <h3 style={{ color: '#0a6', marginBottom: 4 }}>{t('skillsTitle', lang)}</h3>
            <div style={{ fontSize: 13, marginBottom: 8 }}>
                <b>{t('frontendTitle', lang)}:</b> React, React Native, Next.js, Vue.js, HTML5, CSS3/SCSS, TypeScript, JavaScript
            </div>
            <div style={{ fontSize: 13, marginBottom: 8 }}>
                <b>{t('backendTitle', lang)}:</b> Node.js, SQL Server
            </div>
            <div style={{ fontSize: 13, marginBottom: 8 }}>
                <b>{t('frameworksTitle', lang)}:</b> Next.js, Vue.js, Express, Tailwind CSS, Redux, Bootstrap, Ant Design, Material-UI
            </div>
            <div style={{ fontSize: 13, marginBottom: 8 }}>
                <b>{t('toolsTitle', lang)}:</b> Git, Docker, Figma, VS Code, Webpack, Vite, Jest, Postman, Swagger, Android Studio
            </div>
            <h3 style={{ color: '#0a6', marginBottom: 4 }}>{t('educationTitle', lang)}</h3>
            <div style={{ fontSize: 13, marginBottom: 8 }}>
                {t('education1', lang)}
            </div>
        </div>
    )
};
