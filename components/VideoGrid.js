'use client';

export default function VideoGrid({ videos, onSelectVideo }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
      {videos?.map((video) => (
        <div
          key={video.id}
          onClick={() => onSelectVideo && onSelectVideo(video)}
          style={{
            backgroundColor: '#222',
            borderRadius: '8px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{ position: 'relative', paddingTop: '56.25%', backgroundColor: '#333' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#666', fontSize: '48px' }}>
              ▶️
            </div>
          </div>
          <div style={{ padding: '15px' }}>
            <h3 style={{ color: 'white', marginBottom: '5px' }}>{video.title}</h3>
            <p style={{ color: '#aaa', fontSize: '14px' }}>{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}