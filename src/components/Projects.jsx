import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ProjectDetail from './ProjectDetail';

import restoran1 from '../assets/Restauran 1.png';
import restoran2 from '../assets/Restauran 2.png';
import restoran3 from '../assets/Restauran 3.png';

import gym1 from '../assets/Gym 1.png';
import gym2 from '../assets/Gym 2.png';
import gym3 from '../assets/Gym 3.png';

import bpjs1 from '../assets/Bpjs 1.png';
import bpjs2 from '../assets/Bpjs 2.png';
import bpjs3 from '../assets/Bpjs 3.png';
import bpjs4 from '../assets/Bpjs 4.png';
import bpjs5 from '../assets/Bpjs 5.png';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);

    const allProjects = [
        {
            name: 'Ayo Ngegym',
            desc: 'Track Your workout system',
            year: '2026',
            category: 'Mobile Web - Thesis',
            image: gym1,
            detailTitle: 'Ayo Ngegym',
            detailDesc: 'Developed a personalized fitness and nutrition tracking system tailored to user biometrics (age, weight, and height).',
            images: [gym1, gym2, gym3],
            tools: ['React Native', 'Firebase', 'Chart.js', 'Expo', 'Tailwind CSS'],
        },
        {
            name: 'Château Lumière',
            desc: 'Fine Dining Reservation System',
            year: '2025',
            category: 'Fullstack Web - College Project',
            image: restoran1,
            detailTitle: 'Château Lumière',
            detailDesc: 'Developed an integrated fine-dining reservation web platform, featuring an exclusive menu catalog, interactive floor-plan table booking, payment simulations, and comprehensive customer reservation history management',
            images: [restoran1, restoran2, restoran3],
            tools: ['Laravel', 'MySQL', 'Tailwind CSS', 'Livewire', 'Alpine.js'],
        },
        {
            name: 'BPJS Ketenagakerjaan Internal Monitoring System',
            desc: 'Monitoring Intern System',
            year: '2025',
            category: 'Fullstack Web - IT Internship',
            image: bpjs1,
            detailTitle: 'BPJS Ketenagakerjaan Internal Monitoring System',
            detailDesc: 'Developed internal information system modules within the IT Division, including an attendance tracking system and operational data visualization dashboards.',
            images: [bpjs1, bpjs2, bpjs3],
            tools: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap', 'Chart.js'],
        },
        {
            name: 'Dashboard Perlindungan Jamsostek Sektor Nelayan Provinsi Sumatera Utara',
            desc: 'Dashboard Monitoring Sektor Nelayan',
            year: '2025',
            category: 'Web Development',
            image: bpjs4,
            detailTitle: 'Dashboard Perlindungan Jamsostek Sektor Nelayan Provinsi Sumatera Utara',
            detailDesc: 'An internal data visualization dashboard designed to monitor labor social security (Jamsostek) coverage for the fishery sector in North Sumatra',
            images: [bpjs4, bpjs5],
            tools: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap', 'Chart.js'],
        },
    ];

    const ITEMS_PER_PAGE = 3;
    const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);

    const getCurrentProjects = () => {
        const start = currentPage * ITEMS_PER_PAGE;
        return allProjects.slice(start, start + ITEMS_PER_PAGE);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const currentProjects = getCurrentProjects();

    return (
        <section id="projects" style={{
            padding: 'clamp(4rem, 8vw, 7.5rem) 0',
            background: '#0A0A0A',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '0 clamp(1rem, 4vw, 2rem)',
                position: 'relative',
                zIndex: 1,
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '0',
                    fontSize: 'clamp(2.8rem, 8vw, 6rem)',
                    fontWeight: 900,
                    color: 'rgba(255, 255, 255, 0.05)',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '-2px',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    pointerEvents: 'none',
                    whiteSpace: 'nowrap',
                    userSelect: 'none',
                    maxWidth: '100%',
                    overflow: 'hidden',
                }}>
                    My Project
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2.5rem',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}>
                    <div>
                        <h2 className="section-title" style={{
                            color: '#FFFFFF',
                            fontSize: 'clamp(1.6rem, 5vw, 2rem)',
                            fontWeight: 700,
                            marginBottom: '0.25rem',
                            letterSpacing: '-0.3px',
                        }}>
                            Latest Project
                        </h2>
                        <p style={{
                            color: '#A0A0A0',
                            fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                        }}>
                            My recent work and projects
                        </p>
                    </div>
                </div>

                <div style={{ display: 'grid', gap: '1rem' }}>
                    {currentProjects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.2rem',
                                padding: '0.9rem 1.4rem 0.9rem 0.9rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: '14px',
                                border: '1px solid rgba(255, 255, 255, 0.04)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 59, 29, 0.3)';
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                                e.currentTarget.style.transform = 'translateX(4px)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateX(0)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                            }}
                        >
                            <div className="project-card-thumb" style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                flexShrink: 0,
                                background: '#1A1A1A',
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>

                            <div className="project-card-info" style={{
                                flex: 1,
                                minWidth: 0,
                            }}>
                                <div className="project-card-title-row" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    marginBottom: '0.35rem',
                                    flexWrap: 'wrap',
                                }}>
                                    <h3 className="project-card-title" style={{
                                        fontSize: '1.05rem',
                                        fontWeight: 600,
                                        color: '#FFFFFF',
                                    }}>
                                        {project.name}
                                    </h3>
                                    <span style={{
                                        background: 'rgba(255, 59, 29, 0.12)',
                                        color: '#FF3B1D',
                                        padding: '0.15rem 0.8rem',
                                        borderRadius: '50px',
                                        fontSize: '0.65rem',
                                        fontWeight: 500,
                                        whiteSpace: 'nowrap',
                                        flexShrink: 0,
                                    }}>
                                        {project.category}
                                    </span>
                                </div>
                                <p style={{ color: '#A0A0A0', fontSize: '0.85rem', lineHeight: 1.5 }}>{project.desc}</p>
                            </div>

                            <div className="project-card-actions" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                flexShrink: 0,
                                marginLeft: 'auto',
                            }}>
                                <span style={{ color: '#A0A0A0', fontSize: '0.85rem', fontWeight: 500 }}>{project.year}</span>
                                <button
                                    style={{
                                        background: '#FF3B1D',
                                        color: 'white',
                                        border: 'none',
                                        padding: '0.45rem 1.3rem',
                                        borderRadius: '50px',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        whiteSpace: 'nowrap',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#D42A0A';
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#FF3B1D';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* NAVIGASI */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1.2rem',
                    marginTop: '2.5rem',
                }}>
                    <button onClick={prevPage} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
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
                        <ChevronLeft size={20} />
                    </button>

                    <div style={{
                        display: 'flex',
                        gap: '0.6rem',
                        alignItems: 'center',
                    }}>
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <div
                                key={idx}
                                style={{
                                    width: idx === currentPage ? '28px' : '18px',
                                    height: '3px',
                                    borderRadius: '4px',
                                    background: idx === currentPage ? '#FF3B1D' : 'rgba(255,255,255,0.15)',
                                    transition: 'all 0.3s ease',
                                }}
                            />
                        ))}
                    </div>

                    <button onClick={nextPage} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
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
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {selectedProject && (
                <ProjectDetail
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}

            <style>{`
                @media (max-width: 680px) {
                    .project-card {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        padding: 1.1rem !important;
                        gap: 1rem !important;
                    }
                    .project-card-actions {
                        width: 100% !important;
                        justify-content: space-between !important;
                        margin-left: 0 !important;
                        border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
                        padding-top: 0.8rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;