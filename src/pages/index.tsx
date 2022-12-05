import Layout from '../components/Layout';
import Seo from '../components/Seo';
import * as React from 'react';

const IndexPage = () => {
    return (
        <Layout title="Welcome to DevStickers!">
            <div></div>
        </Layout>
    );
};

// Head = Head 제목 되는 곳
export function Head() {
    return <Seo title="Home"></Seo>;
}

export default IndexPage;
