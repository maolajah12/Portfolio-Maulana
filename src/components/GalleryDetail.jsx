import { X } from 'lucide-react';

const GalleryDetail = ({ item, onClose }) => {
    if (!item) return null;

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
                    maxWidth: '900px',
                    width: '100%',
                    maxHeight: '90vh',
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

                {/* GAMBAR - LEBIH BESAR & JELAS */}
                <div style={{
                    width: '100%',
                    height: '480px',
                    overflow: 'hidden',
                    borderRadius: '24px 24px 0 0',
                    background: '#0A0A0A',
                }}>
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            backgroundColor: '#0A0A0A',
                        }}
                    />
                </div>

                {/* Content */}
                <div style={{
                    padding: '1.8rem 2.5rem 2.5rem',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        marginBottom: '0.5rem',
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
                            {item.category}
                        </span>
                    </div>

                    <h2 style={{
                        color: '#FFFFFF',
                        fontSize: '1.6rem',
                        fontWeight: 700,
                        marginBottom: '0.75rem',
                        letterSpacing: '-0.5px',
                    }}>
                        {item.title}
                    </h2>

                    <p style={{
                        color: '#A0A0A0',
                        fontSize: '1rem',
                        lineHeight: 1.8,
                    }}>
                        {item.desc || 'Momen berharga yang terekam selama perjalanan karir dan pengembangan diri.'}
                    </p>
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

export default GalleryDetail;