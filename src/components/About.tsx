import React, { useEffect, useRef } from 'react';
import { Code, Database, Cpu, ArrowDown, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-20 opacity-0">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="text-blue-400" size={16} />
            <span className="text-blue-300 text-sm font-medium">Available for opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              Software Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Passionate about creating <span className="text-blue-400 font-semibold">innovative solutions</span> and building 
            <span className="text-purple-400 font-semibold"> scalable applications</span> with modern technologies
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Python', 'FastAPI', 'Node.js', 'MongoDB', 'AI/ML'].map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>

          <button
            onClick={scrollToNext}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <span>Explore My Work</span>
            <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </button>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate backend developer with expertise in building <strong className="text-blue-400">scalable REST APIs</strong> and 
                  integrating cutting-edge <strong className="text-purple-400">AI technologies</strong>. My focus is on creating clean, 
                  deployment-ready code that solves real-world problems.
                </p>
                <p className="text-lg">
                  With proficiency in technologies like <strong className="text-cyan-400">MongoDB</strong>, <strong className="text-green-400">WebRTC</strong>, 
                  and <strong className="text-yellow-400">LangChain</strong>, I bridge the gap between traditional backend development and 
                  modern AI applications. I believe in writing maintainable code that stands the test of time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl border border-blue-500/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">💻</div>
                <div className="text-gray-300 text-sm">Full Stack</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl border border-purple-500/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">🚀</div>
                <div className="text-gray-300 text-sm">Innovation</div>
              </div>
            </div>
          </div>

          <div ref={featuresRef} className="grid gap-6 opacity-0">
            {[
              {
                icon: <Code className="text-blue-400" size={28} />,
                title: 'Clean Code',
                description: 'Focus on writing maintainable, scalable, and deployment-ready code following best practices.',
                gradient: 'from-blue-500/20 to-blue-600/5'
              },
              {
                icon: <Database className="text-green-400" size={28} />,
                title: 'Database Design',
                description: 'Experienced in designing efficient database schemas and optimizing queries for performance.',
                gradient: 'from-green-500/20 to-green-600/5'
              },
              {
                icon: <Cpu className="text-purple-400" size={28} />,
                title: 'AI Integration',
                description: 'Specialized in integrating AI tools and building intelligent applications using modern frameworks.',
                gradient: 'from-purple-500/20 to-purple-600/5'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`group p-6 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-gray-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-800/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;