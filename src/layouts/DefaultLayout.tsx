import React from 'react';
import Head from '@docusaurus/Head';
import Layout from "@theme/Layout";

import { site } from '@site/src/constants/site';
// import '../scss/main.scss';

interface DefaultLayoutProps {
    title?: string,
    description?: string
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{ title } - { site.tagline }</title>
                <meta name="description" content={ description } />
                <meta property="og:description" content="Corrupt Bump is a fast and simple to use discord bump bot that bumps/advertise your servers directly to different servers." />
                <meta property="og:title" content="Corrupt Bump" />
                <meta property="og:image" content="https://imgur.com/BHyNRD2.png"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="theme-color" content="#7FD858" />
            </Head>
            <Layout>
                { children }
            </Layout>
        </>
    );
};

export default DefaultLayout;
