import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const triggers = [];

    const timeout = setTimeout(() => {
      projectRefs.current.forEach((el, i) => {
        if (el) {
          const trigger = gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            {
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.1,
              ease: 'power3.out',
            }
          );
          triggers.push(trigger.scrollTrigger);
        }
      });

      ScrollTrigger.refresh();
    }, 300); // delay to ensure layout is mounted

    return () => {
      clearTimeout(timeout);
      triggers.forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal website to showcase my work and skills.',
      image: '/images/portfolio-thumb.png',
      tech: ['React', 'GSAP', 'Bootstrap'],
      githubLink: 'https://github.com/Arun-24/my-portfolio',
    },
    {
      title: 'Smart Cart App',
      description: 'Flutter app with AI-based features to seamlessly checkout of Grocery stores.',
      image: '/images/sparnet-thumb.png',
      tech: ['Flutter', 'MongoDB', 'AI'],
      githubLink: 'https://github.com/Arun-24/Seamless-Checkout-System',
    },
    {
      title: 'Employee Course Enrollment System',
      description: 'A website where employees can enroll and get certificates from their companies.',
      image: '/images/course-thumb.png',
      tech: ['React JS','Mysql','SpringBoot'],
      githubLink: 'https://github.com/Arun-Prakash37/Mini-Project',
    },
    {
      title: 'Weather Report',
      description: 'This website tells the weather report on the city which is searched.',
      image: '/images/weather-app.png',
      tech: ['React JS'],
      githubLink:'https://github.com/Arun-24/Full-Stack-Development',
    },
    {
      title: 'To-do list app',
      description: 'User can record the things they want to do.',
      image: '/images/To-do List.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/Arun-24/Full-Stack-Development',
    },
    // Add more projects if needed
  ];

  const cardGradients = [
    'linear-gradient(135deg, #3b3f99, #1f1f1f)', // Slate Blue
    'linear-gradient(135deg, #1a703cff, #2c2c2c)', // Emerald
    'linear-gradient(135deg, #5a3f5b, #1a1a1a)', // Plum
    'linear-gradient(135deg, #2c3e50, #1f1f1f)', // Dark Blue
    'linear-gradient(135deg, #6d701aff, #1f1f1f)', // Green
    'linear-gradient(135deg, #2a2a2e, #000000)', // Charcoal
  ];

  return (
    <section
      id="projects"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #1f1f1f, #2c2c2c)',
        color: '#f8f9fa',
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ fontSize: '2.7rem' }}>
          Projects
        </h2>

        <div className="row">
          {projects.map((project, i) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={i}
              ref={(el) => (projectRefs.current[i] = el)}
            >
              <div
                className="card text-white h-100 shadow border-0"
                style={{
                  background: cardGradients[i % cardGradients.length],
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  opacity: 1, // fallback in case GSAP doesn't run
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mt-auto">
                    <div className="mb-2">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="badge bg-secondary me-1">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.githubLink}
                      className="btn btn-sm btn-outline-light"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
