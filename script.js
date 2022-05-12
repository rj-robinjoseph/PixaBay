AOS.init();
let searchParam = location.search.split("=").pop();
let gallery = document.querySelector(".gallery");

const count = 30;
const apiKey = "dzsTZaTv8aLsnOI027DXMSbs6r5133Wxh2dj7T7hCOk";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const searchUrl = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${searchParam}&per_page=50`;

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;

    piUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
  }
}
function randomImage() {
  var images = [
    "https://unsplash.com/photos/TtN03jUTA70/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTZ8fGxhbmQlMjBzY2FwZXxlbnwwfHx8fDE2NTIxMDYxNTU&force=true&w=2400",
    "https://unsplash.com/photos/VujhA1zcdsY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nzd8fGxhbmQlMjBzY2FwZXxlbnwwfHx8fDE2NTIxMDYzNDU&force=true&w=2400",
    "https://unsplash.com/photos/Cajg-EnVxSY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjB8fGxhbmQlMjBzY2FwZXxlbnwwfHx8fDE2NTIxMDYxNTU&force=true&w=2400",
    "https://unsplash.com/photos/wMloxuYrjt0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fGxhbmQlMjBzY2FwZXxlbnwwfHx8fDE2NTIxMDYxODk&force=true&w=2400",
    "https://unsplash.com/photos/Bzc57kIGrEc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NTN8fGxhbmQlMjBzY2FwZXxlbnwwfHx8fDE2NTIxMDYzNDI&force=true&w=2400",
    "https://unsplash.com/photos/BImzCwTDr8s/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NjF8fGxhbmQlMjBzY2FwZXxlbnwwfHx8fDE2NTIxMDYzNDU&force=true&w=2400",
    "https://unsplash.com/photos/gjHkS1T-K7M/download?force=true&w=2400",
    "https://unsplash.com/photos/gjHkS1T-K7M/download?force=true&w=2400",
    "https://unsplash.com/photos/gjHkS1T-K7M/download?force=true&w=2400",
    "https://unsplash.com/photos/m3m-lnR90uM/download?force=true&w=2400",
    "https://unsplash.com/photos/N9Pf2J656aQ/download?force=true&w=2400",
    "https://unsplash.com/photos/p7tai9P7H-s/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mjd8fGNhcnN8ZW58MHx8fHwxNjUyMTA2NTU3&force=true&w=2400",
    "https://unsplash.com/photos/eeTJKC_wz34/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8YmlrZXN8ZW58MHx8fHwxNjUyMTA2NTk2&force=true&w=2400",
    "https://unsplash.com/photos/70l1tDAI6rM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NTB8fGJhY2tncm91bmR8ZW58MHx8fHwxNjUyMTA2MTEx&force=true&w=2400",
    "https://unsplash.com/photos/qzoSJlPxS9k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTcyfHxmbG93ZXJzfGVufDB8fHx8MTY1MjEwNjcxNw&force=true&w=2400",
  ];
  var size = images.length;
  var x = Math.floor(size * Math.random());

  var element = document.getElementsByClassName("header-section");

  element[0].style["background-image"] = "url(" + images[x] + ")";
}

document.addEventListener("DOMContentLoaded", randomImage);

//

// Infinite Image Fetching..

let allImages; //This will store all the images.
let currentImage = 0;
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

const getImage = () => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      allImages = data;
      makeImages(allImages);
    });
};

const searchImage = () => {
  fetch(searchUrl)
    .then((res) => res.json())
    .then((data) => {
      allImages = data.results;
      makeImages(allImages);
    });
};

const makeImages = (data) => {
  imagesLoaded = 0;
  totalImages = allImages.length;
  data.forEach((item, index) => {
    let img = document.createElement("img");
    img.src = item.urls.regular;
    img.className = "gallery-img";

    img.addEventListener("load", imageLoaded);
    gallery.appendChild(img);

    img.addEventListener("click", () => {
      currentImage = index;
      showPopup(item);
    });
  });
};

window.addEventListener("scroll", () => {
  if (
    (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) &
    ready
  ) {
    ready = false;
    getImage();
  }
});

const showPopup = (item, index) => {
  const popup = document.querySelector(".popup");
  const downloadBtn = document.querySelector(".download-btn");
  const closeBtn = document.querySelector(".close-btn");
  const image = document.querySelector(".large-image");
  const imageName = document.querySelector(".image-name");
  // const imageIndex = document.querySelector(".index");

  popup.classList.add("active");
  downloadBtn.addEventListener("click", () => {
    window.open(item.links.html, "_blank");
  });
  image.src = item.urls.regular;
  imageName.innerHTML = `Img-` + item.id + `.jpg`;
  image.addEventListener("click", () => {
    console.log(`Clicked` + index);
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });
};

if (searchParam != "") {
  searchImage();
} else {
  getImage();
}
// Controls

const prevBtn = document.querySelector(".left-arrow");
const nxtBtn = document.querySelector(".right-arrow");

prevBtn.addEventListener("click", () => {
  if (currentImage > 0) {
    currentImage--;
    showPopup(allImages[currentImage]);
  }
});

nxtBtn.addEventListener("click", () => {
  if (currentImage < allImages.length - 1) {
    currentImage++;
    showPopup(allImages[currentImage]);
  }
});

// // Scroll-To-Top

const scrollBtn = document.getElementById("button");

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= 2000) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
