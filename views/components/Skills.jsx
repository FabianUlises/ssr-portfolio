import React from 'react'

const Skills = () => {
  return (
    <div>
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
    </div>
  )
}

module.exports = Skills;
