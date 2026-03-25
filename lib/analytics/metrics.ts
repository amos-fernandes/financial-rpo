export function calculateLTV(avgTicket: number, purchaseFreq: number, lifespan: number) {
  return avgTicket * purchaseFreq * lifespan;
}

export function predictRevenue(
  currentRevenue: number,
  growthRate: number,
  months: number
) {
  return currentRevenue * Math.pow(1 + growthRate / 100, months);
}

export function analyzeVisualTrend(data: number[]) {
  if (data.length < 2) return 'stable';
  const last = data[data.length - 1];
  const prev = data[data.length - 2];
  if (last > prev * 1.05) return 'up';
  if (last < prev * 0.95) return 'down';
  return 'stable';
}

export function generateHashtagSet(category: string): string[] {
  const base = ['#FinançasPessoais', '#LiberdadeFinanceira', '#Investimentos', '#Educacaofinanceira'];
  const map: Record<string, string[]> = {
    vendas: ['#Ebook', '#Desconto', '#PIX'],
    educativo: ['#Dicas', '#AprendaInvestir', '#DinheiroInteligente'],
    motivacional: ['#Mindset', '#Riqueza', '#SairDaDivida'],
  };
  return [...base, ...(map[category] ?? [])];
}

export function optimizePostingTime(dayOfWeek: number): string {
  const times: Record<number, string> = {
    0: '19:00', // domingo
    1: '18:30', // segunda
    2: '12:00', // terça
    3: '19:00', // quarta
    4: '12:00', // quinta
    5: '18:00', // sexta
    6: '10:00', // sábado
  };
  return times[dayOfWeek] ?? '18:00';
}
