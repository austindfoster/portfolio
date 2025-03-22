import profile from "../images/profile.JPG";
const About = () => {
  return (
    <section id="about">
      <div className="about-block">
        <div className="profile-pic">
          <img src={profile} alt="Me"></img>
        </div>
        <div className="about-description">
          <p id="welcome">
            Welcome to my portfolio! As an artist and a software engineer, I have separated projects under their own sections. Feel free to skip to the relavant section, but if you have time to check out my additional work it is much appreciated.
          </p>
          <div>
            <h3>Current Projects</h3>
            <ul>
              <li>
                Work for ARA (Applied Research Associates)
                <ul>
                  <li>
                    <p>Skills: C++/Qt/Git</p>
                  </li>
                  <li>
                    <p>Responsibilites: Junior Backend Developer / 3D Visualization</p>
                  </li>
                </ul>
              </li>
              <li>Personal Game Project</li>
              <ul>
                <li>
                  <p>Skills: UnrealEngine/Git/Blueprints/C++/Blender/VSCode</p>
                  <ul>
                    <li>
                      <p>3D Modeling/Rigging/Animating</p>
                    </li>
                    <li>
                      <p>Visual FX</p>
                    </li>
                    <li>
                      <p>Blueprint/C++ Programming</p>
                    </li>
                  </ul>
                </li>
              </ul>
              <li>
                3D Printing/Painting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
