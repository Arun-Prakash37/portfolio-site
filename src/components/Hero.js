import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  // Refs for each animated element
  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const paraRef = useRef(null);
  const imgRef = useRef(null);
  const rainbowRef = useRef(null);

  // Scroll to top on reload
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  // GSAP animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      const tl = gsap.timeline();

      tl.from(headingRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          rainbowRef.current,
          {
            y: 10,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.4"
        )

        .from(
          subTextRef.current,
          {
            x: -30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )

        .from(
          paraRef.current,
          {
            x: -20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )

        .from(
          imgRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="hero"
      className="hero d-flex align-items-center"
      style={{
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #1f1f1f, #2c2c2c)",
        color: "#f8f9fa",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold" ref={headingRef}>
              Hi, I'm Arun Prakash👋
            </h1>
            <p className="fs-4 fw-medium" ref={subTextRef}>
              A passionate <br></br>
              <span className="rainbow-text shimmer" ref={rainbowRef}>
                Front-End Developer ,
              </span>
              <span className="rainbow-text shimmer" ref={rainbowRef}>
                UI Designer ,
              </span>
              <span className="rainbow-text shimmer" ref={rainbowRef}>
                Flutter Enthusiast
              </span>
            </p>
            <p ref={paraRef}>
              I design and build fast, responsive and smart website app.
            </p>
          </div>
          <div className="col-md-6 text-center mt-5 mt-md-0">
            <div
              style={{
                background: "linear-gradient(135deg, #1f1f1f, #2c2c2c)",
                padding: "1.5rem",
                borderRadius: "1rem",
                display: "inline-block",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              }}
            >
              <img
                ref={imgRef}
                src={profileImage}
                alt="Arun"
                className="img-fluid"
                style={{
                  maxWidth: "300px",
                  maxHeight: "400px", // 👈 Adjust height as needed
                  borderRadius: "0.75rem",
                  filter: "brightness(90%) saturate(90%)",
                  opacity: 0.92,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
