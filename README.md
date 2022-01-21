# SAM-autocaptcha
Automatic CAPTCHA filler for IISER Pune's Academic ERP

A Google Chrome extension that automatically fills in the "CAPTCHA" form element for IISER Pune's [SAM portal](https://www.iiserpune.in/sam/roott/index.php) (Academic ERP) login form.

Uses OCR Space's [free OCR API](https://ocr.space/ocrapi).


### *V1.0*
Selects image tag, converts it into base64, passes it to a POST call for the OCR API, parses returned information, fills in the form element.
