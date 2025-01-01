import Card from 'react-bootstrap/Card';

function Projects () {
    return (
        <section className="projects">
            <h2>Projects</h2>
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
                    <div className="project-title">
                            <h3> Ray's Pizzeria </h3>
                        </div>
                        <div className="project-thumbnail">
                            <img className="project-image" src="/rays_pizzeria.jpg"></img>
                        </div>
                        <p>
                        This full-stack application is a mock pizzeria website where users
                        can signup, login, and add pizza to their cart as if they were ordering from an online menu.
                        </p>
                    <div className="btns">
                        <a className="project-link" href="https://github.com/raythomass/streaming-app">GitHub</a>
                        <a className="project-link" href="#">Deployed App</a>
                    </div>
                </section>
                <section className="project-ind">
                <div className="project-title">
                        <h3> Football Database </h3>
                    </div>
                    <div className="project-thumbnail">
                        <img className="project-image" src="/football-database.jpg"></img>
                    </div>
                    <p>
                        This application is designed to use Sports API to fetch and display information about 
                        any football player from any team. Also, Ticketmaster API is used to display tickets to
                        upcoming games and will direct the user to the Ticketmaster site.
                    </p>
                    <div className="btns">
                        <a className="project-link" href="https://github.com/raythomass/streaming-app">GitHub</a>
                        <a className="project-link" href="#">Deployed App</a>
                    </div>
                </section>
            </section>
            <section className="project-row">
                <section className="project-ind">
                <div className="project-title">
                        <h3> Text Editor </h3>
                    </div>
                    <div className="project-thumbnail">
                        <img className="project-image" src="/text-editor.jpg"></img>
                    </div>
                    <p>
                        This project was created to utilize Progressive Web Application technology to create
                        a text editor used for programming.
                    </p>
                    <div className="btns">
                        <a className="project-link" href="https://github.com/raythomass/streaming-app">GitHub</a>
                        <a className="project-link" href="#">Deployed App</a>
                    </div>
                </section>
                <section className="project-ind">
                <div className="project-title">
                        <h3> Weather Forecast </h3>
                    </div>
                    <div className="project-thumbnail">
                        <img className="project-image" src="/weather-forecast.jpg"></img>
                    </div>
                    <p>
                        The weather forecast app prompts a user to search a city. Upon entering a city, the weather forecast app will populate
                        the page with the forecast details of the city the user has searched.
                    </p>
                    <div className="btns">
                        <a className="project-link" href="https://github.com/raythomass/streaming-app">GitHub</a>
                        <a className="project-link" href="#">Deployed App</a>
                    </div>
                </section>
                <section className="project-ind">
                <div className="project-title">
                        <h3> Daily Scheduler </h3>
                    </div>
                    <div className="project-thumbnail">
                        <img className="project-image" src="/work-scheduler.jpg"></img>
                    </div>
                    <p>
                        This application allows the user to set a schedule for their workday
                        by adding notes and reminders for their daily tasks corresponding to the time they take place.
                    </p>
                    <div className="btns">
                        <a className="project-link" href="https://github.com/raythomass/streaming-app">GitHub</a>
                        <a className="project-link" href="#">Deployed App</a>
                    </div>
                </section>
            </section> 
        </section>
    )
}

export default Projects;
