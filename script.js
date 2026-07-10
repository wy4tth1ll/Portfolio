// Screen resolution used for the conversions
const DPI = 96;

// Function to convert inches to pixels
function inchesToPixels() {

    // Get the inches entered by the user
    let inches = Number(document.getElementById("inches").value);

    // Calculate pixels and round to the nearest whole number
    let pixels = Math.round(inches * DPI);

    // Display the pixel result
    document.getElementById("pixelResult").innerHTML =
        pixels + " Pixels";
}

// Function to convert pixels to inches
function pixelsToInches() {

    // Get the pixels entered by the user
    let pixels = Number(document.getElementById("pixels").value);

    // Calculate inches and round to the nearest whole number
    let inches = Math.round(pixels / DPI);

    // Display the inch result
    document.getElementById("inchResult").innerHTML =
        inches + " Inches";
}