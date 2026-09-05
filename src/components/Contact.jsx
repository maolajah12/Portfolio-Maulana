import { useState, useRef } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ============================================
// SETUP EMAILJS - Environment Variables
// ============================================
const EMAILJS_SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState('idle');
    const [sendCount, setSendCount] = useState(0);
    const [lastSendTime, setLastSendTime] = useState(0);
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        subject: '',
        topic: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const honeypot = formRef.current.querySelector('input[name="bot_trap"]');
        if (honeypot && honeypot.value) {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
            return;
        }

        const now = Date.now();
        if (now - lastSendTime < 600000 && sendCount >= 3) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
            return;
        }
        if (now - lastSendTime >= 600000) {
            setSendCount(0);
        }

        setStatus('sending');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setSendCount((prev) => prev + 1);
            setLastSendTime(Date.now());
            setFormData({ from_name: '', from_email: '', subject: '', topic: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const inputStyle = {
        padding: '0.85rem 1.2rem',
        borderRadius: '10px',
        border: '1px solid rgba(255,255,255,0.06)',
        fontSize: '0.9rem',
        transition: 'all 0.3s ease',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.03)',
        color: '#A0A0A0',
        width: '100%',
    };

    const handleFocus = (e) => {
        e.target.style.borderColor = '#FF3B1D';
        e.target.style.boxShadow = '0 0 0 3px rgba(255, 59, 29, 0.08)';
        e.target.style.color = '#FFFFFF';
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = 'rgba(255,255,255,0.06)';
        e.target.style.boxShadow = 'none';
        e.target.style.color = '#A0A0A0';
    };

    const topicOptions = [
        { value: '', label: 'Select a topic (optional)' },
        { value: 'Job Offer / Recruitment', label: '💼 Job Offer / Recruitment' },
        { value: 'Project Collaboration', label: '🤝 Project Collaboration' },
        { value: 'Casual Discussion', label: '💬 Casual Discussion' },
        { value: 'Graphic Design Services', label: '🎨 Graphic Design Services' },
        { value: 'UI/UX Consultation', label: '🖌️ UI/UX Consultation' },
        { value: 'Partnership', label: '🤝 Partnership' },
        { value: 'Other', label: '📌 Other' },
    ];

    return (
        <section id="contact" style={{
            padding: '5rem 0',
            background: '#141414',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <div style={{
                maxWidth: '1100px',
                width: '100%',
                padding: '0 clamp(1rem, 4vw, 2rem)',
            }}>
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
                    <h2 style={{
                        color: '#FFFFFF',
                        fontSize: 'clamp(1.6rem, 5vw, 2rem)',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                    }}>
                        Get in Touch
                    </h2>
                    <p style={{
                        color: '#A0A0A0',
                        fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                        maxWidth: '500px',
                        margin: '0 auto',
                    }}>
                        For business and partnership inquiries please contact me below
                    </p>
                </div>

                <div className="contact-layout" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.4fr',
                    gap: '2.5rem',
                    alignItems: 'stretch',
                }}>
                    {/* LEFT - CONTACT INFO */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}>
                        <a
                            href="mailto:alghifarim60@gmail.com"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.2rem',
                                padding: '1.4rem 1.5rem',
                                borderRadius: '14px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.04)',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 59, 29, 0.3)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                background: '#FF3B1D',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                width: '48px',
                                height: '48px',
                                flexShrink: 0,
                            }}>
                                <Mail size={22} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.7rem', color: '#A0A0A0', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Email</p>
                                <p style={{ fontWeight: 500, fontSize: '1rem', color: '#FFFFFF' }}>alghifarim60@gmail.com</p>
                            </div>
                        </a>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.2rem',
                            padding: '1.4rem 1.5rem',
                            borderRadius: '14px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.04)',
                        }}>
                            <div style={{
                                background: '#FF3B1D',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                width: '48px',
                                height: '48px',
                                flexShrink: 0,
                            }}>
                                <MapPin size={22} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.7rem', color: '#A0A0A0', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Address</p>
                                <p style={{ fontWeight: 500, fontSize: '1rem', color: '#FFFFFF' }}>Jalan Kilang Padi Pasar 9, Sumatera Utara, Medan, Indonesia</p>
                            </div>
                        </div>

                        <div style={{
                            padding: '1.4rem 1.5rem',
                            borderRadius: '14px',
                            background: 'rgba(255, 59, 29, 0.05)',
                            border: '1px solid rgba(255, 59, 29, 0.1)',
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <p style={{
                                color: '#A0A0A0',
                                fontSize: '0.85rem',
                                lineHeight: 1.7,
                            }}>
                                Feel free to reach out! Fill in the form and your message will be sent directly to my inbox. I typically respond within <span style={{ color: '#FF3B1D', fontWeight: 600 }}>24 hours</span>.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT - CONTACT FORM */}
                    <form
                        ref={formRef}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            padding: '2rem 2.2rem',
                            borderRadius: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            border: '1px solid rgba(255, 255, 255, 0.04)',
                            position: 'relative',
                        }}
                        onSubmit={handleSubmit}
                    >
                        {/* Honeypot */}
                        <input
                            type="text"
                            name="bot_trap"
                            style={{
                                position: 'absolute',
                                opacity: 0,
                                height: 0,
                                width: 0,
                                pointerEvents: 'none',
                            }}
                            tabIndex="-1"
                            autoComplete="off"
                        />

                        <div style={{ marginBottom: '0.3rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.3rem' }}>Send a Message</h3>
                            <p style={{ color: '#A0A0A0', fontSize: '0.85rem' }}>Your message will be sent directly to my email</p>
                        </div>

                        <div className="contact-name-email" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Your Name *"
                                value={formData.from_name}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                            <input
                                type="email"
                                name="from_email"
                                placeholder="Your Email *"
                                value={formData.from_email}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>

                        {/* TOPIC DROPDOWN - WARNA SAMA DENGAN "Your Name" */}
                        <select
                            name="topic"
                            value={formData.topic}
                            onChange={handleChange}
                            style={{
                                ...inputStyle,
                                appearance: 'none',
                                cursor: 'pointer',
                                color: '#A0A0A0',
                            }}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        >
                            {topicOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                    style={{
                                        background: '#1A1A1A',
                                        color: '#A0A0A0',
                                    }}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            style={inputStyle}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message *"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{
                                ...inputStyle,
                                resize: 'vertical',
                                fontFamily: 'inherit',
                            }}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.75rem 1rem',
                                borderRadius: '10px',
                                background: 'rgba(34, 197, 94, 0.1)',
                                border: '1px solid rgba(34, 197, 94, 0.2)',
                                color: '#22C55E',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                            }}>
                                <CheckCircle size={18} /> Message sent successfully!
                            </div>
                        )}

                        {status === 'error' && (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.75rem 1rem',
                                borderRadius: '10px',
                                background: 'rgba(239, 68, 68, 0.1)',
                                border: '1px solid rgba(239, 68, 68, 0.2)',
                                color: '#EF4444',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                            }}>
                                <AlertCircle size={18} /> Failed to send. Please try again or email directly.
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.6rem',
                                padding: '0.85rem',
                                fontSize: '0.95rem',
                                marginTop: '0.25rem',
                                background: status === 'sending' ? '#A0A0A0' : '#FF3B1D',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '50px',
                                fontWeight: 600,
                                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease',
                                opacity: status === 'sending' ? 0.7 : 1,
                            }}
                            onMouseEnter={(e) => {
                                if (status !== 'sending') {
                                    e.currentTarget.style.background = '#D42A0A';
                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,59,29,0.3)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (status !== 'sending') {
                                    e.currentTarget.style.background = '#FF3B1D';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }
                            }}
                        >
                            {status === 'sending' ? (
                                <><Loader size={18} className="spin-icon" /> Sending...</>
                            ) : (
                                <><Send size={18} /> Send Message</>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            <style>{`
                @media (max-width: 850px) {
                    .contact-layout {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                }
                @media (max-width: 550px) {
                    .contact-name-email {
                        grid-template-columns: 1fr !important;
                    }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .spin-icon {
                    animation: spin 1s linear infinite;
                }
                select option {
                    background: #1A1A1A;
                    color: #A0A0A0;
                }
            `}</style>
        </section>
    );
};

export default Contact;