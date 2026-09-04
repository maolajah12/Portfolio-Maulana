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
            desc: 'Bersama tim IT saat menjalani program magang di BPJS Ketenagakerjaan. Pengalaman berharga dalam pengembangan sistem dan kolaborasi tim.',
        },
        {
            id: 2,
            title: 'IT Team Internship BPJS Ketenagakerjaan',
            category: 'Team',
            icon: <Users size={24} color="#FF3B1D" />,
            image: team2,
            desc: 'Momen kebersamaan dengan tim IT BPJS Ketenagakerjaan saat menyelesaikan proyek akhir magang.',
        },
        {
            id: 3,
            title: 'Archives Center Team',
            category: 'Team',
            icon: <Users size={24} color="#FF3B1D" />,
            image: team3,
            desc: 'Tim Pusat Arsip yang solid dalam mengelola dan mendigitalisasi arsip-arsip penting.',
        },
    ];

    // Data Certificate
    const certificateItems = [
        {
            id: 4,
            title: 'BPJS Ketenagakerjaan Internship Certificate',
            category: 'Certificate',
            icon: <Award size={24} color="#FF3B1D" />,
            image: sertif1,
            desc: 'Sertifikat resmi sebagai bukti telah menyelesaikan program magang di BPJS Ketenagakerjaan dengan predikat baik.',
        },
        {
            id: 5,
            title: 'Huawei Course Certificate',
            category: 'Certificate',
            icon: <Award size={24} color="#FF3B1D" />,
            image: sertif2,
            desc: 'Sertifikat kelulusan kursus Huawei yang mencakup materi jaringan dan teknologi komunikasi modern.',
        },
        {
            id: 6,
            title: 'Claude Code Certificate',
            category: 'Certificate',
            icon: <Award size={24} color="#FF3B1D" />,
            image: sertif3,
            desc: 'Sertifikat kompetensi dalam pengembangan aplikasi menggunakan Claude Code dan teknologi AI terkait.',
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