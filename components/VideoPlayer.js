'use client';

export default function VideoPlayer({ video }) {
  return (
    <div style={{ backgroundColor: '#1a1a1a', borderRadius: '10px', overflow: 'hidden' }}>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <video
          controls
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <source src={video?.url || '/videos/demo.mp4'} type="video/mp4" />
          Your browser does not support videos.
        </video>
      </div>
      <div style={{ padding: '20px' }}>
        <h2 style={{ color: 'white', fontSize: '24px', marginBottom: '10px' }}>
          {video?.title || 'Demo Video'}
        </h2>
        <p style={{ color: '#aaa' }}>
          {video?.description || 'Preview video for testing'}
        </p>
      </div>
    </div>
  );
}