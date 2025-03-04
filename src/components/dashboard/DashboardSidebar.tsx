import { useRouter } from 'next/router';

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  closeSidebar: () => void;
}

export default function DashboardSidebar({ activeTab, setActiveTab, closeSidebar }: DashboardSidebarProps) {
  const router = useRouter();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    closeSidebar();
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/auth/login');
  };

  const menuItems = [
    { id: 'home', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'orders', label: 'Orders', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { id: 'address', label: 'Address', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
    { id: 'settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];

  return (
    <div className="bg-white h-full w-64 p-4 shadow-lg">
      <div className="flex flex-col h-full">
        <div className="space-y-4 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`w-full flex items-center  px-4 py-3 rounded-e-lg transition-all duration-300 transform  relative overflow-hidden group
                ${activeTab === item.id 
                  ? 'bg-red-50 text-button-red' 
                  : 'text-text-secondary hover:bg-bg-light'
                }
              `}
            >
              {/* Shine effect overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-background-shine opacity-20"></div>
              
              {/* Active indicator */}
              <div className={`absolute left-0 top-0 h-full w-1 bg-button-red transform transition-transform duration-300 
                ${activeTab === item.id ? 'scale-y-100' : 'scale-y-0'}`}
              ></div>

              {/* Icon */}
              <div className={`transform transition-transform duration-300 ${activeTab === item.id ? 'scale-110' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className={`w-5 h-5 transition-colors duration-300 ${activeTab === item.id ? 'text-button-red' : 'text-gray-400'}`} 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor">
                  <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={item.icon} />
                </svg>
              </div>

              {/* Label */}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>
        
        {/* Logout button with similar effects */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-bg-light transition-all duration-300 transform hover:translate-x-1 relative overflow-hidden group"
        >
          {/* Shine effect overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-background-shine opacity-20"></div>
          
          <svg xmlns="http://www.w3.org/2000/svg" 
               className="w-5 h-5 text-gray-400 group-hover:text-button-red transition-colors duration-300" 
               fill="none" 
               viewBox="0 0 24 24" 
               stroke="currentColor">
            <path strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          <span className="relative z-10">Logout</span>
        </button>
      </div>
    </div>
  );
}
