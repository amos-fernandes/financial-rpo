'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TrendingUp, Users, MessageSquare, DollarSign, Activity,
  Calendar, Bot, RefreshCw, Settings, Copy, Check,
  Zap, BarChart3, Instagram, Twitter
} from 'lucide-react';
import { KpiCard } from '@/components/dashboard/kpi-card';
import { ContentQueue, type QueueItem } from '@/components/dashboard/content-queue';
import { SalesFunnel } from '@/components/dashboard/sales-funnel';
import { TweetImporter } from '@/components/dashboard/tweet-importer';
import { AnalyticsReport } from '@/components/dashboard/analytics-report';
import { Button } from '@/components/ui/button';

// ─── Data ─────────────────────────────────────────────────────────────────────

const kpis = [
  { label: 'Vendas via IG', value: 'R$ 1.420', trend: '+R$340', trendDirection: 'up' as const, icon: DollarSign, color: 'text-emerald-400' },
  { label: 'Posts Gerados', value: '247', trend: '+12 semana', trendDirection: 'up' as const, icon: Activity, color: 'text-indigo-400' },
  { label: 'DMs Respondidas', value: '91', trend: '94% auto', trendDirection: 'up' as const, icon: MessageSquare, color: 'text-cyan-400' },
  { label: 'Tweets Importados', value: '38', trend: '+5 hoje', trendDirection: 'up' as const, icon: Bot, color: 'text-amber-400' },
];

const queue: QueueItem[] = [
  { content: '💰 Dica: Tesouro Direto rende mais que poupança', time: 'Hoje 18:00', type: 'Educativo', status: 'Agendado' },
  { content: '🐦 Tweet @AmosFernandes traduzido', time: 'Amanhã 08:00', type: 'Repost', status: 'Gerando...' },
  { content: '📚 E-book Saindo do Vermelho em 90 Dias', time: 'Amanhã 19:00', type: 'Venda', status: 'Rascunho' },
  { content: '💡 3 hábitos de quem tem dinheiro', time: 'Qua 12:00', type: 'Educativo', status: 'Agendado' },
  { content: '🎬 Reel: Como investir com R$50', time: 'Qui 18:00', type: 'Reels', status: 'Agendado' },
];

const postTemplates = [
  { label: '💰 Venda de E-book', prompt: 'Crie um post de vendas persuasivo para o e-book sobre finanças pessoais' },
  { label: '💡 Educativo', prompt: 'Crie um post educativo com dica prática sobre investimentos para iniciantes' },
  { label: '🔥 Motivacional', prompt: 'Crie um post motivacional sobre liberdade financeira com CTA forte' },
  { label: '📊 Dado + Insight', prompt: 'Crie um post com dado surpreendente sobre finanças e análise prática' },
];

