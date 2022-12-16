import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme);
    }
  }

  return (
    <div className="flex h-full items-center py-2">
      <button
        className="dark:highlight-white/5 relative h-full items-center rounded-lg shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 lg:flex"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "dark" ? (
          <svg
            className="h-full fill-white p-3 active:-rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M287.5 32C164 32 64 132.3 64 256C64 379.7 164 480 287.5 480C348.1 480 403 455.8 443.3 416.6C448.3 411.7 449.6 404.1 446.4 397.9C443.2 391.7 436.3 388.2 429.4 389.4C419.6 391.1 409.6 392 399.3 392C302.4 392 223.8 313.2 223.8 216C223.8 150.2 259.8 92.9 313.1 62.7C319.2 59.2 322.3 52.2 320.8 45.4C319.3 38.6 313.5 33.5 306.5 32.9C300.2 32.4 293.9 32.1 287.5 32.1V32Z" />
          </svg>
        ) : (
          <svg
            className="h-full -rotate-45 fill-slate-700 p-3 active:rotate-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z" />
          </svg>
        )}
      </button>
    </div>
  );
}
