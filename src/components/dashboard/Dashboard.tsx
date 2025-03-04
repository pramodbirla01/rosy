import { useState } from 'react';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import DashboardSidebar from './DashboardSidebar';
import DashboardHome from './Dashboardhome';
import DashboardOrders from './DashboardOrders';
import DashboardAddress from './DashboardAddress';
import DashboardSettings from './DashboardSettings';

export default function DashboardComponent() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return <DashboardHome />;
      case 'orders':
        return <DashboardOrders />;
      case 'address':
        return <DashboardAddress />;
      case 'settings':
        return <DashboardSettings />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-light flex flex-col relative">
      <Nav />
      <div className="flex-grow flex mt-32 md:mt-24 relative">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden fixed top-24 right-10 z-[60] p-2 bg-white rounded-md shadow-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Sidebar */}
        <div className={`fixed top-0 md:static inset-0 z-[70] transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
          <DashboardSidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            closeSidebar={() => setIsSidebarOpen(false)}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 bg-bg-light relative">
          {renderContent()}
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[65] md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
