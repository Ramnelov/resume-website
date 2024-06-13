import { Component, createEffect, createSignal } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { FiMenu } from "solid-icons/fi";

export const Nav: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const location = useLocation();
  const [navRef, setNavRef] = createSignal<HTMLDivElement | null>(null)

  /**
   * Handle click outside of the nav to close it
   * @param e 
   */
  const handleOutsideClick = (e: MouseEvent) => {
    const ref = navRef()
    if (ref && !ref.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }

  /**
   * Add or remove event listener for outside click
   */
  createEffect(() => {
    if (isOpen()) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
  })

  return (
    <>
      <FiMenu onClick={() => setIsOpen(!isOpen())} class="size-14 px-1 py-1 transition-colors duration-100 text-gray-400 hover:text-white" />
      <nav
        ref={setNavRef}
        class={`mt-16 text-3xl font-titillium backdrop-blur fixed border border-l-0 border-gray-300 border-opacity-20 flex flex-col items-start p-4 transition-transform duration-200 ${
          isOpen() ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transform: `translateX(${isOpen() ? "0%" : "-100%"})` }}
      >
        <A
          href="/"
          class={`transition-colors duration-100 my-2 font-semibold ${
            location.pathname === "/"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Home
        </A>
        <A
          href="/about"
          class={`transition-colors duration-100 my-2 font-semibold ${
            location.pathname === "/about"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          About
        </A>
        <A
          href="/education"
          class={`transition-colors duration-100 my-2 font-semibold ${
            location.pathname === "/education"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Education
        </A>
        <A
          href="/experiences"
          class={`transition-colors duration-100 my-2 font-semibold ${
            location.pathname === "/experiences"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Experiences
        </A>
        <A
          href="/projects"
          class={`transition-colors duration-100 my-2 font-semibold ${
            location.pathname === "/projects"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Projects
        </A>
      </nav>
    </>
  );
};