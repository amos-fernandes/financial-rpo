'use client';

import { motion } from 'framer-motion';
import { Star, Download, CheckCircle, ArrowRight, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const ebooks = [
  {
    id: 1,
    title: "Saindo do Vermelho em 90 Dias",
    category: "Finanças Pessoais",
    pages: 87,
    price: 47,
    oldPrice: 97,
    badge: "⭐ Mais Vendido",
    color: "from-emerald-500 to-teal-500",
    featured: false
  },
  {
    id: 2,
    title: "Investindo do Zero",
    category: "Investimentos",
    pages: 112,
    price: 59,
    oldPrice: 127,
    badge: "🔥 Novo",
    color: "from-blue-500 to-indigo-500",
    featured: false
  },
  {
    id: 3,
    title: "Combo Completo (5 E-books)",
    category: "Coleção Premium",
    pages: 460,
    price: 149,
    oldPrice: 497,
    badge: "💎 Melhor Custo-Benefício",
    color: "from-amber-500 to-orange-500",
    featured: true
  }
];

const testimonials = [
  { name: "Camila R.", location: "Goiânia, GO", text: "Quitei R$ 8.400 em dívidas em 3 meses seguindo o método. Vale cada centavo!" },
  { name: "Ricardo M.", location: "São Paulo, SP", text: "Hoje recebo renda passiva todo mês com FIIs. O e-book me deu a base que eu precisava." },
  { name: "Ana Paula S.", location: "Brasília, DF", text: "Conteúdo denso, prático e sem enrolação. Recomendo para quem quer resultados reais." }
];

export default function StorePage() {
  const [selectedBook, setSelectedBook] = useState<typeof ebooks[0] | null>(null);

  const handleBuy = (book: typeof ebooks[0]) => {
    const message = `Olá! Quero comprar o e-book *${book.title}* por R$ ${book.price}.\n\nPode me enviar a chave PIX?`;
    window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            FinancePro.
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#catalogo" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">E-books</Link>
            <Link href="/dashboard" className="btn-primary text-sm py-2 px-4">Dashboard AgentIA</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-sm font-medium mb-6">
              🚀 +2.400 Alunos Transformados
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Conhecimento que gera <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Liberdade Real
              </span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              E-books premium que te ensinam a investir com inteligência e sair das dívidas. 
              Sem enrolação. Entrega imediata no WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#catalogo" className="btn-primary flex items-center justify-center gap-2">
                Quero Mudar de Vida <ArrowRight size={20} />
              </Link>
              <Link href="#como-funciona" className="btn-secondary">Como Funciona?</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-y border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          {[
            { value: "+2.400", label: "Leitores" },
            { value: "5.0★", label: "Avaliação Média" },
            { value: "8", label: "E-books Disponíveis" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog */}
      <section id="catalogo" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Biblioteca Digital</h2>
            <p className="text-slate-400">Escolha sua ferramenta de transformação financeira</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((book, idx) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative group rounded-2xl border ${book.featured ? 'border-indigo-500/50 bg-slate-900/50' : 'border-slate-800 bg-slate-900/30'} p-8 hover:border-indigo-500 transition-all duration-300`}
              >
                {book.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {book.badge}
                  </div>
                )}
                
                <div className="h-48 mb-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700 group-hover:scale-[1.02] transition-transform">
                  <span className="text-6xl">📚</span>
                </div>

                <div className="mb-4">
                  <p className="text-indigo-400 text-sm font-medium mb-1">{book.category}</p>
                  <h3 className="text-xl font-bold text-white">{book.title}</h3>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                  <span className="flex items-center gap-1"><Download size={14} /> {book.pages} págs</span>
                  <span className="flex items-center gap-1"><Star size={14} className="fill-amber-500 text-amber-500" /> 5.0</span>
                </div>

                <div className="flex items-end justify-between mb-6">
                  <div>
                    <span className="text-slate-500 line-through text-sm">R$ {book.oldPrice}</span>
                    <div className="text-3xl font-bold text-white">R$ {book.price}</div>
                  </div>
                </div>

                <button 
                  onClick={() => handleBuy(book)}
                  className={`w-full py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${book.featured ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}
                >
                  <MessageCircle size={18} /> Comprar via PIX
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Simples assim — Como funciona</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", icon: "👆", title: "Escolha", desc: "Clique em Comprar no e-book desejado" },
              { step: "2", icon: "💬", title: "WhatsApp", desc: "Mensagem automática com seus dados" },
              { step: "3", icon: "💸", title: "PIX", desc: "Pagamento seguro e aprovação instantânea" },
              { step: "4", icon: "📥", title: "Receba", desc: "PDF entregue na hora no seu WhatsApp" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-indigo-400 font-bold mb-2">Passo {item.step}</div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos leitores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex text-amber-500 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 mb-4">&quot;{t.text}&quot;</p>
                <div className="text-sm font-bold text-white">{t.name} <span className="text-slate-500 font-normal">— {t.location}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ShieldCheck className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Garantia Blindada de 7 Dias</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Se você não gostar do conteúdo, devolvemos 100% do seu dinheiro. 
            Sem perguntas, sem burocracia. O risco é todo nosso.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> Compra 100% Segura</span>
            <span className="flex items-center gap-2"><Zap size={16} className="text-amber-500" /> Entrega Imediata</span>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para mudar sua relação com o dinheiro?</h2>
          <p className="text-slate-400 mb-8">Escolha seu e-book e receba agora mesmo no WhatsApp.</p>
          <Link href="#catalogo" className="btn-primary text-lg px-10 py-4">
            📚 Quero meu e-book agora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p className="mb-4">FinancePro © 2025 — Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6">
          <Link href="#catalogo" className="hover:text-white transition-colors">E-books</Link>
          <a href="https://wa.me/5500000000000" className="hover:text-white transition-colors flex items-center gap-1">
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
}
