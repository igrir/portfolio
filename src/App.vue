<style>

@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');

.fira-code-300 {
  font-family: "Fira Code", monospace;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}

/* Base Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #e0e0e0;
  background-color: #444444;
}

/* Container */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Header */
header {
  text-align: center;
  padding: 50px 0;
}

header h1 {
  font-size: 2.5em;
  color: #ffffff;
  margin: 0;
}

header p {
  font-size: 1.2em;
  color: #a0a0a0;
}

/* Section */
section {
  width: 100%;
  margin-bottom: 50px;
  padding: 20px;
  background-color: #2b2b2b;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

section h2 {
  color: #ffffff;
  margin: 0 0 10px;
}

section p {
  color: #c0c0c0;
  line-height: 1.6;
}

/* Buttons */
button {
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #357ab8;
}

/* Footer */
footer {
  text-align: center;
  padding: 30px 0;
  font-size: 0.9em;
  color: #707070;
}

/* Header */
.header-bar {
  text-align: center;
  padding: 50px 0;
}

.header-bar h1 {
  font-size: 2.5em;
  color: #ffffff;
  margin: 0;
}

.header-bar p {
  font-size: 1.2em;
  color: #a0a0a0;
}

/* Stylized Links */
.header-links {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;

  font-family: "Fira Code", sans-serif;
}

.header-links a {
  color: #4a90e2;
  text-decoration: none;
  font-size: 1.1em;
  transition: color 0.3s, transform 0.3s;
}

.header-links a:hover {
  color: #357ab8;
  transform: translateX(5px);
}

.content{
  margin: 15px auto;
  padding: 15px;
  max-width: 600px;
  text-wrap: pretty;

  font-family: "Fira Code", sans-serif;
}

img {
  max-width: 100%;
  border-radius: 10px;
}

.ascii{
    white-space: pre;
    font-family: monospace;
    font-size: 5px;
    line-height: 5px;
    letter-spacing: unset;
    transform: unset;
    overflow-y: hidden;

    /* background-color: #fff; */
    color: #000;
    padding-top: 10px;
    padding-bottom: 8px;
    border-radius: 15px;
}


#ascii-container{
  text-align: center;
}

#ascii-art{
  width: 130px;
  height: 140px;
  /* background-color: #2b2b2b; */
  display: inline-block;
  text-align: left;
}

.hoverable a:hover{
  color: #fff;
  cursor: pointer;
}

.writer{
  color: #fff;
}

/* .hoverable a:visited{
  color: #000;
} */

.hoverable a{
  text-decoration: none;
  color: #000;
}


</style>

<script setup>
import { onMounted } from 'vue';


onMounted(()=> {
  const asciiText = document.getElementById("ascii-art");
    const textContent = asciiText.textContent;
    asciiText.textContent = ""; // Clear initial content

    asciiText.style.opacity = 1; // Make container visible

    let index = 0;

    let writtenText = "";
    function revealCharacters() {
        if (index < textContent.length - 1) {
            // asciiText.innerHTML += textContent[index] + "<span class='writer'>|</span>";
            writtenText += textContent[index]
            asciiText.innerHTML = writtenText + "<span class='writer'>|</span>";

            index++;
            setTimeout(revealCharacters, 10); // Adjust the delay for speed
        }else{
          asciiText.innerHTML = writtenText
        }
    }

    revealCharacters();

});
</script>

<template>
  <nav>
    <div class="header-bar">

      <div id="ascii-container">
<pre class="ascii" id="ascii-art">
             =+++++++**-            
         =##***##########*#*        
     +**#**%%%%%%%%%%%%%%%%##%      
   :+#%%#*#%#+-::...::=*#%@@%%%=    
  :####@%#+=:.          ..-%%%@@%   
 +#%%%@@+-..             ..:+%@@@=  
 %#@@%%#:.                ..:*@@@@  
=#%%@@%-..       ..     . ..::--@@. 
+%@@@%=  :---+***==-:::-=+####*=+@: 
 %@@%=. .::.:::--=+=--+*+=-----+=@  
 %%%#-..:=*#%%@@%%=:. -=#%@@@@@#=#: 
  %%#-:--..:=*#*=-..  :-=####+--=+: 
  .-#-:::.     .-:..   .--.   .:-+. 
 *--+-::..  .:-+=..::::---==::::--  
  .=--::::::-++=:=%%%**%%#==+=--=-  
   :.-:----=+*+==*=+##%%#%%*++==+-  
   ..--:-===+%#+++++++++**##@+=+=-  
    =+=:--=-=@@=.         -@@*=+==  
      +=-=====-=%%%%%%%%@@*+#++++   
      .+=====-::--.:::.::-+==+++:   
       *#+===-::-==+++++**+==++=    
        -#*+=-:..-=+*%@%#*===*+     
         *@%#*-::.:=+**+=--=%@      
         -+%@@@#*+**#%%####@@@@@.   
      +@@--=*%@@@@@@@@@@@@@@#+@@@%#=
 =**%@@@==---=+%%@@@@@@@@@@*+%@@@@#@
 @igrir.bsky.social
    </pre>
  </div>

      <div class="header-links">
        <RouterLink to="/">&gt; Home</RouterLink>
        <RouterLink to="/portfolio">&gt; Portfolio</RouterLink>
        <!-- <RouterLink to="/bsky">&gt; Bsky</RouterLink> -->
      </div>
    </div>
  </nav>
  <main class="content">
    <RouterView/>
    <footer>
      <p>&copy; 2024 Giri. All rights reserved.</p>
    </footer>
  </main>
</template>