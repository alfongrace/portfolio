import Profile from '../components/myProfile.png';
import '../components/styles.css';

function About() {
    return (
        <div>
            <h1>I'm</h1>
            <p> Grace Alfon. </p>
            <p> A junior software developer. </p>

            <br/>

            <div class="container">
                <img class="profile" src={Profile} alt="Grace Alfon" />
            </div>
            
            <br/>

            <div class="links" style={{ display: 'flex', justifyContent: 'space-between', width: '45%'}}>
                <a href="http://github.com/alfongrace">Github</a>
                <a href="https://www.linkedin.com/in/grace-alfon/">LinkedIn</a>
                <a href="https://www.alfongrace.ca">Website</a>
            </div>
        </div>
    );
}

export default About;