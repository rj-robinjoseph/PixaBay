const access_key = "Zscv2Gnk_510-XfVhXh6WLe3HeoDq1sCZu64ccYw4t0";

const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`;

const gallery = document.querySelector(".gallery");

let allImages; //This will store all the images.

const getImage = () => {
  fetch(random_photo_url)
    .then((res) => res.json())
    .then((data) => {
      allImages = data;
      makeImages(allImages);
    });
};

const makeImages = (data) => {
  data.forEach((item, index) => {
    let img = document.createElement("img");
    img.src = item.urls.regular;
    img.className = "gallery-img";

    gallery.appendChild(img);
  });
};

getImage();
