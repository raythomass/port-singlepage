function About() {
    return(
        <>
        <section className="about">
            <h1>About Me</h1>
            <p className="about-summary">
            I graduated from Arizona State University in February 2024 with a certificate of completion from the Full-Stack Web Development Bootcamp. 
            I also graduated from Grand Canyon University in 2021 with a Bachelor's Degree in Advertising and Graphic Design. I am excited and motivated 
            to pair my knowledge of multiple coding languages, frameworks, and technologies with my background in graphic and web design to create business 
            solutions and solve both front-end and back-end problems. Having knowledge of both design and development, I have a wide variety of skills that 
            are useful in developing web applications and websites.
            </p>

            <div className="education">
                <h3 className="education-heading">Education</h3>
                <div className="education-cards">
                    <div className="education-card-content">
                        <h4 className="education-title">Certificate of Completion, Full-Stack Web Development</h4>
                        <h5 className="education-school">Arizona State University</h5>
                        <ul>
                            <li className="education-list">Developed and deployed web applications using industry standard programming technologies</li>
                            <li className="education-list">Collaborated on projects to understand
                                project management within a development team</li>
                        </ul>
                    </div>
                    <div className="education-card-content">
                        <h4 className="education-title">Bachelor's of Fine Art, Advertising and
                        Graphic Design</h4>
                        <h5 className="education-school">Grand Canyon University</h5>
                        <ul>
                            <li className="education-list">Crafted and currated advertising packages using multiple design mediums</li>
                            <li className="education-list">Designed web applications and websites using industry leading design software</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;