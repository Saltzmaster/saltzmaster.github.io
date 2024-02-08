 // Ensure the script runs after the page is loaded
 document.addEventListener("DOMContentLoaded", function() {
    // Attach click event handler to the button
    document.getElementById("generateQRCode").addEventListener("click", generateQRCode);
});

// Define the generateQRCode function
function generateQRCode() {
    var url = document.getElementById("urlInput").value;
    var qrcodeDiv = document.getElementById("qrcode");

    // Clear previous QR code
    qrcodeDiv.innerHTML = "";

    // Generate QR code using qrcode-generator library
    var qr = qrcode(0, 'L'); // Create QRCode object
    qr.addData(url); // Set data
    qr.make(); // Generate QR code

    // Create image element with the generated QR code
    var img = document.createElement('img');
    img.src = qr.createDataURL(); // Get QR code image as data URL

    // Append the image element to the specified div
    qrcodeDiv.appendChild(img);
}