'use client';

import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Tweet {
  id: number;
  author: string;
  handle: string;
  time: string;
  original: string;
  translated: string;
  cta: string;
}

const mockTweets: Tweet[] = [
  {
    id: 1,
    author: 'Amos Fernandes',
    handle: '@AmosFernandes',
    time: '2h atrás',
    original: "The biggest mistake people make with money is thinking that financial freedom is about earning more. It's about spending less than you earn and investing the difference consistently.",
    translated: 'O maior erro que as pessoas cometem com dinheiro é achar que liberdade financeira é sobre ganhar mais. É sobre gastar MENOS do que você ganha e investir a diferença de forma consistente.',
    cta: '💰 Simples assim. Difícil de executar. Mas possível para qualquer pessoa que decida começar hoje.',
  },
  {
    id: 2,
    author: 'Amos Fernandes',
    handle: '@AmosFernandes',
    time: '8h atrás',
    original: "Most people avoid talking about money because it's 'awkward.' But avoiding the conversation is exactly why they stay broke.",
    translated: "A maioria das pessoas evita falar sobre dinheiro porque é 'constrangedor.' Mas fugir dessa conversa é exatamente por que continuam sem dinheiro.",
    cta: '🚨 Fale sobre dinheiro. Aprenda sobre dinheiro. Faça o dinheiro trabalhar para VOCÊ.',
  },
];

export function TweetImporter() {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (tweet: Tweet) => {
    const text = `${tweet.translated}\n\n${tweet.cta}`;
    navigator.clipboard.writeText(text);
    setCopied(tweet.id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-4">
      {mockTweets.map(tweet => (
        <div key={tweet.id} className="p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="font-semibold text-sm text-white">{tweet.author}</span>
              <span className="ml-2 text-xs text-slate-500">{tweet.handle} · {tweet.time}</span>
            </div>
            <ExternalLink size={14} className="text-slate-600 hover:text-slate-400 cursor-pointer" />
          </div>

          <p className="text-xs text-slate-600 italic border-l-2 border-slate-800 pl-3 mb-3">{tweet.original}</p>

          <div className="bg-slate-900 rounded-lg p-3 border border-slate-800 mb-3">
            <p className="text-sm text-slate-300 mb-2">{tweet.translated}</p>
            <p className="text-sm text-indigo-400 font-medium">{tweet.cta}</p>
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleCopy(tweet)}
            className="gap-2"
          >
            {copied === tweet.id ? (
              <><Check size={13} className="text-emerald-400" /> Copiado!</>
            ) : (
              <><Copy size={13} /> Copiar Post</>
            )}
          </Button>
        </div>
      ))}
    </div>
  );
}
