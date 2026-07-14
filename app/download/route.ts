import { NextResponse } from "next/server";
import { appConfig } from "../config";

export function GET() {
  return NextResponse.redirect(appConfig.apkAssetUrl, { status: 302 });
}
