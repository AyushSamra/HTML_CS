document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach(function (imageContainer) {
        const video = imageContainer.querySelector(".hover-video");
        const videoSource = imageContainer.getAttribute("data-video");

        imageContainer.addEventListener("mouseenter", () => {
            video.style.display = "block"; // Show the video
            video.src = videoSource; // Set the video source
            video.play(); // Play the video
        });

        imageContainer.addEventListener("mouseleave", () => {
            video.style.display = "none"; // Hide the video
            video.pause(); // Pause the video
        });
    });
});
