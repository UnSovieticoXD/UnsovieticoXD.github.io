function changecolorOfSign() {
    const Sign = document.getElementById("header"); // gets the id of HTML element
    const colors = ['red', 'green', 'blue', 'orange', 'purple']; // List of colors
    let ChangeColor = 0; // Gets a boolean value of changing color
    
    setInterval(function() {
        Sign.style.color = colors[ChangeColor]; // change color of sign
    
        Sign = (Sign + 1) % colors.length; 
        }, 100); // change color every 100 miliseconds
    }
    
    window.onload = changecolorOfSign;