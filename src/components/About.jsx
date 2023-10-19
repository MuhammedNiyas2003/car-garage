const About = ({aboutRef}) => {
  return (
    <div ref={aboutRef} className="about-container">
      <div className="about-left-container">
        <h2>About Us</h2>
        <p>
          Carved with the muscular stance of a Dodge Brand vehicle and repping
          the iconic hood scoops of American muscle, the 2024 Dodge Hornet
          intimidates and is impossible to ignore. Check performance stats on
          customizable screens inside the teched out cabin, then grip the wheel
          and gear up for a driving experience like none other.
        </p>
      </div>
      <div className="about-right-container">
        <div className="about-right-left"></div>
        <div className="about-right-right">
          <div className="about-r-r-top">
            <h1> +10 Years</h1>
            <p>Experiance</p>
          </div>
          <div className="about-r-r-bottom">
            <img
              src="https://www.leie-autos.be/media/producten/pics/9/00-dodge_challenger.jpg"
              alt="error"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
