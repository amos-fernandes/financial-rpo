import { motion } from 'framer-motion';
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KpiCardProps {
  label: string;
  value: string;
  trend: string;
  trendDirection?: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  color: string;
  index?: number;
}

export function KpiCard({ label, value, trend, trendDirection = 'up', icon: Icon, color, index = 0 }: KpiCardProps) {
  const TrendIcon = trendDirection === 'up' ? TrendingUp : trendDirection === 'down' ? TrendingDown : Minus;
  const trendColor = trendDirection === 'up' ? 'text-emerald-400 bg-emerald-500/10' : trendDirection === 'down' ? 'text-red-400 bg-red-500/10' : 'text-slate-400 bg-slate-800';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
    >
      <div className="flex justify-between items-start mb-5">
        <div className={cn('p-3 rounded-xl bg-slate-950', color)}>
          <Icon size={22} />
        </div>
        <span className={cn('flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full', trendColor)}>
          <TrendIcon size={12} />
          {trend}
        </span>
      </div>
      <div className="text-3xl font-black text-white mb-1">{value}</div>
      <div className="text-sm text-slate-500">{label}</div>
    </motion.div>
  );
}
