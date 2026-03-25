# FinancePro + AgentIA 🚀

> Plataforma completa de venda de e-books financeiros com dashboard de automação de marketing via IA.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/amos-fernandes/financial-rpo)

---

## 📦 Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 14 (App Router) |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS |
| Animações | Framer Motion |
| Ícones | Lucide React |
| Banco de Dados | Supabase (PostgreSQL) |
| Deploy | Vercel |

---

## 🗂 Estrutura do Projeto

```
financial-rpo/
├── app/
│   ├── page.tsx                    # Landing Page da Loja
│   ├── layout.tsx                  # Root layout + metadata
│   ├── globals.css                 # Estilos globais Tailwind
│   ├── dashboard/
│   │   └── page.tsx                # Dashboard AgentIA
│   └── api/
│       ├── generate-post/route.ts  # API de geração de posts
│       └── webhook/pix/route.ts    # Webhook de pagamento PIX
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── modal.tsx
│   ├── store/
│   │   ├── ebook-card.tsx
│   │   ├── checkout-modal.tsx
│   │   └── testimonial-slider.tsx
│   └── dashboard/
│       ├── kpi-card.tsx
│       ├── content-queue.tsx
│       ├── sales-funnel.tsx
│       ├── tweet-importer.tsx
│       └── analytics-report.tsx
├── lib/
│   ├── utils.ts
│   ├── supabase.ts
│   ├── whatsapp.ts
│   └── analytics/
│       └── metrics.ts
└── scripts/
    └── init-repo.sh
```

---

## 🚀 Como Rodar Localmente

### 1. Pré-requisitos

- Node.js 18+
- npm ou yarn
- Conta no [Supabase](https://supabase.com) (opcional para desenvolvimento)

### 2. Instalar e rodar

```bash
# Clone o repositório
git clone https://github.com/amos-fernandes/financial-rpo.git
cd financial-rpo

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais

# Rode em desenvolvimento
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
NEXT_PUBLIC_WHATSAPP_NUMBER=5562900000000
```

---

## 🌐 Deploy na Vercel

```bash
# Via CLI
npm i -g vercel
vercel --prod

# Ou conecte o repo direto em vercel.com
```

Adicione as variáveis de ambiente no painel da Vercel em **Settings → Environment Variables**.

---

## 📱 Funcionalidades

### Loja de E-books (`/`)
- Catálogo com 3 planos (individual + combo)
- Checkout direto via WhatsApp + PIX
- Slider de depoimentos
- Garantia de 7 dias
- SEO + Open Graph configurados

### Dashboard AgentIA (`/dashboard`)
- **KPIs em tempo real**: Vendas, Posts, DMs, Tweets importados
- **Fila de Publicação**: Agenda visual com status de cada post
- **Funil de Conversão**: Alcance → DM → Click → Venda
- **Gerador de Posts IA**: 4 templates (Venda, Educativo, Motivacional, Dado)
- **Importador de Tweets**: Tradução automática + CTA em português
- **Analytics**: Gráfico de receita + projeções com taxa de crescimento
- **Configurações**: WhatsApp, Instagram, PIX, automações

---

## 🔌 Integrações Futuras

- [ ] Supabase Auth (login protegido para o dashboard)
- [ ] OpenAI / Anthropic API (geração real de posts)
- [ ] EFI Bank / Mercado Pago (webhook PIX real)
- [ ] Instagram Graph API (publicação automática)
- [ ] Evolution API / Z-API (WhatsApp automático)

---

## 📄 Licença

MIT © 2025 Amos Fernandes
