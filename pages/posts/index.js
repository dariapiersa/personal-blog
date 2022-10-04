import AllPosts from "../../components/posts/all-posts";


const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next Js is a the React framework for production - it makes buildind fullstack React apps and sites a breeze ans ships with built-in SSR.",
      date: "2022-09-27",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next Js is a the React framework for production - it makes buildind fullstack React apps and sites a breeze ans ships with built-in SSR.",
      date: "2022-09-27",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next Js is a the React framework for production - it makes buildind fullstack React apps and sites a breeze ans ships with built-in SSR.",
      date: "2022-09-27",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next Js is a the React framework for production - it makes buildind fullstack React apps and sites a breeze ans ships with built-in SSR.",
      date: "2022-09-27",
    },
  ];

function AllPostsPage(){
    
    return <AllPosts posts={DUMMY_POSTS}/>
}
export default AllPostsPage;