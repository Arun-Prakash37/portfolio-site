import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {about} from './assets/about-image.svg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const textRefs = useRef([]);
  const logoRefs = useRef([]);
  const headingRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();

      // Animate heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
        y: -30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate image entrance
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // Add continuous float + rotate effect to image
      gsap.to(imageRef.current, {
        y: -5,
        rotate: 1,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Animate bio and skills text
      textRefs.current.forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });

      // Animate tech logos
      logoRefs.current.forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
          scale: 0,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'back.out(1.7)',
        });

        el.addEventListener("mouseenter", () => {
          gsap.to(el, { scale: 1.3, duration: 0.3 });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, { scale: 1, duration: 0.3 });
        });
      });

      // Floating logo effect
      gsap.to(".tech-logo-grid img", {
        y: -5,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });
    }, 200);
    document.querySelectorAll("p strong").forEach((el, i) => {
    gsap.fromTo(
        el,
        { opacity: 0.6, scale: 0.95 },
        {
            scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            },
            keyframes: [
            { scale: 1.1, color: '#FFC107', duration: 0.4 },
            { scale: 1.0, color: '#00FFFF', duration: 0.4 },
            ],
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: i * 0.2,
        }
    );
    });
    return () => clearTimeout(timeout);
  }, []);

  const skills = [
    '⚛️ React – Building dynamic UI components and SPAs',
    '🎨 Bootstrap – Responsive and mobile-first web design',
    '🌀 GSAP – High-performance animations for web',
    '🗄️ SQL – Handling databases and writing queries',
    '📐 Figma – UI/UX design and prototyping',
    '📱 Flutter – Cross-platform mobile app development',
    '🧠 Problem Solving – Analytical thinking',
    '💬 Communication – Team collaboration & sharing',
  ];

  const logos = [
    { src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React' },
    { src: 'https://cdn.simpleicons.org/bootstrap/7952B3', alt: 'Bootstrap' },
    { src: 'https://cdn.simpleicons.org/greensock/88CE02', alt: 'GSAP' },
    { src: 'https://cdn.simpleicons.org/postgresql/336791', alt: 'PostgreSQL' },
    { src: 'https://cdn.simpleicons.org/figma/F24E1E', alt: 'Figma' },
    { src: 'https://cdn.simpleicons.org/flutter/02569B', alt: 'Flutter' },
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #1f1f1f, #2c2c2c)',
        color: '#f8f9fa',
      }}
    >
      <div className="container">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="fw-bold mb-5"
          style={{ fontSize: '2.7rem', textAlign: 'center' }}
        >
          About Me
        </h2>

        <div className="row">
          {/* Left Side: Image + Bio */}
          <div className="col-md-6 mb-4">
            <div className="text-center text-md-start mb-4">
              <img
                ref={imageRef}
                src={about}
                alt="Arun"
                className="img-fluid rounded-4 shadow-sm"
                style={{
                  maxWidth: '250px',
                  opacity: 0.95,
                  filter: 'brightness(95%)',
                }}
              />
            </div>
            <br></br>
            <p
              ref={(el) => (textRefs.current[0] = el)}
              style={{ fontSize: '1.15rem' }}
            >
              I'm <strong>Arun Prakash</strong>, a <strong>Front-End Developer</strong> and <strong>UI Designer</strong> based in <strong>Chennai</strong>. I work with <strong>Figma</strong> for design and <strong>Flutter</strong> for building modern, cross-platform apps. I focus on creating user-friendly interfaces with clean and responsive code.
            </p>
            <p
              ref={(el) => (textRefs.current[1] = el)}
              style={{ fontSize: '1.15rem' }}
            >
             On the web front, I work extensively with <strong>React</strong>, <strong>GSAP</strong>, and <strong>Bootstrap</strong> to create fast, responsive, and interactive user experiences. My focus is on writing clean, maintainable code while delivering seamless functionality and beautiful UI.
            </p>
          </div>

          {/* Right Side: Skills + Logos */}
          <div className="col-md-6">
            <h5
              className="fw-semibold mb-3"
              ref={(el) => (textRefs.current[2] = el)}
            >
              Skill Set:
            </h5>
            <div className="row gx-4 gy-3">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="col-12 col-sm-6"
                  ref={(el) => (textRefs.current[3 + i] = el)}
                >
                  <div className="skill-card">{skill}</div>
                </div>
              ))}
            </div>

            <div className="tech-logo-grid mt-4 d-flex flex-wrap gap-3 justify-content-center">
              {logos.map((logo, i) => (
                <img
                  key={i}
                  ref={(el) => (logoRefs.current[i] = el)}
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    width: '50px',
                    height: '50px',
                    transition: 'transform 0.3s ease',
                    borderRadius: '10px',
                    backgroundColor: '#fff',
                    padding: '5px',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
