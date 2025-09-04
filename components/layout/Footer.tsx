'use client';

import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Portfolio
            </h3>
            <p className="text-gray-400">
              Développeur Web & Étudiant à l&apos;EEMI Lyon
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <span>© {currentYear} Portfolio</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;