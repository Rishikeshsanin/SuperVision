# SuperVision

A superhero-inspired augmented camera interface. Static web app, no API key or database. Camera processing happens in the browser with TensorFlow.js 4.22.0 and COCO-SSD 2.2.3 (Lite MobileNet V2). First use downloads code and model weights from external hosts; no camera frames are intentionally transmitted by the application.

## Use
Open the HTTPS deployment on mobile Safari or Chrome, tap Activate Camera and grant permission. The demo is explicitly simulated. Flip cameras, adjust confidence, enable optional voice announcements, test orientation, download a local snapshot, and stop camera capture. Night and contrast modes are cosmetic filters, not thermal or infrared vision. Temporary IDs use box overlap, not identity recognition. No distance, OCR, translation or safety-critical navigation yet.

## Local development
Run `python -m http.server 8000 --directory public` and open http://localhost:8000. Phone access needs HTTPS. Run `node --test` and `node --check public/app.js` on Node 22. Actual iPhone camera, model performance and browser permissions need physical-device testing. The app has no paid services configured.
