import { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, ArrowRight } from 'lucide-react';

const CountdownClock = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [isPlaying, setIsPlaying] = useState(true);
    const [isAudioReady, setIsAudioReady] = useState(false);

    // stage: 'initial' -> 'ticking' -> 'shrinking' -> 'docked'
    const [stage, setStage] = useState('initial');
    const [dockTransform, setDockTransform] = useState('translate(calc(-50vw + 160px), calc(-50vh + 45px)) scale(0.12)');
    const [isMounted, setIsMounted] = useState(false);

    const audioRef = useRef(null);
    const intervalRef = useRef(null);
    const clockTextRef = useRef(null);

    // Format waktu
    useEffect(() => {
        // Trigger animasi entrance
        const mountTimer = setTimeout(() => setIsMounted(true), 100);

        const updateClock = () => {
            const now = new Date();

            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            setTime(`${hours}:${minutes}:${seconds}`);

            const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
            setDate(now.toLocaleDateString('id-ID', options));
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);

        return () => {
            clearInterval(interval);
            clearTimeout(mountTimer);
        };
    }, []);

    const calculateDockPosition = useCallback(() => {
        const logo = document.getElementById('navbar-logo');
        if (logo) {
            const rect = logo.getBoundingClientRect();
            const isMobile = window.innerWidth <= 768;
            
            // Ukuran docked clock yang presisi dan rapi
            const targetDockedWidth = isMobile ? 84 : 108;
            const marginFromLogo = isMobile ? 18 : 24; // Jarak pasti dari sisi kanan logo "Portfolio."
            
            // Hitung lebar unscaled teks jam saat ini untuk menentukan scale dinamis yang presisi
            let unscaledWidth = 350;
            if (clockTextRef.current) {
                unscaledWidth = clockTextRef.current.offsetWidth || 350;
            }
            
            const dynamicScale = targetDockedWidth / unscaledWidth;
            
            // X: Posisi tengah clock target = sisi kanan logo + margin + setengah lebar target clock
            const targetX = rect.right + marginFromLogo + (targetDockedWidth / 2); 
            // Y: Sejajar tepat secara vertikal dengan tengah logo Portfolio
            const targetY = rect.top + (rect.height / 2);
            
            // Selisih antara posisi target dengan titik tengah layar (0,0 dari transform)
            const moveX = targetX - (window.innerWidth / 2);
            const moveY = targetY - (window.innerHeight / 2);
            
            setDockTransform(`translate(${moveX}px, ${moveY}px) scale(${dynamicScale.toFixed(4)})`);
        }
    }, []);

    // Listener untuk resize/zoom agar posisi jam tetap akurat
    useEffect(() => {
        if (stage === 'shrinking' || stage === 'docked') {
            window.addEventListener('resize', calculateDockPosition);
            return () => window.removeEventListener('resize', calculateDockPosition);
        }
    }, [stage, calculateDockPosition]);

    // Sequence logic
    useEffect(() => {
        if (stage === 'ticking') {
            // Setelah 5 detik ticking, mulai shrinking
            const timer = setTimeout(() => {
                calculateDockPosition();
                setStage('shrinking');
            }, 5000);
            return () => clearTimeout(timer);
        } else if (stage === 'shrinking') {
            // Fade out audio
            fadeOutAudio();

            // Setelah animasi CSS selesai (misal 1.5 detik), pindah ke docked
            const timer = setTimeout(() => {
                setStage('docked');
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [stage]);

    const initAudio = () => {
        if (!audioRef.current) {
            import('../assets/tick.mp3').then((module) => {
                audioRef.current = new Audio(module.default);
                setIsAudioReady(true);
                setIsPlaying(true);
                fadeInAudio();
                startTickSound();
            }).catch(e => console.log('Error loading audio:', e));
        } else {
            setIsAudioReady(true);
            setIsPlaying(true);
            fadeInAudio();
            startTickSound();
        }
    };

    const fadeInAudio = () => {
        if (!audioRef.current) return;
        
        audioRef.current.volume = 0;
        let vol = 0;
        const fadeInterval = setInterval(() => {
            vol += 0.05;
            if (vol >= 1) {
                vol = 1;
                clearInterval(fadeInterval);
            }
            if (audioRef.current) {
                audioRef.current.volume = vol;
            }
        }, 30); // 20 steps of 30ms = 600ms (0.6 detik) sinkron dengan animasi CSS pop-in
    };

    const fadeOutAudio = () => {
        if (!audioRef.current) return;
        
        let vol = 1;
        const fadeInterval = setInterval(() => {
            vol -= 0.05;
            if (vol <= 0) {
                vol = 0;
                clearInterval(fadeInterval);
                if (audioRef.current) {
                    audioRef.current.pause();
                }
                setIsPlaying(false);
            }
            if (audioRef.current) {
                audioRef.current.volume = vol;
            }
        }, 100); // Turunkan volume bertahap selama 2 detik
    };

    const playTick = () => {
        if (audioRef.current) {
            audioRef.current.loop = true; // Biarkan file mp3 me-loop secara natural
            audioRef.current.play().catch(e => console.log('Audio error:', e));
        }
    };

    const startTickSound = () => {
        playTick();
    };

    const handleReadyClick = () => {
        if (stage === 'initial') {
            initAudio();
            setStage('ticking');
        }
    };

    const toggleSound = (e) => {
        e.stopPropagation();

        if (!isAudioReady) {
            initAudio();
            return;
        }

        if (isPlaying) {
            setIsPlaying(false);
            if (audioRef.current) {
                audioRef.current.pause();
            }
        } else {
            setIsPlaying(true);
            if (audioRef.current) audioRef.current.volume = 1;
            startTickSound();
        }
    };

    const isBackgroundVisible = stage === 'initial' || stage === 'ticking';
    const isShrinkingOrDocked = stage === 'shrinking' || stage === 'docked';

    // Posisi transform berdasarkan stage
    let containerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: isBackgroundVisible ? '#050505' : 'transparent',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'background 2s ease-in-out',
        pointerEvents: isShrinkingOrDocked ? 'none' : 'auto',
    };

    // Styling untuk konten clock (bisa ditransform)
    let contentStyle = {
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        transition: stage === 'shrinking'
            ? 'all 1.5s ease-in-out' 
            : stage === 'ticking' ? 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
        transform: isShrinkingOrDocked ? dockTransform : stage === 'initial' ? 'translate(0, 20px) scale(0.9)' : 'translate(0, 0) scale(1)',
        opacity: stage === 'initial' ? 0 : 1, // Sembunyikan jam saat initial
        pointerEvents: isShrinkingOrDocked ? 'auto' : 'none', // Supaya button unmute bisa diklik kalau docked
    };

    return (
        <div className="clock-container" style={containerStyle}>
            {/* Dekorasi background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(255, 59, 29, 0.05) 0%, transparent 70%)',
                opacity: isBackgroundVisible ? (isMounted ? 1 : 0) : 0,
                transform: isMounted ? 'scale(1)' : 'scale(1.1)',
                transition: 'opacity 2s ease-out, transform 3s ease-out',
            }} />

            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(400px, 85vw)',
                height: 'min(400px, 85vw)',
                borderRadius: '50%',
                border: '1px solid rgba(255, 59, 29, 0.03)',
                pointerEvents: 'none',
                opacity: isBackgroundVisible ? 1 : 0,
                transition: 'opacity 2s ease-in-out',
            }} />

            {/* Tombol Ready to Work */}
            {stage === 'initial' && (
                <div style={{
                    position: 'absolute',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0 1.5rem',
                    textAlign: 'center',
                    maxWidth: '90vw',
                    opacity: isMounted ? 1 : 0,
                    transform: isMounted ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 1.5s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    transitionDelay: '0.3s'
                }}>
                    <h2 style={{
                        color: '#FFFFFF',
                        fontSize: 'clamp(1.6rem, 5vw, 2rem)',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        margin: 0,
                        textTransform: 'uppercase'
                    }}>
                        Ready to work?
                    </h2>
                    <button
                        onClick={handleReadyClick}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.9rem 2.5rem',
                            background: '#FF3B1D',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '50px',
                            fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            boxShadow: '0 10px 30px rgba(255,59,29,0.3)',
                            transition: 'all 0.3s ease',
                            animation: 'pulseButton 2s infinite',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.background = '#D42A0A';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.background = '#FF3B1D';
                        }}
                    >
                        Ready!
                    </button>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', letterSpacing: '1px' }}>
                        Click to enter portfolio
                    </span>
                </div>
            )}

            {/* Clock Content */}
            <div style={contentStyle}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: isShrinkingOrDocked ? '0' : '0.5rem',
                    maxHeight: isShrinkingOrDocked ? '0' : '30px',
                    opacity: isShrinkingOrDocked ? 0 : 0.6,
                    transition: 'all 0.5s ease',
                    overflow: 'hidden',
                }}>
                    <span style={{
                        fontSize: 'clamp(0.65rem, 2vw, 0.7rem)',
                        color: '#FF3B1D',
                        fontWeight: 600,
                        letterSpacing: 'clamp(2px, 0.8vw, 4px)',
                        textTransform: 'uppercase',
                    }}>
                        ⏳ Time to work !
                    </span>
                </div>

                <div ref={clockTextRef} style={{
                    fontSize: 'clamp(2.6rem, 11.5vw, 8rem)',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    fontFamily: "'Orbitron', 'Inter', sans-serif",
                    letterSpacing: isShrinkingOrDocked ? '2px' : 'clamp(2px, 1vw, 6px)',
                    textShadow: '0 0 60px rgba(255, 59, 29, 0.05)',
                    lineHeight: 1,
                    marginBottom: isShrinkingOrDocked ? '0' : '0.5rem',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.5s ease',
                }}>
                    {time}
                </div>

                <div style={{
                    width: 'clamp(60px, 18vw, 100px)',
                    height: isShrinkingOrDocked ? '0' : '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 59, 29, 0.3), transparent)',
                    marginBottom: isShrinkingOrDocked ? '0' : '0.5rem',
                    opacity: isShrinkingOrDocked ? 0 : 1,
                    transition: 'all 0.5s ease',
                    overflow: 'hidden',
                }} />

                <div style={{
                    fontSize: 'clamp(0.85rem, 3.2vw, 1.2rem)',
                    color: '#A0A0A0',
                    fontWeight: 400,
                    letterSpacing: 'clamp(1px, 0.5vw, 2px)',
                    fontFamily: "'Inter', sans-serif",
                    textAlign: 'center',
                    padding: '0 1rem',
                    maxHeight: isShrinkingOrDocked ? '0' : '40px',
                    opacity: isShrinkingOrDocked ? 0 : 1,
                    transition: 'all 0.5s ease',
                    overflow: 'hidden',
                }}>
                    {date}
                </div>
            </div>

            <style>{`
                @keyframes pulseButton {
                    0% { box-shadow: 0 0 0 0 rgba(255,59,29,0.4); }
                    70% { box-shadow: 0 0 0 20px rgba(255,59,29,0); }
                    100% { box-shadow: 0 0 0 0 rgba(255,59,29,0); }
                }
            `}</style>
        </div>
    );
};

export default CountdownClock;