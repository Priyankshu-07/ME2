import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

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
      gradient: 'from-blue-500/20 to-blue-600/5',
      color: 'blue'
    },
    {
      title: 'Data Visualization Intern',
      company: 'Lisica Tech',
      period: 'Previous',
      type: 'Internship',
      location: 'Remote',
      description: 'Specialized in creating interactive dashboards and automating data visualization workflows for large-scale datasets.',
      responsibilities: [
        'Designed and built interactive dashboards using Matplotlib and Seaborn',
        'Automated visual analytics workflows for the UCL dataset processing',
        'Utilized KNIME for advanced data processing and visualization pipelines',
        'Created comprehensive data insights and reporting mechanisms'
      ],
      technologies: ['Python', 'Matplotlib', 'Seaborn', 'KNIME', 'Data Analytics', 'Dashboard Development'],
      achievements: [
        'Automated 80% of manual data visualization tasks',
        'Created 15+ interactive dashboards',
        'Processed and visualized datasets with 100K+ records'
      ],
      gradient: 'from-purple-500/20 to-purple-600/5',
      color: 'purple'
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
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <TrendingUp className="text-green-400" size={16} />
            <span className="text-blue-300 text-sm font-medium">Professional Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building robust solutions and gaining valuable industry insights through hands-on experience
          </p>
        </div>

        {/* Experience Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-800/50 backdrop-blur-sm p-2 rounded-xl border border-gray-700/50">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveExperience(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeExperience === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <Briefcase size={18} />
                <span className="font-medium">{exp.company}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Experience Display */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`bg-gradient-to-br ${experiences[activeExperience].gradient} backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-colors`}>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Experience Info */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-gray-800/50 rounded-xl">
                    <Briefcase className={`text-${experiences[activeExperience].color}-400`} size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {experiences[activeExperience].title}
                    </h3>
                    <p className="text-blue-300 font-semibold text-lg mb-2">
                      {experiences[activeExperience].company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{experiences[activeExperience].period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{experiences[activeExperience].location}</span>
                      </div>
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                        {experiences[activeExperience].type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {experiences[activeExperience].description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Award className="text-yellow-400" size={20} />
                    <span>Key Achievements</span>
                  </h4>
                  <div className="space-y-3">
                    {experiences[activeExperience].achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Responsibilities & Technologies */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                  <div className="space-y-3">
                    {experiences[activeExperience].responsibilities.map((responsibility, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-gray-600/50 transition-colors"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                          <span className="text-gray-300 leading-relaxed">{responsibility}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {experiences[activeExperience].technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className={`w-2 h-2 bg-${experiences[activeExperience].color}-400 rounded-full group-hover:scale-125 transition-transform`}></div>
                        <span className="text-gray-300 text-sm font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience Timeline */}
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
                  <h4 className="text-white font-medium mb-4">Experience Timeline</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">PS</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-300">Started at {experiences[activeExperience].company}</div>
                        <div className="text-xs text-gray-500">{experiences[activeExperience].period}</div>
                      </div>
                    </div>
                    <div className="ml-4 border-l-2 border-gray-700 pl-4 pb-2">
                      <div className="text-xs text-gray-500">
                        Focused on {experiences[activeExperience].title.toLowerCase()} responsibilities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl border border-blue-500/20">
            <div className="text-4xl font-bold text-blue-400 mb-2">2+</div>
            <div className="text-gray-300">Internships</div>
            <div className="text-sm text-gray-500 mt-1">Completed successfully</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-gray-300">Technologies</div>
            <div className="text-sm text-gray-500 mt-1">Used professionally</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-transparent rounded-xl border border-green-500/20">
            <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-300">Success Rate</div>
            <div className="text-sm text-gray-500 mt-1">Project completion</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;