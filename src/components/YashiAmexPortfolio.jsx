import React, { useRef, useEffect, useState } from 'react';
import './YashiAmexPortfolio.css'; // We'll create this CSS file for additional styles

const YashiAmexPortfolio = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0077C8] min-h-screen font-sans">
      <nav className="bg-[#0077C8] text-white p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white p-1 mr-2">
              <svg className="w-6 h-6 text-[#0077C8]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </div>
            <span className="text-2xl font-bold" style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              letterSpacing: '-0.5px',
              fontWeight: '700'
            }}>YASHI</span>
          </div>
          <div className="space-x-4">
            {['about', 'skills', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`hover:underline ${activeSection === section ? 'font-bold' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <header className="bg-[#0077C8] text-white py-20 h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 background-pattern"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4" style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-1px',
            textTransform: 'uppercase',
            fontWeight: 'bold'
          }}>Yashi Yadav</h1>
          <p className="text-xl mb-8">Machine Learning Engineer • Data Scientist • AI Enthusiast</p>
          <div className="space-x-4">
            <button onClick={() => scrollToSection('contact')} className="bg-white text-[#0077C8] font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
              Hire Now
            </button>
            <a href="/assets/Yadav_Yashi_resume.pdf" download className="bg-transparent text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300 border-2 border-white">
              Download Resume
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-4">
        {Object.entries(sectionRefs).map(([sectionId, ref]) => (
          <section
            key={sectionId}
            id={sectionId}
            ref={ref}
            className="mb-12 min-h-screen flex items-center"
          >
            <div className="w-full">
              <h2 className="text-3xl font-bold text-white mb-4">
                {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
              </h2>
              {sectionId === 'about' && (
                <p className="text-white">
                  Machine Learning Engineer and Software Developer with experience in AI/ML models, RESTful APIs, and cloud-native applications. Seeking an opportunity to leverage diverse skills in AI, ML, and software engineering.
                </p>
              )}
              {sectionId === 'skills' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                  <div>
                    <h3 className="font-semibold">Languages:</h3>
                    <p>Python, Java, C++, JavaScript (React.js/Node.js)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">AI/ML:</h3>
                    <p>TensorFlow, NumPy, Pandas, NLTK, PyTorch, scikit-learn</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Cloud & DevOps:</h3>
                    <p>Microsoft Azure, Docker, Kubernetes, GitOps, ArgoCD, Git, Gitea</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Web Dev:</h3>
                    <p>FastAPI, RESTful APIs, Microservices</p>
                  </div>
                </div>
              )}
              {sectionId === 'experience' && (
                <ul className="list-disc pl-5 text-white">
                  <li>Software QA Intern, Nokia (May 2024 - Present)</li>
                  <li>Graduate Research Assistant, Purdue University (August 2023 - December 2024)</li>
                </ul>
              )}
              {sectionId === 'contact' && (
                <div className="text-white">
                  <p>(260) 246-8543</p>
                  <p>yashiyadav0901@gmail.com</p>
                  <p>
                    <a 
                      href="https://linkedin.com/in/yashiyadav" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/yashiyadav
                    </a>
                  </p>
                </div>
              )}
            </div>
          </section>
        ))}
      </main>

      <footer className="bg-white text-center py-4">
        <p className="text-[#0077C8]">"Don't leave home without it" - Bringing innovation to technology</p>
      </footer>
    </div>
  );
};

export default YashiAmexPortfolio;