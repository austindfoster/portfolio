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
                Rating/Review System for MutualDates
                <ul>
                  <li>
                    <p>Skills: Android/Kotlin/TypeScript/MongoDB</p>
                    <p>Responsibilites: Main Backend Developer / Android Front-end</p>
                  </li>
                </ul>
              </li>
              <li>Developing Solar Showdown (BYU's Yearly VideoGame Project)</li>
              <ul>
                <li>
                  <p>Skills: UnrealEngine/Git/Blueprints/C++/Maya/SubstancePainter</p>
                  <ul>
                    <li>
                      <p>Spear-headed optimization</p>
                    </li>
                    <li>
                      <p>Co-led Version Control Efforts</p>
                    </li>
                    <li>
                      <p>Main technical Animator</p>
                    </li>
                    <li>
                      <p>Modeler/Rigger/Animator</p>
                    </li>
                    <li>
                      <p>Blueprint/C++ Programmer</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
