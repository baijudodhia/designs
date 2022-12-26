const baseUrl = "https://source.unsplash.com";
let toggle_search = false;

window.onload = async function () {
	// const main = document.getElementById("main");
	// let srcUrl = `${baseUrl}/3840x2160/?wallpaper`;
	// let actualUrl = await fetchImageUrl(srcUrl);
	// var url = new URL(actualUrl);
	// url.searchParams.set("w", main.offsetWidth);
	// url.searchParams.set("h", main.offsetHeight);
	// actualUrl = url.href;
	// main.style.backgroundImage = `url("${actualUrl}")`;
};

async function fetchImageUrl(url) {
	const response = await fetch(url);
	return response.url;
}

function toggleSearch() {
	toggle_search = !toggle_search;
	console.log(toggle_search);

	const sc = document.getElementById("search");
	if (toggle_search) {
		sc.style.transform = "scale(1)";
	} else {
		sc.style.transform = "scale(0)";
	}
}
