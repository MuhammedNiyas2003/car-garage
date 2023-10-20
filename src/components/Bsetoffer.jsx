import image from '../assets/1.png'
const Bestoffer=()=>{
  return(
    <div className="bestoffer-container">
      <div className='bestoffer-left'>
        <h2>Best Offer</h2>
        <p>Dodge Demon</p>
        <p>for $400 <span className='day-text'>/day</span></p>
        <button className='rent-btn'>Rent Now</button>
      </div>
      <div className='bestoffer-right'>
        <img src={image} alt="error" className='car-image'/>
      </div>
     </div>
  )
}
export default Bestoffer