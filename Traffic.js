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
        return true;

    }
    else if(pedestrianLights.classList.contains("light-yellow")){

        alertMessage.textContent = "Slow down! The traffic light is yellow! If you want to go down the road, you have to wait for the green light.";

        //Change the font color to yellow, font family to Gill Sans and font size to 1.5rem     
        alertMessage.style.color = "yellow";
        alertMessage.style.fontFamily = "Gill Sans";
        alertMessage.style.fontSize = "1.5rem";
        return true;

    }
    else if(pedestrianLights.classList.contains("light-green")){

        alertMessage.textContent = "Go! The traffic light is green! You can go down the road.";


        //Change the font color to green, font family to Gill Sans and font size to 1.5rem     
        alertMessage.style.color = "green";
        alertMessage.style.fontFamily = "Gill Sans";
        alertMessage.style.fontSize = "1.5rem";
        return true;

    }
    else{
        return false;
    }
}