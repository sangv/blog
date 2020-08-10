import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');

        setPosts(res.data);

    };

    /* Run fetchPosts only when component is first loaded*/
    useEffect(() => {
    fetchPosts();
    }, [])

    //array of post objects
    const renderedPosts = Object.values(posts).map(post => {
        return <div className="card" 
        style={{width:'30%',marginBottom:'20px'}}
        key={post.id} //needed for react
        >
            <div className="card-body">
                <h3>{post.title}</h3>
            </div>
        </div>;
    })

    return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>;
};