'use client'

import { Moon, Grip, Bell, BookText } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-6 py-4 bg-zinc-900">

      {/* Logo + ícones de idioma e tema */}
      <div className="flex items-center gap-4">
        
        <button className="bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full transition">
          <Grip size={18} />
        </button>

        <span className="text-white font-bold text-lg tracking-wide">ARKANIS</span>

        <button className="bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full transition">
          <Moon size={18} />
        </button>
      </div>
      
      {/* Ações à direita */}
      <div className="flex items-center gap-4">

        {/* Campo de busca */}
        <div className="flex-1 mx-2 max-w-x2">
            <input
            type="text"
            placeholder="Pesquise pelo nome do filme ou categoria..."
            className="w-full px-4 py-2 bg-zinc-800 text-white rounded-md placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            />
        </div>

        <button className="bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full transition">
          <BookText size={18} />
        </button>

        <button className="bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full transition">
          <Bell size={18} />
        </button>

        {/* Avatar */}
        <Image
          src="https://avatars.githubusercontent.com/u/28615998?v=4"
          alt="Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </header>
  )
}
