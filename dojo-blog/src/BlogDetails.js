import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams() // this will return the id variable from the url that we are in
    const {data: blog, error, isPending} = useFetch("http://localhost:8000/blogs/" + id)
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    
    }

    return ( 
        <div className="blog-details">
            { error && <div> {error} </div>}
            { isPending && <div> Loading... </div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author} </p>
                    <div> {blog.body} </div>
                </article>
            ) }      
            <button className="button" onClick={handleDelete}>Delete</button>  
            </div>
     );
}
 
export default BlogDetails;