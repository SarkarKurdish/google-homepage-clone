const sBtn = document.querySelector("#search-btn");
const searchField = document.getElementById("search-f");

document.addEventListener("keypress",(e) => {
	if(e.target.id == "search-f" && e.code == "Enter")
	{
		Search();
	}
});

function Search() {
	const url = searchField.value
	if(url.length > 0)
	{
		window.location.href = 'http://www.google.com/search?q='+url;
	}
}