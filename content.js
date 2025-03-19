function updateBackgroundImage() {
    const albumArt = document.querySelector(".image.style-scope.ytmusic-player-bar");
    if (albumArt) {
      const imageUrl = albumArt.src;
      let bgDiv = document.getElementById("dynamic-bg");
      
      if (!bgDiv) {
        bgDiv = document.createElement("div");
        bgDiv.id = "dynamic-bg";
        document.body.appendChild(bgDiv);
        
        const style = document.createElement("style");
        style.innerHTML = `
          #dynamic-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-size: cover;
            background-position: center;
            filter: blur(20px);
            z-index: -1;
            transition: background-image 0.5s ease-in-out;
          }
        `;
        document.head.appendChild(style);
      }
      
      bgDiv.style.backgroundImage = `url('${imageUrl}')`;
    }
  }
  
  new MutationObserver(updateBackgroundImage).observe(document.body, {
    childList: true,
    subtree: true,
  });
  