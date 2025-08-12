import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Brain, MessageCircle, Mail, Play, Star, GitBranch } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Vision - AI-Powered Learning Summarizer',
      description: 'An intelligent tool that summarizes content from YouTube videos and PDFs using advanced AI models. Features automated question paper creation and interactive learning experiences.',
      icon: <Brain className="text-blue-400" size={28} />,
      technologies: ['Python', 'FastAPI', 'MongoDB', 'Whisper', 'T5 Model', 'LangChain', 'Groq API'],
      features: [
        'Content summarization from YouTube videos using Whisper',
        'PDF processing with fine-tuned T5 model',
        'FastAPI backend with MongoDB integration',
        'Automated question paper generation using LangChain and Groq API'
      ],
      gradient: 'from-blue-500/20 via-blue-600/10 to-purple-500/20',
      stats: { stars: 24, forks: 8, commits: 156 }
    },
    {
      title: 'YAP - Real-Time Chat and Video Call App',
      description: 'A comprehensive communication platform offering low-latency messaging and peer-to-peer video calling capabilities with modern web technologies.',
      icon: <MessageCircle className="text-green-400" size={28} />,
      technologies: ['Node.js', 'Express.js', 'WebRTC', 'Socket.IO', 'JavaScript'],
      features: [
        'Real-time messaging with Socket.IO',
        'Peer-to-peer video communication using WebRTC',
        'Low-latency message delivery',
        'Scalable Node.js backend architecture'
      ],
      gradient: 'from-green-500/20 via-green-600/10 to-cyan-500/20',
      stats: { stars: 18, forks: 5, commits: 89 }
    },
    {
      title: 'VoltMail - AI Cold Email Generator',
      description: 'An intelligent email assistant that generates personalized cold emails using advanced RAG pipeline and state-of-the-art language models.',
      icon: <Mail className="text-purple-400" size={28} />,
      technologies: ['Streamlit', 'Express.js', 'ChromaDB', 'Cohere', 'Groq LLaMA3', 'RAG Pipeline'],
      features: [
        'RAG pipeline implementation using ChromaDB',
        'Cohere embeddings for semantic search',
        'Groq LLaMA3 for email generation',
        'Streamlit frontend with Express.js backend'
      ],
      gradient: 'from-purple-500/20 via-purple-600/10 to-pink-500/20',
      stats: { stars: 31, forks: 12, commits: 203 }
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
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <Star className="text-yellow-400" size={16} />
            <span className="text-blue-300 text-sm font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing my expertise in backend development and AI integration through real-world applications
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-800/50 backdrop-blur-sm p-2 rounded-xl border border-gray-700/50">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {project.icon}
                <span className="hidden sm:inline text-sm font-medium">
                  {project.title.split(' - ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Project Display */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`bg-gradient-to-br ${projects[activeProject].gradient} backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300`}>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Project Info */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-gray-800/50 rounded-xl">
                    {projects[activeProject].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {projects[activeProject].title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30 animate-pulse">
                        ● Active
                      </div>
                      <div className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">
                        Featured
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {projects[activeProject].description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {projects[activeProject].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Github size={18} />
                    <span>View Code</span>
                  </button>
                  <button className="group flex items-center space-x-2 px-6 py-3 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                    <Play size={18} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {projects[activeProject].technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-300 text-sm font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Demo */}
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-medium group-hover:text-blue-300 transition-colors">Interactive Demo</h4>
                    <Play className="text-blue-400 group-hover:scale-110 transition-transform" size={20} />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white text-lg">🎯</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-300 group-hover:text-white transition-colors">Try the live demo</div>
                        <div className="text-xs text-gray-500">Click to explore features</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-200"></div>
                      <div className="h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-pulse delay-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">All Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setActiveProject(index)}
                className={`cursor-pointer p-6 bg-gradient-to-br ${project.gradient} backdrop-blur-sm border rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  activeProject === index ? 'border-blue-500/50 shadow-lg' : 'border-gray-700/50 hover:border-gray-600/50'
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  {project.icon}
                  <h4 className="text-lg font-semibold text-white">{project.title.split(' - ')[0]}</h4>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3 text-xs text-gray-400">
                    <span>★ {project.stats.stars}</span>
                    <span>⑂ {project.stats.forks}</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;