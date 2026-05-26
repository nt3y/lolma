const bloggerConfig = {
  apiKey: "AIzaSyD7WXWKjrzfbzDz8Lg0v0t0e2Xq3ock0Fk",
  blogId: "3486139694132126046",
};

const fallbackPostImage = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg";
const postDetail = document.querySelector("#postDetail");

function stripHtml(html = "") {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function getPostImage(content = "") {
  const parsed = new DOMParser().parseFromString(content, "text/html");
  return parsed.querySelector("img")?.src || fallbackPostImage;
}

function sanitizeBloggerHtml(content = "") {
  const doc = new DOMParser().parseFromString(content, "text/html");
  doc.querySelectorAll("script, iframe, object, embed, style").forEach((node) => node.remove());
  doc.querySelectorAll("*").forEach((node) => {
    [...node.attributes].forEach((attr) => {
      const name = attr.name.toLowerCase();
      const value = attr.value.toLowerCase();
      if (name.startsWith("on") || value.startsWith("javascript:")) {
        node.removeAttribute(attr.name);
      }
    });
  });
  return doc.body.innerHTML;
}

function renderPost(post) {
  const image = getPostImage(post.content);
  const date = new Date(post.published).toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  document.title = `${post.title} | LOLMA`;
  postDetail.innerHTML = `
    <header class="post-hero" style="--post-image: url('${image}')">
      <div>
        <p class="eyebrow">LOLMA News &middot; ${date}</p>
        <h1>${post.title}</h1>
      </div>
    </header>
    <div class="post-body">
      ${sanitizeBloggerHtml(post.content)}
    </div>
  `;

  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
}

async function loadPost() {
  const postId = new URLSearchParams(window.location.search).get("id");
  if (!postId) {
    postDetail.innerHTML = `<div class="post-empty"><h1>Post not found</h1><p>Go back to News and choose a post.</p></div>`;
    return;
  }

  try {
    const { apiKey, blogId } = bloggerConfig;
    const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${encodeURIComponent(postId)}?key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Post request failed");
    renderPost(await response.json());
  } catch (error) {
    postDetail.innerHTML = `
      <div class="post-empty">
        <h1>Could not load this post</h1>
        <p>The Blogger API did not return this article. Try refreshing or opening it again from News.</p>
      </div>
    `;
  }
}

loadPost();

if (window.lucide) {
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 1.8,
    },
  });
}
