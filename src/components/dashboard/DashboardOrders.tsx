interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: OrderItem[];
  tracking?: string;
}

const orders: Order[] = [
  {
    id: "ORD-2401",
    date: "2024-01-20",
    status: "Delivered",
    total: 156.99,
    items: [
      { id: 1, name: "Classic White T-Shirt", quantity: 2, price: 29.99, image: "/images/products/tshirt.jpg" },
      { id: 2, name: "Denim Jeans", quantity: 1, price: 97.01, image: "/images/products/jeans.jpg" }
    ],
    tracking: "DHL-123456789"
  },
  {
    id: "ORD-2402",
    date: "2024-01-18",
    status: "Processing",
    total: 89.99,
    items: [
      { id: 3, name: "Summer Dress", quantity: 1, price: 89.99, image: "/images/products/dress.jpg" }
    ]
  },
  {
    id: "ORD-2403",
    date: "2024-01-15",
    status: "Cancelled",
    total: 45.99,
    items: [
      { id: 4, name: "Casual Shirt", quantity: 1, price: 45.99, image: "/images/products/shirt.jpg" }
    ]
  }
];

const DashboardOrders = () => {
  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-text-primary">My Orders</h2>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} 
               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {/* Order Header */}
            <div className="p-6 border-b border-border-light">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="space-y-1">
                  <h3 className="font-semibold text-text-primary">Order {order.id}</h3>
                  <p className="text-sm text-text-light">
                    Placed on {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg font-bold text-button-red">
                    ${order.total.toFixed(2)}
                  </p>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="p-6">
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between hover:bg-bg-light p-2 rounded-lg transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-bg-light rounded-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">{item.name}</p>
                        <p className="text-sm text-text-light">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium text-text-primary">${item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Tracking Info */}
              {order.tracking && (
                <div className="mt-6 pt-6 border-t border-border-light">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Tracking Number:</span>
                    <span className="font-medium text-button-red">{order.tracking}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOrders;
