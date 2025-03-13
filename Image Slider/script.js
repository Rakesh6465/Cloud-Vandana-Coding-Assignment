// Array of image URLs
const images = [
    "https://picsum.photos/id/1/623/453",
    "https://picsum.photos/id/11/623/453",
    "https://picsum.photos/id/16/623/453",
    "https://picsum.photos/id/18/623/453",
    "https://picsum.photos/id/8/623/453"
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");

// Function to update the image
function updateImage() {
    sliderImage.style.opacity = 0;
    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        sliderImage.style.opacity = 1;
    }, 200);
}

// Function to show the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Function to show the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Initialize slider with the first image
updateImage();
