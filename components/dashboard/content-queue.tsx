'use client';

import { ExternalLink, Clock, CheckCircle2, Loader2, FileEdit } from 'lucide-react';

export interface QueueItem {
  content: string;
  time: string;
  type: 'Venda' | 'Repost' | 'Story' | 'Educativo' | 'Reels';
  status: 'Agendado' | 'Gerando...' | 'Rascunho' | 'Publicado';
}

interface ContentQueueProps {
  items: QueueItem[];
}

const statusConfig = {
  'Agendado': { color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: CheckCircle2 },
  'Gerando...': { color: 'bg-amber-500/10 text-amber-400 border-amber-500/20', icon: Loader2 },
  'Rascunho': { color: 'bg-slate-800 text-slate-400 border-slate-700', icon: FileEdit },
  'Publicado': { color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', icon: CheckCircle2 },
};

const typeColors: Record<string, string> = {
  Venda: 'bg-emerald-500/10 text-emerald-400',
  Repost: 'bg-sky-500/10 text-sky-400',
  Story: 'bg-pink-500/10 text-pink-400',
  Educativo: 'bg-violet-500/10 text-violet-400',
  Reels: 'bg-orange-500/10 text-orange-400',
};

export function ContentQueue({ items }: ContentQueueProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-800">
            {['Conteúdo', 'Horário', 'Tipo', 'Status'].map(h => (
              <th key={h} className="pb-4 pr-6 font-medium text-slate-500">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => {
            const { color, icon: StatusIcon } = statusConfig[item.status];
            return (
              <tr key={i} className="border-b border-slate-800/50 last:border-0 hover:bg-slate-800/20 transition-colors">
                <td className="py-4 pr-6">
                  <span className="text-slate-300 font-medium">{item.content}</span>
                </td>
                <td className="py-4 pr-6">
                  <span className="flex items-center gap-1.5 text-slate-400 whitespace-nowrap">
                    <Clock size={12} /> {item.time}
                  </span>
                </td>
                <td className="py-4 pr-6">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${typeColors[item.type] ?? 'bg-slate-800 text-slate-400'}`}>
                    {item.type}
                  </span>
                </td>
                <td className="py-4">
                  <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border w-fit ${color}`}>
                    <StatusIcon size={11} className={item.status === 'Gerando...' ? 'animate-spin' : ''} />
                    {item.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
