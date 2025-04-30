export default function Contact() {
  return (
    <div id="page">
      <div>
        <h1>contact. </h1>

        <div class="links-button-wrapper">
          <button
            className="btn"
            style={{backgroundColor:'black'}}
            onClick={() =>
              window.open("./assets/Khatantuul Batbold resume.pdf", "_blank")
            }
          >
            Download CV
          </button>

          <p
            style={{
              fontSize: "1.125rem",

              color: "#757575",
              lineHeight: 1.1,
            }}
          >
            Email me at khatnaa24batbold@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
