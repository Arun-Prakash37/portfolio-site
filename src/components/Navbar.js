import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const brandRef = useRef(null);


  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  useEffect(() => {
    const timer = setTimeout(() => {

      gsap.from(navRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from(brandRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
      });

      gsap.from(linksRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        ease: 'power2.out',
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav ref={navRef} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#hero" ref={brandRef}>
          My Portfolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link"
                  href={`#${item.toLowerCase()}`}
                  ref={(el) => (linksRef.current[index] = el)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
