import logoImg from '../assets/2.png'

const Navbar = ({ aboutRef }) => {
  const goToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navigation-container">
      <div className="menu-container">
        <p onClick={goToAbout}>about</p>
        <p>Vehicles</p>
        <p>Booking</p>
        <p>Contacts</p>
      </div>
      <div className="logo">
      <img src={logoImg} alt="error" className="srt-logo" />
      </div>
      <div className="nav-profile">
        <div>
          <button className="lang-container">
            <select name="Language" id="lang">
              <option value="" disabled selected hidden>
                Language
              </option>
              <option value="0">
                English
              </option>
              <option value="1">
                Hindi
              </option>
            </select>
          </button>
        </div>
        <div className="myprofile-container"></div>
      </div>
    </div>
  );
};

export default Navbar;
