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
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-primary">My Addresses</h2>
        <button className="px-4 py-2 bg-button-red text-white rounded-lg hover:bg-opacity-90 transition-colors">
          Add New Address
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div key={address.id} className="bg-white rounded-xl shadow-md p-6 relative">
            {address.isDefault && (
              <span className="absolute top-4 right-4 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Default
              </span>
            )}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-text-primary">{address.type}</h3>
                <p className="text-text-secondary mt-1">{address.name}</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-text-secondary hover:text-button-red">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button className="text-text-secondary hover:text-button-red">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-y-2 text-text-secondary">
              <p>{address.address}</p>
              <p>{`${address.city}, ${address.state} ${address.zip}`}</p>
              <p>{address.phone}</p>
            </div>
            {!address.isDefault && (
              <button className="mt-4 text-button-red hover:text-opacity-80 text-sm">
                Set as Default
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
