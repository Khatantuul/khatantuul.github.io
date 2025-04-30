import { useEffect, useRef } from "react";
import { Link, Links, Outlet, NavLink } from "react-router-dom";

export default function Root() {
  const observeRef1 = useRef(null);
  const observeRef2 = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // if(entry.target.id === 'nav-wrapper' && entry.target.id === 'my-profile'){
          entry.target.classList.add("loaded");
          // }

          observer.unobserve(entry.target);
        }
      });
    };
    const options = {
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(observeRef1.current);
    observer.observe(observeRef2.current);
    // observer.observe(pageTitleRef.current)
  }, []);

  return (
    <div className="layout">
      <div id="sidebar">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 ref={observeRef1} className="fullname">
            Khatnaa Batbold
          </h1>
        </div>
        <div>
          <div
            className="profile-image"
            style={{ width: "100%", height: "360px" }}
            ref={observeRef2}
          >
            <img
              src="/assets/profile.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about" className="nav-link">
                <span className="nav-indicator"></span>
                <span className="nav-text">About</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                <span className="nav-indicator"></span>
                <span className="nav-text">Experience</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                <span className="nav-indicator"></span>
                <span className="nav-text">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="brand-wrapper">
          <span>&#169;</span>
          <p>2025 Khatantuul Batbold</p>
        </div>
      </div>
      {/* <div className="animated-line-vertical" style={{height:'100%'}}></div> */}
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
