import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    if (email === 'test@gmail.com' && password === 'test') {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-bg-light flex items-center justify-center relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0" 
             style={{ backgroundImage: 'url("/images/pattern-light.jpg")', 
                     backgroundRepeat: 'repeat' }}>
        </div>
      </div>

      <div className="bg-bg-primary p-8 rounded-lg shadow-lg w-96 relative animate-slide-up">
        <h2 className="text-3xl font-bold mb-6 text-text-primary">Welcome Back</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-text-secondary text-sm">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-text-secondary text-sm">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium bg-bg-primary text-button-dark uppercase border border-button-dark rounded-full relative overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-bg-primary transition-colors duration-300">
              Sign In
            </span>
            <span className="absolute inset-0 bg-button-red transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </button>
        </form>
        
        <div className="mt-6 text-center space-y-2">
          <Link href="/auth/forgot-password" 
                className="block text-button-red hover:text-text-primary transition-colors">
            Forgot Password?
          </Link>
          <Link href="/auth/register" 
                className="block text-text-secondary hover:text-button-red transition-colors">
            Don't have an account? <span className="font-medium">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
