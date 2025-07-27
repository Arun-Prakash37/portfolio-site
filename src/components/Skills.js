import React, { useEffect, useRef, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma,
  FaNodeJs, FaGitAlt, FaGithub, FaBootstrap
} from 'react-icons/fa';
import {
  SiFlutter, SiMongodb, SiMysql, SiCanva
} from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 🔧 Function to safely convert skill name to class-friendly format
const generateClassName = (name) =>
  `progress-bar-${name.toLowerCase().replace(/[^a-z0-9]/g, '')}`;

const Skills = () => {
  const sectionRef = useRef(null);

  const skillGroups = useMemo(() => [
    {
      title: 'Frontend Development',
      bg: 'linear-gradient(135deg, #3b3f99, #1f1f1f)',
      skills: [
        { name: 'HTML', icon: <FaHtml5 color="#E44D26" />, level: 98 },
        { name: 'CSS', icon: <FaCss3Alt color="#264DE4" />, level: 90 },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" />, level: 80 },
        { name: 'React', icon: <FaReact color="#61DBFB" />, level: 75 },
        { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" />, level: 75 },
        { name: 'Flutter', icon: <SiFlutter color="#02569B" />, level: 60 },
      ],
    },
    {
      title: 'Backend & Database',
      bg: 'linear-gradient(135deg, #1a703cff, #1f1f1f)',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs color="#339933" />, level: 70 },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" />, level: 75 },
        { name: 'MySQL', icon: <SiMysql color="#00758F" />, level: 80 },
      ],
    },
    {
      title: 'UI/UX Design',
      bg: 'linear-gradient(135deg, #c4da61ff, #2c2c2c)',
      skills: [
        { name: 'Figma', icon: <FaFigma color="#F24E1E" />, level: 98 },
        { name: 'Canva', icon: <SiCanva color="#00C4CC" />, level: 80 },
      ],
    },
    {
      title: 'Tools & Deployment',
      bg: 'linear-gradient(135deg, #5a3f5b, #1f1f1f)',
      skills: [
        { name: 'Git', icon: <FaGitAlt color="#F05032" />, level: 50 },
        { name: 'GitHub', icon: <FaGithub color="#fff" />, level: 60 },
      ],
    },
  ], []);

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    skillGroups.forEach(group => {
      group.skills.forEach(skill => {
        const className = generateClassName(skill.name);

        gsap.fromTo(
          `.${className}`,
          { width: '0%' },
          {
            width: `${skill.level}%`,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: `.${className}`,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });
  }, [skillGroups]);

  return (
    <section
      id="skills"
      className="py-5"
      ref={sectionRef}
      style={{ background: 'linear-gradient(135deg, #1f1f1f, #2c2c2c)', color: '#f8f9fa' }}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ fontSize: '2.7rem' }}>
          Skills
        </h2>

        <div className="row gy-4">
          {skillGroups.map((group, i) => (
            <div className="col-md-6 col-lg-6" key={i}>
              <div
                className="p-4 rounded shadow"
                style={{
                  background: group.bg,
                  borderRadius: '20px',
                  minHeight: '250px',
                  transition: '0.3s ease',
                }}
              >
                <h4 className="fw-bold mb-4 text-white">{group.title}</h4>
                <div className="d-flex flex-column gap-3">
                  {group.skills.map((skill, idx) => {
                    const className = generateClassName(skill.name);
                    return (
                      <div key={idx}>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                          <div className="d-flex align-items-center gap-2">
                            <div style={{ fontSize: '1.5rem' }}>{skill.icon}</div>
                            <small>{skill.name}</small>
                          </div>
                          <small>{skill.level}%</small>
                        </div>
                        <div className="progress" style={{ height: '10px' }}>
                          <div
                            className={`progress-bar bg-success ${className}`}
                            role="progressbar"
                            style={{ width: 0 }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
