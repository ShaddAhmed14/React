import { useState, useEffect } from "react"; // useState is a type of hook 
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs") // this is ur custom hook
    // reading object and renaming data as blogs 
    
    return ( 
        <div className="home">
            { error && <div> {error} </div>}
            { isPending && <div> Loading... </div> }
            { blogs && <BlogList blogs={blogs} title={"All Blogs!"}/>}
        </div>
     );
}
 
export default Home;

/* Notes
- CSS is applied throughout, even if not called in header... so if you want specific css add into style tag of html. 
- <button onClick={(e) => handleClick("shadd")}>Click me</button>
    e is the event info, you can pass to functions if you want... it is returned whenever event "onClick" happens 
- using normal variables is fine as long as u dont want them dynamic, if you do then use useState hooks, whenever you update its values then 
 component is re-rendered
- BlogList is a component so we can re-use it since similar work in coming features.
- Instead of passing blogs you can do smth like blogs.filter((blog) => blog.author === "mario") ... this will filter out and return only
    the blogs of mario
- useEffect is called everytime component is rendered or re-rendered
- useEffect is a hook as well. Hooks are like pre-defined functions that help us write react. 
- Make sure not to setState in useEffect bcz itll trigger an infinite loop, bcz remember... use Effect runs everytime you re-render ie update
    state
- useEffect(()=> {}, []) will make useEffect only run once... when it renders and never again. You can pass dependencies to this array to make
    it run on specific states or smth
- useEffect(()=> {}, [name]) will make useEffect only runs at render and when name state changes. So itll not work run when blogs are changed
    only at start and when name is updated... name is the dependency. 
- doing blogs && ... basically means... if blogs is null then dont go right else call component. This is error handling for us. If
    blogs is null and data is not yet fetched then dont crash, just print nothing. This is called conditional rendering  
*/