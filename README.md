# Fitness Buddy website

Official public information and APK download website for Fitness Buddy. The project uses Next.js, TypeScript, the App Router, and a Vercel-compatible deployment structure.

## Included pages

- Homepage with features, FAQ, gallery, accessibility-aware lightbox, latest-build information, QR code, and copy actions
- Stable `/download` redirect route
- `/release-notes`, `/installation`, `/privacy`, `/terms`, `/support`, and `/about`
- Sitemap, robots rules, metadata, social sharing image, and a custom 404 page

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_SITE_URL` to the final production website URL.
4. Set `APK_ASSET_URL` to the current official APK URL. The supplied Google Drive folder URL is the initial value.
5. Run `npm run dev`.

## Download architecture

All download buttons use `/download`. The route redirects to `APK_ASSET_URL`, so updating the APK location does not change the public link or invalidate the QR code. The QR code is created only when `NEXT_PUBLIC_SITE_URL` is configured, ensuring it never contains a local or preview address.

## Updating the APK

1. Upload or replace the approved APK in the official file location.
2. Update `APK_ASSET_URL` in the hosting environment.
3. In `app/config.ts`, update the build label, filename, file size, SHA-256 checksum, release date, and structured release notes.
4. Recalculate the size from the exact file and calculate a new SHA-256 checksum.
5. Redeploy. The `/download` route and its QR code remain stable.

## Deploying to Vercel

1. Push this folder to the connected Git repository.
2. Import the repository into Vercel and confirm the detected Next.js framework.
3. Add `NEXT_PUBLIC_SITE_URL` with the final production URL and `APK_ASSET_URL` with the official APK destination.
4. Deploy a preview, then configure the production domain.
5. Update `NEXT_PUBLIC_SITE_URL` to that final domain and redeploy.
6. Test `/download` and scan the production QR code only after the production URL is configured.

## Validation

Run `npm run build` for the production build and `npm test` for the rendered site checks.

## Current release facts

The supplied artifact is `app-debug.apk` (35.8 MB) with SHA-256 `67f7cef1ec71daed46557eb87cb626dae6de83b350f280ee7e12ef0356dfed0c`. It is labeled as a debug prototype build. No verified version name or release date was embedded with the supplied artifact.
