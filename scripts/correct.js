let sound1 = document.getElementById("sound1");
    function answerCorrect(button) {
      sound1.play();
      var c = document.createDocumentFragment();
      for (var i = 0; i < 100; i++) {
        var styles = 'transform: translate3d(' + (random(500) - 250) + 'px, ' + (random(200) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
                      background: hsla(' + random(360) + ',100%,50%,1);\
                      animation: bang 700ms ease-out forwards;\
                      opacity: 0';

        var e = document.createElement("i");
        e.style.cssText = styles.toString();
        c.appendChild(e);
      }
      button.appendChild(c);
    }

    function random(max) {
      return Math.random() * (max - 0) + 0;
    }