import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-black border-t border-gray-800/50 py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Main Footer Content */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Code className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Software Developer
              </span>
            </div>
            
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about building robust backend solutions and integrating AI technologies. 
              Always excited to work on innovative projects that make a difference.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'Node.js'].map((tech, index) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full text-sm border border-gray-700/50 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-800/50">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <span>© {currentYear} Portfolio</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span>Built with</span>
                <Heart className="text-red-400 animate-pulse" size={16} />
                <span>and</span>
                <Coffee className="text-yellow-600" size={16} />
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mt-3">
              Designed and developed with modern web technologies for optimal performance and user experience.
            </p>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center justify-center space-x-2 pt-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;