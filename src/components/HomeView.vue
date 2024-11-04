<template>
    <h1>Hi!</h1>
    <p>
        I'm Giri, I've been developing games <u>since 2015</u>; from mobile, web, to PC games. I've been using various tools and engines such as <u>Unity</u>, <u>Phaser</u>, and currently <u>Godot</u>!
    </p>
    <p>
        Coding is a headache-inducing job, but games are fun. Both combine into a strange amalgam that fascinates me!
    </p>
    <p>
        Contact me:<br />
        <a href="https://bsky.app/profile/igrir.bsky.social" class="bsky-link">
            <img src="../assets/Bluesky_Logo.svg" width="20px" alt="Bluesky Logo">
            @igrir.bsky.social
        </a>
    </p>
</template>

<style scoped>
.bsky-link:hover {
    background-color: #357ab8; /* Darker background on hover */
    transform: scale(1.05); /* Slightly enlarge the link on hover */
}


.bsky-link {

    background-color: #4a90e2; /* Background color */
    color: white; /* Text color */
    text-decoration: none; /* Remove underline */
    transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition for background color and transform */

    display: inline-flex; /* Use inline-flex to align items in a row */
    align-items: center; /* Vertically center items within the link */
    text-decoration: none; /* Remove underline from link */
    padding: 5px 10px; /* Add some padding around the link */
    border-radius: 8px; /* Rounded corners */
}

.bsky-link img {
    margin-right: 5px; /* Add some space between the icon and the text */
    vertical-align: middle; /* Vertically align the image to middle */
}

</style>
