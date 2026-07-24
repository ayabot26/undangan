/* =====================================================
   00. GLOBAL
===================================================== */

/* -----------------------------------------------------
   00.01 Configuration
----------------------------------------------------- */

const MUSIC_VOLUME = 0.5;

const COVER_FADE_DURATION = 1000;

/* =====================================================
   01. OPEN INVITATION
===================================================== */

/* -----------------------------------------------------
   01.01 Elements
----------------------------------------------------- */

const openButton = document.getElementById("openInvitation");
const music      = document.getElementById("bgMusic");
const cover      = document.getElementById("cover");
const opening    = document.getElementById("opening");

/* -----------------------------------------------------
   01.02 Open Invitation Event
----------------------------------------------------- */

openButton.addEventListener("click", () => {


    /* Play Background Music */

    music.volume = MUSIC_VOLUME;

    music.play()
        .catch(error => {
            console.log("Music error:", error);
        });


    /* Hide Cover */

    cover.style.opacity = "0";


    setTimeout(() => {

        cover.style.display = "none";

        opening.scrollIntoView({
            behavior: "smooth"
        });

    }, COVER_FADE_DURATION);


});

/* =====================================================
   99. INITIALIZATION
===================================================== */