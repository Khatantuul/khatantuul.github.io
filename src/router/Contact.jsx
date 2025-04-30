export default function Contact() {
  return (
    <div id="page">
      <div>
        <h1>contact. </h1>

        <div class="links-button-wrapper">
          <button
            className="btn"
            style={{ cursor:'pointer',  color: '#62e0d9',  backgroundColor: '#1e2a47'}}
            onClick={() =>
              window.open("./assets/Khatnaa Batbold resume.pdf", "_blank")
            }
          >
            Resume
          </button>

          <p
            style={{
              fontSize: "1.125rem",

              color: "#757575",
              lineHeight: 1.1,
            }}
          >
            Get in touch with me at khatnaa24batbold@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
