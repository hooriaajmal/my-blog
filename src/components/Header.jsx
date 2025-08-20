import React from 'react';

const Header = ({ filteredPostsLength }) => {
  return (
    <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-gray-400/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 left-1/3 w-16 h-16 bg-white/8 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-gray-300/10 rounded-full animate-ping animation-delay-1000"></div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-600 to-transparent rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-500 to-transparent rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text">
                My Personal Blog
              </span>
            </h1>
            <p className="text-base text-gray-300 font-medium max-w-md leading-relaxed">
              Sharing thoughts on technology, travel, and food
            </p>
          </div>
          
          <div className="flex items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-400 via-white to-gray-500 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 animate-spin-slow opacity-30"></div>
              <div className="relative bg-black/40 backdrop-blur-lg rounded-full px-6 py-3 border border-gray-600/50 shadow-2xl group-hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-gray-200 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-white font-bold text-xl tracking-wide">
                    {filteredPostsLength}
                  </span>
                  <span className="text-gray-300 font-medium text-base">
                    posts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </header>
  );
};

export default Header;