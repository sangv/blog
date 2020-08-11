import React from 'react';

export default ({comments}) => {
    
    //array of post objects
    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>
        {comment.content}
        </li>;
    })

    return <ul>{renderedComments}</ul>;
};