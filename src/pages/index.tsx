import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PYCHero from "@site/src/components/PYCHero";
import PYCButton from "@site/src/components/Button";
import Head from '@docusaurus/Head';

export default function Home(): JSX.Element {
  return (
    <DefaultLayout
      title="Vertex Bump"
      description="Vertex Bump's website"
    >
<Head>
<script async src="https://arc.io/widget.min.js#89jChPDg"></script>
</Head>
      <PYCHero
        title="Vertex Bump"
        subtitle="An amazing discord bump bot"
        hasLogo={true}
      />
      <main className="content-wrap--home-page">
        Are you having trouble growing your server? Well do i have the bot for you! Come use Vertex Bump a fast and simple to use discord bump bot that bumps/advertise your servers directly to different servers. <a href="/intro">Learn more...</a>
      </main>
    </DefaultLayout>
  );
}
