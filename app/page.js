'use clien';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import VideoPlayer from '@/components/VideoPlayer';
import VideoGrid from '@/components/VideoGrid';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [isInviteMode, setIsInviteMode] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) = {
    e.preventDefault();
    
     Danh sách email được phép (chỉ bạn và bạn bè)
    const allowedEmails = [
      'your-email@gmail.com',
      'friend1@gmail.com',
      'friend2@gmail.com'
    ];
    
    if (!allowedEmails.includes(email)  password !== 'your-temp-password') {
      alert('Access denied. Please request an invite.');
      return;
    }
    
     Lưu session đơn giản
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', email);
    
    router.push('dashboard');
  };

  const handleInvite = async (e) = {
    e.preventDefault();
    
    const response = await fetch('apiinvite', {
      method 'POST',
      headers { 'Content-Type' 'applicationjson' },
      body JSON.stringify({ code inviteCode })
    });
    
    if (response.ok) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('dashboard');
    } else {
      alert('Invalid invite code');
    }
  };

  return (
    div className=min-h-screen bg-gradient-to-br from-purple-900 to-black flex items-center justify-center p-4
      div className=bg-white10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full border border-white20
        h1 className=text-3xl font-bold text-white text-center mb-2
          🎬 Private Preview
        h1
        p className=text-gray-300 text-center mb-8
          Invite-only access for evaluation
        p
        
        {!isInviteMode  (
          form onSubmit={handleLogin} className=space-y-6
            div
              label className=block text-sm font-medium text-gray-300 mb-2
                Email
              label
              input
                type=email
                value={email}
                onChange={(e) = setEmail(e.target.value)}
                className=w-full px-4 py-3 bg-black30 border border-gray-600 rounded-lg text-white focusring-2 focusring-purple-500 focusborder-transparent
                placeholder=your-email@gmail.com
                required
              
            div
            
            div
              label className=block text-sm font-medium text-gray-300 mb-2
                Password
              label
              input
                type=password
                value={password}
                onChange={(e) = setPassword(e.target.value)}
                className=w-full px-4 py-3 bg-black30 border border-gray-600 rounded-lg text-white focusring-2 focusring-purple-500 focusborder-transparent
                placeholder=••••••••
                required
              
            div
            
            button
              type=submit
              className=w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hoveropacity-90 transition
            
              Access Private Preview
            button
            
            div className=text-center
              button
                type=button
                onClick={() = setIsInviteMode(true)}
                className=text-purple-300 hovertext-white text-sm
              
                Have an invite code Click here
              button
            div
          form
        )  (
          form onSubmit={handleInvite} className=space-y-6
            div
              label className=block text-sm font-medium text-gray-300 mb-2
                Invite Code
              label
              input
                type=text
                value={inviteCode}
                onChange={(e) = setInviteCode(e.target.value)}
                className=w-full px-4 py-3 bg-black30 border border-gray-600 rounded-lg text-white focusring-2 focusring-purple-500 focusborder-transparent
                placeholder=Enter invite code
                required
              
            div
            
            button
              type=submit
              className=w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hoveropacity-90 transition
            
              Join with Invite Code
            button
            
            div className=text-center
              button
                type=button
                onClick={() = setIsInviteMode(false)}
                className=text-gray-300 hovertext-white text-sm
              
                Back to login
              button
            div
          form
        )}
        
        div className=mt-8 p-4 bg-black20 rounded-lg
          h3 className=font-semibold text-white mb-2📋 Evaluation Notesh3
          ul className=text-gray-300 text-sm space-y-1
            li• Site is currently in private betali
            li• Please test all features thoroughlyli
            li• Feedback can be submitted via emailli
            li• Public launch TBDli
          ul
        div
      div
    div
  );
}