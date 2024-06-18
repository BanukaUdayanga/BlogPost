import React, {useState, useEffect} from "react";
import axios from "axios";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";

function PostList() {

    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        fetchingData();
    }, []);

    const fetchingData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/posts");
            const result = response.data;
            setBackendData(result);
        } catch (error) {
            console.error(error.message);
        }
    }

    // Delete Function
    const deletePost = async (id) => {
        try {
            const postId = id;
            const post = await fetch(`http://localhost:3000/posts/${postId}`, {
                method: "DELETE"
            });
            fetchingData();
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            <div className="create-post">
                <CreatePost />
            </div>
            {backendData.map((blog) => {
                return <div className="blogPost" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <p>{blog.author}</p>
                    <p>{blog.date}</p>
                    <div>
                        <div>
                            <EditPost 
                                id={blog.id} 
                                post={{
                                    title: blog.title,
                                    content: blog.content,
                                    author: blog.author
                                }}/>
                        </div>
                        <button className="btn-delete" onClick={() => {deletePost(blog.id)}}>Delete</button>
                    </div>
                </div>
            })}
        </div>
    );
}

export default PostList;