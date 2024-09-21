import React, { useRef, useEffect, useState } from 'react';

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
    <div className="bg-white min-h-screen font-sans">
      <nav className="bg-[#016FD0] text-white p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white text-[#016FD0] p-1 mr-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="#016FD0"/>
                <path d="M5 12H19M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </div>
            <span className="text-2xl font-bold uppercase" style={{
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

      <header className="bg-[#016FD0] text-white py-20 h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4" style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-1px',
            textTransform: 'uppercase',
            fontWeight: 'bold'
          }}>Yashi Yadav</h1>
          <p className="text-xl mb-8">Machine Learning Engineer • Data Scientist • AI Enthusiast</p>
          <div className="space-x-4">
            <button onClick={() => scrollToSection('contact')} className="bg-white text-[#016FD0] font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
              Hire Now
            </button>
            <a href="/path-to-your-resume.pdf" download className="bg-transparent text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300 border-2 border-white">
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
              <h2 className="text-3xl font-bold text-[#016FD0] mb-4">
                {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
              </h2>
              {sectionId === 'about' && (
                <p className="text-gray-700">
                  Machine Learning Engineer and Software Developer with experience in AI/ML models, RESTful APIs, and cloud-native applications. Seeking an opportunity to leverage diverse skills in AI, ML, and software engineering.
                </p>
              )}
              {sectionId === 'skills' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <ul className="list-disc pl-5">
                  <li>Software QA Intern, Nokia (May 2024 - Present)</li>
                  <li>Graduate Research Assistant, Purdue University (August 2023 - December 2024)</li>
                </ul>
              )}
              {sectionId === 'contact' && (
                <>
                  <p>(260) 246-8543</p>
                  <p>yashiyadav0901@gmail.com</p>
                  <p>
                    <a 
                      href="https://linkedin.com/in/yashiyadav" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#006FCF] hover:underline"
                    >
                      linkedin.com/in/yashiyadav
                    </a>
                  </p>
                </>
              )}
            </div>
          </section>
        ))}
      </main>

      <footer className="bg-gray-100 text-center py-4">
        <p className="text-gray-600">"Don't leave home without it" - Bringing innovation to technology</p>
      </footer>
    </div>
  );
};

export default YashiAmexPortfolio;