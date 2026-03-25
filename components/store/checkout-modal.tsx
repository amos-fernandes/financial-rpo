'use client';

import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { buildSaleMessage, openWhatsApp } from '@/lib/whatsapp';
import type { Ebook } from './ebook-card';

interface CheckoutModalProps {
  ebook: Ebook | null;
  onClose: () => void;
}

export function CheckoutModal({ ebook, onClose }: CheckoutModalProps) {
  if (!ebook) return null;

  const handleBuy = () => {
    openWhatsApp(buildSaleMessage(ebook.title, ebook.price));
    onClose();
  };

  return (
    <Modal open={!!ebook} onClose={onClose} title="Finalizar Compra">
      <div className="space-y-5">
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <p className="text-xs text-slate-500 mb-1">Você está comprando</p>
          <p className="font-bold text-white">{ebook.title}</p>
          <div className="flex items-center gap-3 mt-3">
            <span className="text-slate-500 line-through text-sm">R$ {ebook.oldPrice}</span>
            <span className="text-2xl font-black text-indigo-400">R$ {ebook.price}</span>
          </div>
        </div>

        <div className="space-y-2 text-sm text-slate-400">
          <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-emerald-400" /> Pagamento 100% seguro via PIX</div>
          <div className="flex items-center gap-2"><Zap size={14} className="text-amber-400" /> Entrega imediata no WhatsApp</div>
          <div className="flex items-center gap-2"><MessageCircle size={14} className="text-indigo-400" /> Suporte direto com o autor</div>
        </div>

        <Button onClick={handleBuy} size="lg" className="w-full justify-center">
          <MessageCircle size={18} /> Continuar no WhatsApp
        </Button>

        <p className="text-center text-xs text-slate-600">
          Ao clicar, você será direcionado ao WhatsApp para concluir o pagamento.
        </p>
      </div>
    </Modal>
  );
}
