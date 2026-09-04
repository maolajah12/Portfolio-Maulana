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
    const skills = [
        { name: 'Mobile Dev', icon: <Smartphone size={28} color="#FF3B1D" strokeWidth={1.5} />, level: 85 },
        { name: 'React', icon: <Code2 size={28} color="#FF3B1D" strokeWidth={1.5} />, level: 90 },
        { name: 'JavaScript', icon: <Layout size={28} color="#FF3B1D" strokeWidth={1.5} />, level: 88 },
        { name: 'Flutter', icon: <Box size={28} color="#FF3B1D" strokeWidth={1.5} />, level: 80 },
        { name: 'Python', icon: <Server size={28} color="#FF3B1D" strokeWidth={1.5} />, level: 78 },
        { name: 'PHP', icon: <Database size={28} color="#FF3B1D" strokeWidth={1.5} />, level: 85 },
        { name: 'Laravel', icon: <Globe size={28} color="#FF3B1D" strokeWidth={1.5} />, level: 82 },
        { name: 'MySQL', icon: <Database size={28} color="#FF3B1D" strokeWidth={1.5} />, level: 85 },
    ];

    return (
        <section id="skills" style={{
            padding: '16rem 0',
            background: '#0A0A0A',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{
                maxWidth: '1000px',
                width: '100%',
                padding: '0 2rem',
                position: 'relative',
                zIndex: 1,
            }}>
                {/* =========================================== */}
                {/* BACKGROUND TEXT "My Skills" - UKURAN SAMA DENGAN "My Project" */}
                {/* =========================================== */}
                <div style={{
                    position: 'relative',
                    textAlign: 'center',
                    marginBottom: '2.5rem',
                }}>
                    {/* Background Text - "My Skills" */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '6rem',
                        fontWeight: 900,
                        color: 'rgba(255, 255, 255, 0.03)',
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: '-3px',
                        textTransform: 'uppercase',
                        lineHeight: 1,
                        pointerEvents: 'none',
                        userSelect: 'none',
                        whiteSpace: 'nowrap',
                        width: '100%',
                    }}>
                        My Skills
                    </div>

                    {/* Foreground Text - "Tools and Skills" */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{
                            color: '#FFFFFF',
                            fontSize: '1.8rem',
                            fontWeight: 700,
                            marginBottom: '0.25rem',
                        }}>
                            Tools and Skills
                        </h2>
                        <p style={{
                            color: '#A0A0A0',
                            fontSize: '0.95rem',
                            maxWidth: '450px',
                            margin: '0 auto',
                        }}>
                            Technologies I work with
                        </p>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1.5rem',
                }}>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '1.5rem 1rem',
                                borderRadius: '14px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.04)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'default',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = 'rgba(255, 59, 29, 0.3)';
                                e.target.style.transform = 'translateY(-4px)';
                                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
                                e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                                e.target.style.background = 'rgba(255, 255, 255, 0.02)';
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
                            <span style={{
                                fontWeight: 500,
                                fontSize: '0.9rem',
                                color: '#FFFFFF',
                                textAlign: 'center',
                            }}>
                                {skill.name}
                            </span>
                            <div style={{
                                marginTop: '0.5rem',
                                width: '100%',
                                height: '3px',
                                background: 'rgba(255,255,255,0.06)',
                                borderRadius: '10px',
                                overflow: 'hidden',
                            }}>
                                <div style={{
                                    width: `${skill.level}%`,
                                    height: '100%',
                                    background: '#FF3B1D',
                                    borderRadius: '10px',
                                    transition: 'width 0.6s ease',
                                }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;