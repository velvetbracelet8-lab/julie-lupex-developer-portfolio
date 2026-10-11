"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

const EXCLUDED_EXACT_PATHS = new Set([
"/about",
"/services",
"/contact",
"/blog",
]);

export default function ConditionalFooter() {
const pathname = usePathname();

const isExcludedPage =
EXCLUDED_EXACT_PATHS.has(pathname) ||
pathname.startsWith("/blog/");

if (isExcludedPage) {
return null;
}

return <Footer />;
}
