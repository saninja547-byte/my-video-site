'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [isInviteMode, setIsInviteMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      const testEmail = 'admin@test.com';
      const testPassword = '123456';
      
      if (email === testEmail && password === testPassword) {
        localStorage.setItem('isAuthenticated', 'true');
        alert('✅ Login successful!');
        router.push('/dashboard');
      } else {
        alert('❌ Login failed!\n\nUse:\nEmail: admin@test.com\nPassword: 123456');
        setIsLoading(false);
      }
    }, 800);
  };

  const handleInvite = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const validCodes = ['FRIEND123', 'BETA456', 'PREVIEW789', 'EVAL2024'];
      
      if (validCodes.includes(inviteCode.toUpperCase())) {
        localStorage.setItem('isAuthenticated', 'true');
        router.push('/dashboard');
      } else {
        alert('❌ Invalid invite code!');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-600 to-cyan-500 flex items-center justify-center text-3xl animate-pulse">
            🎬
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
            VideoWave
          </h1>
          <p className="text-gray-300 mt-2 text-sm">Exclusive Beta Preview</p>
          <div className="mt-3 inline-block px-4 py-1 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full border border-pink-500/30">
            <span className="text-xs font-semibold text-pink-300">INVITE-ONLY</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 shadow-2xl">
          {/* Tabs */}
          <div className="flex mb-8 bg-gray-900 rounded-full p-1">
            <button
              onClick={() => setIsInviteMode(false)}
              className={`flex-1 py-3 rounded-full font-medium transition-all ${!isInviteMode 
                ? 'bg-gradient-to-r from-pink-600 to-cyan-500 text-white' 
                : 'text-gray-400 hover:text-white'}`}
            >
              🔐 Login
            </button>
            <button
              onClick={() => setIsInviteMode(true)}
              className={`flex-1 py-3 rounded-full font-medium transition-all ${isInviteMode 
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' 
                : 'text-gray-400 hover:text-white'}`}
            >
              🎫 Invite Code
            </button>
          </div>

          {!isInviteMode ? (
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all"
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all"
                    placeholder="Enter password"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-pink-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Logging in...
                  </>
                ) : (
                  '🚀 Access Dashboard'
                )}
              </button>
              
              <div className="text-center text-sm text-gray-400">
                <p>Test account:</p>
                <p className="font-mono">admin@test.com / 123456</p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleInvite} className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
                  🎫
                </div>
                <h3 className="text-xl font-bold text-white">Enter Invite Code</h3>
                <p className="text-gray-400 text-sm mt-2">Enter the exclusive code you received</p>
              </div>

              <div>
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
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                {isLoading ? 'Verifying...' : 'Join with Invite'}
              </button>
              
              <div className="text-center text-sm text-gray-400">
                <p>Test invite codes:</p>
                <p className="font-mono">FRIEND123, BETA456, PREVIEW789</p>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Need help? <span className="text-cyan-400 cursor-pointer">Contact Support</span></p>
        </div>
      </div>
    </div>
  );
}