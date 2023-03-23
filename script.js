let menu = document.getElementById("navLinks");

function showMenu()
{
    menu.style.right = "0";
}

function hideMenu()
{
    menu.style.right = "-200px";
}

// Add hover effect for pink boxes
const boxes = document.querySelectorAll(".box");

boxes.forEach(function(box) {
  box.addEventListener("mouseover", function() {
    box.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)";
    box.style.transform = "translateY(-5px)";
  });
  
  box.addEventListener("mouseout", function() {
    box.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.3)";
    box.style.transform = "none";
  });
});
