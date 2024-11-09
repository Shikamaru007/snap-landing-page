const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("closeMenu");
const dropDowns = document.querySelectorAll(".dropdown");

openMenu.addEventListener("click", () => {
    document.body.classList.add("open-nav");
});
closeMenu.addEventListener("click", () => {
    document.body.classList.remove("open-nav");
});
dropDowns.forEach(dropdown => {
    dropdown.addEventListener("click", (event) => {
        event.target.classList.toggle("preview");
       let option = dropdown.parentNode.querySelector(".options");
       if(dropdown.classList.contains("preview")){
        option.style.height = `${option.scrollHeight}px`;
       }else{
        option.style.height = "0px";
       }
      
    });
});


