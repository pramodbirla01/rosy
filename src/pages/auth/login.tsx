import Login from '@/components/user/Login';
import Nav from '@/components/nav/Nav';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      router.push('/dashboard');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 bg-bg-light">
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'url("/images/pattern-light.jpg")',
               backgroundSize: '200px',
               backgroundRepeat: 'repeat',
               opacity: '0.3'
             }}>
        </div>
      </div>
      <Nav />
      <div className="flex-1 flex items-center justify-center pt-32 pb-20 relative z-10">
        <Login />
      </div>
      
    </div>
  );
}
