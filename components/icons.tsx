export function ArrowLeft({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="1.5" cy="1.5" r="1.5" fill="#B3B1AF" />
      <circle cx="4.5" cy="4.5" r="1.5" fill="#B3B1AF" />
      <circle cx="7.5" cy="7.5" r="1.5" fill="#B3B1AF" />
      <circle cx="4.5" cy="10.5" r="1.5" fill="#B3B1AF" />
      <circle cx="1.5" cy="13.5" r="1.5" fill="#B3B1AF" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.5" cy="1.5" r="1.5" fill="#B3B1AF" />
      <circle cx="4.5" cy="4.5" r="1.5" fill="#B3B1AF" />
      <circle cx="1.5" cy="7.5" r="1.5" fill="#B3B1AF" />
      <circle cx="4.5" cy="10.5" r="1.5" fill="#B3B1AF" />
      <circle cx="7.5" cy="13.5" r="1.5" fill="#B3B1AF" />
    </svg>
  );
}
