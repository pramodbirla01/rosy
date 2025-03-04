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
    <div className="max-w-2xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold text-text-primary">Account Settings</h2>

      {/* Password Change Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6 text-text-primary">Change Password</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-text-secondary">Current Password</label>
            <input
              type="password"
              className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
              value={passwordForm.currentPassword}
              onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-text-secondary">New Password</label>
            <input
              type="password"
              className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
              value={passwordForm.newPassword}
              onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-text-secondary">Confirm New Password</label>
            <input
              type="password"
              className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
              value={passwordForm.confirmPassword}
              onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-button-red text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* Email Preferences */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6 text-text-primary">Email Preferences</h3>
        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-button-red rounded border-border-light" />
            <span className="text-text-secondary">Order updates</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-button-red rounded border-border-light" />
            <span className="text-text-secondary">Newsletters</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-button-red rounded border-border-light" />
            <span className="text-text-secondary">Promotional emails</span>
          </label>
        </div>
      </div>
    </div>
  );
}
