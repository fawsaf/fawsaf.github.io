console.log("JavaScript is running!");

var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

window.onscroll = function() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

// text animation function
const name = document.getElementById("name");
const typed = new Typed(name, {
    strings: ["Fahim Al Awsaf", "a Programmer", "a Developer"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });
  typed.start();


//file downloading
function downloadFile(fileUrl, fileName) {
    let link = document.createElement("a");
    link.download = fileName;

    let file = new Blob([fileUrl], {type: 'application/pdf'});
    link.href = URL.createObjectURL(file);

    link.click();
}



// image hovering
var images = document.getElementsByClassName("service_img");
// loop through each image
for (let i = 0; i < images.length; i++) {
    // add event listener for hover
    images[i].addEventListener("mouseover", function() {
        // increase the width and height of the image
        this.style.width = "50%";
        this.style.height = "50%";
    });
        // add event listener for mouseout
        images[i].addEventListener("mouseout", function() {
            // reset the width and height of the image
            this.style.width = "40%";
            this.style.height = "40%";
        });
}

// background transition
let image = document.getElementsByClassName("hero");
console.log(image);
let imgs = ['https://t3.ftcdn.net/jpg/02/45/08/76/360_F_245087612_bsOH61rLEw5EG155Bdm22VeaM0w2oZKF.jpg', 
'https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=600', 
'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://wallpaperaccess.com/full/212469.jpg'];

let i = 0;
document.getElementById("transition-button").onclick = function(){
    for(let j=0;j<image.length;j++){
        image[j].style.backgroundImage = "url(" + imgs[i] + ")";
    }
    i++;
    if(i === imgs.length) i = 0;
}


//current year
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;


