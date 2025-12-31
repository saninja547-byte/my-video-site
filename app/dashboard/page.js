'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import VideoPlayer from '../../components/VideoPlayer';
import VideoGrid from '../../components/VideoGrid';

export default function DashboardPage() {
  const router = useRouter();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // Kiểm tra authentication
    const isAuth = localStorage.getItem('isAuthenticated');
    if (!isAuth) {
      router.push('/');
      return;
    }

    // Load video data
    const sampleVideos = [
      {
        id: 1,
        title: 'Demo Video 1',
        description: 'First preview video for evaluation',
        url: '/videos/demo1.mp4',
        thumbnail: '/thumbnails/thumb1.jpg',
        duration: '2:45',
        uploadDate: '2024-01-15',
        likes: 24,
        comments: 8
      },
      {
        id: 2,
        title: 'Demo Video 2',
        description: 'Second preview with enhanced features',
        url: '/videos/demo2.mp4',
        thumbnail: '/thumbnails/thumb2.jpg',
        duration: '3:20',
        uploadDate: '2024-01-16',
        likes: 18,
        comments: 5
      },
      // Thêm video khác...
    ];
    
    setVideos(sampleVideos);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"></div>
            <h1 className="text-xl font-bold text-white">VideoPreview</h1>
            <span className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded">
              BETA
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white text-sm">
              Submit Feedback
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Main Video Player */}
        {selectedVideo ? (
          <div className="mb-8">
            <VideoPlayer video={selectedVideo} />
          </div>
        ) : (
          <div className="mb-8 bg-gray-800/50 rounded-xl p-8 text-center border border-dashed border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              Welcome to Private Preview
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select a video below to start playback. This is a private preview for evaluation only.
              Please test all features and provide feedback.
            </p>
          </div>
        )}

        {/* Video Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Preview Videos
          </h2>
          <VideoGrid 
            videos={videos} 
            onSelectVideo={setSelectedVideo}
          />
        </div>

        {/* Feedback Section */}
        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">
            📝 Evaluation Feedback
          </h3>
          <textarea
            className="w-full h-32 bg-black/30 border border-gray-600 rounded-lg p-4 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Please provide your feedback on the site: design, functionality, video playback, suggestions..."
          />
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:opacity-90 transition">
            Submit Feedback
          </button>
        </div>
      </main>
    </div>
  );
}