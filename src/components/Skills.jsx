import {
    Smartphone,
    Code2,
    Layout,
    Box,
    Server,
    Database,
    Globe
} from 'lucide-react';

const Skills = () => {
    // Semua skill sekarang memiliki levelText "Intermediate"
    const skills = [
        { name: 'Mobile Dev', icon: <Smartphone size={28} color="#FF3B1D" strokeWidth={1.5} />, levelText: 'Intermediate' },
        { name: 'React', icon: <Code2 size={28} color="#FF3B1D" strokeWidth={1.5} />, levelText: 'Intermediate' },
        { name: 'JavaScript', icon: <Layout size={28} color="#FF3B1D" strokeWidth={1.5} />, levelText: 'Intermediate' },
        { name: 'Flutter', icon: <Box size={28} color="#FF3B1D" strokeWidth={1.5} />, levelText: 'Intermediate' },
        { name: 'Python', icon: <Server size={28} color="#FF3B1D" strokeWidth={1.5} />, levelText: 'Intermediate' },
        { name: 'PHP', icon: <Database size={28} color="#FF3B1D" strokeWidth={1.5} />, levelText: 'Intermediate' },
        { name: 'Laravel', icon: <Globe size={28} color="#FF3B1D" strokeWidth={1.5} />, levelText: 'Intermediate' },
        { name: 'MySQL', icon: <Database size={28} color="#FF3B1D" strokeWidth={1.5} />, levelText: 'Intermediate' },
    ];

    return (
        <section id="skills" style={{
            padding: 'clamp(4rem, 8vw, 7.5rem) 0',
            background: '#0A0A0A',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{
                maxWidth: '1000px',
                width: '100%',
                padding: '0 clamp(1rem, 4vw, 2rem)',
                position: 'relative',
                zIndex: 1,
            }}>
                {/* =========================================== */}
                {/* BACKGROUND TEXT "My Skills" */}
                {/* =========================================== */}
                <div style={{
                    position: 'relative',
                    textAlign: 'center',
                    marginBottom: 'clamp(1.8rem, 4vw, 2.5rem)',
                }}>
                    {/* Background Text - "My Skills" */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: 'clamp(2.8rem, 8vw, 6rem)',
                        fontWeight: 900,
                        color: 'rgba(255, 255, 255, 0.03)',
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: '-2px',
                        textTransform: 'uppercase',
                        lineHeight: 1,
                        pointerEvents: 'none',
                        userSelect: 'none',
                        whiteSpace: 'nowrap',
                        width: '100%',
                        overflow: 'hidden',
                    }}>
                        My Skills
                    </div>

                    {/* Foreground Text */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{
                            color: '#FFFFFF',
                            fontSize: 'clamp(1.6rem, 5vw, 2rem)',
                            fontWeight: 700,
                            marginBottom: '0.25rem',
                        }}>
                            Tools and Skills
                        </h2>
                        <p style={{
                            color: '#A0A0A0',
                            fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                            maxWidth: '450px',
                            margin: '0 auto',
                        }}>
                            Technologies I work with
                        </p>
                    </div>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 'clamp(1.2rem, 3vw, 1.5rem) 1rem',
                                borderRadius: '14px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.04)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'default',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 59, 29, 0.3)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '52px',
                                height: '52px',
                                borderRadius: '12px',
                                background: 'rgba(255, 59, 29, 0.08)',
                                marginBottom: '0.75rem',
                            }}>
                                {skill.icon}
                            </div>

                            {/* Nama Teknologi */}
                            <span style={{
                                fontWeight: 500,
                                fontSize: '0.9rem',
                                color: '#FFFFFF',
                                textAlign: 'center',
                                marginBottom: '0.35rem',
                            }}>
                                {skill.name}
                            </span>

                            {/* Teks Level - Semua "Intermediate" */}
                            <span style={{
                                fontSize: '0.7rem',
                                color: '#FF3B1D',
                                fontWeight: 600,
                                letterSpacing: '0.5px',
                                textTransform: 'uppercase',
                                background: 'rgba(255, 59, 29, 0.1)',
                                padding: '3px 10px',
                                borderRadius: '20px',
                            }}>
                                {skill.levelText}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.5rem;
                }
                @media (max-width: 900px) {
                    .skills-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 1.2rem;
                    }
                }
                @media (max-width: 600px) {
                    .skills-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;