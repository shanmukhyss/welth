import { Landmark } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <Landmark className="size-7 text-black-500" />
            <span className="text-lg font-semibold">Built for developers, by developers.</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {["Support", "Contact", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm md:text-base font-medium text-gray-600 hover:text-blue-500 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <span>
            © {new Date().getFullYear()} <span className="text-black font-semibold">Welth</span>. All rights reserved.
          </span>
          <span className="mt-2 md:mt-0">
            Made with <span className="text-red-500">♥</span> by {" "}
            <Link
              href="/about"
              className="text-gray-800 font-medium hover:text-blue-500 transition-colors"
            >
              Shanmukh
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;