export const headerContainer = () => {
    //let header = document.getElementById("header");

    let divHeader = document.createElement("div");
    divHeader.setAttribute("class", "divHeader");

    let createHeader = document.createElement("header");
    divHeader.appendChild(createHeader);

    let logo = document.createElement("img");
    logo.setAttribute("src", "SCL019-social-network/src/images/logo-plantasia.png");
    logo.setAttribute("class", "logo");
    createHeader.appendChild(logo);

    let titlePlantasia = document.createElement("h1");
    titlePlantasia.classList.add("plantasia");
    titlePlantasia.textContent = "Plantasia";
    createHeader.appendChild(titlePlantasia);

    return divHeader;
}