import ForgotPassword from '@/components/user/ForgotPassword';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 bg-bg-light">
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'url("/images/pattern-light.jpg")',
               backgroundSize: '200px',
               backgroundRepeat: 'repeat',
               opacity: '0.3'
             }}>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center relative z-10">
        <ForgotPassword />
      </div>
    </div>
  );
}
