import FooterCard from "./FooterCard"
import logoImg from '../assets/2.png'

const Footer=()=>{
  return(
    <div className="footer-container">
    <FooterCard>
      <img src={logoImg} alt="error" className="srt-logo" />
      <div className="footer-card-contents">
        <p>addres</p>
        <p>pincode</p>
        <p>countrty</p>
      </div>
    </FooterCard>
    <FooterCard>
    <div className="footer-card-contents">
        <p>addres</p>
        <p>pincode</p>
        <p>countrty</p>
      </div>
    </FooterCard>
    <FooterCard>
    <div className="footer-card-contents">
        <p>addres</p>
        <p>pincode</p>
        <p>countrty</p>
      </div>
    </FooterCard>
    <FooterCard>
    <div className="footer-card-contents">
        <p>addres</p>
        <p>pincode</p>
        <p>countrty</p>
      </div>
    </FooterCard>
    </div>
  )
}
export default Footer