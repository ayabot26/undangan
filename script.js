// ===============================
// OPEN INVITATION & MUSIC
// ===============================

const openButton = document.getElementById("openInvitation");
const music = document.getElementById("bgMusic");
const cover = document.getElementById("cover");
const opening = document.getElementById("opening");


openButton.addEventListener("click", () => {


    // Play music

    music.volume = 0.5;

    music.play()
        .catch(error => {
            console.log("Music error:", error);
        });


    // Hide cover

    cover.style.opacity = "0";


    setTimeout(() => {

        cover.style.display = "none";

        opening.scrollIntoView({
            behavior: "smooth"
        });

    }, 1000);


});
