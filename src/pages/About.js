import profile from "../images/profile.JPG";
const About = () => {
  return (
    <section id="about">
      <div className="about-block">
        <div className="profile-pic">
          <img src={profile} alt="Me"></img>
        </div>
        <div className="about-description">
          <p>
            Hi, my name is Austin Foster. I am a full-time student at Brigham
            Young University studying Computer Science with an emphasis in
            Software Engineering. I will graduate April 2023. I have a wide
            range of skills including native android app development, web
            development, algorithm design, graphical manipulation, artificial
            intelligence, scripting, testing, and database management. I have
            about 4 years of Java experience, 5 years of C and C++ experience,
            and 3 years experience with Python.
          </p>
          <br />
          <p>
            My current emphasis is in Software Engineering, but I also have a
            strong passion for animation and gaming. Most of my skills in
            animation and game design are self taught, but I have taken a few
            couses from BYU's Animation department including CSANM 458 on VFX,
            and CSANM 354 on creating realistic shaders. The 3D software I use
            most are Blender, Maya, and Houdini. I am also quite familiar with
            many of the commonly used Adobe products such as Photoshop,
            Illustrator, Premiere, and Substance Painter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
