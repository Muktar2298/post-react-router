import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const PostInformation = (props) => {

    // let history = useHistory();
    // const handleBackToHome = () => {
    //     history.push('/');
    // }

    // --read or access route perameter --//
    const {id} = useParams();
    // --data load based on route perameter --//
    const [postInfo,setPostInfo] = useState({});
    useEffect(() =>{
        const url  = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPostInfo(data))
        .catch(error => console.log(error));
    },[])
    return (
        <div>
            <h4>This is Post Information</h4>
           <p>Post Id :{postInfo.id}</p>
            <p>Title:{postInfo.title}</p>
            <p>Post body :{postInfo.body}</p>
            {/* <button onClick={handleBackToHome}>Back to Home</button> */}
        </div>
    );
};

export default PostInformation;