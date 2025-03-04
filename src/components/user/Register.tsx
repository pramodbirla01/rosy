import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/auth/login');
  };

  return (
    <div className="relative w-full max-w-md mx-4">
      <div className="bg-bg-primary p-8 rounded-lg shadow-lg relative animate-slide-up">
        <h2 className="text-3xl font-bold mb-6 text-text-primary">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-text-secondary text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
              required
            />
          </div>
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-button-red transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium bg-bg-primary text-button-dark uppercase border border-button-dark rounded-full relative overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-bg-primary transition-colors duration-300">
              Create Account
            </span>
            <span className="absolute inset-0 bg-button-red transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <Link href="/auth/login" 
                className="text-text-secondary hover:text-button-red transition-colors">
            Already have an account? <span className="font-medium">Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
