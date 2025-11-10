import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, Award, TrendingUp, Zap, Code, Rocket } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'Backend Intern',
      company: 'Pearl Thoughts',
      period: 'Recent',
      type: 'Internship',
      location: 'Remote',
      description: 'Focused on building robust email services and implementing advanced fault tolerance patterns for production-grade applications.',
      responsibilities: [
        'Built comprehensive email service with advanced retry logic and rate limiting capabilities',
        'Implemented circuit breaker pattern for enhanced fault tolerance and system reliability',
        'Developed robust error handling mechanisms for production-grade applications',
        'Optimized email delivery performance and monitoring systems'
      ],
      technologies: ['Python', 'FastAPI', 'Email Services', 'Circuit Breaker', 'Rate Limiting'],
      achievements: [
        'Improved email delivery success rate by 35%',
        'Reduced system downtime through circuit breaker implementation',
        'Implemented comprehensive logging and monitoring'
      ],
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      color: 'cyan',
      icon: <Zap size={28} />
    },
    {
      title: 'Backend Intern',
      company: 'Codeflare Labs',
      period: 'Previous',
      type: 'Internship',
      location: 'Remote',
      description: 'Developed and enhanced backend modules for a cab booking platform, focusing on real-time trip tracking, driver management, and multi-stop bookings. Built scalable REST APIs to improve operational efficiency.',
      responsibilities: [
        'Developed multi-level user authentication system with Manager and Proprietor roles, enhancing security protocols',
        'Built RESTful APIs enabling CRUD operations for Packages, Places, and Hotels, streamlining content management',
        'Created secure file upload solution using Multer for image storage and retrieval',
        'Implemented trip duration tracking with estimated vs actual time comparison',
        'Built mobile integration APIs for driver app communication',
        'Developed multi-stop booking support with optimized route sequencing',
        'Implemented real-time driver location updates for live tracking',
        'Created booking modification APIs for updating trip details dynamically'
      ],
      technologies: ['Node.js', 'Express.js', 'JavaScript', 'Multer', 'REST APIs', 'MongoDB'],
      achievements: [
        'Enhanced booking model with medical requirements and emergency contacts',
        'Built complete driver management system with availability toggles',
        'Implemented booking modification APIs for dynamic trip updates',
        'Created driver earnings and trip summary endpoints',
        'Developed accept/reject ride request workflows'
      ],
      keyContributions: [
        {
          title: 'Travel & Content Management System',
          points: [
            'Multi-level authentication with Manager and Proprietor roles',
            'RESTful APIs for Packages, Places, and Hotels CRUD operations',
            'Secure file upload solution with Multer for image management',
            'Enhanced security protocols and administrative access controls',
            'Streamlined content management workflows'
          ]
        },
        {
          title: 'Cab Booking Platform - Enhanced Booking Model',
          points: [
            'Trip duration tracking (estimated vs actual time)',
            'Customer notes & medical requirement fields',
            'Emergency contact details integration',
            'Dynamic booking modification APIs',
            'Multi-stop booking with route optimization'
          ]
        },
        {
          title: 'Cab Booking Platform - Driver Management System',
          points: [
            'Driver availability toggle (online/offline/busy)',
            'Real-time location updates for live tracking',
            'Earnings and trip summary endpoints',
            'Profile update and notification preferences',
            'Accept/Reject ride request endpoints',
            'Trip management and performance metrics'
          ]
        }
      ],
      gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
      color: 'violet',
      icon: <Code size={28} />
    }
  ];

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

  return (
    <section 
      id="experience" 
      className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/8 via-violet-500/8 to-pink-500/8 rounded-full blur-3xl" />
        
        <div className="absolute top-32 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-gradient-to-br from-violet-400/10 to-pink-500/10 rounded-full blur-2xl animate-float-delayed" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" aria-hidden="true" />

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/15 via-violet-500/15 to-pink-500/15 backdrop-blur-md border border-cyan-500/30 rounded-full px-8 py-3 mb-8 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg shadow-cyan-500/10">
            <TrendingUp className="text-emerald-400 group-hover:rotate-12 transition-transform duration-300" size={18} aria-hidden="true" />
            <span className="text-cyan-300 text-sm font-semibold tracking-wider uppercase">Professional Journey</span>
          </div>
          
          <h2 
            id="experience-heading"
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            My{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Experience
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 rounded-full blur-sm" />
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Building robust solutions and gaining valuable 
            <span className="text-cyan-400 font-medium"> industry insights </span>
            through hands-on experience
          </p>
        </header>

        {/* Experience Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-3 bg-slate-800/50 backdrop-blur-md p-3 rounded-2xl border border-slate-700/50 shadow-xl">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveExperience(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-500 font-semibold ${
                  activeExperience === index
                    ? 'bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 text-white shadow-2xl shadow-cyan-500/30 scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700/50 hover:scale-105'
                }`}
              >
                <Briefcase size={20} className={activeExperience === index ? 'animate-pulse' : ''} aria-hidden="true" />
                <span>{exp.company}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Experience Display */}
        <div 
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <article className={`relative bg-gradient-to-br ${experiences[activeExperience].gradient} backdrop-blur-xl border border-slate-700/50 rounded-[2rem] p-10 hover:border-cyan-500/40 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 group overflow-hidden`}>
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-pink-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />
            
            <div className="relative grid lg:grid-cols-2 gap-10">
              {/* Experience Info */}
              <div className="space-y-6">
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 p-5 bg-gradient-to-br from-cyan-600/30 to-violet-600/30 rounded-3xl border border-cyan-500/40 hover:scale-110 hover:rotate-6 transition-all duration-500 shadow-xl shadow-cyan-500/20">
                    {experiences[activeExperience].icon}
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {experiences[activeExperience].title}
                    </h3>
                    <p className="text-2xl bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent font-bold mb-3">
                      {experiences[activeExperience].company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-slate-800/60 to-slate-800/40 backdrop-blur-sm rounded-xl px-4 py-2 border border-slate-700/50 hover:border-emerald-500/40 transition-all duration-300">
                        <Calendar size={18} className="text-emerald-400" aria-hidden="true" />
                        <span className="font-semibold">{experiences[activeExperience].period}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-slate-800/60 to-slate-800/40 backdrop-blur-sm rounded-xl px-4 py-2 border border-slate-700/50 hover:border-violet-500/40 transition-all duration-300">
                        <MapPin size={18} className="text-violet-400" aria-hidden="true" />
                        <span className="font-semibold">{experiences[activeExperience].location}</span>
                      </div>
                      <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 rounded-xl text-xs font-bold uppercase tracking-wider">
                        {experiences[activeExperience].type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed font-light bg-slate-800/30 p-5 rounded-xl border border-slate-700/30">
                  {experiences[activeExperience].description}
                </p>

                {activeExperience === 1 && experiences[activeExperience].keyContributions && (
                  <div className="space-y-5">
                    <h4 className="text-2xl font-bold text-white flex items-center space-x-3">
                      <Rocket className="text-cyan-400" size={24} aria-hidden="true" />
                      <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Key Contributions</span>
                    </h4>
                    {experiences[activeExperience].keyContributions.map((contribution, idx) => (
                      <div key={contribution.title} className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/40 hover:border-cyan-500/30 transition-all duration-300 group/contrib">
                        <h5 className="text-lg font-bold text-cyan-400 mb-4 group-hover/contrib:text-cyan-300 transition-colors">
                          {contribution.title}
                        </h5>
                        <div className="space-y-2">
                          {contribution.points.map((point, pointIdx) => (
                            <div key={pointIdx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse" />
                              <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeExperience === 0 && (
                  <div>
                    <h4 className="text-xl font-bold text-white mb-5 flex items-center space-x-3">
                      <Award className="text-yellow-400" size={24} aria-hidden="true" />
                      <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Key Achievements</span>
                    </h4>
                    <div className="space-y-3">
                      {experiences[activeExperience].achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-4 bg-slate-800/40 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 transition-all duration-300 group/achievement">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 animate-pulse" />
                          <span className="text-gray-300 leading-relaxed group-hover/achievement:text-white transition-colors">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Responsibilities & Technologies */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-5 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Key Responsibilities
                  </h4>
                  <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                    {experiences[activeExperience].responsibilities.map((responsibility, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-xl border border-slate-700/40 hover:border-slate-600/60 transition-all duration-300 hover:-translate-x-1 group/resp"
                        style={{ 
                          animation: isVisible ? `slideInRight 0.5s ease-out forwards ${idx * 100}ms` : 'none',
                          opacity: isVisible ? 1 : 0 
                        }}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 group-hover/resp:scale-150 transition-transform" />
                          <span className="text-gray-300 leading-relaxed text-sm group-hover/resp:text-white transition-colors">{responsibility}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-5 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Technologies Used
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {experiences[activeExperience].technologies.map((tech, idx) => (
                      <div
                        key={tech}
                        className="flex items-center space-x-3 p-4 bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-xl hover:from-cyan-500/20 hover:to-violet-500/10 transition-all duration-300 group/tech border border-slate-700/40 hover:border-cyan-500/40 hover:scale-105"
                        style={{ 
                          animation: isVisible ? `fadeInUp 0.5s ease-out forwards ${idx * 80}ms` : 'none',
                          opacity: isVisible ? 1 : 0 
                        }}
                      >
                        <div className={`w-2 h-2 bg-cyan-400 rounded-full group-hover/tech:scale-150 transition-transform`} />
                        <span className="text-gray-300 text-sm font-semibold group-hover/tech:text-white transition-colors">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Experience Summary */}
        <footer className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="relative text-center p-8 bg-gradient-to-br from-cyan-500/15 via-cyan-500/5 to-transparent backdrop-blur-sm rounded-2xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" aria-hidden="true" />
            <div className="relative">
              <div className="text-5xl font-black text-cyan-400 mb-3 group-hover:scale-110 transition-transform">2+</div>
              <div className="text-gray-200 font-bold text-lg mb-2">Internships</div>
              <div className="text-sm text-gray-400 font-medium">Completed successfully</div>
            </div>
          </div>
          <div className="relative text-center p-8 bg-gradient-to-br from-violet-500/15 via-violet-500/5 to-transparent backdrop-blur-sm rounded-2xl border border-violet-500/30 hover:border-violet-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/20 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" aria-hidden="true" />
            <div className="relative">
              <div className="text-5xl font-black text-violet-400 mb-3 group-hover:scale-110 transition-transform">10+</div>
              <div className="text-gray-200 font-bold text-lg mb-2">Technologies</div>
              <div className="text-sm text-gray-400 font-medium">Used professionally</div>
            </div>
          </div>
          <div className="relative text-center p-8 bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent backdrop-blur-sm rounded-2xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/20 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" aria-hidden="true" />
            <div className="relative">
              <div className="text-5xl font-black text-emerald-400 mb-3 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-gray-200 font-bold text-lg mb-2">Success Rate</div>
              <div className="text-sm text-gray-400 font-medium">Project completion</div>
            </div>
          </div>
        </footer>
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.5);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.7);
        }
      `}</style>
    </section>
  );
};

export default Experience;