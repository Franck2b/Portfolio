'use client';

import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-8 sm:px-12 lg:px-28 py-20">
      <div className="max-w-8xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="block">Bonjour, je suis</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Franck Poletti
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium">
                  Développeur Web & Étudiant à l&apos;EEMI Lyon
                </p>
              </div>

              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl">
                Passionné par le développement web, j&apos;accompagne entreprises et projets personnels 
                dans la création de solutions digitales modernes. Spécialisé en React, Next.js, TypeScript et Wordpress.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                <Button
                  onClick={scrollToProjects}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Voir mes projets
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-4 text-lg rounded-xl font-medium transition-all duration-300"
                >
                  <a
                    href="/CV.pdf"
                    download
                    className="flex items-center"
                  >
                    <Download className="mr-3 h-6 w-6" />
                    Télécharger CV
                  </a>
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-8 pt-6">
                <a
                  href="https://github.com/Franck2b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 transform hover:scale-110"
                >
                  <Github className="h-8 w-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/franck-poletti-443a1b266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a
                  href="mailto:franck.poletti@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 transform hover:scale-110"
                >
                  <Mail className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-3 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/images/profile-pic (3).png"
                    alt="Photo de profil"
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
    </section>
  );
};

export default Hero;