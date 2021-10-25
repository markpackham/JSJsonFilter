// query selectors
let posts = [];
let filteredPosts = [];
const POSTS_TO_SHOW = 6;
let maxDisplayLimit = POSTS_TO_SHOW;
const postContainer = document.querySelector(".post-container");
const search = document.querySelector('[type="search"]');

// create cards and update UI
function generatePost(post) {
  const article = document.createElement("article");
}

function loadPosts() {
  const frag = document.createDocumentFragment();
  posts.slice(0, maxDisplayLimit);
  map((post) => frag.appendChild(generatePost(post)));
}

// fetch & parse data
async function fetchPosts() {
  await fetch("./posts.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      posts = data;
      loadPosts();
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
fetchPosts();

// update number of posts with button click

// filter for search
