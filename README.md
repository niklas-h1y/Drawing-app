# Sketchpad — Drawing Studio

Responsive installable drawing PWA with offline support, transparent layers, and an Android APK build.

## Features
- Pen and transparent eraser, color picker, quick palette, and adjustable brush size.
- Multiple layers: add, select, hide/show, rename (double-click), adjust opacity, reorder, and delete.
- Mouse, touch, and stylus input; undo/redo; clear active layer; composite PNG export.
- Local autosave, PWA manifest, and service worker for offline use.

## Run locally
Serve this directory over HTTPS or localhost (service workers require a secure context):

```bash
npx serve .
```

## Build an Android APK
The **Build Android APK** GitHub Actions workflow uses Capacitor to generate a native Android wrapper and build a debug APK. It does not need a deployed domain, Bubblewrap, a keystore, or Android signing secrets.

1. Open the repository's **Actions** tab.
2. Select **Build Android APK** and choose **Run workflow** (or push a commit to the configured branch).
3. Open the completed run and download the **sketchpad-android-apk** artifact.
4. Extract the ZIP and install `app-debug.apk` on your Android device. You may need to allow installs from that source.

This debug APK is suitable for sideloading and testing. Play Store publication requires a separately configured release signing key.
