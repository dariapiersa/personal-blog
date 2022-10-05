import { Fragment } from "react";
import FeaturedPost from "../components/HomePage/featured-posts";
import Hero from "../components/HomePage/hero";
import {getFeaturedPosts} from '../lib/posts-util'

function HomePage(props) {

  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps(){
  const featuredPost = getFeaturedPosts();

  return {
    props:{
      posts: featuredPost
    },
  }
}


export default HomePage;
