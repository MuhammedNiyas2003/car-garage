const Vehiclelist=()=>{
  return(
    <div className='vehicle-list-container'>
      <div className="vehicle-list-top">
        <h1>Vehicles</h1>
        <p>Dodge is an American brand of automobiles and a division of Stellantis North America, based in Auburn Hills, Michigan.</p>
        <div className='vehicle-list-btn'>
        <button >Back</button>
        <button>Next</button>
        </div>
      </div>
      <div className="vehicle-list-bottom">
        <div className="vehicle-list">
          <p>Dodge Challenger</p>
          <p>$400 <span className="day">/day</span></p>
          <img src="../challenger.png" alt="erro" className="car-png"/>
        </div>
        <div className="vehicle-list">
          <p>Dodge Charger</p>
          <p>$400 <span className="day">/day</span></p>
          <img src="../charger.png" alt="error" className="car-png" />
        </div>
        <div className="vehicle-list">
          <p>Dodge Hornet</p>
          <p>$400 <span className="day">/day</span></p>
          <img src="../hornet.png" alt="error" className="car-png"/>
        </div>
        <div className="vehicle-list">
          <p>Dodge Hornet</p>
          <p>$400 <span className="day">/day</span></p>
          <img src="../hornet.png" alt="error" className="car-png"/>
        </div>
        <div className="vehicle-list">
          <p>Dodge Hornet</p>
          <p>$400 <span className="day">/day</span></p>
          <img src="../hornet.png" alt="error" className="car-png"/>
        </div>
      </div>
     </div>
  )
}
export default Vehiclelist