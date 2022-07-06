const React = require('react');
const Default = require('./default');
const Index = () => {
    return(
        <Default>
            <header className="header-section flex">
                <nav>
                    <div className="nav-container flex">
                        <div className="btn mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
                        <span className="sr-only">Menu</span>
                            <div className="bar bar1"></div>
                            <div className="bar bar2"></div>
                            <div className="bar bar3"></div>
                        </div>
                    </div>
                    <ul data-visible="false" className="primary-nav nav-menu flex">
                        <li className="nav-link">
                            <a href="#banner">Home</a>
                        </li>                
                        <li className="nav-link">
                            <a href="#skills">Services</a>    
                        </li>
                        <li className="nav-link">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="nav-link">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav> 

                <section className="banner flex" id="banner">
                    <div className="banner-center">
                        <h1>Full-Stack <br /> Dev</h1>
                        <a href="#contact" id="banner-link">Lets start building!</a>
                        <div className="banner-icons flex">
                            <a target="_blank" href="https://www.linkedin.com/in/ulises-carrillo/"><i className="fa brands fa-linkedin"></i></a>
                            <a target="_blank" href="https://github.com/FabianUlises"><i className="fa brands fa-github"></i></a>
                            <a href="#header-section"><i className="fa brands fa-twitch"></i></a>
                        </div>
                    </div>
                </section>
            </header>



            <section className="skills flex" id="skills">
                <div className="skills-center wrapper flex">
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/react.png" height="100px" alt="reactjs" />
                        </div>
                    </article>
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/nodejs.png" height="100px" alt="nodejs" />
                        </div>
                    </article>
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/html5.png" height="100px" alt="html5" />
                        </div>
                    </article>

                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/css.png" height="100px" alt="css3" />
                        </div>
                    </article>
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/js.png" height="100px" alt="javascript" />
                        </div>
                    </article>
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/python.png" height="100px" alt="python" />
                        </div>
                    </article>
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/mongodb.png" height="35px" alt="mongodb" />
                        </div>
                    </article>
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/postgresql.png" height="100px" alt="postgresql" />
                        </div>
                    </article>
                    <article className="skill">
                        <div className="skill-icon">
                            <img src="/img/expressjs.png" height="35px" alt="expressjs" />
                        </div>
                    </article>
                    <article className="skill">
                        <div className="skill-icon">
                            <p id="skill-restful">RESTful APIs</p>
                        </div>
                    </article>
                </div>
            </section>


            <section className="projects-section flex" id="projects">
                <h2>Projects</h2>
                <div className="projects-center wrapper">
                    <div className="project flex">
                        <img src="/img/breadcrud.png" alt="breadcrud" />
                        <a target="_blank" href="https://sandboxbreadcrud.herokuapp.com/">
                            <h3>BreadCrud</h3>
                        </a>    
                        <div className="project-center">
                            <p>Visit my App using server-side rendering for dynamic CRUD operations.</p>
                        </div>
                        <div className="github">
                            <a target="_blank" href="https://github.com/FabianUlises/breadcrud"><i className="fa brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </section>


            <section id="contact-banner">
                <div className="contact-banner-center" id="contact">
                    <article id="contact-banner-info">
                        <div className="user-info">
                        <img src="/img/me.jpg" alt="Fabian Carrillo" />
                            <h2>Fabian Carrillo</h2>
                        </div>
                        <div className="user-details">
                            <div className="user-about">
                                <h2>About me</h2>
                                <p>Hey! I'm a bi-lingual web developer from Los Angeles California. Feel free to contact me in regards to your project.</p>
                                <p>You can reach me via github or Linkedin!</p>
                            </div>
                            <div className="user-resume">
                                <a href="">Download my reusme</a>
                            </div>
                        </div>
                    </article>

                    <article id="contact-banner-form">
                    <h2>Contact me</h2>
                        <form action="#" className="contact-form flex">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Message">Message</label>
                                <textarea name="message" id="form-msg" cols="23" rows="10"></textarea>
                            </div>
                            <button>Submit</button>
                        </form>
                    </article>    
                </div>
            </section> 



            <footer>
                <div className="footer-content">
                    <div className="footer-icons flex">
                        <a target="_blank" href="https://www.linkedin.com/in/ulises-carrillo/"><i className="fa brands fa-linkedin"></i></a>
                        <a target="_blank" href="https://github.com/FabianUlises"><i className="fa brands fa-github"></i></a>
                        <a href="#header-section"><i className="fa brands fa-twitch"></i></a>
                    </div>
                    <div className="footer-text">
                        <p><span className='footer-highlight-text'>Made by</span> Fabian Carrillo</p>
                    </div>
                </div>
            </footer>
        </Default>
    )
}
module.exports = Index;