import type { Metadata } from "next";
import { InnerPage } from "../components/inner-page";

export const metadata: Metadata = { title: "Contact — NEXORA", description: "Start a conversation with NEXORA about your next digital project." };

export default function ContactPage() { return <InnerPage page="contact" />; }
