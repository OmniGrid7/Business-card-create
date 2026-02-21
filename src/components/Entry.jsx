
export default function Entry(props){
    return(
        <main>
      <section className='intro'>
      <img src={props.img.src} alt={props.img.alt} />
      <h1>{props.name}</h1>
      <h3>{props.role}</h3>
      <p>{props.website}</p>
      <div className="buttons">
        <button className="email-button">
          <i className="fa-solid fa-envelope"></i>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
</svg>Email
        </button>
        <button className="linkedin-button">
          <i className="fa-brands fa-linkedin"></i>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg>LinkedIn
        </button>
      </div>
      </section>
      <section className='about'>
        <h2>About</h2>
        <p>{props.about}</p>
        <h2>Interests</h2>
        <p>{props.interests}</p>
      </section>
            <hr />
      <footer className='disc'>
        <small>{props.footer}</small>
      </footer>
        <hr />
    </main>
    )
}