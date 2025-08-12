import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Users } from 'lucide-react';

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const academicHighlights = [
    {
      icon: <BookOpen className="text-blue-400" size={20} />,
      title: 'Core Curriculum',
      description: 'Advanced study in Data Structures, Algorithms, Database Management, and Software Engineering principles'
    },
    {
      icon: <Users className="text-green-400" size={20} />,
      title: 'Practical Experience',
      description: 'Extensive hands-on projects in web development, AI integration, and full-stack applications'
    },
    {
      icon: <Award className="text-purple-400" size={20} />,
      title: 'Specialization Areas',
      description: 'Deep focus on Backend Development, Machine Learning algorithms, and Database Architecture'
    }
  ];

  const educationStats = [
    { label: 'Specialization', value: 'CST', color: 'blue' },
    { label: 'Graduated', value: '2024', color: 'purple' },
    { label: 'Institute', value: 'MSIT', color: 'green' }
  ];

  const getStatColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500/10 to-transparent border-blue-500/20 text-blue-400',
      purple: 'from-purple-500/10 to-transparent border-purple-500/20 text-purple-400',
      green: 'from-green-500/10 to-transparent border-green-500/20 text-green-400'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section 
      id="education" 
      className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6 hover:border-blue-400/40 transition-all duration-300">
            <GraduationCap className="text-blue-400" size={16} />
            <span className="text-blue-300 text-sm font-medium tracking-wide">Academic Foundation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            My <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building a strong foundation in computer science and emerging technologies through comprehensive academic excellence
          </p>
        </header>

        {/* Main Education Card */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <article className="bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/10 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Primary Education Information */}
              <div className="lg:col-span-2 space-y-8">
                <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                    <GraduationCap className="text-blue-400" size={36} />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                        Bachelor of Technology
                      </h3>
                      <p className="text-xl text-gray-300 mb-2 font-medium">
                        Computer Science & Technology
                      </p>
                      <p className="text-lg text-blue-300 font-semibold mb-6">
                        Meghnad Saha Institute of Technology
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-6">
                      <div className="flex items-center space-x-2 bg-gray-800/30 rounded-lg px-3 py-2">
                        <MapPin size={18} className="text-purple-400" />
                        <span className="font-medium">Kolkata, India</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-800/30 rounded-lg px-3 py-2">
                        <Calendar size={18} className="text-green-400" />
                        <span className="font-medium">2022 - 2026</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Comprehensive academic program focused on computer science fundamentals, including advanced algorithms, 
                      data structures, database management systems, and software engineering methodologies. Emphasized practical 
                      application through extensive project work and real-world problem-solving scenarios.
                    </p>
                  </div>
                </div>
              </div>

              {/* Academic Highlights Sidebar */}
              <aside className="space-y-6">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Award className="mr-3 text-yellow-400" size={24} />
                  Academic Highlights
                </h4>
                
                <div className="space-y-4">
                  {academicHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className={`group p-5 bg-gray-800/40 rounded-xl border border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-800/60 transition-all duration-300 hover:transform hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : ''}`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-3 bg-gray-700/50 rounded-xl group-hover:scale-110 group-hover:bg-gray-600/50 transition-all duration-300">
                          {highlight.icon}
                        </div>
                        <div className="flex-1">
                          <h5 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                            {highlight.title}
                          </h5>
                          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Learning Journey Card */}
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group">
                  <h5 className="text-white font-semibold mb-4 group-hover:text-blue-300 transition-colors flex items-center">
                    <BookOpen className="mr-2" size={20} />
                    Learning Journey
                  </h5>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <span className="text-white text-lg">🎓</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          Computer Science Excellence
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Strong theoretical foundation with practical implementation
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-4 bg-blue-500/10 rounded-xl hover:bg-blue-500/20 transition-all duration-300 cursor-pointer transform hover:scale-105">
                        <div className="text-2xl font-bold text-blue-400">4</div>
                        <div className="text-xs text-gray-400 mt-1">Years</div>
                      </div>
                      <div className="text-center p-4 bg-purple-500/10 rounded-xl hover:bg-purple-500/20 transition-all duration-300 cursor-pointer transform hover:scale-105">
                        <div className="text-2xl font-bold text-purple-400">B.Tech</div>
                        <div className="text-xs text-gray-400 mt-1">Degree</div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Education Statistics Footer */}
            <footer className="mt-10 pt-8 border-t border-gray-700/50">
              <div className="grid md:grid-cols-3 gap-6">
                {educationStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center p-6 bg-gradient-to-br ${getStatColorClasses(stat.color)} rounded-xl border hover:scale-105 transition-all duration-300 cursor-pointer group`}
                  >
                    <div className={`text-3xl font-bold mb-2 group-hover:scale-110 transition-transform`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300 font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </footer>
          </article>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Education;