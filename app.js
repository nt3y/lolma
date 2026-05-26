const rankBase =
  "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-mini-crests";

const rankIcons = {
  Challenger: `${rankBase}/challenger.png`,
  Grandmaster: `${rankBase}/grandmaster.png`,
  Master: `${rankBase}/master.png`,
  Diamond: `${rankBase}/diamond.png`,
  Emerald: `${rankBase}/emerald.svg`,
  Platinum: `${rankBase}/platinum.png`,
  Gold: `${rankBase}/gold.png`,
  Silver: `${rankBase}/silver.png`,
  Bronze: `${rankBase}/bronze.png`,
  Iron: `${rankBase}/iron.png`,
};

const avatar = (id) =>
  `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/profileicon/${id}.png`;
const defaultUserIcon = avatar(29);
const champIcon = (name) =>
  `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${name}.png`;
const flagBadge = (player) =>
  `<span class="flag-pill flag-${player.flag.toLowerCase()}" title="${player.country}">${player.flag}</span>`;
const flagEmoji = {
  MA: "🇲🇦",
  DZ: "🇩🇿",
  TN: "🇹🇳",
};

const leaders = [
  { place: 1, name: "BabyKnight", riotId: "BabyKnight#MA1", country: "Morocco", flag: "MA", rank: "Challenger", record: "92 - 41", wr: 69, kda: "4.82", icon: defaultUserIcon, champions: ["Yasuo", "Azir", "Sylas", "Leblanc"] },
  { place: 2, name: "Rootless", riotId: "Rootless#RFT", country: "Morocco", flag: "MA", rank: "Grandmaster", record: "81 - 45", wr: 64, kda: "3.71", icon: defaultUserIcon, champions: ["LeeSin", "Graves", "Viego", "Nidalee"] },
  { place: 3, name: "Teodorr2000", riotId: "Teodorr#DZ1", country: "Algeria", flag: "DZ", rank: "Master", record: "74 - 49", wr: 60, kda: "3.18", icon: defaultUserIcon, champions: ["Jinx", "Kaisa", "Ezreal", "Caitlyn"] },
  { place: 4, name: "Rens", riotId: "Rens#MA2", country: "Morocco", flag: "MA", rank: "Diamond", record: "66 - 44", wr: 60, kda: "2.94", icon: defaultUserIcon, champions: ["Riven", "Camille", "Fiora", "Aatrox"] },
  { place: 5, name: "Edwin", riotId: "Edwin#TN1", country: "Tunisia", flag: "TN", rank: "Diamond", record: "59 - 42", wr: 58, kda: "3.23", icon: defaultUserIcon, champions: ["Thresh", "Rakan", "Nautilus", "Braum"] },
  { place: 6, name: "FlyWithMe", riotId: "FlyWithMe#MA", country: "Morocco", flag: "MA", rank: "Emerald", record: "52 - 39", wr: 57, kda: "2.61", icon: defaultUserIcon, champions: ["Ahri", "Orianna", "Syndra", "Taliyah"] },
  { place: 7, name: "BigBob007", riotId: "BigBob#DZ", country: "Algeria", flag: "DZ", rank: "Platinum", record: "44 - 37", wr: 54, kda: "2.14", icon: defaultUserIcon, champions: ["Darius", "Garen", "Sett", "Mordekaiser"] },
  { place: 8, name: "AtlasJungler", riotId: "Atlas#JGL", country: "Morocco", flag: "MA", rank: "Gold", record: "41 - 36", wr: 53, kda: "2.32", icon: defaultUserIcon, champions: ["Khazix", "JarvanIV", "Ekko", "Nocturne"] },
  { place: 9, name: "NoraSupport", riotId: "Nora#SUP", country: "Tunisia", flag: "TN", rank: "Silver", record: "38 - 35", wr: 52, kda: "2.89", icon: defaultUserIcon, champions: ["Lulu", "Janna", "Milio", "Soraka"] },
  { place: 10, name: "MarrakechADC", riotId: "Marrakech#ADC", country: "Morocco", flag: "MA", rank: "Bronze", record: "35 - 34", wr: 51, kda: "2.01", icon: defaultUserIcon, champions: ["Ashe", "MissFortune", "Sivir", "Tristana"] },
];

