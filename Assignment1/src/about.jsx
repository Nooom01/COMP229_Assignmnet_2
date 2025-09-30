export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img 
            src="PXL_20241208_033658075.MP.jpg" 
            alt="Profile" 
          />
        </div>
        
        <div className="about-text">
          <h1>About Me</h1>
          <h2>Naomi Murai</h2>
          <p className="intro">
            Hi! I'm a student at Centennial College studying Health Informatics Technology.
          </p>
          
          <div className="bio">
            <h3>Background</h3>
            <p>
              I Have no background in programming but I am eager to learn and grow in this field.
            </p>
          </div>

          <div className="resume-link">
            <a href="/SampleResume.pdf" target="_blank" rel="noopener noreferrer">
              View My Resume
            </a>
          </div>

        </div>
      </div>

      <style>{`
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }

        .about-content {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .about-image {
          flex: 0 0 300px;
        }

        .about-image img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .about-text {
          flex: 1;
          min-width: 300px;
        }

        h1 {
          font-size: 2.5em;
          margin-bottom: 10px;
          color: #333;
        }

        h2 {
          font-size: 1.8em;
          color: #666;
          margin-bottom: 20px;
        }

        h3 {
          font-size: 1.3em;
          color: #444;
          margin-top: 25px;
          margin-bottom: 10px;
        }

        .intro {
          font-size: 1.2em;
          color: #555;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .bio p, .contact-info p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .skills ul {
          list-style: none;
          padding: 0;
        }

        .skills li {
          background: #f0f0f0;
          padding: 10px 15px;
          margin: 5px 0;
          border-radius: 5px;
          color: #555;
        }

        .resume-link {
          margin-top: 30px;
        }

        .resume-link a {
          display: inline-block;
          background: #646cff;
          color: white;
          padding: 12px 24px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          transition: background 0.3s;
        }

        .resume-link a:hover {
          background: #535bf2;
        }

        @media (max-width: 768px) {
          .about-content {
            flex-direction: column;
            align-items: center;
          }

          .about-image {
            flex: 0 0 auto;
            width: 100%;
            max-width: 300px;
          }

          h1 {
            font-size: 2em;
          }

          h2 {
            font-size: 1.5em;
          }
        }
      `}</style>
    </div>
  );
}