import createHomePage from "./homePage";

function loadHomePage() {
    document.getElementById("content").appendChild(createHomePage());
}

export default loadHomePage