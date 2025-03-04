import { useState } from 'react';
import DashAddForm from './DashAddForm';

const addresses = [
  {
    id: 1,
    type: "Home",
    name: "John Doe",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zip: "10001",
    phone: "(555) 123-4567",
    isDefault: true
  },
  {
    id: 2,
    type: "Office",
    name: "John Doe",
    address: "456 Business Ave",
    city: "New York",
    state: "NY",
    zip: "10002",
    phone: "(555) 987-6543",
    isDefault: false
  }
];

export default function DashboardAddress() {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const handleAddAddress = (data: any) => {
    // Handle new address data
    console.log('New address:', data);
    setIsAddFormOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-primary">My Addresses</h2>
        <button 
          onClick={() => setIsAddFormOpen(true)}
          className="px-6 py-3 text-sm font-medium bg-bg-primary text-button-dark uppercase border border-button-dark rounded-full relative overflow-hidden group"
        >
          <span className="relative z-10 group-hover:text-bg-primary transition-colors duration-300">
            Add New Address
          </span>
          <span className="absolute inset-0 bg-button-red transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div key={address.id} 
               className="bg-white rounded-xl shadow-md p-6 relative group hover:shadow-lg transition-all duration-300 border border-transparent hover:border-button-red">
            {/* Default Badge */}
            {address.isDefault && (
              <span className="absolute bottom-4 right-4 px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Default
              </span>
            )}
            
            {/* Actions Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="p-2 text-text-secondary hover:text-button-red hover:bg-red-50 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button className="p-2 text-text-secondary hover:text-button-red hover:bg-red-50 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>

            {/* Address Content */}
            <div className="pr-20"> {/* Added right padding to prevent overlap */}
              <div className="mb-4">
                <h3 className="font-semibold text-text-primary">{address.type}</h3>
                <p className="text-text-secondary mt-1">{address.name}</p>
              </div>
              <div className="space-y-2 text-text-secondary">
                <p>{address.address}</p>
                <p>{`${address.city}, ${address.state} ${address.zip}`}</p>
                <p>{address.phone}</p>
              </div>
            </div>

            {/* Set Default Button */}
            {!address.isDefault && (
              <button className="mt-4 px-4 py-2 text-sm font-medium bg-bg-primary text-button-dark border border-button-dark rounded-full relative overflow-hidden group">
                <span className="relative z-10 group-hover:text-bg-primary transition-colors duration-300">
                  Set as Default
                </span>
                <span className="absolute inset-0 bg-button-red transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            )}
          </div>
        ))}
      </div>

      <DashAddForm 
        isOpen={isAddFormOpen}
        onClose={() => setIsAddFormOpen(false)}
        onSubmit={handleAddAddress}
      />
    </div>
  );
}
