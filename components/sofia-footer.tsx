export function SofiaFooter() {
  return (
    <footer className="pb-[calc(20px+env(safe-area-inset-bottom))] pt-8 text-center">
      <p className="text-[15px] font-black text-white">SofiaRusso</p>
      <p className="mt-1 text-[11px] font-medium leading-5 text-[var(--text-secondary)]">Sofia is a virtual creator.</p>
      <p className="mx-auto mt-2 max-w-[18rem] text-[11px] font-medium leading-5 text-[var(--text-secondary)]">
        Social links may lead to external websites.
      </p>
      <p className="mt-3 text-[11px] font-medium leading-5 text-[var(--text-secondary)]">&copy; 2026 SofiaRusso</p>
    </footer>
  );
}
