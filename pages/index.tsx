import Head from "next/head";
import { Inter } from "next/font/google";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lam Nguyen | Front-end Web developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}