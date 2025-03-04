import Image from 'next/image';

const userData = {
  profile: {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "/images/avatar-placeholder.png",
    memberSince: "January 2024"
  },
  stats: [
    { id: 1, title: "Total Orders", value: "24", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
    { id: 2, title: "Total Spent", value: "$2,156", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: 3, title: "Wishlist", value: "12", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { id: 4, title: "Active Orders", value: "3", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" }
  ],
  recentActivity: [
    { id: 1, type: "order", status: "delivered", amount: 156.99, date: "2024-01-20" },
    { id: 2, type: "order", status: "processing", amount: 99.99, date: "2024-01-18" },
    { id: 3, type: "wishlist", item: "Leather Jacket", date: "2024-01-15" }
  ]
};

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Profile Section */}
      <div className="bg-white rounded-xl shadow-md p-6 animate-slide-up">
        <div className="flex items-center space-x-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-bg-light">
            <Image
              src={userData.profile.avatar}
              alt={userData.profile.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">{userData.profile.name}</h2>
            <p className="text-text-secondary">{userData.profile.email}</p>
            <p className="text-sm text-text-light mt-1">Member since {userData.profile.memberSince}</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userData.stats.map((stat) => (
          <div key={stat.id} 
               className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <span className="text-text-secondary group-hover:text-button-red transition-colors">
                {stat.title}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="h-6 w-6 text-button-red" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor">
                <path strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d={stat.icon} />
              </svg>
            </div>
            <p className="text-3xl font-bold text-text-primary group-hover:text-button-red transition-colors">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6 text-text-primary">Recent Activity</h3>
        <div className="space-y-4">
          {userData.recentActivity.map((activity) => (
            <div key={activity.id} 
                 className="flex items-center justify-between p-4 hover:bg-bg-light rounded-lg transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-bg-light flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                       className="h-5 w-5 text-button-red" 
                       fill="none" 
                       viewBox="0 0 24 24" 
                       stroke="currentColor">
                    <path strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d={activity.type === 'order' 
                              ? "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              : "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"} />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-text-primary">
                    {activity.type === 'order' ? `Order #${activity.id}` : activity.item}
                  </p>
                  <p className="text-sm text-text-light">
                    {new Date(activity.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              {activity.type === 'order' && (
                <div className="text-right">
                  <p className="font-medium text-button-red">${activity.amount}</p>
                  <span className={`text-sm ${
                    activity.status === 'delivered' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
