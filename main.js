// ==UserScript==
// @name        YouTube Auto Dislike
// @namespace   gqqnbig
// @match       https://www.youtube.com/watch?*
// @grant       none
// @version     1.0
// @author      gqqnbig
// @description Because YouTube no longer displays the number of dislikes, the scripts automatically dislike all videos. Wait 15 seconds to see the effect.
// @license     GNU General Public License v3.0
// ==/UserScript==


(function(){
  //from https://github.com/Anarios/return-youtube-dislike/blob/main/Extensions/chrome/return-youtube-dislike.script.js
  function getButtons() {
    if (document.getElementById("menu-container").offsetParent === null) {
      return document.querySelector(
        "ytd-menu-renderer.ytd-watch-metadata > div"
      );
    } else {
      return document
        .getElementById("menu-container")
        ?.querySelector("#top-level-buttons-computed");
    }
  }

  function getLikeButton() {
    return getButtons().children[0];
  }

  function getDislikeButton() {
    return getButtons().children[1];
  }
  
  function isVideoLiked() {
    return getLikeButton().classList.contains("style-default-active");
  }

  function isVideoDisliked() {
    return getDislikeButton().classList.contains("style-default-active");
  }

  function isVideoNotLiked() {
    return getLikeButton().classList.contains("style-text");
  }

  function isVideoNotDisliked() {
    return getDislikeButton().classList.contains("style-text");
  }

  function getState() {
    if (isVideoLiked()) {
      return "liked";
    }
    if (isVideoDisliked()) {
      return "disliked";
    }
    return "neutral";
  }
  
  setTimeout(()=>{
    if(getState()=='neutral'){
      getDislikeButton().click();
    }
  },15000);
  
})();
