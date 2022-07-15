import React from 'react'

const Projects = () => {
  return (
    <div>
        {/* Start of projects section */}
        <section className="projects-section flex" id="projects">
            {/* Project title */}
            <h2 className='page-title'>Projects</h2>
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
    </div>
  )
}

module.exports = Projects;
