import React from 'react'

const Footer = () => {
  return (
    <div>
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
    </div>
  )
}
module.exports = Footer;