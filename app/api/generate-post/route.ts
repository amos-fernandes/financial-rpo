import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { prompt, type } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // In production: call OpenAI / Anthropic API here
    // For now, return mock response
    const posts: Record<string, string> = {
      vendas: `💰 Você ainda guarda dinheiro na poupança?\n\nEla rende menos de 6% ao ano.\nA inflação corrói quase tudo isso.\n\nEnquanto isso, quem investe em Tesouro Direto ou CDB\nestá multiplicando o patrimônio de verdade.\n\nNão precisa de muito para começar:\n→ R$30 já é suficiente\n→ 5 minutos no app do banco\n→ Rendimento automático todo dia\n\n📚 No link da bio: e-book completo por R$47\n→ Do zero ao seu primeiro investimento\n\n#Investimentos #LiberdadeFinanceira #FinançasPessoais`,
      educativo: `💡 A regra dos 72:\n\nDivida 72 pela taxa de juros do seu investimento.\nO resultado é quantos anos leva para dobrar seu dinheiro.\n\nExemplo:\n→ Tesouro Selic a 10,75% → dinheiro dobra em ~6,7 anos\n→ Poupança a 5,5% → dinheiro dobra em ~13 anos\n\nA diferença pode ser a aposentadoria que você quer\nou a que você vai ter que aguentar.\n\nQual você escolhe? 👇\n\n#Finanças #Educacaofinanceira #Investir`,
      motivacional: `🔥 Ninguém ficou rico de uma hora para outra.\n\nMas muita gente ficou pobre assim.\n\nA diferença entre quem constrói riqueza e quem não constrói:\n→ Consistência (não perfeição)\n→ Paciência (não velocidade)\n→ Conhecimento (não sorte)\n\nVocê tem tudo para começar hoje.\nSó falta começar.\n\n💪 Comenta "QUERO" que te mando o material gratuito!\n\n#MindsetFinanceiro #Riqueza #LiberdadeFinanceira`,
    };

    const content = posts[type] ?? posts.educativo;

    return NextResponse.json({ content });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
