export const LATEST_APK_URL = "https://drive.usercontent.google.com/download?id=1zxXHPESBWz8sIZ_C2lQoohmOWUb6GjFa&export=download&confirm=t";
export const VERSION_1_0_APK_URL = "https://drive.usercontent.google.com/download?id=1zmbl8y5pujqGfEDW7bTjKPTnDKd1FY2a&export=download&confirm=t";

// When a production hostname is configured, the QR code uses its stable /download route.
// Until then, it safely encodes the latest official APK URL—never a local or preview address.
export const appConfig = {
  appName: "Fitness Buddy",
  tagline: "Personalized cardio guidance that adapts with your progress.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  apkAssetUrl: LATEST_APK_URL,
  buildLabel: "Version 1.1",
  versionName: "1.1",
  releaseDate: "Current release",
  apkFilename: "Fitness Buddy Version 1.1 APK",
  apkFileSize: "",
  apkSha256: "",
  releaseNotes: [
    "Version 1.1 is now the current official download.",
    "The Download APK button and QR code lead to the current version.",
    "Version 1.0 remains available as an older download for users who need it.",
  ],
  previousReleases: [
    { version: "1.0", downloadUrl: VERSION_1_0_APK_URL },
  ],
  team: [
    { name: "Aaron Lance Bañares Cabueñas", initials: "AC", role: "Researcher and Developer" },
    { name: "Jerome Isaac de Robles Mendoza", initials: "JM", role: "Researcher and Developer" },
    { name: "Lester Yvan Paglicawan Ramirez", initials: "LR", role: "Researcher and Developer" },
  ],
} as const;
