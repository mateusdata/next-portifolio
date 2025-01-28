import React from 'react';

export default function Footer() {
  return (
    <footer className="darl:bg-neutral-900 text-neutral-50 text-center py-4">
      <span className="text-sm text-neutral-950 dark:text-neutral-100">
        Todos os direitos reservados &copy; {new Date().getFullYear()} MateusData
      </span>
    </footer>
  );
}
