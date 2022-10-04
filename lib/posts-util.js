import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts"); //posts is the name of folder

function getPostData(fileName) {
  const filePath = path.join(postDirectory, fileName);
  const fileContnet = fs.readFileSync(filePath, "utf-8");
  //matter return an object with two properties - data property for the metadata as a JS object and a content property
  const { data, content } = matter(fileContnet);

  const postSlug = fileName.repace(/\.md$/, ""); //removes the file extension
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
