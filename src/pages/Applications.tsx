import AppShowcase from '../components/AppShowcase';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';
import { typography } from '../styles/typography';

const Applications = () => {
  return (
    <main className="min-h-screen text-[#00F3FF] relative bg-black">
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: '0.3'
        }}
      />
      
      <div className="relative z-20">
        <div className="flex flex-col mt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h1 className={`${typography.h1} mb-2 bg-gradient-to-r from-[#00F3FF] via-[#6F00FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x text-center`}>
              Web Applications
            </h1>
            
            {/* Blur overlay with Coming Soon text */}
            <div className="backdrop-blur-xl bg-black/40 rounded-xl flex items-center justify-center py-8">
              <div className="text-center space-y-2">
                <h2 className="text-6xl font-bold bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
                  Coming Soon
                </h2>
                <p className="text-xl bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
                  We're working on something amazing!
                </p>
              </div>
            </div>
            
            <div className="filter blur-lg">
              <AppShowcase />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Applications;
