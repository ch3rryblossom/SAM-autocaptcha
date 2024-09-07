console.log('Tesseract, auto-fill script loaded...');

// Select span with class="input-group-addon", this span only has the captcha as an image
const $span = document.querySelector('.input-group-addon');
const $captchaImage = $span.querySelector('img');

// If I use $captchaImage.src for Tesseract.recognize, the image seems to get shuffled again, by sending the URL request?
// So I convert the image object into a canvas and send it to Tesseract.
function getImageData(img) {
	// initialize canvas
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');
	canvas.width = img.width; canvas.height = img.height;

	context.drawImage(img, 0, 0);
	return canvas;
}

const captchaCanvas = getImageData($captchaImage);

// document.body.appendChild(captchaCanvas);  
// This will display the canvas on the page, used this to debug whether the image going into Tesseract is correct

// Tesseract.js - should be loaded in manifest?
Tesseract.recognize(captchaCanvas, 'eng')
  .then(function(result) {
    const recognizedText = result.data.text;		// text is returned as data.text
    console.log(' --- SAM-autocaptcha ---');
    console.log(' Recognized Text: ', recognizedText);

    // Select the CAPTCHA input box
    const captchaInput = document.querySelector('input[name="verif_box"]');

    // Remove any extra spaces and fill it
    captchaInput.value = recognizedText.trim();  
  })
  .catch(function(error) {
    console.error('Error from Tesseract?:', error);
  });