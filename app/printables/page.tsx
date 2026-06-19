import type { Metadata } from "next";
import { printables } from "@/content/printables";
import { PrintablesClient } from "@/components/PrintablesClient";

export const metadata: Metadata = {
  title: "Free Printables",
  description:
    "Free coloring pages, activity sheets, and reward charts for ages 2–10. Unlock the full printable pack with your email.",
};

export default function PrintablesPage() {
  return (
    <div className="shell py-8 md:py-12">
      <PrintablesClient items={printables} />
    </div>
  );
}
