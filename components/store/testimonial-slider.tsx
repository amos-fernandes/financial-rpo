'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  { name: 'Camila R.', location: 'Goiânia, GO', text: 'Quitei R$ 8.400 em dívidas em 3 meses seguindo o método. Vale cada centavo!', avatar: 'CR' },
  { name: 'Ricardo M.', location: 'São Paulo, SP', text: 'Hoje recebo renda passiva todo mês com FIIs. O e-book me deu a base que eu precisava.', avatar: 'RM' },
  { name: 'Ana Paula S.', location: 'Brasília, DF', text: 'Conteúdo denso, prático e sem enrolação. Recomendo para quem quer resultados reais.', avatar: 'AP' },
  { name: 'Lucas T.', location: 'Belo Horizonte, MG', text: 'Comecei a investir do zero com apenas R$50 e hoje já tenho uma carteira diversificada.', avatar: 'LT' },
];

export function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx(i => (i + 1) % testimonials.length);
  const t = testimonials[idx];

  return (
    <div className="relative max-w-2xl mx-auto text-center px-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
            {t.avatar}
          </div>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">&ldquo;{t.text}&rdquo;</p>
          <div>
            <p className="font-bold text-white">{t.name}</p>
            <p className="text-sm text-slate-500">{t.location}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white">
        <ChevronRight size={20} />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === idx ? 'bg-indigo-400 w-4' : 'bg-slate-700'}`} />
        ))}
      </div>
    </div>
  );
}
