import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "DailyMart",
    description: "DailyMart - Your daily grocery store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
