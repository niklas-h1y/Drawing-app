# Sketchpad — Drawing Studio

Responsive installable drawing PWA with offline support and an Android APK workflow.

## Features
- Pen and eraser with adjustable brush size, color picker, and quick palette.
- Mouse, touch, and stylus input through Pointer Events.
- Undo / redo, clear canvas, and PNG export.
- Artwork autosaves in local storage on the current device.
- PWA manifest and service worker for installation and offline use.

## Run locally
Serve this directory over HTTPS or localhost (service workers require a secure context):

```bash
npx serve .
```

## Deploy the PWA
Deploy the repository to a static host with HTTPS. The PWA is configured by `manifest.webmanifest`.

## Build an Android APK
The GitHub Actions workflow `.github/workflows/android.yml` uses Bubblewrap to package the deployed PWA as a Trusted Web Activity (TWA).

1. Deploy the site to a permanent HTTPS domain.
2. Edit `twa-manifest.json`: replace `YOUR_DOMAIN_HERE` with your hostname, and set the live manifest and 512×512 PNG icon URLs. Provide a PNG rendition at `icons/icon-512.png` (the included SVG is the PWA icon).
3. Create an Android upload keystore and add these repository Actions secrets:
   - `ANDROID_KEYSTORE_BASE64` — base64-encoded keystore
   - `ANDROID_KEYSTORE_PASSWORD`
   - `ANDROID_KEY_ALIAS`
   - `ANDROID_KEY_PASSWORD`
4. Publish `/.well-known/assetlinks.json` on the deployed site. It must declare package `app.sketchpad.drawing` and the SHA-256 fingerprint of the signing certificate.
5. Run **Actions → Build Android APK** and download the `sketchpad-android-apk` artifact from the workflow run.

The Android workflow requires the real deployed domain, hosted PNG icon, Digital Asset Links file, and signing secrets before it can produce a distributable APK.