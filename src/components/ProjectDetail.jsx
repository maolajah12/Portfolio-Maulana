import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ProjectDetail = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) return null;

    // Default images - bisa ditambahin per project nanti
    const images = project.images || [
        project.image || 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=600&fit=crop',
    ];

    const totalImages = images.length;

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.92)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                zIndex: 9999,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem',
                animation: 'fadeIn 0.3s ease-out',
            }}
            onClick={onClose}
        >
            <div
                style={{
                    maxWidth: '1200px',
                    width: '100%',
                    maxHeight: '92vh',
                    overflow: 'auto',
                    background: '#141414',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 59, 29, 0.15)',
                    position: 'relative',
                    animation: 'slideUp 0.3s ease-out',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Tombol Close */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'rgba(0, 0, 0, 0.7)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '44px',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        zIndex: 10,
                        backdropFilter: 'blur(10px)',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255, 59, 29, 0.8)';
                        e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(0, 0, 0, 0.7)';
                        e.target.style.transform = 'scale(1)';
                    }}
                >
                    <X size={24} />
                </button>

                {/* =========================================== */}
                {/* GAMBAR - LEBIH BESAR & JELAS */}
                {/* =========================================== */}
                <div style={{
                    width: '100%',
                    height: '480px',
                    overflow: 'hidden',
                    borderRadius: '24px 24px 0 0',
                    background: '#0A0A0A',
                    position: 'relative',
                }}>
                    <img
                        src={images[currentImageIndex]}
                        alt={`${project.name} - ${currentImageIndex + 1}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            backgroundColor: '#0A0A0A',
                        }}
                    />

                    {/* Tombol Kiri - hanya muncul jika lebih dari 1 gambar */}
                    {totalImages > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                style={{
                                    position: 'absolute',
                                    left: '1.2rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(0, 0, 0, 0.6)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '50%',
                                    width: '48px',
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#FFFFFF',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    backdropFilter: 'blur(10px)',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(255, 59, 29, 0.6)';
                                    e.target.style.borderColor = 'rgba(255, 59, 29, 0.3)';
                                    e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(0, 0, 0, 0.6)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                <ChevronLeft size={26} />
                            </button>

                            {/* Tombol Kanan */}
                            <button
                                onClick={nextImage}
                                style={{
                                    position: 'absolute',
                                    right: '1.2rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(0, 0, 0, 0.6)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '50%',
                                    width: '48px',
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#FFFFFF',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    backdropFilter: 'blur(10px)',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(255, 59, 29, 0.6)';
                                    e.target.style.borderColor = 'rgba(255, 59, 29, 0.3)';
                                    e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(0, 0, 0, 0.6)';
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                <ChevronRight size={26} />
                            </button>

                            {/* Indikator gambar */}
                            <div style={{
                                position: 'absolute',
                                bottom: '1.2rem',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                gap: '0.5rem',
                                background: 'rgba(0, 0, 0, 0.6)',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '50px',
                                backdropFilter: 'blur(10px)',
                            }}>
                                {images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            width: idx === currentImageIndex ? '24px' : '8px',
                                            height: '6px',
                                            borderRadius: '4px',
                                            background: idx === currentImageIndex ? '#FF3B1D' : 'rgba(255,255,255,0.3)',
                                            transition: 'all 0.3s ease',
                                        }}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* CONTENT */}
                <div style={{
                    padding: '2rem 3rem 2.5rem',
                }}>
                    {/* Header */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        marginBottom: '0.5rem',
                        flexWrap: 'wrap',
                    }}>
                        <span style={{
                            background: 'rgba(255, 59, 29, 0.12)',
                            color: '#FF3B1D',
                            padding: '0.15rem 0.8rem',
                            borderRadius: '50px',
                            fontSize: '0.7rem',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                        }}>
                            {project.category || 'Mobile App'}
                        </span>
                        {project.type && (
                            <span style={{
                                background: 'rgba(255, 59, 29, 0.08)',
                                color: '#FF3B1D',
                                padding: '0.15rem 0.8rem',
                                borderRadius: '50px',
                                fontSize: '0.65rem',
                                fontWeight: 500,
                                letterSpacing: '0.3px',
                            }}>
                                {project.type}
                            </span>
                        )}
                        <span style={{
                            color: '#A0A0A0',
                            fontSize: '0.75rem',
                        }}>
                            {project.year || '2024'}
                        </span>
                    </div>

                    <h2 style={{
                        color: '#FFFFFF',
                        fontSize: '1.8rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                        letterSpacing: '-0.5px',
                    }}>
                        {project.detailTitle || project.name}
                    </h2>

                    <p style={{
                        color: '#A0A0A0',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        marginBottom: '1.5rem',
                    }}>
                        {project.detailDesc || project.desc}
                    </p>

                    {/* Tools & Technologies */}
                    <div>
                        <h4 style={{
                            color: '#FF3B1D',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: '0.6rem',
                        }}>
                            Tools & Technologies
                        </h4>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.6rem',
                        }}>
                            {project.tools && project.tools.map((tech, i) => (
                                <span
                                    key={i}
                                    style={{
                                        padding: '0.3rem 1rem',
                                        borderRadius: '50px',
                                        background: 'rgba(255, 255, 255, 0.04)',
                                        border: '1px solid rgba(255, 255, 255, 0.06)',
                                        color: '#A0A0A0',
                                        fontSize: '0.8rem',
                                        fontWeight: 400,
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                ::-webkit-scrollbar {
                    width: 4px;
                }
                ::-webkit-scrollbar-track {
                    background: rgba(255,255,255,0.02);
                }
                ::-webkit-scrollbar-thumb {
                    background: rgba(255,59,29,0.3);
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

export default ProjectDetail;