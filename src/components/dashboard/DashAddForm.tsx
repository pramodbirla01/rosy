interface AddressFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export default function DashAddForm({ isOpen, onClose, onSubmit }: AddressFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onSubmit(e);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed -top-10 inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg mx-4 relative animate-slide-up max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-text-secondary hover:text-button-red"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <form onSubmit={handleSubmit} className="p-6">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Add New Address</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-text-secondary text-sm mb-1">Address Type</label>
                <select className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors">
                  <option value="home">Home</option>
                  <option value="office">Office</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-text-secondary text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-text-secondary text-sm mb-1">Street Address</label>
              <input
                type="text"
                className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-text-secondary text-sm mb-1">City</label>
                <input
                  type="text"
                  className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-text-secondary text-sm mb-1">State</label>
                <input
                  type="text"
                  className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-text-secondary text-sm mb-1">ZIP Code</label>
                <input
                  type="text"
                  className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-text-secondary text-sm mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:border-button-red transition-colors"
                  required
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="setDefault"
                className="rounded border-border-light text-button-red focus:ring-button-red"
              />
              <label htmlFor="setDefault" className="ml-2 text-text-secondary">
                Set as default address
              </label>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full px-6 py-3 text-sm font-medium border border-border-light rounded-full hover:bg-bg-light transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium bg-bg-primary text-button-dark uppercase border border-button-dark rounded-full relative overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-bg-primary transition-colors duration-300">
                Save Address
              </span>
              <span className="absolute inset-0 bg-button-red transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
