import type { Metadata } from "next";
import { InnerPage } from "../components/inner-page";

export const metadata: Metadata = { title: "Services — NEXORA", description: "Digital strategy, design, development, AI and growth services from NEXORA, an independent digital studio in Cairo." };

export default function ServicesPage() { return <InnerPage page="services" />; }
