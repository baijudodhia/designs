const DESIGN_LIST = [
  {
    title: "Blog",
    url: "https://baijudodhia.github.io/designs/blog/",
    keywords: ["blog", "website", "technology"],
  },
  {
    title: "Online Store",
    url: "https://baijudodhia.github.io/designs/online-store/",
    keywords: ["online shop", "ebay", "flipkart"],
  },
  {
    title: "Photo Gallery",
    url: "https://baijudodhia.github.io/designs/photo-gallery/",
    keywords: ["photos", "nature", "gallery"],
  },
  {
    title: "Travel",
    url: "https://baijudodhia.github.io/designs/travel/",
    keywords: ["travel", "bookings", "hotels"],
  },
  {
    title: "Video Conferencing",
    url: "https://baijudodhia.github.io/designs/video-conferencing/",
    keywords: ["online meeting", "google meet"],
  },
];

(async () => {
  const loader = document.querySelector("#loading");
  const container = document.querySelector("#container");

  for (let i = 0; i < DESIGN_LIST.length; i++) {
    // Access Information
    const title = DESIGN_LIST[i].title;
    const url = DESIGN_LIST[i].url;
    const keywords = DESIGN_LIST[i].keywords;

    // Create Card
    const CARD_DIV = document.createElement("div");
    CARD_DIV.setAttribute("id", title.split(" ").join("_").toLowerCase());
    CARD_DIV.setAttribute("class", "card");

    // Create Card Image
    // const IMAGE_HEADER = document.createElement("img");
    // IMAGE_HEADER.setAttribute("class", "image");
    // let srcUrl = `${"https://source.unsplash.com"}/300x150/?${keywords.join(",")}`;
    // console.log(srcUrl);
    // let actualUrl = await fetchImageUrl(srcUrl);
    // IMAGE_HEADER.setAttribute("src", actualUrl);

    // Create Keywords Chips
    const KEYWORD_DIV_CONTAINER = document.createElement("div");
    KEYWORD_DIV_CONTAINER.setAttribute("class", "keywords-container");
    for (let i = 0; i < keywords.length; i++) {
      const KEYWORD_DIV = document.createElement("div");
      KEYWORD_DIV.setAttribute("class", "keyword");
      KEYWORD_DIV.innerText = keywords[i];

      KEYWORD_DIV_CONTAINER.append(KEYWORD_DIV.cloneNode(true));
    }

    // Create Card Body
    const CARD_BODY_DIV = document.createElement("div");
    CARD_BODY_DIV.setAttribute("class", "card-body");

    // Create Card Title
    const TITLE_DIV = document.createElement("div");
    TITLE_DIV.setAttribute("class", "title");
    TITLE_DIV.innerText = title;

    // Create Card View Button
    const VIEW_BTN = document.createElement("a");
    VIEW_BTN.setAttribute("class", "view");
    VIEW_BTN.setAttribute("href", url);
    VIEW_BTN.setAttribute("target", "_blank");
    VIEW_BTN.innerHTML = `<i class="fa fa-eye"></i>`;

    CARD_BODY_DIV.appendChild(TITLE_DIV);
    CARD_BODY_DIV.appendChild(VIEW_BTN);

    // CARD_DIV.appendChild(IMAGE_HEADER);
    CARD_DIV.appendChild(CARD_BODY_DIV);
    CARD_DIV.appendChild(KEYWORD_DIV_CONTAINER);

    container.appendChild(CARD_DIV.cloneNode(true));
  }

  loader.style.display = "none";
})();

async function fetchImageUrl(url) {
  const response = await fetch(url);
  return response.url;
}
