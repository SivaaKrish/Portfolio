import { NextResponse } from "next/server";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

export const revalidate = 3600;

export async function GET() {
  return NextResponse.json(
    {
      site: siteConfig,
      profile,
      projects
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
      }
    }
  );
}
