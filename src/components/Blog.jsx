const Blog=()=>{
  return(
    <div className="blog-container">
     <div className="blog-top-container">
      <h1>
        Blog
      </h1>
      <p>
      Dodge is an American brand of automobiles and a division of Stellantis North America
      </p>
     </div>
     <div className="blog-mid-container">
      <div className="blog-content"></div>
      <div className="blog-content"></div>
      <div className="blog-content"></div>
     </div>
     <div className="blog-bottom-container">
      <h1 className="sub">
        Subscribe and get 20/off your first rental.
      </h1>
      <div className="input-box">
        <input type="text" className="email" placeholder="Enter your email"/>
        <button className="submit-btn">Submit</button>
      </div>
     </div>
    </div>
  )
}
export default Blog