import { scrollTop, goBack, hamburgerMenu } from "./components/siteButtons.js";
import "./components/newsletter.js";
import { buttonScroll } from "./components/scrollEvent.js";

window.addEventListener("scroll", buttonScroll);
hamburgerMenu();
goBack();
scrollTop();

const title = document.querySelector("#title");
const container = document.querySelector(".post-container");
const postCenter = document.querySelector(".post-center");
const postHeader = document.querySelector("#postHeader");
const postSub = document.querySelector("#postSub");
const breadcrumb = document.querySelector("#postBreadcrumb");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url =
  "https://devholdt.no/timesignature/wp-json/wp/v2/posts/" + id + "?_embed";

async function postContent() {
  try {
    const response = await fetch(url);
    const post = await response.json();

    const postDate = new Date(post.date).toLocaleDateString("en-uk");

    title.innerHTML = `TIME/SIGNATURE | ${post.title.rendered}`;
    breadcrumb.innerHTML = `/ ${post.title.rendered}`;
    postHeader.innerHTML = `${post.title.rendered}`;
    postSub.innerHTML = `<span class="header-author">Mathias B. Herholdt</span>
                        <span class="header-date">${postDate}</span>
                        <span class="header-category">${post._embedded["wp:term"]["0"]["0"].name}</span>`;

    postCenter.style.background = `-webkit-linear-gradient(left,
                                    rgba(0,0,0,1) 0%,
                                    rgba(0,0,0,0.3) 15%,
                                    rgba(0,0,0,0.3) 85%,
                                    rgba(0,0,0,1) 100%),
                                    url(${post._embedded["wp:featuredmedia"]["0"].source_url}) center`;

    container.innerHTML = `<div>
                                <div class="post-content">
                                    ${post.content.rendered}
                                </div>
                            </div>`;

    const formSubmit = document.querySelector("#submit");
    formSubmit.classList.add("cta");

    const comments = document.getElementsByClassName(
      "wp-block-comment-template"
    );
    const commentsExist = comments.length > 0;

    function noComments() {
      const noComments = document.createElement("div");
      const noCoNode = document.createTextNode(
        "There are no comments here yet :("
      );
      noComments.classList.add("no-comments");
      noComments.appendChild(noCoNode);

      const commentsContainer = document.querySelector(".wp-block-group");
      const commentsChild = document.querySelector(".wp-block-comments");
      commentsContainer.insertBefore(noComments, commentsChild);
    }

    if (!commentsExist) {
      noComments();
    }

    const form = document.querySelector("#commentform");
    const commentPosted = document.querySelector(".comment-posted");

    form.addEventListener("submit", (event) => {
      const formData = new FormData(form);
      const request = new XMLHttpRequest();

      request.open(
        "POST",
        "https://devholdt.no/timesignature/wp-comments-post.php",
        true
      );

      commentPosted.style.opacity = "1";

      setTimeout(function () {
        commentPosted.style.opacity = "0";
        location.reload();
      }, 3000);

      request.send(formData);
      form.reset();
      event.preventDefault();
    });
  } catch (error) {
    console.log(error);
    container.innerHTML = "An error occured when fetching blog post details";
  }
}

postContent();
