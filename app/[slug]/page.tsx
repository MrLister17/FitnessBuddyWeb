import type { Metadata } from "next";
import { ContentPage } from "../site-client";

const pages: Record<string, { title: string; description: string }> = {
  "release-notes": { title: "Release Notes", description: "Current Fitness Buddy build information and updates." },
  privacy: { title: "Privacy Policy", description: "How Fitness Buddy handles information used to provide the service." },
  terms: { title: "Terms of Use", description: "Terms that apply when using Fitness Buddy." },
  support: { title: "Support", description: "Fitness Buddy installation help, bug reporting, and general support." },
  installation: { title: "Installation Guide", description: "How to download and install Fitness Buddy from the official website." },
  about: { title: "About Us", description: "The Fitness Buddy story and research team." },
};

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { return pages[params.slug] ?? {}; }
export default function Page({ params }: { params: { slug: string } }) { return <ContentPage slug={params.slug} />; }
