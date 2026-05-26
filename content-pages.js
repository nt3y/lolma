const pagePosts = {
  blog: [
    {
      tag: "Patch",
      date: "May 25",
      title: "Patch Notes Watch: What Moroccan SoloQ Should Abuse",
      excerpt: "Champion priorities, bans, and ranked picks for the current week.",
    },
    {
      tag: "Community",
      date: "May 22",
      title: "Inside LOLMA: The Moroccan Rift Hub",
      excerpt: "A look at community nights, Discord events, and new player onboarding.",
    },
    {
      tag: "Guide",
      date: "May 18",
      title: "How To Connect Blogger To LOLMA",
      excerpt: "Use the Blogger API config below to replace these examples with live posts.",
    },
  ],
  courses: [
    {
      tag: "Mid Lane",
      date: "18 min",
      title: "Wave Control for Gold to Emerald",
      excerpt: "A practical course on slow pushes, resets, and roam timing.",
    },
    {
      tag: "Jungle",
      date: "24 min",
      title: "Tracking the Enemy Jungler",
      excerpt: "Learn camp timers, lane states, and safe invade windows.",
    },
    {
      tag: "ADC",
      date: "16 min",
      title: "Teamfight Positioning",
      excerpt: "Spacing, target selection, and late-game fight patterns.",
    },
  ],
  tournaments: [
    {
      tag: "Open",
      date: "Jun 01",
      title: "Casablanca Clash Community Cup",
      excerpt: "Weekend bracket for Moroccan teams with streamed semifinals.",
    },
    {
      tag: "Registration",
      date: "Jun 08",
      title: "LOLMA 1v1 Mid Lane Night",
      excerpt: "A fast single-elimination event for mechanics and bragging rights.",
    },
    {
      tag: "Finals",
      date: "Jun 15",
      title: "Rift Masters Morocco",
      excerpt: "Top community squads compete for the monthly leaderboard crown.",
    },
  ],
};

const bloggerConfig = {
  apiKey: "AIzaSyD7WXWKjrzfbzDz8Lg0v0t0e2Xq3ock0Fk",
  blogId: "3486139694132126046",
  labels: {
    blog: "",
    courses: "Courses",
    tournaments: "Tournaments",
  },
};

function stripHtml(html = "") {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function renderPosts(posts) {
  const list = document.querySelector("#postList");
  if (!list) return;

  list.innerHTML = posts
    .map(
      (post) => `
        <article class="post-card">
          <div class="blog-meta">
            <span>${post.tag}</span>
            <span>${post.date}</span>
          </div>
          <h2>${post.title}</h2>
          <a class="ghost-button" href="${post.id ? `./post.html?id=${encodeURIComponent(post.id)}` : "#"}"><i data-lucide="arrow-up-right"></i>Read</a>
        </article>
      `,
    )
    .join("");
}

async function loadBloggerPagePosts() {
  const page = document.body.dataset.page || "blog";
  renderPosts(pagePosts[page] || pagePosts.blog);

  const { apiKey, blogId, labels } = bloggerConfig;
  if (apiKey.startsWith("YOUR_") || blogId.startsWith("YOUR_")) return;

  const label = labels[page] ?? "";
  const labelParam = label ? `&labels=${encodeURIComponent(label)}` : "";
  const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&maxResults=9${labelParam}`;
  const response = await fetch(url);
  const data = await response.json();

  renderPosts(
    (data.items || []).map((post) => ({
      tag: label || "News",
      date: new Date(post.published).toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      id: post.id,
      title: post.title,
      excerpt: `${stripHtml(post.content).slice(0, 150)}...`,
    })),
  );
}

loadBloggerPagePosts().then(() => {
  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
});
