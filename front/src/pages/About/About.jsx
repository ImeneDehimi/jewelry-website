import Navbar from "../../componenets/navbar/Navbar";
import Footer from "../../componenets/footer/Footer";
import "./About.css";
import about from "./../../assets/about.jpg"

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="about">
        <div className="about-title">
          <h1>About Us</h1>
          <span></span>
        </div>
        <div className="about-content">
          <img src={about} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum illum
            incidunt neque, voluptatum libero assumenda, tenetur at quo qui quia
            veniam itaque aut unde voluptate iure odio sapiente numquam <br /><br />
            dignissimos! Lorem ipsum ure odio! Inventore ad quae facere iusto! Amet nobis, delectus beatae, eveniet error maiores, accusantium quibusdam ducimus doloribus mollitia nemo quidem obcaecati. Necessitatibus ea iusto explicabo.
            Id in fuga eum esse rem officia minima minus illo inventore magnam atque perferendis <br /><br />corporis pariatur quis aut voluptatem, dolorum excepturi corrupti saepe deserunt provident! Incidunt corporis tenetur tempora distinctio?
            tium consequatur possimus minus velit error mollivoluptatibus, incidunt quae nulla dolores in repudiandae quibusdam ipsam, aliquid tempora quidem sed commodi. Magnam sequi laboriosam enim delectus voluptatum placeat consequuntur ex fuga dolores.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
