import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-950">
      <header className="flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            Meu Portfólio
          </h1>
        </div>

        <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <Link
            className="dark:text-white text-neutral-950 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="/"
          >
            Início
          </Link>
          <Link
            className="dark:text-white text-neutral-950 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="/sobre"
          >
            Sobre
          </Link>
          <Link
            className="dark:text-white text-neutral-950 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href="/perfil"
          >
            Perfil
          </Link>
        </nav>
      </header>
      <hr className="border-neutral-300 dark:border-neutral-800" />
    </div>
  )
}