const blogs = [
  {
    id: "mock-patch-notes",
    title: "Patch Notes Watch: What Moroccan SoloQ Should Abuse",
    date: "May 25",
    tag: "Meta",
    excerpt: "A quick read on high-impact champions, ban priorities, and role-specific picks for this week.",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",
    url: "#",
  },
  {
    id: "mock-casablanca-clash",
    title: "Casablanca Clash Community Cup Opens Registration",
    date: "May 22",
    tag: "Tournament",
    excerpt: "Teams can register for the next weekend bracket with streamed semifinals and community casting.",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
    url: "#",
  },
  {
    id: "mock-blogger-api",
    title: "How To Connect Blogger API",
    date: "May 18",
    tag: "Dev",
    excerpt: "Replace this mock list with your Blogger API key and blog ID to load live posts directly.",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg",
    url: "#",
  },
];

const streamers = [
  { name: "MikoLoL", riotId: "Miko#MA1", game: "Ranked grind - Mid lane", live: true, viewers: 284, img: defaultUserIcon },
  { name: "AtlasJungler", riotId: "Atlas#JGL", game: "VOD review + jungle pathing", live: true, viewers: 118, img: defaultUserIcon },
  { name: "NoraSupport", riotId: "Nora#SUP", game: "DuoQ with viewers", live: false, viewers: 0, img: defaultUserIcon },
  { name: "CasawiADC", riotId: "Casawi#ADC", game: "Scrims and flex queue", live: false, viewers: 0, img: defaultUserIcon },
];

const discordUsers = [
  { name: "Miko", tag: "@mikolol", points: "18.4k XP", status: "Tournament host", icon: defaultUserIcon },
  { name: "Atlas", tag: "@atlasjgl", points: "15.2k XP", status: "LFG captain", icon: defaultUserIcon },
  { name: "Nora", tag: "@norasupport", points: "13.8k XP", status: "Coach helper", icon: defaultUserIcon },
  { name: "RabatMid", tag: "@rabatmid", points: "11.6k XP", status: "Scrim finder", icon: defaultUserIcon },
];

const videos = [
  { title: "Wave Control for Gold to Emerald", coach: "Coach Anir", time: "Locked" },
  { title: "Jungle Tracking Without Vision", coach: "Coach Salma", time: "Locked" },
  { title: "ADC Teamfight Positioning", coach: "Coach Yassine", time: "Locked" },
];

const lfgPosts = [
  { name: "MarrakechADC", riotId: "Marrakech#ADC", mode: "Ranked Solo/Duo", range: ["Silver", "Platinum"], average: "Gold", role: "Support", roleIcon: "shield-plus", posted: "2 min ago", icon: defaultUserIcon },
  { name: "AtlasJungler", riotId: "Atlas#JGL", mode: "Flex", range: ["Diamond", "Master"], average: "Emerald", role: "Top + Mid", roleIcon: "swords", posted: "8 min ago", icon: defaultUserIcon },
  { name: "NoraSupport", riotId: "Nora#SUP", mode: "ARAM", range: ["Iron", "Challenger"], average: "Any", role: "Chill players", roleIcon: "sparkles", posted: "14 min ago", icon: defaultUserIcon },
  { name: "RabatMid", riotId: "Rabat#MID", mode: "Ranked Solo/Duo", range: ["Diamond", "Master"], average: "Diamond", role: "Jungle duo", roleIcon: "route", posted: "21 min ago", icon: defaultUserIcon },
];

const leaderCards = document.querySelector("#leaderCards");
const leaderRows = document.querySelector("#leaderRows");
const blogGrid = document.querySelector("#blogGrid");
const streamerList = document.querySelector("#streamerList");
const videoList = document.querySelector("#videoList");
const lfgList = document.querySelector("#lfgList");
const discordUsersList = document.querySelector("#discordUsers");
const statNumbers = document.querySelectorAll("[data-count]");

const fallbackPostImage = blogs[0].image;

