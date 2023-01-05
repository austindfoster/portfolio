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
            intelligence, scripting, testing, and database management.
          </p>
          <br />
          <p>
            I have a strong passion for coding, animation and gaming. 
            Currently I am working on a ratings and reviews system for the MutualDates 
            Android app as my software engineering capstone, working as a TA for BYU's web development course, 
            and working on the animation department's annual videogame project, Solar Showdown. 
            Feel free to look throught the projects I have worked on down below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
