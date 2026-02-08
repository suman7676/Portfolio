import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Suman Ahammed | Full Stack Developer",
  description:
    "Suman Ahammed is a Full Stack Developer specializing in Laravel,react.js next.js & Vue.js, and modern web applications.",

  keywords: [
    "Suman Ahammed",
    "Suman",
    "Full Stack Developer",
    "Laravel Developer",
    "React.js Developer",
    "Vue.js Developer",
    "Next.js Developer",
    "Web Developer",
    "Bangladeshi Developer",
  ],

  icons: {
    icon: "/profile.png",          // public folder e রাখবেন
    apple: "/profile.png",
  },

  openGraph: {
    title: "Suman Ahammed | Full Stack Developer",
    description:
      "Portfolio of Suman Ahammed, a professional Full Stack Developer.",
    url: "https://sumanahammed.com",
    siteName: "Suman Ahammed",
    images: [
      {
        url: "/profile.png",   // public folder e রাখবেন
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Suman Ahammed | Full Stack Developer",
    description:
      "Portfolio of Suman Ahammed, a professional Full Stack Developer.",
    images: ["/profile.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
