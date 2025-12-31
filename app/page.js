// app/page.js - Đơn giản nhưng đẹp
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-500 to-cyan-400 flex items-center justify-center text-3xl shadow-lg animate-pulse">
            🎬
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-transparent">
            VideoWave
          </h1>
          <p className="text-gray-300 mt-2">Private Beta Access</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            🔓 Access Dashboard
          </button>
        </form>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-white/5 rounded-lg">
            <div className="text-xl font-bold text-pink-400">50+</div>
            <div className="text-xs text-gray-400">Videos</div>
          </div>
          <div className="p-3 bg-white/5 rounded-lg">
            <div className="text-xl font-bold text-cyan-400">HD</div>
            <div className="text-xs text-gray-400">Quality</div>
          </div>
          <div className="p-3 bg-white/5 rounded-lg">
            <div className="text-xl font-bold text-purple-400">24/7</div>
            <div className="text-xs text-gray-400">Access</div>
          </div>
        </div>
      </div>
    </div>
  );
}