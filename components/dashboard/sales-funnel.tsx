import { TrendingUp } from 'lucide-react';

interface FunnelStep {
  label: string;
  value: string;
  width: string;
  highlight?: boolean;
}

const steps: FunnelStep[] = [
  { label: 'Alcance do Post', value: '4.800', width: '100%' },
  { label: 'Comentou / DM', value: '312 (6.5%)', width: '65%' },
  { label: 'Resposta Automática', value: '291 (93%)', width: '60%' },
  { label: 'Clicou no Link', value: '58 (1.2%)', width: '30%' },
  { label: 'Vendas Confirmadas', value: '34 (0.7%)', width: '15%', highlight: true },
];

export function SalesFunnel() {
  return (
    <div>
      <h3 className="text-base font-bold text-white mb-5 flex items-center gap-2">
        <TrendingUp size={18} className="text-indigo-400" /> Funil de Conversão
      </h3>
      <div className="space-y-4">
        {steps.map((step, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-slate-400">{step.label}</span>
              <span className={`font-bold ${step.highlight ? 'text-emerald-400' : 'text-white'}`}>{step.value}</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${step.highlight ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' : 'bg-gradient-to-r from-indigo-700 to-indigo-500'}`}
                style={{ width: step.width }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-slate-950 rounded-xl border border-slate-800">
        <p className="text-xs text-slate-500 mb-0.5">Ticket Médio</p>
        <p className="text-2xl font-black text-white">R$ 52,80</p>
        <p className="text-xs text-emerald-500 mt-1">↑ Melhor seller: Saindo do Vermelho</p>
      </div>
    </div>
  );
}
