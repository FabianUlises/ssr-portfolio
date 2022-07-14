// Home page

// Everything in the Default tag will be a child of the  body tag.

const React = require('react');
const Default = require('./default');
const Header  = require('./components/Header.jsx');
const Skills = require('./components/Skills.jsx');
const Projects = require('./components/Projects.jsx');
const Contact = require('./components/Contact.jsx');
const Footer = require('./components/Footer.jsx');
const Index = () => {
    return(
        <Default>
            {/* Header component */}
            <Header />
            {/* Skills component */}
            <Skills />
            {/* Projects component */}
            <Projects />
            {/* Contact component */}
            <Contact />
            {/* Footer component */}
            <Footer />
        </Default>
    )
}
module.exports = Index;