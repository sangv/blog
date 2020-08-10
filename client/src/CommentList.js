import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default ({postId}) => {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data || []);

    };

    /* Run fetchData only when component is first loaded*/
    useEffect(() => {
        fetchComments();
    }, [])

    //array of post objects
    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>
        {comment.content}
        </li>;
    })

    return <ul>{renderedComments}</ul>;
};