//This is converting User.js functional component to Class based component
//To have the react to extend the component we need to add the import statement
import React from 'react'; 
import { MY_GIT_API } from '../utils/constants';

class UserClass extends React.Component{
    //This class based components have render method that returs some piece of jsx

    constructor(props) {
        super(props);//This is always mandatory
        //console.log(props);

        this.state = {
            //name: props.name,
            //count: 0,
            //count2: 2,
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
            
        }
        //For understanding we used console.log
        //console.log("constructor called");
    }

    async componentDidMount() {
        //console.log("componentDidMount called");
        //API call
        try{
            const data = await fetch(MY_GIT_API);
            const json = await data.json();

            this.setState({
                userInfo: json,
            })
            //console.log(json);
        }
        catch(error){
            console.log("Failed to fetch user info:", error);
        }
        
    }

    render() {

        //Destructure props
        //const {name, location} = this.props;

        //Destructure of State
        //const {count} = this.state;

        //console.log("Render called");

        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src = {avatar_url} alt = ""/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: </h4>

                {/** 
                <h4>Count: {count}</h4>
                <button onClick={() => {
                    //Never Update state variables directly like the below
                    //this.state.count = this.state.count + 1; this is wrong and create inconsistency
                    //Instead use setState method to update the state
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>
                    Increase Count
                </button>
                <button onClick={() => {
                    //Never Update state variables directly like the below
                    //this.state.count = this.state.count - 1; this is wrong and create inconsistency
                    //Instead use setState method to update the state
                    this.setState({
                        count: this.state.count - 1,
                    });
                }}>
                    Decrease Count
                </button>
                */}

            </div>
        );
    }
}

export default UserClass;