const tabs = [
  { id: 'queue', label: 'Fila', icon: Calendar },
  { id: 'generate', label: 'Gerar Post', icon: Zap },
  { id: 'tweets', label: 'Tweets', icon: Twitter },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings', label: 'Config', icon: Settings },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('queue');
  const [generatedPost, setGeneratedPost] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedPost('');
    // Simulate AI generation
    const posts = [
      `💰 Você sabia que 72% dos brasileiros não têm reserva de emergência?\n\nIsso significa que um imprevisto pode destruir meses de trabalho em dias.\n\nA solução é mais simples do que parece:\n→ Separe 10% do salário todo mês\n→ Coloque em CDB ou Tesouro Selic\n→ Nunca toque até precisar de verdade\n\nComeçar com R$50 já muda tudo. 💪\n\n📚 No link da bio: e-book completo de finanças pessoais por apenas R$47\n\n#FinançasPessoais #LiberdadeFinanceira #Investimentos`,
      `🎯 A regra 50-30-20 que mudou minha vida:\n\n50% → Necessidades (aluguel, comida, contas)\n30% → Desejos (lazer, restaurantes, assinaturas)\n20% → Investimentos e reserva\n\nParece impossível? Comece com 5-10-5.\nO hábito é mais importante que o valor.\n\nSeu eu daqui 5 anos vai agradecer. 🚀\n\n#Finanças #Economia #MindsetFinanceiro`,
    ];
    setTimeout(() => {
      setGeneratedPost(posts[selectedTemplate % posts.length]);
      setIsGenerating(false);
    }, 1800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPost);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">

      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Bot size={16} className="text-white" />
            </div>
            <div>
              <h1 className="font-bold text-sm leading-none">AgentIA Dashboard</h1>
              <p className="text-xs text-slate-500 mt-0.5">@amos_verticalagent</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Agente ativo
            </div>
            <button title="Sincronizar" className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white">
              <RefreshCw size={16} />
            </button>
            <Link href="/">
              <Button variant="secondary" size="sm">← Loja</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">

        {/* KPI Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, i) => (
            <KpiCard key={i} index={i} {...kpi} />
          ))}
        </div>

        {/* Tab Bar */}
        <div className="flex gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1 w-fit overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <tab.icon size={15} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Tab: Queue ──────────────────────────────────────────── */}
        {activeTab === 'queue' && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold flex items-center gap-2 text-white">
                  <Calendar size={18} className="text-indigo-400" /> Fila de Publicação
                </h2>
                <Button variant="ghost" size="sm" className="text-indigo-400 hover:text-indigo-300 gap-1">
                  <Instagram size={14} /> Ver agenda
                </Button>
              </div>
              <ContentQueue items={queue} />
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <SalesFunnel />
            </div>
          </motion.div>
        )}

        {/* ── Tab: Generate ───────────────────────────────────────── */}
        {activeTab === 'generate' && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <h2 className="font-bold text-white flex items-center gap-2">
                <Zap size={18} className="text-indigo-400" /> Gerador de Conteúdo IA
              </h2>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-3 font-medium">Tipo de Post</p>
                <div className="grid grid-cols-2 gap-2">
                  {postTemplates.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedTemplate(i)}
                      className={`p-3 rounded-xl text-sm text-left font-medium border transition-all ${
                        selectedTemplate === i
                          ? 'bg-indigo-600 border-indigo-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-medium">Prompt</p>
                <textarea
                  value={postTemplates[selectedTemplate].prompt}
                  readOnly
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-300 resize-none focus:outline-none focus:border-indigo-500"
                />
              </div>

              <Button onClick={handleGenerate} loading={isGenerating} size="lg" className="w-full justify-center gap-2">
                <Zap size={16} /> {isGenerating ? 'Gerando...' : 'Gerar Post com IA'}
              </Button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-white">Post Gerado</h2>
                {generatedPost && (
                  <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-1.5">
                    {copied ? <><Check size={13} className="text-emerald-400" /> Copiado!</> : <><Copy size={13} /> Copiar</>}
                  </Button>
                )}
              </div>

              {generatedPost ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 min-h-[280px]"
                >
                  <pre className="whitespace-pre-wrap text-sm text-slate-300 font-sans leading-relaxed">{generatedPost}</pre>
                </motion.div>
              ) : (
                <div className="min-h-[280px] flex flex-col items-center justify-center text-slate-600 rounded-xl bg-slate-950 border border-dashed border-slate-800">
                  <Zap size={32} className="mb-3 opacity-30" />
                  <p className="text-sm">O post gerado aparecerá aqui</p>
                </div>
              )}

              {generatedPost && (
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" className="flex-1 justify-center gap-1.5">
                    <Calendar size={13} /> Agendar
                  </Button>
                  <Button variant="secondary" size="sm" className="flex-1 justify-center gap-1.5">
                    <Instagram size={13} /> Publicar
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* ── Tab: Tweets ─────────────────────────────────────────── */}
        {activeTab === 'tweets' && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-white flex items-center gap-2">
                  <Twitter size={18} className="text-sky-400" /> Importador de Tweets
                </h2>
                <Button variant="secondary" size="sm" className="gap-1.5">
                  <RefreshCw size={13} /> Sincronizar
                </Button>
              </div>
              <TweetImporter />
            </div>
          </motion.div>
        )}

        {/* ── Tab: Analytics ──────────────────────────────────────── */}
        {activeTab === 'analytics' && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h2 className="font-bold text-white flex items-center gap-2 mb-6">
                <BarChart3 size={18} className="text-indigo-400" /> Relatório de Performance
              </h2>
              <AnalyticsReport />
            </div>
          </motion.div>
        )}

        {/* ── Tab: Settings ───────────────────────────────────────── */}
        {activeTab === 'settings' && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <h2 className="font-bold text-white flex items-center gap-2">
                <Settings size={18} className="text-indigo-400" /> Configurações do Agente
              </h2>

              {[
                { label: 'Número do WhatsApp', placeholder: '+55 (62) 9 0000-0000', type: 'tel' },
                { label: 'Perfil do Instagram', placeholder: '@seu_perfil', type: 'text' },
                { label: 'Perfil do Twitter / X', placeholder: '@seu_twitter', type: 'text' },
                { label: 'Chave PIX', placeholder: 'email@exemplo.com ou CPF', type: 'text' },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              ))}

              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div>
                  <p className="text-sm font-semibold text-white">Respostas Automáticas de DM</p>
                  <p className="text-xs text-slate-500 mt-0.5">Responder automaticamente palavras-chave</p>
                </div>
                <button className="w-12 h-6 bg-indigo-600 rounded-full relative transition-colors">
                  <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow" />
                </button>
              </div>

              <Button size="lg" className="w-full justify-center">Salvar Configurações</Button>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
