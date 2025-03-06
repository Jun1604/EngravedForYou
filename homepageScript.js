const searchIcon = document.getElementById("searchIcon");
const searchBox = document.getElementById("searchBox");
const logo = document.getElementById("logo");

searchIcon.addEventListener("click",
    function(){
        searchBox.classList.toggle("searchActivated");
    });
