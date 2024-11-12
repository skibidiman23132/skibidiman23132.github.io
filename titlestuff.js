window.addEventListener("keydown", function (e) {
  if (e.key === "q" || e.key === "Q") {
    document.title = "Inbox (4)";
    window.open("https://drive.google.com", "_blank");
    // Change the favicon so uhh ya
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = 'images/gmail-logo.png?';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
});


function stopsitenamething() {
    clearInterval(intervalId)
    document.title = "Nintendoboi222";
 }
   
const siteNames = [
        "Nintendoboi2", 
        "Nintendoboi22",
        "Nintendoboi222", 
        "Nintendoboi2222",
        "Nintendoboi22222",
        "Nintendoboi222222",
        "Nintendoboi2222222",
        "Nintendoboi22222222",
        "Nintendoboi222222222",
        "Nintendoboi2222222222",
        "Nintendoboi22222222222",
        "Nintendoboi222222222222",
        "Nintendoboi2222222222222"
    ];
    
    let currentIndex = 0;
    let goingForward = true;
    let intervalId;
    
    function changeSiteName() {
        document.title = siteNames[currentIndex];
        
        if (goingForward) {
            currentIndex++;
            if (currentIndex >= siteNames.length - 1) {
                goingForward = false;
            }
        } else {
            currentIndex--;
            if (currentIndex <= 0) {
                goingForward = true;
            }
        }
    }
    
    intervalId = setInterval(changeSiteName, 1000);
// -----------------------------------------------------
// Toggle sidebar visibility
/* document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("openBtn").style.display = "none";
  });

  document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("sidebar").style.left = "-250px";
    document.getElementById("openBtn").style.display = "block";
  });

  // Make the Settings button draggable
  const openBtn = document.getElementById("openBtn");
  openBtn.onmousedown = function(event) {
    event.preventDefault();
    
    let shiftX = event.clientX - openBtn.getBoundingClientRect().left;
    let shiftY = event.clientY - openBtn.getBoundingClientRect().top;

    document.onmousemove = function(event) {
      openBtn.style.left = event.clientX - shiftX + 'px';
      openBtn.style.top = event.clientY - shiftY + 'px';
    };

    document.onmouseup = function() {
      document.onmousemove = null;
      document.onmouseup = null;

      // Snap to closest corner
      const btnRect = openBtn.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const margin = 10; // Margin from screen edges

      // Determine the closest corner
      const distances = {
        topLeft: btnRect.top + btnRect.left,
        topRight: btnRect.top + (viewportWidth - btnRect.right),
        bottomLeft: (viewportHeight - btnRect.bottom) + btnRect.left,
        bottomRight: (viewportHeight - btnRect.bottom) + (viewportWidth - btnRect.right),
      };

      // Find the minimum distance and snap to that corner
      const closestCorner = Object.keys(distances).reduce((a, b) => distances[a] < distances[b] ? a : b);
      switch (closestCorner) {
        case 'topLeft':
          openBtn.style.left = margin + 'px';
          openBtn.style.top = margin + 'px';
          break;
        case 'topRight':
          openBtn.style.left = (viewportWidth - btnRect.width - margin) + 'px';
          openBtn.style.top = margin + 'px';
          break;
        case 'bottomLeft':
          openBtn.style.left = margin + 'px';
          openBtn.style.top = (viewportHeight - btnRect.height - margin) + 'px';
          break;
        case 'bottomRight':
          openBtn.style.left = (viewportWidth - btnRect.width - margin) + 'px';
          openBtn.style.top = (viewportHeight - btnRect.height - margin) + 'px';
          break;
      }
    };
  };

  openBtn.ondragstart = function() {
    return false;
  }; */
