import { useState } from 'react';

export default function DashboardSettings() {
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password change logic
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-text-primary mb-6">Account Settings</h2>

      <div className="bg-white rounded-xl shadow-md p-8">
        <h3 className="text-xl font-semibold text-text-primary mb-8">Change Password</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-text-secondary text-sm">Current Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
                value={passwordForm.currentPassword}
                onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-text-secondary text-sm">New Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
                value={passwordForm.newPassword}
                onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-text-secondary text-sm">Confirm New Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
                value={passwordForm.confirmPassword}
                onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
              />
            </div>
          </div>

          <div className="mt-3 px-4 py-3 bg-bg-light rounded-lg border border-border-light">
            <p className="text-sm text-text-secondary flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-button-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Minimum 8 characters required
            </p>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium bg-bg-primary text-button-dark uppercase border border-button-dark rounded-full relative overflow-hidden group mt-8"
          >
            <span className="relative z-10 group-hover:text-bg-primary transition-colors duration-300">
              Update Password
            </span>
            <span className="absolute inset-0 bg-button-red transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </button>
        </form>
      </div>
    </div>
  );
}
