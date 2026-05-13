export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        <div className="text-lg font-semibold tracking-[0.2em]">
          CAP AU LARGE
        </div>

        <nav className="hidden gap-8 md:flex">
          <a href="#" className="text-sm uppercase tracking-wide text-neutral-700 hover:text-black">
            Shop
          </a>

          <a href="#" className="text-sm uppercase tracking-wide text-neutral-700 hover:text-black">
            Collections
          </a>

          <a href="#" className="text-sm uppercase tracking-wide text-neutral-700 hover:text-black">
            About
          </a>
        </nav>

      </div>
    </header>
  );
}