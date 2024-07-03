function Projects () {
    return (
        <section className="projects">
            <h1>My Projects</h1>
            <section className="project-row">
                <section className="project-ind">
                    <div className="project-title">
                        <h3> Streaming App </h3>
                    </div>
                    <div className="project-thumbnail">
                        <img className="project-image" src="/streaming-app.png"></img>
                    </div>
                    <p>
                        This front-end project allows users to discover trending movies and tv shows, as well as
                        search for their favorites. Utilizing the Movie Database API, this projects allows users to
                        find almost any type of film mdeia they can think of.
                    </p>
                    <div className="btns">
                        <a className="project-link" href="https://github.com/raythomass/streaming-app">GitHub</a>
                        <a className="project-link" href="#">Deployed App</a>
                    </div>
                </section>
                <section className="project-ind">
                    <h3> Ray's Pizzeria </h3>
                </section>
                <section className="project-ind">
                    <h3> Football Database </h3>
                </section>
            </section>
            <section className="project-row">
                <section className="project-ind">
                    <h3> Text Editor </h3>
                </section>
                <section className="project-ind">
                    <h3> Weather Forecast </h3>
                </section>
                <section className="project-ind">
                    <h3> Daily Scheduler </h3>
                </section>
            </section> 
        </section>
    )
}

export default Projects;