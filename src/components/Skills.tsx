import React, { useState, useEffect, useRef } from 'react';
import { Code2, Database, Wrench, Globe, Zap, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="text-blue-400" size={24} />,
      skills: [
        { name: 'Python', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Java', level: 75, color: 'from-orange-500 to-red-500' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-yellow-600' }
      ],
      gradient: 'from-blue-500/20 to-blue-600/5'
    },
    {
      title: 'ML Technologies',
      icon: <Brain className="text-purple-400" size={24} />,
      skills: [
        { name: 'LangChain', level: 85, color: 'from-purple-500 to-purple-600' },
        { name: 'Whisper', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'T5', level: 75, color: 'from-pink-500 to-pink-600' },
        { name: 'Groq', level: 70, color: 'from-cyan-500 to-cyan-600' }
      ],
      gradient: 'from-purple-500/20 to-purple-600/5'
    },
    {
      title: 'Backend Frameworks',
      icon: <Globe className="text-green-400" size={24} />,
      skills: [
        { name: 'FastAPI', level: 90, color: 'from-green-500 to-green-600' },
        { name: 'Node.js', level: 85, color: 'from-green-600 to-green-700' },
        { name: 'Express.js', level: 80, color: 'from-gray-500 to-gray-600' }
      ],
      gradient: 'from-green-500/20 to-green-600/5'
    },
    {
      title: 'Databases',
      icon: <Database className="text-orange-400" size={24} />,
      skills: [
        { name: 'MongoDB', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'MySQL', level: 75, color: 'from-blue-500 to-blue-600' }
      ],
      gradient: 'from-orange-500/20 to-orange-600/5'
    },
    {
      title: 'Developer Tools',
      icon: <Wrench className="text-red-400" size={24} />,
      skills: [
        { name: 'Git', level: 90, color: 'from-red-500 to-red-600' },
        { name: 'GitHub', level: 85, color: 'from-gray-500 to-gray-600' },
        { name: 'Render', level: 80, color: 'from-purple-500 to-purple-600' },
        { name: 'Vercel', level: 85, color: 'from-black to-gray-800' },
        { name: 'Railway', level: 75, color: 'from-purple-600 to-pink-600' }
      ],
      gradient: 'from-red-500/20 to-red-600/5'
    },
    {
      title: 'Web Technologies',
      icon: <Zap className="text-cyan-400" size={24} />,
      skills: [
        { name: 'Socket.IO', level: 85, color: 'from-cyan-500 to-cyan-600' },
        { name: 'JWT', level: 80, color: 'from-indigo-500 to-indigo-600' },
        { name: 'Multer', level: 75, color: 'from-yellow-500 to-yellow-600' },
        { name: 'Streamlit', level: 70, color: 'from-red-500 to-red-600' }
      ],
      gradient: 'from-cyan-500/20 to-cyan-600/5'
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <Zap className="text-yellow-400" size={16} />
            <span className="text-blue-300 text-sm font-medium">Technical Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across modern technologies and frameworks
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700/50'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`bg-gradient-to-br ${skillCategories[activeCategory].gradient} backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8`}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-4 bg-gray-800/50 rounded-xl">
                {skillCategories[activeCategory].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{skillCategories[activeCategory].title}</h3>
                <p className="text-gray-400">Proficiency levels and experience</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                  </div>
                  
                  <div className="relative">
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                  </div>
                  
                  <div className="mt-3 flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${skill.color} rounded-full animate-pulse`}></div>
                    <span className="text-xs text-gray-500">
                      {skill.level >= 85 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Learning Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
            <Brain className="text-blue-400 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-semibold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Passionate about staying updated with the latest technologies and best practices. 
              Currently exploring advanced AI/ML frameworks, cloud-native architectures, and emerging backend technologies.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              {['AI/ML', 'Cloud Native', 'Microservices', 'DevOps'].map((topic, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;