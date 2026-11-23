import type { Metadata } from "next";
import { InnerPage } from "../components/inner-page";

export const metadata: Metadata = { title: "About — NEXORA", description: "Meet NEXORA: an independent digital growth partner based in Cairo, Egypt." };

export default function AboutPage() { return <InnerPage page="about" />; }
