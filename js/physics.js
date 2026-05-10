function simulateProjectile() {
    // Get input values
    var angle = document.getElementById("angle").value;
    var velocity = document.getElementById("velocity").value;

    // Convert angle to radians
    // var angleRad = angle * (Math.PI / 180);

    // // Calculate time of flight, maximum height, and range
    // var g = 9.81; // Acceleration due to gravity
    // var timeOfFlight = (2 * velocity * Math.sin(angleRad)) / g;
    // var maxHeight = (velocity * velocity * Math.sin(angleRad) * Math.sin(angleRad)) / (2 * g);
    // var range = (velocity * velocity * Math.sin(2 * angleRad)) / g;

    // // Display results
    // document.getElementById("results").innerHTML = 
    //     "Time of Flight: " + timeOfFlight.toFixed(2) + " seconds<br>" +
    //     "Maximum Height: " + maxHeight.toFixed(2) + " meters<br>" +
    //     "Range: " + range.toFixed(2) + " meters";   
    document.getElementById("angleDisplayed").innerHTML = angle;
    document.getElementById("velocityDisplayed").innerHTML = velocity;
}