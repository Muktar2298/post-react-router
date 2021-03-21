import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Post.css';


const Post = (props) => {
    const {id,title,body} = props.post;

   
    return (
        <div className='post-container'>
            <h1>This is post area</h1>
            <h3>Id : {id}</h3>
            <p>Title : {title}</p>
            {/* <p>Body : {body}</p> */}
            <Link to={'/post/' + id}><button >Show Post Details</button></Link>
        </div>
    );
};

export default Post;