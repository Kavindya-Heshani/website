function openImage(img, title, price, desc){
    document.getElementById("popup").style.display = "block";

    document.getElementById("popup-img").src = img;
    document.getElementById("title").innerText = title;
    document.getElementById("price").innerText = price;
    document.getElementById("desc").innerText = desc;
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}