'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [isInviteMode, setIsInviteMode] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const allowedEmails = [
      'your-email@gmail.com',
      'friend1@gmail.com',
      'friend2@gmail.com'
    ];
    
    if (!allowedEmails.includes(email) || password !== 'your-temp-password') {
      alert('Access denied. Please request an invite.');
      return;
    }
    
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', email);
    
    router.push('/dashboard');
  };

  const handleInvite = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/invite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: inviteCode })
    });
    
    if (response.ok) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/dashboard');
    } else {
      alert('Invalid invite code');
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Private Video Preview</h1>
      
      {!isInviteMode ? (
        <form onSubmit={handleLogin}>
          <div>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '10px', margin: '10px' }}
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '10px', margin: '10px' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px', margin: '10px' }}>
            Login
          </button>
          <div>
            <button 
              type="button" 
              onClick={() => setIsInviteMode(true)}
              style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
            >
              Have an invite code?
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleInvite}>
          <div>
            <input 
              type="text" 
              placeholder="Invite Code" 
              value={inviteCode} 
              onChange={(e) => setInviteCode(e.target.value)}
              style={{ padding: '10px', margin: '10px' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px', margin: '10px' }}>
            Join with Invite
          </button>
          <div>
            <button 
              type="button" 
              onClick={() => setIsInviteMode(false)}
              style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
            >
              Back to login
            </button>
          </div>
        </form>
      )}
    </div>
  );
}