function stripHtml(html = "") {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function getPostImage(content = "") {
  const parsed = new DOMParser().parseFromString(content, "text/html");
  const image = parsed.querySelector("img");
  return image?.src || fallbackPostImage;
}

function renderBlogCards(posts) {
  if (!blogGrid) return;

  blogGrid.innerHTML = posts
    .map(
      (post) => `
        <a class="blog-card" href="./post.html?id=${encodeURIComponent(post.id)}" style="--post-image: url('${post.image}')">
          <div class="blog-meta">
            <span>${post.tag}</span>
            <span>${post.date}</span>
          </div>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <span class="post-read"><i data-lucide="arrow-up-right"></i>Read</span>
        </a>
      `,
    )
    .join("");

  if (window.lucide) window.lucide.createIcons();
}

if (leaderCards) {
  leaderCards.innerHTML = leaders
    .slice(0, 3)
    .map(
      (player) => `
      <article class="leader-card podium-${player.place}">
        <span class="podium-number">${player.place}</span>
        <img class="rank-emblem" src="${rankIcons[player.rank]}" alt="${player.rank} rank icon" />
        <div class="player-row">
          <img class="player-avatar" src="${player.icon}" alt="${player.name} profile icon" />
          <div>
            <strong>${player.name}</strong>
            <span class="country-line">${flagBadge(player)} ${player.country} &middot; ${player.rank}</span>
          </div>
        </div>
        <div class="stat-grid">
          <div class="stat-line"><span>Record</span><strong>${player.record}</strong></div>
          <div class="stat-line"><span>Winrate</span><strong>${player.wr}%</strong></div>
          <div class="stat-line"><span>KDA</span><strong>${player.kda}</strong></div>
        </div>
      </article>
    `,
    )
    .join("");
}

if (leaderRows) {
  leaderRows.innerHTML = leaders
    .map(
      (player) => `
      <tr>
        <td>${player.place}</td>
        <td>
          <div class="table-player">
            <img src="${player.icon}" alt="${player.name} profile icon" />
            <div>
              <strong>${player.name}</strong>
              <span>${player.riotId}</span>
            </div>
          </div>
        </td>
        <td>${flagBadge(player)}</td>
        <td><img class="mini-rank" src="${rankIcons[player.rank]}" alt="" /> ${player.rank}</td>
        <td>
          <div class="champion-stack">
            ${player.champions
              .slice(0, 4)
              .map((champion) => `<img src="${champIcon(champion)}" alt="${champion}" title="${champion}" />`)
              .join("")}
          </div>
        </td>
        <td>${player.record}</td>
        <td>
          <div class="winrate-meter" style="--wr:${player.wr}%">
            <strong>${player.wr}%</strong>
            <span></span>
          </div>
        </td>
        <td>${player.kda}</td>
      </tr>
    `,
    )
    .join("");
}

renderBlogCards(blogs);

if (streamerList) {
  streamerList.innerHTML = streamers
    .map(
      (streamer) => `
      <article class="streamer">
        <div>
          <img src="${streamer.img}" alt="${streamer.name} avatar" />
          <div>
            <strong>${streamer.name}</strong>
            <span>${streamer.riotId} · ${streamer.game}</span>
          </div>
        </div>
        <span class="live-pill ${streamer.live ? "" : "is-offline"}">${streamer.live ? `LIVE · ${streamer.viewers}` : "OFFLINE"}</span>
      </article>
    `,
    )
    .join("");
}

if (discordUsersList) {
  discordUsersList.innerHTML = discordUsers
    .map(
      (user, index) => `
      <article class="discord-user">
        <span class="discord-rank">#${index + 1}</span>
        <img src="${user.icon}" alt="${user.name} Discord avatar" />
        <div>
          <strong>${user.name}</strong>
          <span>${user.tag} · ${user.status}</span>
        </div>
        <em>${user.points}</em>
      </article>
    `,
    )
    .join("");
}

if (videoList) {
  videoList.innerHTML = videos
    .map(
      (video) => `
      <article class="video-item">
        <div>
          <span class="video-thumb"><i data-lucide="lock"></i></span>
          <div>
            <strong>${video.title}</strong>
            <span>${video.coach}</span>
          </div>
        </div>
        <span>${video.time}</span>
      </article>
    `,
    )
    .join("");
}

if (lfgList) {
  lfgList.innerHTML = lfgPosts
    .map(
      (post) => `
      <article class="lfg-card">
        <div class="lfg-main">
          <div class="lfg-player">
            <img src="${post.icon}" alt="${post.name} profile icon" />
            <div>
              <strong>${post.name}</strong>
              <span>${post.riotId}</span>
            </div>
          </div>
          <small>${post.posted}</small>
        </div>
        <div class="lfg-rank-range">
          <span>
            <img src="${rankIcons[post.range[0]] || rankIcons.Bronze}" alt="" />
            ${post.range[0]}
          </span>
          <i data-lucide="arrow-right"></i>
          <span>
            <img src="${rankIcons[post.range[1]] || rankIcons.Challenger}" alt="" />
            ${post.range[1]}
          </span>
          <strong>Avg ${post.average}</strong>
        </div>
        <div class="lfg-tags">
          <span>${post.mode}</span>
          <span><i data-lucide="${post.roleIcon}"></i>${post.role}</span>
        </div>
        <button class="ghost-button copy-riot" type="button" data-riot-id="${post.riotId}"><i data-lucide="copy"></i>Copy</button>
      </article>
    `,
    )
    .join("");

  lfgList.querySelectorAll(".copy-riot").forEach((button) => {
    button.addEventListener("click", async () => {
      const riotId = button.dataset.riotId;
      try {
        await navigator.clipboard.writeText(riotId);
      } catch (error) {
        const fallback = document.createElement("textarea");
        fallback.value = riotId;
        fallback.setAttribute("readonly", "");
        fallback.style.position = "fixed";
        fallback.style.opacity = "0";
        document.body.appendChild(fallback);
        fallback.select();
        document.execCommand("copy");
        fallback.remove();
      }

      button.innerHTML = `<i data-lucide="check"></i>Copied`;
      if (window.lucide) window.lucide.createIcons();
      window.setTimeout(() => {
        button.innerHTML = `<i data-lucide="copy"></i>Copy`;
        if (window.lucide) window.lucide.createIcons();
      }, 1200);
    });
  });
}

document.querySelectorAll(".segmented button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segmented button").forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
  });
});

