'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="relative w-full h-[70vh]"> {/* Altura: metade da tela */}

      {/* Imagem de fundo */}
      <Image
        src="/images/arcane.jpeg"  // Caminho relativo à pasta public
        alt="Banner"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Sobreposição escura */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900/70 to-transparent z-10" />

      {/* Conteúdo central ocupando 100% da largura */}
      <div className="absolute bottom-10 left-0 right-0 z-20 text-white w-full px-6 md:px-12">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
            A nova série que vai te viciar
          </h1>
          <p className="text-lg mb-6 text-zinc-200">
            Exclusivo na Arkanis. Temporada completa disponível agora.
          </p>

          <Link
            href="/assistir"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition-all"
          >
            Assistir Agora
          </Link>
        </div>
      </div>
    </div>
  )
}
