// Home page

// Everything in the Default tag will be a child of the  body tag.

const React = require('react');
const Default = require('./default');
const Index = () => {
    return(
        <Default>
            {/*  Start of header section */}
            <header className="header-section flex">
                {/* Start of nav section */}
                <nav>
                    {/* Start of nav container for mobile */}
                    <div className="nav-container flex">
                        <div className="btn mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
                        <span className="sr-only">Menu</span>
                            <div className="bar bar1"></div>
                            <div className="bar bar2"></div>
                            <div className="bar bar3"></div>
                        </div>
                    </div>
                    {/* End of nav container for mobile */}
                    {/* Start of nav Links */}
                    <ul data-visible="false" className="primary-nav nav-menu flex">
                        {/* Nav Link */}
                        <li className="nav-link">
                            <a href="#banner">Home</a>
                        </li>
                        {/* Nav Link */}
                        <li className="nav-link">
                            <a href="#skills">Services</a>    
                        </li>
                        {/* Nav Link */}
                        <li className="nav-link">
                            <a href="#projects">Projects</a>
                        </li>
                        {/* Nav Link */}
                        <li className="nav-link">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    {/* End of nav Links */}
                </nav> 
                {/* End of nav section */}
                {/* Start of header banner section */}
                <section className="banner flex" id="banner">
                    {/* Start of banner center */}
                    <div className="banner-center">
                        {/* Start of banner content */}
                        <h1>Full-Stack <br /> Dev</h1>
                        <a href="#contact" id="banner-link">Lets start building!</a>
                        {/* Banner social links */}
                        <div className="banner-icons flex">
                            <a id='bannerIcon' target="_blank" href="https://www.linkedin.com/in/ulises-carrillo/"><i className="fa brands fa-linkedin"></i></a>
                            <a id='bannerIcon' target="_blank" href="https://github.com/FabianUlises"><i className="fa brands fa-github"></i></a>
                            <a id='bannerIcon' href="#header-section"><i className="fa brands fa-twitch"></i></a>
                        </div>
                        {/* End of banner content */}
                    </div>
                    {/* End of banner center */}
                </section>
                {/* End of header banner section */}
            </header>
            {/*  End of header section */}


            {/* Start of skills section */}
            <section className="skills flex" id="skills">
                {/* Start of skills center */}
                <div className="skills-center wrapper flex">
                    {/* Start of Skill */}
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/react.png" height="100px" alt="reactjs" />
                        </div>
                    </article>
                    {/* End of Skill */}
                    {/* Start of Skill */}
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/nodejs.png" height="100px" alt="nodejs" />
                        </div>
                    </article>
                    {/* End of Skill */}
                    {/* Start of Skill */}
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/html5.png" height="100px" alt="html5" />
                        </div>
                    </article>
                    {/* End of Skill */} 
                    {/* Start of Skill */}
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/css.png" height="100px" alt="css3" />
                        </div>
                    </article>
                    {/* End of Skill */}
                    {/* Start of Skill */}
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/js.png" height="100px" alt="javascript" />
                        </div>
                    </article>
                    {/* End of Skill */}
                    {/* Start of Skill */}
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/python.png" height="100px" alt="python" />
                        </div>
                    </article>
                    {/* End of Skill */}
                    {/* Start of Skill */}
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/mongodb.png" height="35px" alt="mongodb" />
                        </div>
                    </article>
                    {/* End of Skill */}
                    {/* Start of Skill */}
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/postgresql.png" height="100px" alt="postgresql" />
                        </div>
                    </article>
                    {/* End of Skill */}
                    {/* Start of Skill */}
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/expressjs.png" height="35px" alt="expressjs" />
                        </div>
                    </article>
                    {/* End of Skill */}
                    {/* Start of Skill */}
                    <article className="skill">
                        <div className="skill-icon">
                            <p id="skill-restful">RESTful APIs</p>
                        </div>
                    </article>
                    {/* End of Skill */}
                </div>
                {/* End of skills center */}
            </section>
            {/* End of skills section */}

            {/* Start of projects section */}
            <section className="projects-section flex" id="projects">
                {/* Project title */}
                <h2>Projects</h2>
                {/* Start of project center */}
                <div className="projects-center wrapper">
                    {/* Start of project */}
                    <div className="project flex">
                        {/* Start of Project image */}
                        <div className="project-img">
                            <img src="/img/breadcrud.jpg" alt="breadcrud" />
                        </div>
                        {/* End of Project image */}
                        {/* Project name */}
                        <a target="_blank" href="https://sandboxbreadcrud.herokuapp.com/">
                            <h3>BreadCrud</h3>
                        </a>
                        {/* Start of project content */}
                        <div className="project-center">
                            <p>Visit my App using server-side rendering for dynamic CRUD operations.</p>
                        </div>
                        <div className="github">
                            <a target="_blank" href="https://github.com/FabianUlises/breadcrud"><i className="fa brands fa-github"></i></a>
                        </div>
                    </div>
                    {/* End of project content */}
                    {/* End of project */}
                    {/* Start of project */}
                    <div className="project flex">
                        {/* Start of Project image */}
                        <div className="project-img">
                            <img src="/img/rest-rant.jpg" alt="restaurant rating site" />
                        </div>
                        {/* End of Project image */}
                        {/* Project name */}
                        <a target="_blank" href="https://sandboxrestrant.herokuapp.com/">
                            <h3>Rest Rant</h3>
                        </a>    
                        {/* Start of project content */}
                        <div className="project-center">
                            <p>Rest-Rant is a site I created using MERN stack</p>
                        </div>
                        <div className="github">
                            <a target="_blank" href="https://github.com/FabianUlises/Rest-Rant.git"><i className="fa brands fa-github"></i></a>
                        </div>
                    </div>
                    {/* End of project content */}
                    {/* End of project */}
                    {/* Start of project */}
                    <div className="project flex">
                        {/* Start of Project image */}
                        <div className="project-img">
                            <img src="/img/dicegame.jpg" alt="dicegame" />
                        </div>
                        {/* End of Project image */}
                        {/* Project name */}
                        <a target="_blank" href="https://fabianulises.github.io/Milestone-Project/">
                            <h3>Dice Game</h3>
                        </a>    
                        {/* Start of project content */}
                        <div className="project-center">
                            <p>Visit a game I created using Javascript HTML & CSS</p>
                        </div>
                        <div className="github">
                            <a target="_blank" href="https://github.com/FabianUlises/Milestone-Project.git"><i className="fa brands fa-github"></i></a>
                        </div>
                    </div>
                    {/* End of project content */}
                    {/* End of project */}
                </div>
                {/* Start of project center */}
            </section>
            {/* End of projects section */}



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


            {/* Start of footer */}
            <footer>
                {/* Start of footer center */}
                <div className="footer-content">
                    {/* Footer icons */}
                    <div className="footer-icons flex">
                        <a id='footerIcon' target="_blank" href="https://www.linkedin.com/in/ulises-carrillo/"><i className="fa brands fa-linkedin"></i></a>
                        <a id='footerIcon' target="_blank" href="https://github.com/FabianUlises"><i className="fa brands fa-github"></i></a>
                        <a id='footerIcon' href="#header-section"><i className="fa brands fa-twitch"></i></a>
                    </div>
                    {/* Footer copyright */}
                    <div className="footer-text">
                        <p><span className='footer-highlight-text'>Made by</span> Fabian Carrillo</p>
                    </div>
                </div>
                {/* End of footer center */}
            </footer>
            {/* End of footer */}
        </Default>
    )
}
module.exports = Index;