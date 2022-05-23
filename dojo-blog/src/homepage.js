import { useState } from "react"; // useState is a type of hook 

const Home = () => {
    const [name, setName] = useState("Mario")
    const [age, setAge] = useState(25)

    const handleClick = (name) => {
        setName("Ahmed")
        setAge(15)
    } 

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={() => handleClick("shadd")}>Click me</button> 
            

            
        </div>
     );
}
 
export default Home;

/* Notes
- <button onClick={(e) => handleClick("shadd")}>Click me</button>
    e is the event info, you can pass to functions if you want... it is returned whenever event "onClick" happens 
-using normal variables is fine as long as u dont want them dynamic, if you do then use useState hooks, whenever you update its values then 
 component is re-rendered
- Key id in div is used by React to monitor each div, ensure it is unique. If we delete a div then react will know its ID and can delete easily


*/