export default function ReviewLoading() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#111' }}>
            <div style={{ marginBottom: 16 }}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="20" stroke="#fff" strokeWidth="4" opacity="0.2" />
                    <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="#fff"
                        strokeWidth="4"
                        strokeDasharray="100"
                        strokeDashoffset="60"
                        strokeLinecap="round"
                        style={{ transformOrigin: 'center', animation: 'spin 1s linear infinite' } as React.CSSProperties}
                    />
                    <style>
                        {`@keyframes spin { 100% { transform: rotate(360deg); } }`}
                    </style>
                </svg>
            </div>
            <span style={{ color: '#fff', fontSize: 18, opacity: 0.8 }}>리뷰를 불러오는 중입니다...</span>
        </div>
    );
}