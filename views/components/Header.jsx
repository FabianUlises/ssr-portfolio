import React from 'react'

const Header = () => {
  return (
        <div>
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
        </div>
  )
}

module.exports = Header;
