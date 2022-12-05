import React from 'react';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

export default function Blog() {
    // const [blogPosts, setBlogPosts] = useState();
    // useEffect(() => {
    //     fetchBlogPosts();
    // }, []);
    return (
        <Layout title="Blog">
            <p>The most recent news from my shop.</p>
            {/* {blogPosts} */}
        </Layout>
    );
}

export function Head() {
    return <title>Blog</title>;
}
