import React from 'react';

const Post = ({ body }) => {
    console.warn('body', body.seed);
    return (
        <div>
        {/* {body.map(post => {
            const { _id, title, content } = post;

            console.warn('post', post);
            return (
            <div> 
                <h2>{title}</h2>
                <p>{content}</p>
                <hr />
            </div>
            );
        })} */}
        </div>
    );
};

export default Post;