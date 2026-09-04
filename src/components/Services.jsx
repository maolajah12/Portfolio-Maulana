import { Palette, Code, Database, Smartphone } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'UI/UX Design',
            desc: 'Creating intuitive and user-friendly interfaces for web and mobile applications that users love.',
            icon: <Palette size={36} color="#FF3B1D" strokeWidth={1.5} />,
        },
        {
            title: 'Web Development',
            desc: 'Building responsive, performant, and accessible websites with modern technologies and best practices.',
            icon: <Code size={36} color="#FF3B1D" strokeWidth={1.5} />,
        },
        {
            title: 'Database',
            desc: 'Designing and managing databases, ensuring efficient data storage, retrieval, and optimization.',
            icon: <Database size={36} color="#FF3B1D" strokeWidth={1.5} />,
        },
        {
            title: 'Mobile Apps',
            desc: 'Designing native and cross-platform mobile applications with great UX and visual appeal.',
            icon: <Smartphone size={36} color="#FF3B1D" strokeWidth={1.5} />,
        },
    ];

    return (
        <section id="services" style={{
            padding: '10rem 0',
            background: '#0A0A0A',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{
                maxWidth: '1150px',
                width: '100%',
                padding: '0 2rem',
                position: 'relative',
                zIndex: 1,
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h2 style={{
                        color: '#FFFFFF',
                        fontSize: '1.8rem',
                        fontWeight: 700,
                        marginBottom: '0.25rem',
                    }}>
                        What Do I Offer
                    </h2>
                    <p style={{
                        color: '#A0A0A0',
                        fontSize: '0.95rem',
                        maxWidth: '500px',
                        margin: '0 auto',
                    }}>
                        Creates Professional Design That's Oriented Towards Client Needs
                    </p>
                </div>

                <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '20px',
                    padding: '2.5rem 3rem',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    maxWidth: '1050px',
                    margin: '0 auto',
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '2rem',
                    }}>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: '2rem 1.5rem',
                                    borderRadius: '16px',
                                    textAlign: 'center',
                                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'default',
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: '1px solid rgba(255, 255, 255, 0.04)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 59, 29, 0.3)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.3)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                }}
                            >
                                <div style={{ color: '#FF3B1D', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                    {service.icon}
                                </div>
                                <h3 style={{
                                    marginBottom: '0.5rem',
                                    color: '#FFFFFF',
                                    fontSize: '1.05rem',
                                    fontWeight: 600,
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{ color: '#A0A0A0', lineHeight: 1.5, fontSize: '0.82rem' }}>
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;