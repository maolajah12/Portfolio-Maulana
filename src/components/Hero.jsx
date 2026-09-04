import { ArrowRight, Download } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import profilePhoto from '../assets/profile.jpg';
import cvPdf from '../assets/cv.pdf';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Import icon untuk rotasi - GANTI FIGMA DENGAN YANG TERSEDIA
import { Database, Code2, Smartphone, Palette, Server, Layout, Globe, Box, Cpu, PenTool } from 'lucide-react';

const Hero = () => {
    const [fontIndex, setFontIndex] = useState(0);
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [iconIndex, setIconIndex] = useState(0);
    const intervalRef = useRef(null);

    const fonts = [
        { family: "'Inter', sans-serif", weight: 700, spacing: '4px', label: 'Modern' },
        { family: "'Playfair Display', serif", weight: 700, spacing: '6px', label: 'Elegant' },
        { family: "'Space Mono', monospace", weight: 400, spacing: '3px', label: 'Tech' },
        { family: "'Bebas Neue', sans-serif", weight: 400, spacing: '8px', label: 'Bold' },
        { family: "'Oswald', sans-serif", weight: 600, spacing: '5px', label: 'Strong' },
        { family: "'Merriweather', serif", weight: 700, spacing: '4px', label: 'Classic' },
        { family: "'Righteous', sans-serif", weight: 400, spacing: '5px', label: 'Fun' },
        { family: "'Orbitron', sans-serif", weight: 700, spacing: '6px', label: 'Futuristic' },
        { family: "'Rajdhani', sans-serif", weight: 600, spacing: '5px', label: 'Sleek' },
        { family: "'Exo 2', sans-serif", weight: 700, spacing: '4px', label: 'Dynamic' },
        { family: "'Poppins', sans-serif", weight: 600, spacing: '5px', label: 'Clean' },
        { family: "'Raleway', sans-serif", weight: 700, spacing: '6px', label: 'Minimal' },
        { family: "'DM Serif Display', serif", weight: 400, spacing: '5px', label: 'Serif' },
        { family: "'Abril Fatface', display", weight: 400, spacing: '7px', label: 'Dramatic' },
        { family: "'Fredoka One', display", weight: 400, spacing: '5px', label: 'Playful' },
        { family: "'Cinzel', serif", weight: 700, spacing: '6px', label: 'Medieval' },
        { family: "'Unbounded', sans-serif", weight: 600, spacing: '4px', label: 'Bold' },
        { family: "'Archivo Black', sans-serif", weight: 400, spacing: '6px', label: 'Heavy' },
        { family: "'Teko', sans-serif", weight: 600, spacing: '5px', label: 'Sporty' },
        { family: "'Kalam', cursive", weight: 400, spacing: '4px', label: 'Handwritten' },
    ];

    // IKON BERGANDA - TANPA FIGMA (PAKAI PEN TOOL)
    const rotatingIcons = [
        { icon: <Database size={18} color="#FF3B1D" strokeWidth={1.8} />, label: 'Database' },
        { icon: <PenTool size={18} color="#FF3B1D" strokeWidth={1.8} />, label: 'Design' },
        { icon: <Code2 size={18} color="#FF3B1D" strokeWidth={1.8} />, label: 'Code' },
        { icon: <Smartphone size={18} color="#FF3B1D" strokeWidth={1.8} />, label: 'Mobile' },
        { icon: <Palette size={18} color="#FF3B1D" strokeWidth={1.8} />, label: 'UI/UX' },
        { icon: <Server size={18} color="#FF3B1D" strokeWidth={1.8} />, label: 'Backend' },
        { icon: <Layout size={18} color="#FF3B1D" strokeWidth={1.8} />, label: 'Layout' },
        { icon: <Globe size={18} color="#FF3B1D" strokeWidth={1.8} />, label: 'Web' },
        { icon: <Box size={18} color="#FF3B1D" strokeWidth={1.8} />, label: 'Tools' },
        { icon: <Cpu size={18} color="#FF3B1D" strokeWidth={1.8} />, label: 'AI' },
    ];

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        let isAnimating = false;

        intervalRef.current = setInterval(() => {
            if (isAnimating) return;
            isAnimating = true;

            const randomScale = 1 + (Math.random() * 0.2);
            setScale(randomScale);

            const randomRotation = (Math.random() - 0.5) * 10;
            setRotation(randomRotation);

            setIconIndex((prev) => (prev + 1) % rotatingIcons.length);

            setTimeout(() => {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * fonts.length);
                } while (randomIndex === fontIndex && fonts.length > 1);
                setFontIndex(randomIndex);
                setScale(1);
                setRotation(0);
                isAnimating = false;
            }, 100);

        }, 600);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [fonts.length, fontIndex, rotatingIcons.length]);

    const currentFont = fonts[fontIndex];
    const currentIcon = rotatingIcons[iconIndex];

    const socialLinks = [
        { icon: <FaFacebook size={18} color="#FF3B1D" />, url: 'https://www.facebook.com/share/19F9HRXAWk/', label: 'Facebook' },
        { icon: <FaInstagram size={18} color="#FF3B1D" />, url: 'https://www.instagram.com/mauuul____?utm_source=qr&igsi=MTdyeWR3OHIxZGx4dw==', label: 'Instagram' },
        { icon: <FaLinkedinIn size={18} color="#FF3B1D" />, url: 'https://www.linkedin.com/in/maulana-al-ghifari-01278442a/', label: 'LinkedIn' },
    ];

    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '90px',
                paddingBottom: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                background: '#0A0A0A',
            }}
        >
            <div style={{
                position: 'absolute',
                width: '500px',
                height: '500px',
                top: '-10%',
                right: '-5%',
                background: 'radial-gradient(circle, rgba(255,59,29,0.06), transparent 70%)',
                filter: 'blur(80px)',
                pointerEvents: 'none',
            }} />

            <div className="container hero-container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem',
                width: '100%',
            }}>
                {/* LEFT CONTENT */}
                <div className="hero-left">
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            transition: 'transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            transform: `scale(${scale}) rotate(${rotation}deg)`,
                        }}
                    >
                        <p
                            style={{
                                color: '#FFFFFF',
                                fontWeight: currentFont.weight,
                                fontSize: '1rem',
                                marginBottom: '0.25rem',
                                letterSpacing: currentFont.spacing,
                                textTransform: 'uppercase',
                                fontFamily: currentFont.family,
                                transition: 'all 0.1s ease-out',
                                display: 'inline-block',
                                position: 'relative',
                                textShadow: '0 0 30px rgba(255,59,29,0.05)',
                            }}
                        >
                            HELLO GUYS
                            <span
                                style={{
                                    position: 'absolute',
                                    bottom: '-22px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    fontSize: '0.4rem',
                                    color: 'rgba(255,255,255,0.12)',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 400,
                                    letterSpacing: '3px',
                                    textTransform: 'uppercase',
                                    whiteSpace: 'nowrap',
                                    opacity: 0.6,
                                }}
                            >
                                {currentFont.label}
                            </span>
                        </p>

                        <span
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                transition: 'all 0.3s ease',
                                flexShrink: 0,
                                marginBottom: '0.25rem',
                            }}
                        >
                            {currentIcon.icon}
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: 700,
                        lineHeight: 1.15,
                        marginBottom: '0.25rem',
                        letterSpacing: '-0.02em',
                        color: '#FFFFFF',
                    }}>
                        I'm
                    </h1>

                    <h1 style={{
                        fontSize: '3.8rem',
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginBottom: '0.5rem',
                        letterSpacing: '-0.02em',
                    }}>
                        <span
                            style={{
                                background: 'linear-gradient(135deg, #FF3B1D, #FF6B35, #FF5A3A, #FF3B1D)',
                                backgroundSize: '300% 300%',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                animation: 'gradientMove 4s ease-in-out infinite',
                                display: 'inline-block',
                            }}
                        >
                            Maulana Al Ghifari
                        </span>
                    </h1>

                    <p style={{
                        fontSize: '1.2rem',
                        color: '#FFFFFF',
                        marginBottom: '1rem',
                        fontWeight: 500,
                    }}>
                        Junior Software Engineer | Web & Mobile Developer
                    </p>

                    <p className="hero-bio" style={{
                        color: '#FFFFFF',
                        maxWidth: '520px',
                        marginBottom: '2rem',
                        lineHeight: 1.8,
                        fontSize: 'clamp(0.88rem, 2.5vw, 0.95rem)',
                        textAlign: 'justify',
                    }}>
                        I'm an Informatics Engineering graduate from the University of North Sumatra with a strong interest in building digital products that are functional, smart, and user-friendly.

                        I work comfortably across three areas—front-end development with React.js, data processing with Python, and UI design with Figma. I'm at a solid intermediate level in all three, which means I can build real things, collaborate across teams, and most importantly I know exactly where to look when I need to go deeper.

                        What I bring to the table is not just technical skills, but the ability to connect the dots between design, data, and code. I'm a fast learner, highly adaptable, and always excited to take on new challenges. Right now, I'm looking for a team where I can grow, contribute, and learn from experienced professionals.
                    </p>

                    <div className="hero-cta" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a
                            href={cvPdf}
                            download="CV_Maulana_Al_Ghifari.pdf"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                padding: '0.75rem 2rem',
                                fontSize: '0.9rem',
                                background: '#FF3B1D',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '50px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#D42A0A';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 12px 35px rgba(255,59,29,0.35)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = '#FF3B1D';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            <Download size={18} /> Download CV
                        </a>
                    </div>
                </div>

                {/* RIGHT - FOTO + SOCIAL MEDIA */}
                <div className="hero-right" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                }}>
                    <div style={{
                        width: '100%',
                        maxWidth: '450px',
                        position: 'relative',
                    }}>
                        <img
                            src={profilePhoto}
                            alt="Maulana Al Ghifari"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                filter: 'grayscale(100%) contrast(1.1) brightness(0.95)',
                            }}
                        />

                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(135deg, rgba(255, 59, 29, 0.3), rgba(255, 107, 53, 0.15), rgba(0, 0, 0, 0.4))',
                            mixBlendMode: 'overlay',
                            pointerEvents: 'none',
                        }} />

                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(circle at 30% 40%, rgba(255, 107, 53, 0.1), transparent 60%)',
                            mixBlendMode: 'screen',
                            pointerEvents: 'none',
                        }} />

                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.6) 100%)',
                            pointerEvents: 'none',
                        }} />

                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.3) 100%)',
                            pointerEvents: 'none',
                        }} />

                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            left: '2rem',
                            right: '2rem',
                            height: '2px',
                            background: 'linear-gradient(90deg, #FF3B1D, transparent)',
                            pointerEvents: 'none',
                            opacity: 0.5,
                        }} />
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                        marginTop: '0.5rem',
                    }}>
                        <span style={{
                            color: '#A0A0A0',
                            fontSize: '0.8rem',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontWeight: 400,
                        }}>
                            Find Me On
                        </span>
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                        }}>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        background: 'rgba(255, 255, 255, 0.04)',
                                        border: '1px solid rgba(255, 255, 255, 0.06)',
                                        color: '#FF3B1D',
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'rgba(255, 59, 29, 0.2)';
                                        e.target.style.borderColor = '#FF3B1D';
                                        e.target.style.transform = 'translateY(-3px) scale(1.1)';
                                        e.target.style.boxShadow = '0 8px 25px rgba(255,59,29,0.25)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                                        e.target.style.transform = 'translateY(0) scale(1)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* SCROLL FOR MORE - Konsisten & Responsif */}
            <div
                className="scroll-indicator"
                onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.4rem',
                    width: '100%',
                    maxWidth: '1200px',
                    padding: '0 2rem',
                    marginTop: 'clamp(2.5rem, 6vh, 4.5rem)',
                    cursor: 'pointer',
                    zIndex: 2,
                }}
            >
                <div style={{
                    width: 'clamp(100px, 35%, 260px)',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 59, 29, 0.4), transparent)',
                    marginBottom: '0.4rem',
                }} />

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.2rem',
                }}>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FF3B1D"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            animation: 'bounceDown 2s ease-in-out infinite',
                        }}
                    >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </div>

                <span style={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '0.7rem',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    transition: 'color 0.3s ease',
                }}>
                    Scroll for more
                </span>
            </div>

            <style>{`
                @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                @keyframes bounceDown {
                    0%, 100% { transform: translateY(0); opacity: 0.5; }
                    50% { transform: translateY(5px); opacity: 1; }
                }

                .scroll-indicator:hover span {
                    color: #FF3B1D !important;
                }

                @media (max-width: 992px) {
                    #home {
                        padding-top: 80px !important;
                        padding-bottom: 2rem !important;
                    }
                    #home .hero-container {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                        gap: 2rem !important;
                    }
                    #home .hero-right {
                        order: -1 !important;
                    }
                    #home .hero-right > div:first-of-type {
                        max-width: min(320px, 80vw) !important;
                        margin: 0 auto;
                    }
                    #home .hero-left {
                        order: 1 !important;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    #home h1 { 
                        font-size: clamp(2.2rem, 7vw, 3rem) !important; 
                    }
                    #home .hero-bio { 
                        text-align: center !important; 
                        max-width: 100% !important;
                        margin-bottom: 1.5rem !important;
                    }
                    #home .hero-cta { 
                        justify-content: center !important; 
                    }
                }

                @media (max-width: 480px) {
                    #home h1 { 
                        font-size: clamp(1.8rem, 6.5vw, 2.4rem) !important; 
                    }
                    #home .hero-right > div:first-of-type { 
                        max-width: 260px !important; 
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;