import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Gallery', href: '#testimonials' },  // ← Testimonials → Gallery
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            zIndex: 1000,
            background: 'rgba(20, 20, 20, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
            padding: '1rem 2rem',
            boxShadow: '0 2px 30px rgba(0, 0, 0, 0.3)',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }}>
                <div id="navbar-logo" style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '-0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '130px', // Menyediakan ruang khusus untuk tempat mendaratnya jam
                }}>
                    <span style={{ color: '#FF3B1D' }}>Portfolio</span><span style={{ color: '#666' }}>.</span>
                </div>

                <div className="desktop-menu" style={{
                    display: 'flex',
                    gap: '2.5rem',
                    alignItems: 'center',
                }}>
                    <div style={{ display: 'flex', gap: '2.2rem' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    textDecoration: 'none',
                                    color: '#FFFFFF',
                                    fontWeight: 500,
                                    transition: 'color 0.25s ease',
                                    fontSize: '1.05rem',
                                    letterSpacing: '0.5px',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#FF3B1D';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = '#FFFFFF';
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button style={{
                        padding: '0.6rem 1.8rem',
                        fontSize: '1rem',
                        background: '#FF3B1D',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '50px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.5px',
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.background = '#D42A0A';
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 8px 25px rgba(255,59,29,0.35)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = '#FF3B1D';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                        Hire Me
                    </button>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                    }}
                    className="mobile-menu-btn"
                >
                    {isOpen ? <X size={32} color="#FFFFFF" /> : <Menu size={32} color="#FFFFFF" />}
                </button>
            </div>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(20, 20, 20, 0.95)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{
                                textDecoration: 'none',
                                color: '#FFFFFF',
                                fontWeight: 500,
                                fontSize: '1.1rem',
                                padding: '0.7rem 0',
                                borderBottom: '1px solid rgba(255,255,255,0.03)',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#FF3B1D'}
                            onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button 
                        onClick={() => {
                            setIsOpen(false);
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        style={{
                            padding: '0.8rem',
                            fontSize: '1rem',
                            background: '#FF3B1D',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '50px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            marginTop: '0.5rem',
                        }}>
                        Hire Me
                    </button>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { 
            display: block !important; 
          }
          .desktop-menu { 
            display: none !important; 
          }
          #navbar-logo {
            display: flex !important;
            font-size: 1.4rem !important;
            margin-right: 95px !important;
          }
          nav {
            padding: 0.8rem 1.2rem !important;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;