}  'use client'; 
 
export default function VideoGrid({ videos, onSelectVideo }) { 
  return ( 
      {videos?.map((video) =
          key={video.id} 
          style={{ 
            backgroundColor: '#222', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            cursor: 'pointer', 
            transition: 'transform 0.2s' 
          }} 
          onMouseEnter={(e) = = 'scale(1.02)'} 
          onMouseLeave={(e) = = 'scale(1)'} 
              ▶️ 
      ))} 
  ); 
