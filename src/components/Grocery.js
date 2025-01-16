const Grocery = () => {

    //Assume this will have a lot of child components and we need to bundle it seperately
    //This will come only when it is called in a seperate bundle and this way we can optimise
    //These files can be seen when the project is built and in the network --> js when we use inspect

    return ( 
        <div>
            <h1>Grocery Page</h1>
            <h4>Here we are using the concept of lazy loading</h4>
        </div>
    );
}

export default Grocery;