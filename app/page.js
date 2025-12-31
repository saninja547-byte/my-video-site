// app/page.js - TikTok Style Login
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaLock, FaEnvelope, FaTicketAlt, FaArrowRight, FaSparkles } from 'react-icons/fa';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [isInviteMode, setIsInviteMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const allowedEmails = [
      'your-email@gmail.com',
      'friend1@gmail.com',
      'friend2@gmail.com'
    ];
    
    if (!allowedEmails.includes(email) || password !== 'your-temp-password') {
      alert('🔒 Access denied. Please request an invite.');
      setIsLoading(false);
      return;
    }
    
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', email);
    
    router.push('/dashboard');
  };

  const handleInvite = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const validCodes = ['FRIEND123', 'BETA456', 'PREVIEW789', 'EVAL2024'];
    
    if (validCodes.includes(inviteCode.toUpperCase())) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/dashboard');
    } else {
      alert('❌ Invalid invite code');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-cyan-400 flex items-center justify-center neon-glow">
              <span className="text-2xl">🎬</span>
            </div>
            <h1 className="text-4xl font-bold gradient-text">VideoWave</h1>
          </div>
          <p className="text-gray-300 text-sm">
            <span className="inline-flex items-center gap-1">
              <FaSparkles className="text-yellow-400" />
              Exclusive Beta Access
              <FaSparkles className="text-yellow-400" />
            </span>
          </p>
          <div className="mt-2 px-4 py-1.5 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full inline-block border border-pink-500/30">
            <span className="text-xs font-semibold text-pink-300">INVITE-ONLY PREVIEW</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 shadow-2xl">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-gray-900 rounded-full p-1">
              <button
                onClick={() => setIsInviteMode(false)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${!isInviteMode 
                  ? 'bg-gradient-to-r from-pink-600 to-cyan-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'}`}
              >
                <span className="flex items-center gap-2">
                  <FaLock /> Login
                </span>
              </button>
              <button
                onClick={() => setIsInviteMode(true)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${isInviteMode 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'}`}
              >
                <span className="flex items-center gap-2">
                  <FaTicketAlt /> Invite Code
                </span>
              </button>
            </div>
          </div>

          {!isInviteMode ? (
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-pink-400">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400">
                    <FaLock />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all"
                    placeholder="Enter password"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-pink-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Authenticating...
                  </>
                ) : (
                  <>
                    Access Private Dashboard
                    <FaArrowRight />
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleInvite} className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
                  <FaTicketAlt />
                </div>
                <h3 className="text-xl font-bold text-white">Enter Invite Code</h3>
                <p className="text-gray-400 text-sm mt-2">Enter the exclusive code you received</p>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                  className="w-full px-6 py-4 text-center bg-gray-900/50 border-2 border-dashed border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all text-lg tracking-widest"
                  placeholder="FRIEND123"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                {isLoading ? 'Verifying...' : 'Join with Invite'}
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-gray-900/50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-xs text-gray-400">Videos</div>
              </div>
              <div className="p-3 bg-gray-900/50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-xs text-gray-400">Access</div>
              </div>
              <div className="p-3 bg-gray-900/50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">HD</div>
                <div className="text-xs text-gray-400">Quality</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Need help? <a href="#" className="text-cyan-400 hover:text-cyan-300 transition">Contact Support</a>
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <div className="w-2 h-2 rounded-full bg-pink-500 pulse"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-500 pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}