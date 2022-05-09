const gallery = document.querySelector(".gallery");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

const count = 30;
const apiKey = "dzsTZaTv8aLsnOI027DXMSbs6r5133Wxh2dj7T7hCOk";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 30;
    piUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
  }
}

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements For LInks & Photos, Add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      class: "gallery-img",
      alt: photo.alt_desciption,
      title: photo.alt_desciption,
    });

    img.addEventListener("load", imageLoaded);

    item.appendChild(img);
    gallery.appendChild(item);
  });
}

//Get photos from Unsplah API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error hERE
  }
}

window.addEventListener("scroll", () => {
  if (
    (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) &
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();

// let allImages; //This will store all the images.

// const getImage = () => {
//   fetch(random_photo_url)
//     .then((res) => res.json())
//     .then((data) => {
//       allImages = data;
//       makeImages(allImages);
//     });
// };

// const makeImages = (data) => {
//   data.forEach((item, index) => {
//     let img = document.createElement("img");
//     img.src = item.urls.regular;
//     img.className = "gallery-img";

//     gallery.appendChild(img);
//   });
// };

// getImage();

// Random Image Changing

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
  console.log(x);
  var element = document.getElementsByClassName("header-section");
  console.log(element);
  element[0].style["background-image"] = "url(" + images[x] + ")";
}

document.addEventListener("DOMContentLoaded", randomImage);
