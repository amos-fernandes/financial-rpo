'use client';

import { motion } from 'framer-motion';
import { Download, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { buildSaleMessage, openWhatsApp } from '@/lib/whatsapp';

export interface Ebook {
  id: number;
  title: string;
  category: string;
  pages: number;
  price: number;
  oldPrice: number;
  badge?: string;
  featured?: boolean;
  emoji?: string;
}

interface EbookCardProps {
  ebook: Ebook;
  index?: number;
}

export function EbookCard({ ebook, index = 0 }: EbookCardProps) {
  const discount = Math.round((1 - ebook.price / ebook.oldPrice) * 100);

  const handleBuy = () => {
    openWhatsApp(buildSaleMessage(ebook.title, ebook.price));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      className={`relative group rounded-2xl border p-8 transition-all duration-300 flex flex-col ${
        ebook.featured
          ? 'border-indigo-500/60 bg-gradient-to-b from-indigo-950/40 to-slate-900/60 shadow-xl shadow-indigo-500/10'
          : 'border-slate-800 bg-slate-900/40 hover:border-indigo-500/40'
      }`}
    >
      {/* Badge */}
      {ebook.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full uppercase tracking-wider whitespace-nowrap shadow-lg">
          {ebook.badge}
        </div>
      )}

      {/* Discount pill */}
      <div className="absolute top-4 right-4 px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">
        -{discount}%
      </div>

      {/* Cover Mock */}
      <div className="h-44 mb-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center border border-slate-700 group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
        <span className="text-6xl select-none">{ebook.emoji ?? '📚'}</span>
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">{ebook.category}</p>
        <h3 className="text-lg font-bold text-white mb-3 leading-snug">{ebook.title}</h3>

        <div className="flex items-center gap-4 text-xs text-slate-500 mb-5">
          <span className="flex items-center gap-1"><Download size={12} /> {ebook.pages} páginas</span>
          <span className="flex items-center gap-1">
            <Star size={12} className="fill-amber-400 text-amber-400" /> 5.0
          </span>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="block text-slate-500 line-through text-xs">R$ {ebook.oldPrice}</span>
            <span className="text-3xl font-black text-white">R$ {ebook.price}</span>
          </div>
          <span className="text-xs text-slate-400">entrega imediata</span>
        </div>
      </div>

      <Button
        onClick={handleBuy}
        variant={ebook.featured ? 'primary' : 'secondary'}
        size="md"
        className="w-full justify-center gap-2"
      >
        <MessageCircle size={16} /> Comprar via PIX
      </Button>
    </motion.div>
  );
}
