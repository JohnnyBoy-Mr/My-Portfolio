import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({
  darkMode,
  setDarkMode,
}: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          Portfolio
        </a>

        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#about"
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#journey"
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Journey
            </a>
          </li>

          <li>
            <a
              href="#techstack"
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Tech Stack
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </li>

          <li>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}