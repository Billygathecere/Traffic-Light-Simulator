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
        alertMessage.style.fontSize = "1.5rem";

        // Introduces an image of the traffic lights to show red lights
        updatePedestrianLights("./Images/Pedestrians stop.webp");

    }
    else if(pedestrianLights.classList.contains("light-yellow")){

        alertMessage.textContent = "Slow down! The traffic light is yellow! If you want to go down the road, you have to wait for the green light.";

        //Change the font color to yellow, font family to Gill Sans and font size to 1.5rem     
        alertMessage.style.color = "yellow";
        alertMessage.style.fontSize = "1.5rem";
        
        // Introduces an image of the traffic lights to show yellow lights
        updatePedestrianLights("./Images/Pedestrians get ready.webp");


    }
    else if(pedestrianLights.classList.contains("light-green")){

        alertMessage.textContent = "Go! The traffic light is green! You can go down the road.";


        //Change the font color to green, font family to Gill Sans and font size to 1.5rem     
        alertMessage.style.color = "green";
        alertMessage.style.fontSize = "1.5rem";

        // Introduces an image of the traffic lights to show green lights
        updatePedestrianLights("./Images/Pedestrians go.webp");

    }
    return true;

}

const updatePedestrianLights = (imagePath) => {
    const pedestrianLights = document.getElementById("pedestrian-lights");
    pedestrianLights.innerHTML = "";
    const image = document.createElement("img");
    image.src = imagePath;
    image.width = 300;
    image.height = 300;
    pedestrianLights.appendChild(image);
}

// Vehicles side 

function carLight(event) {
    // the event.target is the element that was clicked, it's the light that was clicked
    const vehicleLights = event.target;
    const alertMessage = document.getElementById("alertNotification");
    
    alertMessage.textContent = "";

    if(vehicleLights.classList.contains("light-red")){

        alertMessage.textContent = "Stop! The traffic light is red! If you want to go down the road, you have to wait for the green light.";

        //Change the font color to red, font family to Gill Sans and font size to 1.5rem     
        alertMessage.style.color = "red";
        alertMessage.style.fontSize = "1.5rem";

        // Introduces an image of the traffic lights to show red lights
        updateVehicleLights("./Images/Vehicles stop.webp");

    }
    else if(vehicleLights.classList.contains("light-yellow")){

        alertMessage.textContent = "Slow down! The traffic light is yellow! If you want to go down the road, you have to wait for the green light.";

        //Change the font color to yellow, font family to Gill Sans and font size to 1.5rem     
        alertMessage.style.color = "yellow";
        alertMessage.style.fontSize = "1.5rem";
        
        // Introduces an image of the traffic lights to show yellow lights
        updateVehicleLights("./Images/Vehicles get ready.webp");


    }
    else if(vehicleLights.classList.contains("light-green")){

        alertMessage.textContent = "Go! The traffic light is green! You can go down the road.";


        //Change the font color to green, font family to Gill Sans and font size to 1.5rem     
        alertMessage.style.color = "green";
        alertMessage.style.fontSize = "1.5rem";

        // Introduces an image of the traffic lights to show green lights
        updateVehicleLights("./Images/Vehicles go.webp");

    }
    return true;

}

const updateVehicleLights = (imagePath) => {
    const vehicleLights = document.getElementById("car-lights");
    vehicleLights.innerHTML = "";
    const image = document.createElement("img");
    image.src = imagePath;
    image.width = 300;
    image.height = 300;
    vehicleLights.appendChild(image);
}