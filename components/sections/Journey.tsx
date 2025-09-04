'use client';

import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { timelineData, TimelineItem } from '@/data/timeline';

const Journey = () => {
  return (
    <section id="journey" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mon Parcours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une timeline de mon évolution professionnelle et académique, 
            où formation et expérience se complètent pour construire mon expertise.
          </p>
        </div>

        <div className="relative px-8">
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className="relative flex items-start"
              >
                {/* Timeline Line - Conditionnelle selon le type */}
                <div className={`absolute w-0.5 z-0 ${
                  item.type === 'education' 
                    ? 'right-6 bg-gradient-to-b from-green-500 to-emerald-600' 
                    : 'left-6 bg-gradient-to-b from-blue-600 to-indigo-600'
                } ${
                  index === 0 ? 'top-0' : '-top-4'
                } ${
                  index === timelineData.length - 1 ? 'bottom-0' : '-bottom-4'
                }`}></div>

                {/* Timeline Dot */}
                <div className={`absolute w-5 h-5 rounded-full flex items-center justify-center z-10 transform -translate-x-1/2 ${
                  item.type === 'education' 
                    ? 'right-6 translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600' 
                    : 'left-6 bg-gradient-to-r from-blue-600 to-indigo-600'
                }`}>
                  {item.type === 'education' ? (
                    <GraduationCap className="h-2.5 w-2.5 text-white" />
                  ) : (
                    <Briefcase className="h-2.5 w-2.5 text-white" />
                  )}
                </div>

                <div className={`max-w-4xl ${
                  item.type === 'education' 
                    ? 'mr-12 ml-auto' 
                    : 'ml-12'
                } ${index % 2 === 0 ? 'mt-0' : 'mt-4'}`}>
                  <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg ${
                    item.type === 'education' 
                      ? 'bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100' 
                      : 'bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100'
                  }`}>
                    <CardHeader>
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {item.type === 'education' ? (
                              <GraduationCap className={`h-5 w-5 text-green-600`} />
                            ) : (
                              <Briefcase className={`h-5 w-5 text-blue-600`} />
                            )}
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                item.type === 'education'
                                  ? 'bg-green-100 text-green-700 border-green-300'
                                  : 'bg-blue-100 text-blue-700 border-blue-300'
                              }`}
                            >
                              {item.type === 'education' ? 'Formation' : 'Expérience'}
                            </Badge>
                          </div>
                          
                          <CardTitle className={`text-xl font-bold mb-1 group-hover:transition-colors duration-200 ${
                            item.type === 'education' 
                              ? 'text-gray-900 group-hover:text-green-700' 
                              : 'text-gray-900 group-hover:text-blue-700'
                          }`}>
                            {item.title}
                          </CardTitle>
                          
                          <div className={`font-semibold text-lg ${
                            item.type === 'education' ? 'text-green-600' : 'text-blue-600'
                          }`}>
                            {item.subtitle}
                          </div>
                        </div>
                        
                        {item.status && (
                          <Badge 
                            variant="secondary" 
                            className={`${
                              item.type === 'education'
                                ? 'bg-green-100 text-green-800 border-green-200'
                                : 'bg-blue-100 text-blue-800 border-blue-200'
                            }`}
                          >
                            {item.status}
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {item.period}
                        </div>
                        {item.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {item.location}
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent>
                      {item.description && (
                        <p className="text-gray-700 mb-4">{item.description}</p>
                      )}
                      
                      {item.missions && (
                        <ul className="space-y-2">
                          {item.missions.map((mission, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                                item.type === 'education' ? 'bg-green-500' : 'bg-blue-500'
                              }`}></div>
                              {mission}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
