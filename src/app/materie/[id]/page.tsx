import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dashboard Studente",
    description: "Dashboard personale per la gestione delle materie",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <nav className="bg-indigo-600 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/window.svg"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="invert"
                            />
                            <span className="text-white font-bold text-xl">
                    My Dashboard
                  </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                href="/"
                                className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/materie/nuova"
                                className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Nuova Materia
                            </Link>
                            <Link
                                href="/profilo"
                                className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Profilo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        {children}
        </body>
        </html>
    );
}