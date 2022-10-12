import { Fragment } from "react";
import Head from "next/head";
import FeaturedPost from "../components/HomePage/featured-posts";
import Hero from "../components/HomePage/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Daria's Blog</title>
        <meta
          name="description"
          content="I post aobut programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPost = getFeaturedPosts();

  return {
    props: {
      posts: featuredPost,
    },
  };
}

export default HomePage;
