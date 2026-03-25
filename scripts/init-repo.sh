#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────────────
# FinancePro — Script de inicialização do repositório
# Uso: bash scripts/init-repo.sh
# ──────────────────────────────────────────────────────────────────────────────

set -e

REPO_URL="https://github.com/amos-fernandes/financial-rpo.git"
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Iniciando setup do FinancePro...${NC}\n"

# 1. Verificar Node.js
if ! command -v node &>/dev/null; then
  echo "❌ Node.js não encontrado. Instale em https://nodejs.org"
  exit 1
fi

NODE_VER=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VER" -lt 18 ]; then
  echo "❌ Node.js 18+ necessário. Versão atual: $(node -v)"
  exit 1
fi

echo -e "${GREEN}✅ Node.js $(node -v) detectado${NC}"

# 2. Instalar dependências
echo -e "\n${BLUE}📦 Instalando dependências...${NC}"
npm install

# 3. Configurar .env.local
if [ ! -f ".env.local" ]; then
  echo -e "\n${BLUE}⚙️  Criando .env.local...${NC}"
  cp .env.example .env.local
  echo -e "${GREEN}✅ .env.local criado — preencha com suas credenciais${NC}"
else
  echo -e "\n${GREEN}✅ .env.local já existe${NC}"
fi

# 4. Git config
echo -e "\n${BLUE}🔧 Configurando Git...${NC}"
git add -A
git commit -m "feat: projeto FinancePro + AgentIA completo" 2>/dev/null || echo "(nada novo para commitar)"
git push origin main

echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Setup concluído!${NC}"
echo -e ""
echo -e "  Dev:    ${BLUE}npm run dev${NC}  → http://localhost:3000"
echo -e "  Build:  ${BLUE}npm run build${NC}"
echo -e "  Deploy: ${BLUE}vercel --prod${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
