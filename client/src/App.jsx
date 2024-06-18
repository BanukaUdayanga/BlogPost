import React, {useState, useEffect} from "react";
import axios from "axios"

import PostList from "./PostList";

function App() {

    return (
        <div className="app">
            <h1>
                Welcome  
                    <span
                    className="txt-rotate"
                    data-period="2000"
                    data-rotate='[ " Blog Post ..." ]'></span>
            </h1>
            <PostList />
        </div>
    );
}

export default App;