import { useRouter } from 'next/router';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

export default function DashboardComponent() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-grow bg-bg-primary p-8 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-button-red text-white px-4 py-2 rounded hover:bg-opacity-90"
            >
              Logout
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
            <p className="text-text-secondary">
              You are now logged in with test credentials.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
