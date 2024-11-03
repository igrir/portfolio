<template>
    <div class="portfolio">
        <h1 class="portfolio-title">My Game Development Portfolio</h1>

        <div class="experience">
            <div class="exp">
                <h2>Arabic HTML5 Education Games (2018)</h2>
                <p>
                    Made a series of educational HTML5 games using <u>Phaser</u>. Utilized Grunt to minify and package the project. Art by <a href="https://www.instagram.com/hyuei/">Jeffin</a>
                </p>
                <div class="showcase">
                    <div>
                        <img src="../assets/porto_vegetablepop.png" alt="Vegetable Pop Game">
                    </div>
                    <div>
                        🔗 <a href="https://vegetable-pop.netlify.app" target="_blank">Live Demo</a>
                    </div>
                </div>
                <div class="showcase">
                    <div>
                        <img src="../assets/porto_cook.png" alt="Cooking Veggie Game">
                    </div>
                    <div>
                        🔗 <a href="https://cooking-veggie.netlify.app/" target="_blank">Live Demo</a>
                    </div>
                </div>
                <div class="showcase">
                    <div>
                        <img src="../assets/porto_trash.png" alt="Trash Sort Game">
                    </div>
                    <div>
                        🔗 <a href="https://trash-sort.netlify.app/" target="_blank">Live Demo</a>
                    </div>
                </div>
            </div>

            <div class="exp">
                <h2>HTML5 Educational Game (Freelance, 2019)</h2>
                <p>
                    Made math games using Unity to target WebGL. I also designed the gameplay and user interactions. Art by <a href="https://www.instagram.com/hyuei/">Jeffin</a>
                </p>
                <div class="showcase">
                    <iframe width="100%" height="350" src="https://www.youtube.com/embed/eqAd5YZGGpA?si=j11vEl2CRFz_AC1D" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>

            <div class="exp">
                <h2>What Comes After (Fahmitsu x RGB Jam, 2020)</h2>
                <p>
                    Contributed as Unity programmer, using Yarn as main game logic.
                </p>
                <div class="showcase">
                    <div>
                        <img src="../assets/what_comes_after.png" alt="What Comes After Game">
                    </div>
                    <div>
                        🔗 <a href="https://store.steampowered.com/app/1421760/What_Comes_After/" target="_blank">Steam</a>
                    </div>
                </div>
            </div>

            <div class="exp">
                <h2>Bus Simulator Indonesia (Maleo, 2017)</h2>
                <p>
                    Contributed as game and tools programmer. Implemented and scripted API calls using Playfab's CloudScript. I also implemented multiplayer gameplay utilizing Photon.
                </p>
                <div class="showcase">
                    <div>
                        <img src="../assets/porto_bussid.png" alt="Bus Simulator Indonesia">
                    </div>
                    <div>
                        🔗 <a href="https://play.google.com/store/apps/details?id=com.maleo.bussimulatorid&hl=in&gl=US&pli=1" target="_blank">PlayStore</a>
                    </div>
                </div>
            </div>

            <div class="exp">
                <h2>Anxiety: Lost Night (Maxi and The Gang, 2016)</h2>
                <p>
                    A short and fun game jam with my friends! Contributed as programmer and helped content item placements.
                </p>
                <div class="showcase">
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/MVjIMW47wCw?si=83mpu9-6uLKDMtau" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div>
                        🔗 <a href="https://circushorse.itch.io/anxiety-lost-night" target="_blank">itch.io</a>
                    </div>
                </div>
            </div>

            <div class="exp">
                <h2>Assemblr Studio (Assemblr, 2020)</h2>
                <p>
                    Made file formats, helped UI/UX designer iterate and prototype implement gizmo control, and implement API calls.
                </p>
                <div class="showcase">
                    <div>
                        <img src="../assets/porto_astu.png" alt="Assemblr Studio">
                    </div>
                </div>
            </div>

            <div class="exp">
                <h2>RawiTween, a tween library for Unity</h2>
                <p>
                    <a href="https://github.com/igrir/RawiTween" target="_blank">GitHub Repository</a>
                </p>
            </div>

            <div class="exp">
                <h2>💡 My Itch.io page</h2>
                <p>
                    <a href="https://igrir.itch.io/" target="_blank">https://igrir.itch.io/</a> - Experimentation stuff which includes pretty much abandoned projects in my spare time.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.portfolio {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #1e1e1e;
    color: #e0e0e0;
    border-radius: 8px;
}

.portfolio-title {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 20px;
}

.experience {
    margin-bottom: 50px;
}

.exp {
    border-bottom: 1px solid #535353;
    padding: 20px 0;
}

.exp h2 {
    font-size: 1.8em;
    color: #ffffff;
    margin: 0;
}

.exp p {
    color: #c0c0c0;
    line-height: 1.6;
}

.showcase {
    margin-bottom: 15px;
}

.showcase img, .showcase iframe {
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.showcase img:hover, .showcase iframe:hover {
    transform: scale(1.05);
}

.showcase div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.showcase a {
    color: #4a90e2;
    text-decoration: none;
    font-weight: bold;
}

.showcase a:hover {
    color: #357ab8;
    text-decoration: underline;
}
</style>
