const searchInput = document.getElementById("search");
const liElements = document.getElementsByTagName("li");
searchInput.addEventListener("keyup", event => {
    searchInputValue = searchInput.value;
    const liElements = document.getElementsByTagName("li");
    console.log(liElements);

    for (let i = 0; i < liElements.length; i++) {
        console.log(liElements[i]);
        if (liElements[i].innerHTML.toLowerCase().includes(searchInputValue)) {
            liElements[i].style.display = "";
        } else {
            liElements[i].style.display = "none";
        }
    }

})