

var i = 0;
var images = [];
var time = 3000;

//image list
images[0] = "img/macbook.png";
images[1] = "img/iphone-camera.png";
images[2] = "img/apple-card.png";


function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;


//         var i = 0; 			// Start Point
// var images = [];	// Images Array
// var time = 2000;	// Time Between Switch

// // Image List
// images[0] = "img/applewatch.png";
// images[1] = "img/ipad.png";
// images[2] = "img/iphone.png";
// images[3] = "img/macbook.png";

// // Change Image
// function changeImg(){
// 	document.slide.src = images[i];

// 	// Check If Index Is Under Max
// 	if(i < images.length - 1){
// 	  // Add 1 to Index
// 	  i++; 
// 	} else { 
// 		// Reset Back To O
// 		i = 0;
// 	}

// 	// Run function every x seconds
// 	setTimeout("changeImg()", time);
// }

// // Run function when page loads
// window.onload=changeImg;
