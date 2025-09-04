'use client';

import { Code, Database, Wrench, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { skillsData, Skill } from '@/data/skills';

const Skills = () => {
  const categoryIcons = {
    languages: Code,
    frameworks: Globe,
    databases: Database,
    tools: Wrench,
  };

  const categoryLabels = {
    languages: 'Langages',
    frameworks: 'Frameworks & Librairies',
    databases: 'Bases de données',
    tools: 'Outils & Environnements',
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Compétences Techniques
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un aperçu de mes compétences techniques organisées par domaine, 
            avec une expertise particulière en développement web moderne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
            const label = categoryLabels[category as keyof typeof categoryLabels];
            
            return (
              <Card key={category} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {label}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {skills.map((skill: Skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900 text-sm">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-200"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;