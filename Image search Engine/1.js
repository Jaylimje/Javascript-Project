const ApiId = "VcpBsVE3zZSETaryLZ0wM2KpQxQS_1i69lv5kyLBMBE";

const searchForm = document.getElementById("search-form");
const searchPannel = document.getElementById("search-pannel");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more");

let keyword = "";
let page = 1;
let perpage = 90;

async function searchImage(){
    keyword = searchPannel.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${perpage}&query=${keyword}&client_id=${ApiId}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page==1){
        searchResult.innerHTML = ""
    }

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
        
    });
    showMore.style.display = "block"
};

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

showMore.addEventListener("click", ()=>{
    page++;
    searchImage();
})