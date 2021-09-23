import Head from "next/head";
import Image from "next/image";
import Menu from "../components/Menu";
import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
