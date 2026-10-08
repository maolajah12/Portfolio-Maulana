import { Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import GalleryDetail from './GalleryDetail';

import bgImage from '../assets/foto sama.png';

import team1 from '../assets/Foto Bpjs 1.png';
import team2 from '../assets/Foto Bpjs 2.png';
import team3 from '../assets/Foto Bank 3.png';
import sertif1 from '../assets/Sertif 1.png';
import sertif2 from '../assets/Sertif 2.png';
import sertif3 from '../assets/Sertif 3.png';
import sertif4 from '../assets/Sertif 4.png';
import sertif5 from '../assets/Sertif 5.png';
import sertif6 from '../assets/Sertif 6.png';
import sertif7 from '../assets/Sertif 7.png';
import sertif8 from '../assets/Sertif 8.png';
import sertif9 from '../assets/Sertif 9.png';

const Gallery = () => {
    const [teamPage, setTeamPage] = useState(0);
    const [certPage, setCertPage] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null); // ← POPUP STATE

    // Data Team
    const teamItems = [
        {
            id: 1,
            title: 'IT Team Internship BPJS Ketenagakerjaan',
            category: 'Team',
            icon: <Users size={24} color="#FF3B1D" />,
            image: team1,
            desc: 'With the IT team during my internship at BPJS Ketenagakerjaan. A valuable experience in system development and team collaboration.',
        },
        {
            id: 2,
            title: 'IT Team Internship BPJS Ketenagakerjaan',
            category: 'Team',
            icon: <Users size={24} color="#FF3B1D" />,
            image: team2,
            desc: 'A moment shared with the BPJS Ketenagakerjaan IT team upon completing the final internship project.',
        },
        {
            id: 3,
            title: 'Archives Center Team',
            category: 'Team',
            icon: <Users size={24} color="#FF3B1D" />,
            image: team3,
            desc: 'A solid Archives Center team in managing and digitizing important archives.',
        },
    ];

    // Data Certificate
    const certificateItems = [
        {
            id: 4,
            title: 'Microsoft Office (Word, Excel, and PowerPoint), Insan Cemerlang Computer Course',
            category: 'Certificate',
            icon: <Award size={24} color="#FF3B1D" />,
            image: sertif8,
            desc: ' Graduated with an "Excellent" predicate (Score: 92.33) from a 16-hour comprehensive program. Demonstrated solid capabilities in technical document creation, structured data processing, and effective business presentation design.',
        },
        {
            id: 5,
            title: 'Sistem Manajemen Keselamatan dan Kesehatan Kerja Berbasis SNI ISO 45001:2018, Badan Standardisasi Nasional (BSN)',
            category: 'Certificate',
            icon: <Award size={24} color="#FF3B1D" />,
            image: sertif4,
            desc: 'Certificate ofCompletion with "Very Good" predicate, demonstrating understanding of occupational health and safety management systems based on SNI ISO 45001:2018. Valid until October 2027',
        },
        {
            id: 6,
            title: 'CGSA-CCTV (Certified General Security Associate), Hikvision',
            category: 'Certificate',
            icon: <Award size={24} color="#FF3B1D" />,
            image: sertif7,
            desc: 'Certificate of Completion demonstrating foundational and professional knowledge in security systems, CCTV architecture, and surveillance technology. Valid until September 2031.',
        },
        {
            id: 7,
            title: 'Data Science Essentials with Python, Cisco Networking Academy',
            category: 'Certificate',
            icon: <Award size={24} color="#FF3B1D" />,
            image: sertif5,
            desc: 'Certificate of Completion demonstrating foundational skills in Python programming applied to data science, including data handling, basic analysis, and problem solving with Python.',
        },
        {
            id: 8,
            title: 'Networking Basics, Cisco Networking Academy',
            category: 'Certificate',
            icon: <Award size={24} color="#FF3B1D" />,
            image: sertif6,
            desc: 'Certificate of Completion demonstrating foundational understanding of computer networking concepts, including network types, topologies, and basic protocols',
        },
        {
            id: 9,
            title: 'Python Essentials 2, Cisco Networking Academy',
            category: 'Certificate',
            icon: <Award size={24} color="#FF3B1D" />,
            image: sertif6,
            desc: 'Certificate of Completion demonstrating proficiency in intermediate Python programming concepts, including object-oriented programming, file handling, and exception handling.',
        },
        {
            id: 10,
            title: 'BPJS Ketenagakerjaan Internship Certificate, BPJS Ketenagakerjaan Cabang Medan Kota',
            category: 'Certificate',
            icon: <Award size={24} color="#FF3B1D" />,
            image: sertif9,
            desc: 'Certified completion of the Merdeka Belajar Kampus Merdeka (MBKM) professional internship program focusing on IT support, web development, and digital information dissemination.',
        },
        {
            id: 11,
            title: 'Huawei Course Certificate, Huawei',
            category: 'Certificate',
            icon: <Award size={24} color="#FF3B1D" />,
            image: sertif2,
            desc: 'Fundamental understanding of Artificial Intelligence (AI) concepts, Machine Learning algorithms, Deep Learning basics, and the integration of AI solutions into software engineering.',
        },
        {
            id: 112,
            title: 'Claude Code Certificate, Anhtropic',
            category: 'Certificate',
            icon: <Award size={24} color="#FF3B1D" />,
            image: sertif3,
            desc: ' Practical application of Large Language Models (LLM) for programming, implementing best practices for AI assisted coding, debugging, and optimizing software development workflows.',
        },
    ];

    const ITEMS_PER_PAGE = 3;

    const getTeamPage = (page) => {
        const start = page * ITEMS_PER_PAGE;
        return teamItems.slice(start, start + ITEMS_PER_PAGE);
    };

    const getCertPage = (page) => {
        const start = page * ITEMS_PER_PAGE;
        return certificateItems.slice(start, start + ITEMS_PER_PAGE);
    };

    const totalTeamPages = Math.ceil(teamItems.length / ITEMS_PER_PAGE);
    const totalCertPages = Math.ceil(certificateItems.length / ITEMS_PER_PAGE);

    const prevTeam = () => {
        setTeamPage((prev) => (prev - 1 + totalTeamPages) % totalTeamPages);
    };

    const nextTeam = () => {
        setTeamPage((prev) => (prev + 1) % totalTeamPages);
    };

    const prevCert = () => {
        setCertPage((prev) => (prev - 1 + totalCertPages) % totalCertPages);
    };

    const nextCert = () => {
        setCertPage((prev) => (prev + 1) % totalCertPages);
    };

    const currentTeamItems = getTeamPage(teamPage);
    const currentCertItems = getCertPage(certPage);

    return (
        <section id="testimonials" style={{
            padding: 'clamp(3.5rem, 7vw, 6.5rem) 0',
            background: `linear-gradient(rgba(10, 10, 10, 0.93), rgba(10, 10, 10, 0.93)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <div style={{
                maxWidth: '1100px',
                width: '100%',
                padding: '0 clamp(1rem, 4vw, 2rem)',
            }}>
                <div style={{ textAlign: 'center', marginBottom: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
                    <h2 style={{
                        color: '#FFFFFF',
                        fontSize: 'clamp(1.6rem, 5vw, 2rem)',
                        fontWeight: 700,
                        marginBottom: '0.25rem',
                    }}>
                        Gallery
                    </h2>
                    <p style={{
                        color: '#A0A0A0',
                        fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                        maxWidth: '500px',
                        margin: '0 auto',
                    }}>
                        Team And Certifications
                    </p>
                </div>

                {/* KATEGORI 1: TEAM */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '1.2rem',
                    }}>
                        <Users size={22} color="#FF3B1D" />
                        <h3 style={{
                            color: '#FFFFFF',
                            fontSize: '1.2rem',
                            fontWeight: 600,
                        }}>
                            Team
                        </h3>
                        <div style={{
                            flex: 1,
                            height: '1px',
                            background: 'rgba(255,255,255,0.06)',
                        }} />
                    </div>

                    <div className="gallery-grid">
                        {currentTeamItems.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    background: '#151515',
                                    border: '1px solid rgba(255, 255, 255, 0.04)',
                                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-6px)';
                                    e.target.style.borderColor = 'rgba(255, 59, 29, 0.3)';
                                    e.target.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                                    e.target.style.boxShadow = 'none';
                                }}
                                onClick={() => setSelectedItem(item)} // ← KLIK BUKA POPUP
                            >
                                <div style={{
                                    width: '100%',
                                    height: '200px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'scale(1)';
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '60%',
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                        pointerEvents: 'none',
                                    }} />
                                </div>

                                <div style={{
                                    padding: '1rem 1.5rem 1.5rem',
                                    position: 'relative',
                                    zIndex: 1,
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        marginBottom: '0.25rem',
                                    }}>
                                        <span style={{
                                            color: '#FF3B1D',
                                            opacity: 0.6,
                                        }}>
                                            {item.icon}
                                        </span>
                                        <span style={{
                                            fontSize: '0.65rem',
                                            color: '#FF3B1D',
                                            fontWeight: 500,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                        }}>
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 style={{
                                        color: '#FFFFFF',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        margin: 0,
                                    }}>
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigasi Team */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1.2rem',
                        marginTop: '1.2rem',
                    }}>
                        <button onClick={prevTeam} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            color: '#A0A0A0',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 59, 29, 0.15)';
                                e.currentTarget.style.borderColor = '#FF3B1D';
                                e.currentTarget.style.color = '#FF3B1D';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                                e.currentTarget.style.color = '#A0A0A0';
                            }}>
                            <ChevronLeft size={18} />
                        </button>

                        <div style={{
                            display: 'flex',
                            gap: '0.5rem',
                            alignItems: 'center',
                        }}>
                            {Array.from({ length: totalTeamPages }).map((_, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        width: idx === teamPage ? '20px' : '10px',
                                        height: '3px',
                                        borderRadius: '4px',
                                        background: idx === teamPage ? '#FF3B1D' : 'rgba(255,255,255,0.15)',
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            ))}
                        </div>

                        <button onClick={nextTeam} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            color: '#A0A0A0',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 59, 29, 0.15)';
                                e.currentTarget.style.borderColor = '#FF3B1D';
                                e.currentTarget.style.color = '#FF3B1D';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                                e.currentTarget.style.color = '#A0A0A0';
                            }}>
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* KATEGORI 2: CERTIFICATE */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '1.2rem',
                    }}>
                        <Award size={22} color="#FF3B1D" />
                        <h3 style={{
                            color: '#FFFFFF',
                            fontSize: '1.2rem',
                            fontWeight: 600,
                        }}>
                            Certificate
                        </h3>
                        <div style={{
                            flex: 1,
                            height: '1px',
                            background: 'rgba(255,255,255,0.06)',
                        }} />
                    </div>

                    <div className="gallery-grid">
                        {currentCertItems.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    background: '#151515',
                                    border: '1px solid rgba(255, 255, 255, 0.04)',
                                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-6px)';
                                    e.target.style.borderColor = 'rgba(255, 59, 29, 0.3)';
                                    e.target.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                                    e.target.style.boxShadow = 'none';
                                }}
                                onClick={() => setSelectedItem(item)} // ← KLIK BUKA POPUP
                            >
                                <div style={{
                                    width: '100%',
                                    height: '200px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'scale(1)';
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '60%',
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                        pointerEvents: 'none',
                                    }} />
                                </div>

                                <div style={{
                                    padding: '1rem 1.5rem 1.5rem',
                                    position: 'relative',
                                    zIndex: 1,
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        marginBottom: '0.25rem',
                                    }}>
                                        <span style={{
                                            color: '#FF3B1D',
                                            opacity: 0.6,
                                        }}>
                                            {item.icon}
                                        </span>
                                        <span style={{
                                            fontSize: '0.65rem',
                                            color: '#FF3B1D',
                                            fontWeight: 500,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                        }}>
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 style={{
                                        color: '#FFFFFF',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        margin: 0,
                                    }}>
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigasi Certificate */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1.2rem',
                        marginTop: '1.2rem',
                    }}>
                        <button onClick={prevCert} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            color: '#A0A0A0',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 59, 29, 0.15)';
                                e.currentTarget.style.borderColor = '#FF3B1D';
                                e.currentTarget.style.color = '#FF3B1D';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                                e.currentTarget.style.color = '#A0A0A0';
                            }}>
                            <ChevronLeft size={18} />
                        </button>

                        <div style={{
                            display: 'flex',
                            gap: '0.5rem',
                            alignItems: 'center',
                        }}>
                            {Array.from({ length: totalCertPages }).map((_, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        width: idx === certPage ? '20px' : '10px',
                                        height: '3px',
                                        borderRadius: '4px',
                                        background: idx === certPage ? '#FF3B1D' : 'rgba(255,255,255,0.15)',
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            ))}
                        </div>

                        <button onClick={nextCert} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            color: '#A0A0A0',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 59, 29, 0.15)';
                                e.currentTarget.style.borderColor = '#FF3B1D';
                                e.currentTarget.style.color = '#FF3B1D';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                                e.currentTarget.style.color = '#A0A0A0';
                            }}>
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* POPUP GALLERY DETAIL */}
            {selectedItem && (
                <GalleryDetail
                    item={selectedItem}
                    onClose={() => setSelectedItem(null)}
                />
            )}

            <style>{`
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                }
                @media (max-width: 900px) {
                    .gallery-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1.2rem;
                    }
                }
                @media (max-width: 580px) {
                    .gallery-grid {
                        grid-template-columns: 1fr;
                        gap: 1.2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Gallery;