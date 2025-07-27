import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.contact-item');
      if (items.length === 0) return;

      gsap.from(items, {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
        },
      });
    }, contactRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section id="contact" ref={contactRef} className="contact-section">
      <div className="container">
        <h2 className="fw-bold text-center mb-4 contact-title">Contact Me</h2>
        <p className="text-center mb-5 fs-5">Let’s build something amazing together 🚀</p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="glass-box p-4 rounded-4">
              <div className="contact-item contact-box email mb-4">
                <div className="icon-wrapper">
                  <FaEnvelope size={24} />
                </div>
                <span>arunm24703@gmail.com</span>
              </div>

              <div className="contact-item contact-box location mb-4">
                <div className="icon-wrapper">
                  <FaMapMarkerAlt size={24} />
                </div>
                <span>Chennai, India</span>
              </div>

              <div className="contact-item contact-box github mb-4">
                <div className="icon-wrapper">
                  <FaGithub size={24} />
                </div>
                <a
                  href="https://github.com/Arun-24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com
                </a>
              </div>

              <div className="contact-item contact-box linkedin mb-4">
                <div className="icon-wrapper">
                  <FaLinkedin size={24} />
                </div>
                <a
                  href="https://www.linkedin.com/in/arun-prakash-m-862363232/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com
                </a>
              </div>

              <div className="text-center mt-5">
                <a
                  href="mailto:arunm24703@gmail.com"
                  className="btn btn-outline-light btn-lg"
                >
                  👋 Say Hello
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
