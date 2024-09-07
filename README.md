# SAM-autocaptcha
Automatic CAPTCHA filler for IISER Pune's Academic ERP

A Google Chrome extension that automatically fills in the "CAPTCHA" form element for IISER Pune's [SAM portal](https://www.iiserpune.in/sam/roott/index.php) (Academic ERP) login form.

### *V2.0* - Aug 08, 2024
Updated to use [Tesseract.js](https://tesseract.projectnaptha.com/) to perform the OCR, instead of using an API. 
 * A lot faster than using the API (based on my usage)
 * API was down often (kind of a given, was for free)
 * Honestly this was mostly done because I realised that I shouldn't freely let out my own API keys in my code :)) (yes I realise it's there in the history of this repo, too lazy to remove all of that now)


## Installation

1. Download this repository as a zip file (either using the green 'Code' button or the releases tab on the right) and extract it anywhere.
2. Go to [chrome://extensions](chrome://extensions) to manage your extensions.
3. Enable **Developer Mode** by clicking the toggle switch next to Developer mode.
4. Click the **Load unpacked** button and select the extension directory that you just unzipped. Remember to select the correct directory, it should have the core files directly under it (sometimes unzippers create a nested structure with another folder outside, with the same name).

## Usage

On every instance of https://www.iiserpune.in/sam/roott/index.php that you open in Chrome, this extension will fill out the OCR result in the appropriate form field.  

# Archive
---
---
### *V1.0* - Jan 21, 2022
Uses OCR Space's [free OCR API](https://ocr.space/ocrapi).
PLEASE NOTE: The API (being free) may sometimes be down. Check this [here](https://status.ocr.space/).
Selects image tag, converts it into base64, passes it to a POST call for the OCR API, parses returned information, fills in the form element.

The OCR results are not always perfect.
edit line28 of auto-login.js to replace the API Key with your own API Key, if you'd like.
The free API may sometimes be down, you can check this [here](https://status.ocr.space/).

## Improvements

- [ ] Icons for the extension
- [ ] Loading gif while the answer hasn't been returned yet
- [ ] Error notif if the API call was bad or an answer wasn't returned
- [ ] Option for user to toggle on "Autosubmit form" (autosubmits form after the answer is filled in) 
