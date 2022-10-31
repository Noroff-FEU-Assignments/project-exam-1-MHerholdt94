import { scrollTop, goBack, hamburgerMenu } from "./components/siteButtons.js";
import "./components/newsletter.js";
// import { dateFormat } from "./components/date.js";

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

    const date = new Date(post.date);
    const day = date.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const postDate = day + ". " + month + " " + year;

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
                                    url(${post._embedded["wp:featuredmedia"]["0"].source_url})`;

    container.innerHTML = `<div class="post-details">
                                <div class="post-content">
                                    ${post.content.rendered}
                                </div>
                            </div>`;
  } catch (error) {
    console.log(error);
    container.innerHTML = "An error occured when fetching blog post details";
  }
}

postContent();
