import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./router/index.css";

import Root from "./router/routes/root";
import About from "./router/About";
import Projects from "./router/Projects";
import Contact from "./router/Contact"; // Added missing import

// Single page with all sections
export default function PageRouter() {
  return (
    <div>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

// Simple router that only has one main route
const router = createBrowserRouter([
  { 
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <PageRouter /> }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// Previous implementation kept for reference
// function PageRouter() {
//   const { route } = useParams();
//
//   switch (route) {
//     case "about":
//       return <About />;
//     case "projects":
//       return <Projects />;
//     case "contact":
//       return <Contact />;
//     default:
//       return <NotFound />; 
//   }
// }