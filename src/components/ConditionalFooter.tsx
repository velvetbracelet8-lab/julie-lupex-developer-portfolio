"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function ConditionalFooter() {
const pathname = usePathname();

// Hide the footer on About, Services, Contact, and Blog pages.
const isExcludedPage =
pathname === "/about" ||
pathname === "/services" ||
pathname === "/contact" ||
pathname === "/blog" ||
pathname.startsWith("/blog/");

if (isExcludedPage) {
return null;
}

return <Footer />;
}
