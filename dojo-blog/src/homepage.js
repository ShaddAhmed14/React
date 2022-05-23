import { useState } from "react"; // useState is a type of hook 
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "A new day", body: "lorem ipsum", author: "mario", id:1},
        {title: "Another day", body: "lorem ipsum", author: "shadd", id:2},
        {title: "Sadness", body: "lorem ipsum", author: "ahmed", id:3},
    ])

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlog) 
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={"All Blogs!"} handleDelete={handleDelete}/>
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
*/