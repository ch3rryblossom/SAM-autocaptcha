console.log('auto-login.js loaded');

	// select span with class="input-group-addon"
	const $span = document.querySelector('.input-group-addon');

	// select image inside span
	const $img = $span.querySelector('img');

	// convert image to base64
	function getDataUrl(img) {
		// Create canvas
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		// Set width and height
		canvas.width = img.width;
		canvas.height = img.height;
		// Draw the image
		ctx.drawImage(img, 0, 0);
		return canvas.toDataURL('image/jpeg');
	     }

	     const dataUrl = getDataUrl($img);
		console.log(dataUrl);

	  
	// parameters that need to be passed to the OCR API, as a FormData object
		const formData = new FormData();
		formData.append('apikey', '030d69f19088957'); // replace with your own API key? hope this is okay to put out on github
		formData.append('base64Image', dataUrl);
	
		const url = 'https://api.ocr.space/parse/image';
	  
	// Send a request to the OCR API
		fetch(url, {
		  method: 'POST',
		  body: formData
	  
		// Use json() to interpret the returned information
		}).then(response => response.json())
		  .then((jsonData) => {
	  
		    const parsedResults = jsonData['ParsedResults'];
		    const errorMessage = jsonData['ErrorMessage'];
	  
		    // If the returned result is not empty
		    if (parsedResults != null) {
	  
		      // Storing details on each result
		      parsedResults.forEach((value) => {
			let exitCode = value['FileParseExitCode'];
			let parsedText = value['ParsedText'];
			let errorMessage = value['ErrorMessage'];
			console.log(parsedText);
		      });
	  
		    } else { // If the returned result is empty (need to work on error conditions)
			console.log('Error: ' + errorMessage);
		    }
		  })
	      
	  