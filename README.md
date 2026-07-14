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
4. Set `NEXT_PUBLIC_SITE_URL` only after your final production URL is known. The latest APK URL is maintained in `app/config.ts`.
5. Run `npm run dev`.

## Download architecture

All latest-version download buttons use `/download`. The route redirects to the Version 1.1 URL stored in `app/config.ts`, so the public link remains stable when the release is updated. When `NEXT_PUBLIC_SITE_URL` is configured, the QR code encodes that stable route; otherwise it encodes the official Version 1.1 APK URL directly.

## Updating the APK

1. Upload or replace the approved APK in the official file location.
2. In `app/config.ts`, update the latest APK URL, build label, release metadata, and structured release notes.
3. Keep older versions in the structured previous-releases list when they should remain available.
4. Recalculate the size and SHA-256 checksum when you want to display them.
5. Redeploy. The `/download` route and its QR code remain stable.

## Deploying to Vercel

1. Push this folder to the connected Git repository.
2. Import the repository into Vercel and confirm the detected Next.js framework.
3. Leave **Output Directory** empty so Vercel uses the standard Next.js `.next` output automatically.
4. Add `NEXT_PUBLIC_SITE_URL` with the final production URL.
5. Deploy a preview, then configure the production domain.
6. Update `NEXT_PUBLIC_SITE_URL` to that final domain and redeploy.
7. Test `/download` and scan the production QR code only after the production URL is configured.

The default `dev`, `build`, and `start` scripts target standard Next.js and Vercel. The `dev:sites`, `build:sites`, and `start:sites` scripts preserve the separate vinext/Cloudflare Sites workflow.

## Validation

Run `npm run build` for the production build and `npm test` for the rendered site checks.

## Current release facts

The current official release is Fitness Buddy Version 1.1. The stable `/download` route points to its Google Drive download URL. Version 1.0 remains listed as an older direct download on the Release Notes page and does not have a QR code.
