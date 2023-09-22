import Img1 from "../images/mercedes.jpeg";

export function test(text= "" ) {
    document.body.innerHTML = 
    `<h1>${text}</h1>`;

    const img = new Image();
    img.src = Img1;
    document.body.append(img); 
}

