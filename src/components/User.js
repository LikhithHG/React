const User = ({name}) => {

    //Convert this functional component to Class based component UserClass.js
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: Bengaluru</h3>
            <h4>Contact: </h4>
        </div>
    );
};

export default User;