const leaderboardPanel = document.querySelector(".leaderboard-panel");

if (leaderboardPanel) {
  leaderboardPanel.addEventListener("mousemove", (event) => {
    const rect = leaderboardPanel.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 2.2;
    const rotateX = (0.5 - y) * 1.8;

    leaderboardPanel.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
    leaderboardPanel.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
    leaderboardPanel.style.setProperty("--glow-x", `${(x * 100).toFixed(1)}%`);
    leaderboardPanel.style.setProperty("--glow-y", `${(y * 100).toFixed(1)}%`);
  });

  leaderboardPanel.addEventListener("mouseleave", () => {
    leaderboardPanel.style.setProperty("--tilt-x", "0deg");
    leaderboardPanel.style.setProperty("--tilt-y", "0deg");
    leaderboardPanel.style.setProperty("--glow-x", "50%");
    leaderboardPanel.style.setProperty("--glow-y", "50%");
  });
}

function renderStats() {
  statNumbers.forEach((stat) => {
    const target = Number(stat.dataset.count);
    const suffix = stat.dataset.suffix || "";
    stat.textContent = `${Number.isInteger(target) ? target : target.toFixed(1)}${suffix}`;
  });
}

renderStats();

const bloggerConfig = {
  apiKey: "AIzaSyD7WXWKjrzfbzDz8Lg0v0t0e2Xq3ock0Fk",
  blogId: "3486139694132126046",
};

async function loadBloggerPosts() {
  if (!blogGrid) return;

  const { apiKey, blogId } = bloggerConfig;
  if (apiKey.startsWith("YOUR_") || blogId.startsWith("YOUR_")) return;

  const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&maxResults=6`;
  const response = await fetch(url);
  const data = await response.json();

  renderBlogCards(
    data.items.map((post) => ({
      id: post.id,
      tag: "News",
      date: new Date(post.published).toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      title: post.title,
      excerpt: `${stripHtml(post.content).slice(0, 130)}...`,
      image: getPostImage(post.content),
    })),
  );
}

loadBloggerPosts();

if (window.lucide) {
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 1.8,
    },
  });
}
