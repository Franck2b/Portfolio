'use client';

import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col justify-center py-16 lg:py-20">
          
          {/* Photo de profil - Mobile en premier */}
          <div className="flex justify-center mb-8 lg:hidden">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-2 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/images/profile-pic (3).png"
                    alt="Photo de profil de Franck Poletti"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Éléments décoratifs réduits sur mobile */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-lg opacity-40 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Texte */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              
              {/* Titre principal */}
              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="block mb-2">Bonjour, je suis</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Franck Poletti
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium">
                  Développeur Web & Étudiant à l&apos;EEMI Lyon
                </p>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Passionné par le développement web, j&apos;accompagne entreprises et projets personnels 
                dans la création de solutions digitales modernes. Spécialisé en React, Next.js, TypeScript et WordPress.
              </p>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start pt-2 lg:pt-4">
                <Button
                  onClick={scrollToProjects}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  Voir mes projets
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-xl font-medium transition-all duration-300 w-full sm:w-auto"
                  asChild
                >
                  <a href="/CV.pdf" download className="flex items-center justify-center">
                    <Download className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                    Télécharger CV
                  </a>
                </Button>
              </div>

              {/* Liens sociaux */}
              <div className="flex justify-center lg:justify-start space-x-6 lg:space-x-8 pt-4 lg:pt-6">
                <a
                  href="https://github.com/Franck2b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-7 w-7 sm:h-8 sm:w-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/franck-poletti-443a1b266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-7 w-7 sm:h-8 sm:w-8" />
                </a>
                <a
                  href="mailto:franck.poletti@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="h-7 w-7 sm:h-8 sm:w-8" />
                </a>
              </div>
            </div>

            {/* Photo de profil - Desktop */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-3 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <img
                      src="/images/profile-pic (3).png"
                      alt="Photo de profil de Franck Poletti"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;