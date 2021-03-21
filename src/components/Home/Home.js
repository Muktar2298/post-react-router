import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {

    const [posts,setPosts] = useState([]);
    // --data load --//
    useEffect(() => {
            const url = `https://jsonplaceholder.typicode.com/posts`
            fetch(url)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error));
    },[])
    return (
        <div>
            <h1>This is Home!!</h1>
            <h2>Total Posts : {posts.length}</h2>
            {
                posts.map(post => <Post post ={post}></Post>)
            }
        </div>
    );
};

export default Home;