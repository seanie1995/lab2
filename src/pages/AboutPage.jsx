import Contact from "../components/Contact/contact"
import "./styles/aboutpage.css"
import myPhoto from "../assets/about-me-photos/about-me.jpg"



const AboutPage = () => {
  return (
    <>

      <article className="about_me">
        <div className="about_me_text">
          <h1>Coding, Music and Self-expression</h1>
          <p>
            Born and raised in Manila, Philippines, I moved to Sweden at 18 years
            old and later earned my Bachelor's
            Degree at Music and Audio Production at Dalarna University. As a
            guitarist, composer and sound engineer, I
            delved into audio production, working at various live events including
            conferences, livestreams, and concerts. I've also enjoyed performing
            onstage with bands.
          </p>
          <p>
            In early 2023, I discovered programming and found it to be so fun and rewarding. I immersed myself
            in HTML, CSS, and C#. The excitement and satisfaction I found in coding
            inspired me to transition into a career in Fullstack Development.
            Currently, I'm hard at work with my studies at Chas Academy, enjoying the journey towards my goal of working in the IT industry.
          </p>
          <p>
            Would you like to get in touch with me? Send me an email with the contact form below!
          </p>
        </div>
        <img className="my_photo" src={myPhoto} alt="Photo of Sean" />
      </article>
      <Contact />
    </>
  );
};

export default AboutPage;
