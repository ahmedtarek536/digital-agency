import type { Metadata } from "next";
import { InnerPage } from "../components/inner-page";

export const metadata: Metadata = { title: "Selected Work — NEXORA", description: "Explore illustrative brand, digital and technology concepts from NEXORA." };

export default function WorkPage() { return <InnerPage page="work" />; }
