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

  const highlights = [
    {
      icon: <BookOpen className="text-blue-400" size={20} />,
      title: 'Core Subjects',
      description: 'Data Structures, Algorithms, Database Management, Software Engineering'
    },
    {
      icon: <Users className="text-green-400" size={20} />,
      title: 'Projects',
      description: 'Multiple hands-on projects in web development and AI integration'
    },
    {
      icon: <Award className="text-purple-400" size={20} />,
      title: 'Focus Areas',
      description: 'Backend Development, Machine Learning, Database Design'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <GraduationCap className="text-blue-400" size={16} />
            <span className="text-blue-300 text-sm font-medium">Academic Foundation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strong academic foundation in computer science and technology
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/10 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Education Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
                    <GraduationCap className="text-blue-400" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      Bachelor of Technology
                    </h3>
                    <p className="text-xl text-gray-300 mb-2">
                      Computer Science and Technology
                    </p>
                    <p className="text-lg text-blue-300 font-semibold mb-4">
                      Meghnad Saha Institute of Technology
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">
                      <div className="flex items-center space-x-2">
                        <MapPin size={18} className="text-purple-400" />
                        <span>Kolkata, India</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={18} className="text-green-400" />
                        <span>2020 - 2024</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Comprehensive study in computer science fundamentals including algorithms, data structures, 
                      database management, software engineering, and emerging technologies. Focused on practical 
                      application of theoretical concepts through hands-on projects and real-world problem solving.
                    </p>
                  </div>
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white mb-4">Academic Highlights</h4>
                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="group p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-gray-700/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          {highlight.icon}
                        </div>
                        <div>
                          <h5 className="text-white font-medium mb-1 group-hover:text-blue-300 transition-colors">
                            {highlight.title}
                          </h5>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Learning Path */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group">
                  <h5 className="text-white font-medium mb-4 group-hover:text-blue-300 transition-colors">Learning Journey</h5>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white text-sm">🎓</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-300 group-hover:text-white transition-colors">Computer Science Foundation</div>
                        <div className="text-xs text-gray-500">Strong theoretical and practical knowledge</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="text-center p-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors cursor-pointer">
                        <div className="text-xl font-bold text-blue-400">4</div>
                        <div className="text-xs text-gray-400">Years</div>
                      </div>
                      <div className="text-center p-3 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors cursor-pointer">
                        <div className="text-xl font-bold text-purple-400">B.Tech</div>
                        <div className="text-xs text-gray-400">Degree</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-transparent rounded-lg border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400 mb-1">CST</div>
                  <div className="text-sm text-gray-300">Specialization</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-transparent rounded-lg border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400 mb-1">2024</div>
                  <div className="text-sm text-gray-300">Graduated</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-transparent rounded-lg border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400 mb-1">MSIT</div>
                  <div className="text-sm text-gray-300">Institute</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;