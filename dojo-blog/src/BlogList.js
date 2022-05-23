const BlogList = ({blogs, title, handleDelete}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <button onClick={()=> handleDelete(blog.id)}>Delete</button>
                    </div>
                ))
            }
                       
        </div>
     );
}
 
export default BlogList;

/* Notes
- Key id in div is used by React to monitor each div, ensure it is unique. If we delete a div then react will know its ID and can delete easily
- props will hold all of our passed paramters. 
- you can pass props and do props.blogs and props.title or you can destructure there and then. Works the same way.
*/