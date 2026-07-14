export const OFFICIAL_DRIVE_URL = "https://drive.google.com/drive/u/1/folders/1rWEQBakZD1aegJ82wpvgeIXebP-tSqrz";

// The production hostname is supplied at build time so the QR code never uses a local or preview URL.
export const appConfig = {
  appName: "Fitness Buddy",
  tagline: "Personalized cardio guidance that adapts with your progress.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  apkAssetUrl: process.env.APK_ASSET_URL ?? OFFICIAL_DRIVE_URL,
  buildLabel: "Debug prototype build",
  versionName: "Not embedded in supplied artifact",
  releaseDate: "Not specified for supplied artifact",
  apkFilename: "app-debug.apk",
  apkFileSize: "35.8 MB",
  apkSha256: "67f7cef1ec71daed46557eb87cb626dae6de83b350f280ee7e12ef0356dfed0c",
  releaseNotes: [
    "Current downloadable artifact is a debug prototype build.",
    "Includes the Fitness Buddy mobile client and its configured services.",
    "Use the official download route so future release files can be changed without changing the link.",
  ],
  team: [
    { name: "Aaron Lance Bañares Cabueñas", initials: "AC", role: "Researcher and Developer" },
    { name: "Jerome Isaac de Robles Mendoza", initials: "JM", role: "Researcher and Developer" },
    { name: "Lester Yvan Paglicawan Ramirez", initials: "LR", role: "Researcher and Developer" },
  ],
} as const;
