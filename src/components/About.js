//import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return ( 
        <div>
            <h1>About</h1>
            <h4>I am learning the React</h4>
            <UserClass />
            {/** Needed when props are passed <UserClass name = {"Likhith (class)"} location = {"Bangalore (class)"} /> */}
        </div>
    );
};

export default About;