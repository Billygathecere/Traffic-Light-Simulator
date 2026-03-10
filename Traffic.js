// Pedestrian side

const pedestrianLight = () => {
    const pedestrianLights = document.getElementById("pedestrian-lights");
    const alertMessage = document.getElementById("alertMessage");
    alertMessage.textContent = "";

    if(pedestrianLights.classList.contains("light-red")){

        alertMessage = "Stop! The traffic light is red! If you want to go down the road, you have to wait for the green light.";
        return false;

    }
}