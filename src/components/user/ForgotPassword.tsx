import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ForgotPassword() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate password reset email
    setSuccess('Password reset link has been sent to your email.');
    setTimeout(() => {
      router.push('/auth/login');
    }, 3000);
  };

  return (
    <div className="relative w-full max-w-md mx-4">
      <div className="bg-bg-primary p-8 rounded-lg shadow-lg relative animate-slide-up">
        <h2 className="text-3xl font-bold mb-6 text-text-primary">Reset Password</h2>
        <p className="text-text-secondary mb-6">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
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
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium bg-bg-primary text-button-dark uppercase border border-button-dark rounded-full relative overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-bg-primary transition-colors duration-300">
              Reset Password
            </span>
            <span className="absolute inset-0 bg-button-red transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <Link href="/auth/login" 
                className="text-text-secondary hover:text-button-red transition-colors">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
