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
      <div className="blog-content" id="image-1">
        <p>Dodge Motor Company has changed throughout the years from muscle cars to family cars.</p>
      </div>
      <div className="blog-content" id="image-2">
        <p>Few American car brands can match Dodge when it comes to the legendary quality and performance that their vehicles bring</p>
      </div>
      <div className="blog-content" id="image-3">
        <p>Dodge Reliability Rating Breakdown. The Dodge Reliability Rating is 3.5 out of 5.0, which ranks it 19th out of 32 for all car brands.</p>
      </div>
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