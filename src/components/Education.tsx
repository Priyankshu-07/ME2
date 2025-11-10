import React, { useEffect, useRef, useState, useMemo } from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Users, Sparkles, Zap, Trophy } from 'lucide-react';

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
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
      { threshold: 0.1, rootMargin: '50px' }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const academicHighlights = useMemo(() => [
    {
      icon: <BookOpen className="text-cyan-400" size={22} aria-hidden="true" />,
      title: 'Core Curriculum',
      description: 'Advanced study in Data Structures, Algorithms, Database Management, and Software Engineering principles',
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent'
    },
    {
      icon: <Users className="text-emerald-400" size={22} aria-hidden="true" />,
      title: 'Practical Experience',
      description: 'Extensive hands-on projects in web development, AI integration, and full-stack applications',
      gradient: 'from-emerald-500/20 via-green-500/10 to-transparent'
    },
    {
      icon: <Award className="text-violet-400" size={22} aria-hidden="true" />,
      title: 'Specialization Areas',
      description: 'Deep focus on Backend Development, Machine Learning algorithms, and Database Architecture',
      gradient: 'from-violet-500/20 via-purple-500/10 to-transparent'
    }
  ], []);

  const educationStats = useMemo(() => [
    { label: 'Specialization', value: 'CST', color: 'cyan', icon: <Zap size={20} /> },
    { label: 'Graduated', value: '2026', color: 'violet', icon: <Trophy size={20} /> },
    { label: 'Institute', value: 'MSIT', color: 'emerald', icon: <Sparkles size={20} /> }
  ], []);

  const getStatColorClasses = (color: string): string => {
    const colorMap: Record<string, string> = {
      cyan: 'from-cyan-500/15 via-cyan-500/5 to-transparent border-cyan-500/30 text-cyan-400 hover:border-cyan-400/60 hover:shadow-cyan-500/20',
      violet: 'from-violet-500/15 via-violet-500/5 to-transparent border-violet-500/30 text-violet-400 hover:border-violet-400/60 hover:shadow-violet-500/20',
      emerald: 'from-emerald-500/15 via-emerald-500/5 to-transparent border-emerald-500/30 text-emerald-400 hover:border-emerald-400/60 hover:shadow-emerald-500/20'
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section 
      id="education" 
      className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
      aria-labelledby="education-heading"
    >
      {/* Enhanced Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/8 via-violet-500/8 to-pink-500/8 rounded-full blur-3xl" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-br from-violet-400/10 to-pink-500/10 rounded-full blur-2xl animate-float-delayed" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" aria-hidden="true" />

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/15 via-violet-500/15 to-pink-500/15 backdrop-blur-md border border-cyan-500/30 rounded-full px-8 py-3 mb-8 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg shadow-cyan-500/10">
            <GraduationCap className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" size={18} aria-hidden="true" />
            <span className="text-cyan-300 text-sm font-semibold tracking-wider uppercase">Academic Foundation</span>
          </div>
          
          <h2 
            id="education-heading" 
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            My{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Education
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 rounded-full blur-sm" />
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Building a strong foundation in computer science through 
            <span className="text-cyan-400 font-medium"> cutting-edge </span> 
            academic excellence
          </p>
        </header>

        {/* Main Education Card */}
        <div 
          className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <article className="relative bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] p-10 hover:border-cyan-500/40 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 group overflow-hidden">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-pink-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />
            
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" aria-hidden="true" />
            
            <div className="relative grid lg:grid-cols-3 gap-10">
              {/* Primary Education Information */}
              <div className="lg:col-span-2 space-y-8">
                <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-6">
                  <div 
                    className="flex-shrink-0 p-5 bg-gradient-to-br from-cyan-600/30 to-violet-600/30 rounded-3xl border border-cyan-500/40 hover:scale-110 hover:rotate-6 transition-all duration-500 shadow-xl shadow-cyan-500/20"
                    aria-hidden="true"
                  >
                    <GraduationCap className="text-cyan-300" size={40} />
                  </div>
                  
                  <div className="flex-1 space-y-5">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Bachelor of Technology
                      </h3>
                      <p className="text-2xl text-gray-300 mb-3 font-semibold">
                        Computer Science & Technology
                      </p>
                      <p className="text-xl bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent font-bold">
                        Meghnad Saha Institute of Technology
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">
                      <div className="flex items-center space-x-3 bg-gradient-to-r from-slate-800/60 to-slate-800/40 backdrop-blur-sm rounded-xl px-4 py-3 border border-slate-700/50 hover:border-violet-500/40 transition-all duration-300 group/location">
                        <MapPin size={20} className="text-violet-400 group-hover/location:scale-110 transition-transform" aria-hidden="true" />
                        <span className="font-semibold">Kolkata, India</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-gradient-to-r from-slate-800/60 to-slate-800/40 backdrop-blur-sm rounded-xl px-4 py-3 border border-slate-700/50 hover:border-emerald-500/40 transition-all duration-300 group/date">
                        <Calendar size={20} className="text-emerald-400 group-hover/date:scale-110 transition-transform" aria-hidden="true" />
                        <span className="font-semibold">
                          <time dateTime="2022">2022</time> - <time dateTime="2026">2026</time>
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-lg font-light">
                      Comprehensive academic program focused on computer science fundamentals, including advanced algorithms, 
                      data structures, database management systems, and software engineering methodologies. Emphasized practical 
                      application through extensive project work and real-world problem-solving scenarios.
                    </p>
                  </div>
                </div>
              </div>

              {/* Academic Highlights Sidebar */}
              <aside className="space-y-6" aria-label="Academic highlights">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="mr-3 text-yellow-400" size={28} aria-hidden="true" />
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Highlights</span>
                </h4>
                
                <div className="space-y-4">
                  {academicHighlights.map((highlight, index) => (
                    <div
                      key={highlight.title}
                      className={`group/highlight p-6 bg-gradient-to-br ${highlight.gradient} backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer`}
                      style={{ 
                        animation: isVisible ? `fadeInUp 0.6s ease-out forwards ${index * 150}ms` : 'none',
                        opacity: isVisible ? 1 : 0 
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-3 bg-slate-800/60 rounded-xl group-hover/highlight:scale-110 group-hover/highlight:rotate-6 transition-all duration-300 border border-slate-700/30">
                          {highlight.icon}
                        </div>
                        <div className="flex-1">
                          <h5 className="text-white font-bold mb-2 text-lg group-hover/highlight:text-cyan-300 transition-colors">
                            {highlight.title}
                          </h5>
                          <p className="text-gray-400 text-sm leading-relaxed group-hover/highlight:text-gray-300 transition-colors">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Learning Journey Card */}
                <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm rounded-2xl p-7 border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-500 group/journey hover:shadow-xl hover:shadow-cyan-500/10">
                  <h5 className="text-white font-bold mb-5 text-lg group-hover/journey:text-cyan-300 transition-colors flex items-center">
                    <BookOpen className="mr-3 group-hover/journey:rotate-12 transition-transform duration-300" size={22} aria-hidden="true" />
                    Learning Journey
                  </h5>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-14 h-14 bg-gradient-to-br from-cyan-500 via-violet-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover/journey:scale-110 group-hover/journey:rotate-12 transition-all duration-300 shadow-lg shadow-cyan-500/30"
                        aria-hidden="true"
                      >
                        <span className="text-white text-2xl" role="img" aria-label="graduation cap">🎓</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-bold text-gray-200 group-hover/journey:text-white transition-colors">
                          Computer Science Excellence
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Theory meets practice in real-world applications
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-5 bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 rounded-2xl hover:from-cyan-500/25 hover:to-cyan-500/10 transition-all duration-300 transform hover:scale-105 border border-cyan-500/20 hover:border-cyan-400/40 group/stat">
                        <div className="text-3xl font-black text-cyan-400 group-hover/stat:scale-110 transition-transform">4</div>
                        <div className="text-xs text-gray-400 mt-2 font-semibold uppercase tracking-wider">Years</div>
                      </div>
                      <div className="text-center p-5 bg-gradient-to-br from-violet-500/15 to-violet-500/5 rounded-2xl hover:from-violet-500/25 hover:to-violet-500/10 transition-all duration-300 transform hover:scale-105 border border-violet-500/20 hover:border-violet-400/40 group/stat">
                        <div className="text-3xl font-black text-violet-400 group-hover/stat:scale-110 transition-transform">B.Tech</div>
                        <div className="text-xs text-gray-400 mt-2 font-semibold uppercase tracking-wider">Degree</div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Education Statistics Footer */}
            <footer className="relative mt-12 pt-10 border-t border-slate-700/50">
              <div className="grid md:grid-cols-3 gap-6">
                {educationStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                    className={`relative text-center p-8 bg-gradient-to-br ${getStatColorClasses(stat.color)} backdrop-blur-sm rounded-2xl border transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group/statcard overflow-hidden`}
                  >
                    {/* Animated background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color === 'cyan' ? 'from-cyan-500/20' : stat.color === 'violet' ? 'from-violet-500/20' : 'from-emerald-500/20'} to-transparent opacity-0 group-hover/statcard:opacity-100 transition-opacity duration-500 blur-xl`} aria-hidden="true" />
                    
                    <div className="relative">
                      <div className="flex justify-center mb-3">
                        <div className={`p-2 rounded-lg bg-slate-800/50 group-hover/statcard:scale-110 transition-transform duration-300 ${hoveredStat === index ? 'animate-bounce' : ''}`}>
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-4xl font-black mb-3 group-hover/statcard:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-300 font-bold tracking-widest uppercase">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </footer>
          </article>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(-15px);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Education;