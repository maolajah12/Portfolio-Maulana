const RunningText = () => {
    const skills = [
        'JAVA', 'C++', 'GIT', 'REST API', 'MOBILE DEV', 'REACT',
        'JAVASCRIPT', 'FLUTTER', 'NODE.JS', 'PYTHON', 'FIREBASE',
        'PHP', 'LARAVEL', 'MYSQL'
    ];

    const allSkills = [...skills, ...skills, ...skills];

    return (
        <div style={{
            width: '100%',
            overflow: 'hidden',
            background: 'rgba(255, 255, 255, 0.02)',
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
            padding: '0.8rem 0',
        }}>
            <div style={{
                display: 'flex',
                animation: 'scroll 25s linear infinite',
                whiteSpace: 'nowrap',
                gap: '3rem',
            }}>
                {allSkills.map((skill, index) => (
                    <span
                        key={index}
                        style={{
                            color: '#A0A0A0',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                        }}
                    >
                        {skill}
                    </span>
                ))}
            </div>

            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
        </div>
    );
};

export default RunningText;