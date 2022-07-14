import React from 'react'

const Contact = () => {
  return (
    <div>
        {/* Start of contact section */}
        <section id="contact-banner">
            {/* Start of contact center */}
            <div className="contact-banner-center" id="contact">
                {/* Start of contact banner info Left side */}
                <article id="contact-banner-info">
                    {/* Start of user info */}
                    <div className="user-info">
                    <img src="/img/me.jpg" alt="Fabian Carrillo" />
                        <h2 id='myname'>Fabian Carrillo</h2>
                    </div>
                    {/* End of user info */}
                    {/* Start of user details */}
                    <div className="user-details">
                        {/* User about */}
                        <div className="user-about">
                            <h2>About me</h2>
                            <p>Hey! I'm a bi-lingual web developer from Los Angeles California. Feel free to contact me in regards to your project.</p>
                            <p>You can reach me via github or Linkedin!</p>
                        </div>
                        {/* User resume */}
                        <div className="user-resume">
                            <a target='_blank' href="/assets/fabian-resume.pdf" download>Download my resume</a>
                        </div>
                    </div>
                    {/* Start of user details */}
                </article>
                {/* End of contact banner info Left side */}
                {/* Start of contact banner Form right side */}
                <article id="contact-banner-form">
                    {/* Form title */}
                    <h2>Contact me</h2>
                    {/* Start of contact form */}
                    <form action="https://formsubmit.co/ulises.fab@outlook.com" method='POST' className="contact-form flex" >
                        {/* Start of form group */}
                        <div className="form-group">
                            {/* Form input */}
                            <input name='name' id='name' type="text" placeholder='Name' required/>
                        </div>
                        {/* End of form group */}
                            {/* Form input */}
                            <input type="hidden" name="_subject" value="New submission!" />
                        {/* Start of form group */}
                        <div className="form-group">
                            {/* Form input */}
                            <input name='email' id='email' type="email" placeholder='Email' required/>
                        </div>
                        {/* End of form group */}
                        {/* Start of form group */}
                        <div className="form-group">
                            {/* Form input */}
                            <textarea name='message' cols="23" rows="10" placeholder='Type your message' required></textarea>
                        </div>
                        {/* End of form group */}
                        <button type='submit' className='form-button'>Send</button>
                    </form>
                    {/* End of contact form */}
                </article>    
                {/* End of contact banner Form right side */}
            {/* End of contact center */}
            </div>
        </section> 
        {/* Start of contact section */}
    </div>
  )
}

module.exports = Contact;
