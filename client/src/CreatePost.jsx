import React, {useState} from "react";
import axios from "axios";

function CreatePost() {

    const [inputData, setInputData] = useState({
        title: "",
        content: "",
        author: ""
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
        if (inputData.content == "") {

            alert("Cannot empty content Field ...");

        } else {
            try {
                const response = await fetch("http://localhost:3000/posts/", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(inputData)
                });
                window.location = "/";
            } catch (error) {
                console.error(error.message);
            }
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="title" name="title" value={inputData.title} onChange={handleChange}/>
                <input type="text" placeholder="content" name="content" value={inputData.content} onChange={handleChange}/>
                <input type="text" placeholder="author" name="author" value={inputData.author} onChange={handleChange}/>
                <button className="btn-submit" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreatePost;