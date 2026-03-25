'use client';

import { formatCurrency, predictRevenue } from '@/lib/analytics/metrics';
import { TrendingUp, DollarSign, Users, BarChart3 } from 'lucide-react';

interface ReportRow {
  month: string;
  revenue: number;
  leads: number;
  conversions: number;
}

const data: ReportRow[] = [
  { month: 'Jan', revenue: 1240, leads: 88, conversions: 22 },
  { month: 'Fev', revenue: 1560, leads: 102, conversions: 28 },
  { month: 'Mar', revenue: 2080, leads: 134, conversions: 38 },
  { month: 'Abr', revenue: 1890, leads: 118, conversions: 31 },
  { month: 'Mai', revenue: 2340, leads: 156, conversions: 44 },
  { month: 'Jun', revenue: 2780, leads: 178, conversions: 52 },
];

const maxRevenue = Math.max(...data.map(d => d.revenue));

export function AnalyticsReport() {
  const totalRevenue = data.reduce((s, d) => s + d.revenue, 0);
  const totalLeads = data.reduce((s, d) => s + d.leads, 0);
  const avgConversion = (data.reduce((s, d) => s + d.conversions, 0) / totalLeads * 100).toFixed(1);
  const projected = predictRevenue(data[data.length - 1].revenue, 15, 3);

  return (
    <div className="space-y-6">
      {/* Summary KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Receita Total (6m)', value: formatCurrency(totalRevenue), icon: DollarSign, color: 'text-emerald-400' },
          { label: 'Total de Leads', value: totalLeads.toString(), icon: Users, color: 'text-indigo-400' },
          { label: 'Taxa de Conversão', value: `${avgConversion}%`, icon: BarChart3, color: 'text-cyan-400' },
          { label: 'Projeção (+3m)', value: formatCurrency(projected), icon: TrendingUp, color: 'text-amber-400' },
        ].map((kpi, i) => (
          <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <kpi.icon size={16} className={`mb-2 ${kpi.color}`} />
            <p className="text-lg font-black text-white">{kpi.value}</p>
            <p className="text-xs text-slate-500 mt-0.5">{kpi.label}</p>
          </div>
        ))}
      </div>

      {/* Bar Chart (CSS-only) */}
      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Receita Mensal (R$)</p>
        <div className="flex items-end gap-3 h-36">
          {data.map((d, i) => {
            const heightPct = (d.revenue / maxRevenue) * 100;
            const isLast = i === data.length - 1;
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs text-slate-500">{formatCurrency(d.revenue, 'pt-BR', 'BRL').replace('R$\u00a0', 'R$')}</span>
                <div
                  className={`w-full rounded-t-lg transition-all duration-700 ${isLast ? 'bg-gradient-to-t from-indigo-700 to-indigo-400' : 'bg-slate-700 hover:bg-slate-600'}`}
                  style={{ height: `${heightPct}%` }}
                />
                <span className="text-xs text-slate-500">{d.month}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-slate-800">
            {['Mês', 'Receita', 'Leads', 'Conversões', 'CVR'].map(h => (
              <th key={h} className="pb-3 pr-4 font-medium text-slate-500">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-slate-800/50 last:border-0">
              <td className="py-3 pr-4 font-semibold text-white">{row.month}</td>
              <td className="py-3 pr-4 text-emerald-400 font-medium">{formatCurrency(row.revenue)}</td>
              <td className="py-3 pr-4 text-slate-300">{row.leads}</td>
              <td className="py-3 pr-4 text-slate-300">{row.conversions}</td>
              <td className="py-3 text-indigo-400">{(row.conversions / row.leads * 100).toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
