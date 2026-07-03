import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "@remix-run/react";
import { scrollToID } from "~/helpers/scroll";

function Navbar() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOnRootPath, setIsOnRootPath] = useState(true);

  useEffect(() => {
    const email = sessionStorage.getItem("login");
    setIsUserLoggedIn(email != null);
    setIsOnRootPath(location.pathname == "/" || location.pathname == "/ReciptHelper/");
  }, [location.pathname]);

  function LogUserOut() {
    sessionStorage.removeItem("login");
    navigate("/");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/75">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          className="group inline-flex items-center gap-3 text-left"
          onClick={() => navigate(isUserLoggedIn ? "/Dashboard" : "/")}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white shadow-sm dark:bg-white dark:text-slate-950">
            RH
          </span>
          <span>
            <span className="block text-sm font-extrabold tracking-tight text-slate-950 dark:text-white">
              Recipt Helper
            </span>
            <span className="hidden text-xs font-medium text-slate-500 sm:block">
              Digitalt kvitteringsarkiv
            </span>
          </span>
        </button>

        <div className="flex items-center gap-1 sm:gap-2">
          {isOnRootPath == true && (
            <div className="hidden items-center gap-1 sm:flex">
              <button
                onClick={() => scrollToID("Features")}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                Funktioner
              </button>
              <button
                onClick={() => scrollToID("About")}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                Om
              </button>
            </div>
          )}

        {isUserLoggedIn ? (
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              onClick={() => navigate("/Settings")}
            >
              Indstillinger
            </button>
            <button
              onClick={() => LogUserOut()}
              className="secondary-button px-4 py-2"
            >
              Logud
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/Login")}
            className="primary-button px-4 py-2"
          >
            Login
          </button>
        )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
