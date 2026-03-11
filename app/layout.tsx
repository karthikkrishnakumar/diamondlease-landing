import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Diamondlease Car Rental | Maintenance",
  description:
    "Diamondlease Car Rental is temporarily undergoing maintenance. Existing bookings are unaffected and our team remains available to assist you with new and existing reservations.",
  openGraph: {
    title: "Diamondlease Car Rental | We'll Be Back Very Soon",
    description:
      "Our website is currently experiencing a temporary technical issue, but our services continue as usual. Please contact us directly to make or manage your bookings.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
