import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link'; // ✅ corect pentru Next.js


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      
      <div className="row-start-1 mt-20 flex justify-center items-center">
        <h1 className="text-6xl font-bold  text-gray-900 dark:text-white">CRESCENT LIBRARY</h1>
      </div>
      <main className="flex flex-col gap-[40px] row-start-2 items-center sm:items-start">
        <div className="italic list-inside list-decimal text-sm/6 text-center mb font-[family-name:var(--font-geist-mono)]">
          <p className="mb-5 tracking-[-.01em] text-xl">
          Welcome to your personalized book haven!
          </p>
          <p className="tracking-[-.01em] text-xl mb-5 ">
          Browse through my handpicked collection and dive into thousands of titles from the online library.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mt-6">
  <Link
    href="/records"
    className="rounded-full border border-transparent bg-foreground text-background transition-colors flex items-center justify-center gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
  >
    My library
  </Link>
  <Link
    href="/search-author"
    className="whitespace-nowrap rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-8 sm:px-6 w-full sm:w-auto"
    target="_blank"
    rel="noopener noreferrer"
  >
    Online library
  </Link>
</div>
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a>
        © 2025 Crescent Library. Cloud Computing - Dumbrava Cristina-Georgiana, 1132.
        </a>
      </footer>
    </div>
  );
}
