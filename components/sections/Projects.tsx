'use client';

import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projectsData } from '@/data/projects';

type ProjectCategory = 'all' | 'professional' | 'personal' | 'academic';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const categories = [
    { id: 'all' as ProjectCategory, label: 'Tous les projets' },
    { id: 'professional' as ProjectCategory, label: 'Projets professionnels' },
    { id: 'personal' as ProjectCategory, label: 'Projets personnels' },
    { id: 'academic' as ProjectCategory, label: 'Projets scolaires' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations, allant des projets professionnels 
            aux travaux académiques, témoignant de ma polyvalence technique.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 mr-4">
            <Filter className="h-4 w-4" />
            <span>Filtrer :</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-blue-600 hover:border-blue-600'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-contain bg-gray-50 group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-gray-500 text-lg font-medium">Image du projet</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.githubUrl && (
                      <Button size="sm" variant="secondary" className="bg-white/90 text-gray-900 hover:bg-white" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" variant="secondary" className="bg-white/90 text-gray-900 hover:bg-white" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant="secondary"
                    className={`text-xs font-medium ${
                      project.category === 'professional' ? 'bg-green-100 text-green-800' :
                      project.category === 'personal' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {project.category === 'professional' ? 'Pro' : 
                     project.category === 'personal' ? 'Perso' : 'École'}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;