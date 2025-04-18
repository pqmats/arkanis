import Header from '@/components/organisms/Header'
import Banner from '@/components/organisms/Banner'

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      
      {/* Header fixo */}
      <Header />

      {/* Conteúdo da página com padding superior para compensar o header */}
      <main className="pt-[72px]"> {/* Ajuste esse valor conforme a altura real do seu header */}
        <Banner />
      </main>

      <footer className="flex gap-[24px] flex-wrap items-center justify-center p-8 sm:p-20">
        {/* conteúdo do footer */}
      </footer>
    </div>
  );
}
