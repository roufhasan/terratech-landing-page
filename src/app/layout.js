import localFont from "next/font/local";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "./globals.css";

const sohneBreit = localFont({
  src: [
    // Extra Light - 200
    {
      path: "../../public/fonts/SohneBreit-Extraleicht.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/SohneBreit-ExtraleichtKursiv.otf",
      weight: "200",
      style: "italic",
    },

    // Light - 300
    {
      path: "../../public/fonts/SohneBreit-Leicht.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/SohneBreit-LeichtKursiv.otf",
      weight: "300",
      style: "italic",
    },

    // Regular/Book - 400
    {
      path: "../../public/fonts/SohneBreit-Buch.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SohneBreit-BuchKursiv.otf",
      weight: "400",
      style: "italic",
    },

    // Medium/Dreiviertelfett - 500
    {
      path: "../../public/fonts/SohneBreit-Dreiviertelfett.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SohneBreit-DreiviertelfettKursiv.otf",
      weight: "500",
      style: "italic",
    },

    // Semi-bold/Halbfett - 600
    {
      path: "../../public/fonts/SohneBreit-Halbfett.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SohneBreit-HalbfettKursiv.otf",
      weight: "600",
      style: "italic",
    },

    // Bold/Fett - 700
    {
      path: "../../public/fonts/SohneBreit-Fett.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/SohneBreit-FettKursiv.otf",
      weight: "700",
      style: "italic",
    },

    // Extra Bold/Extrafett - 800
    {
      path: "../../public/fonts/SohneBreit-Extrafett.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/SohneBreit-ExtrafettKursiv.otf",
      weight: "800",
      style: "italic",
    },

    // Heavy/Kraftig - 900
    {
      path: "../../public/fonts/SohneBreit-Kraftig.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/SohneBreit-KraftigKursiv.otf",
      weight: "900",
      style: "italic",
    },
  ],

  variable: "--font-sohne-breit",
});

const neueHaas = localFont({
  src: [
    {
      path: "../../public/fonts/neuehaasgrotdisp-45light.otf",
      weight: "200",
      style: "normal",
    },
  ],

  variable: "--font-neue-haas-grotesk",
});

export const metadata = {
  title: "Terratech | Precision Gravimetry & Drone Surveying Solutions",
  description:
    "Professional gravimetric surveys and drone mapping services. We deliver accurate topographic maps, engineering geodesy, and 3D terrestrial laser scanning for construction, mining, and infrastructure projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sohneBreit.variable} ${neueHaas.variable}`}>
      <body className="font-sohne bg-dark-soil text-warm-light relative antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
