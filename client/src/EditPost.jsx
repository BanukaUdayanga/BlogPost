import React, {useState} from "react";

function EditPost(props) {

    const [isClick, setIsClick] = useState(false);
    const [inputData, setInputData] = useState({
        title: props.post.title,
        content: props.post.content,
        author: props.post.author
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setInputData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const post = await fetch(`http://localhost:3000/posts/${props.id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(inputData)
            });
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    // Handle Edit Button
    const handleClick = () => {
        return setIsClick(!isClick);
    }

    return (
        <div>
            <button className="btn-edit" onClick={handleClick}>Edit</button>
            <form className="edit-post" style={{display: isClick ? "block" : "none"}} onSubmit={handleSubmit}>
                <input type="text" placeholder="title" name="title" value={inputData.title} onChange={handleChange}/>
                <input type="text" placeholder="content" name="content" value={inputData.content} onChange={handleChange}/>
                <input type="text" placeholder="author" name="author" value={inputData.author} onChange={handleChange}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default EditPost;