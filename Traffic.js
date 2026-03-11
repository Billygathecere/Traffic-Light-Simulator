// Pedestrian side

function pedestrianLight(event) {
    // the event.target is the element that was clicked, it's the light that was clicked
    const pedestrianLights = event.target;
    const alertMessage = document.getElementById("alertMessage");
    
    alertMessage.textContent = "";

    if(pedestrianLights.classList.contains("light-red")){

        alertMessage.textContent = "Stop! The traffic light is red! If you want to go down the road, you have to wait for the green light.";

        //Change the font color to red, font family to Gill Sans and font size to 1.5rem     
        alertMessage.style.color = "red";
        alertMessage.style.fontFamily = "Gill Sans";
        alertMessage.style.fontSize = "1.5rem";

        // Introduces an image of the traffic lights to show red lights

        // Fetch the div to put the image
        const pedestrianImage = document.getElementById("pedestrian-lights");   

        // Create the image
        const redImage = document.createElement("img");
        redImage.src = "./Images/Pedestrians stop.webp";
        redImage.alt = "Pedestrians get ready";

        // Set the width and height of the image
        redImage.width = 300;
        redImage.height = 300;

        // Append the image to the div
        pedestrianImage.appendChild(redImage);
        return true;

    }
    else if(pedestrianLights.classList.contains("light-yellow")){

        alertMessage.textContent = "Slow down! The traffic light is yellow! If you want to go down the road, you have to wait for the green light.";

        //Change the font color to yellow, font family to Gill Sans and font size to 1.5rem     
        alertMessage.style.color = "yellow";
        alertMessage.style.fontFamily = "Gill Sans";
        alertMessage.style.fontSize = "1.5rem";
        
        // Introduces an image of the traffic lights to show yellow lights

        // Fetch the div to put the image
        const pedestrianImage = document.getElementById("pedestrian-lights");

        // Create the image
        const yellowImage = document.createElement("img");
        yellowImage.src = "./Images/Pedestrians get ready.webp";
        yellowImage.alt = "Pedestrians get ready";

        // Set the width and height of the image
        yellowImage.width = 300;
        yellowImage.height = 300;

        // Append the image to the div

        pedestrianImage.innerHTML = ""; // removes any existing image
        pedestrianImage.appendChild(yellowImage);


    }
    else if(pedestrianLights.classList.contains("light-green")){

        alertMessage.textContent = "Go! The traffic light is green! You can go down the road.";


        //Change the font color to green, font family to Gill Sans and font size to 1.5rem     
        alertMessage.style.color = "green";
        alertMessage.style.fontFamily = "Gill Sans";
        alertMessage.style.fontSize = "1.5rem";



    }
    else if(pedestrianLights.classList.contains("light-green")){

        alertMessage.textContent = "Go! The traffic light is green! You can go down the road.";


        //Change the font color to green, font family to Gill Sans and font size to 1.5rem     
        alertMessage.style.color = "green";
        alertMessage.style.fontFamily = "Gill Sans";
        alertMessage.style.fontSize = "1.5rem";


    }

    return true;

}