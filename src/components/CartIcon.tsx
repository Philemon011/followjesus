interface CartIconProps {
  count: number;
  onClick?: () => void;
}

export function CartIcon({ count, onClick }: CartIconProps) {
  return (
    <button
      onClick={onClick}
      aria-label={`Panier, ${count} article${count > 1 ? "s" : ""}`}
      className="relative flex h-10 w-10 items-center justify-center group"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="stroke-current">
        <path
          d="M6 8h12l-1.2 11.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z"
          strokeWidth="1.6"
          strokeLinejoin="round"
          className="transition-transform group-hover:scale-105 origin-bottom"
        />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center bg-scarlet text-[10px] font-body font-medium text-white">
          {count}
        </span>
      )}
    </button>
  );
}