document.querySelectorAll("li").forEach(listItem => {
    [
        "shadow-md",
        "p-2",
        "rounded",
        "bg-zinc-700",
        "text-white",
        "hover:bg-zinc-200",
        "hover:text-zinc-700"
    ].forEach(_class => listItem.classList.add(_class));
});

function getCalculatedStyling() {
    const listsChild = document.getElementById('lists-child');
    
    window.innerWidth < 1247 ? (listsChild.style.flexWrap = "nowrap")
    : listsChild.style.flexWrap = "wrap";
}

window.onresize = () => getCalculatedStyling();
window.onload = () => getCalculatedStyling();