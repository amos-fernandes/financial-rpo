import { NextRequest, NextResponse } from 'next/server';

interface PixWebhookPayload {
  evento: string;
  pix?: Array<{
    endToEndId: string;
    txid: string;
    valor: string;
    horario: string;
    infoPagador?: string;
    pagador?: {
      nome: string;
      cpf?: string;
    };
  }>;
}

export async function POST(req: NextRequest) {
  try {
    const payload: PixWebhookPayload = await req.json();

    if (payload.evento !== 'PAGAMENTO_RECEBIDO') {
      return NextResponse.json({ received: true });
    }

    for (const pix of payload.pix ?? []) {
      console.log(`✅ PIX recebido: R$ ${pix.valor} | txid: ${pix.txid}`);

      // TODO: 
      // 1. Salvar venda no Supabase
      // 2. Enviar e-book via WhatsApp API
      // 3. Disparar e-mail de confirmação
    }

    return NextResponse.json({ received: true, processed: payload.pix?.length ?? 0 });
  } catch (err) {
    console.error('Webhook error:', err);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}

// Validate webhook source (add your PSP verification here)
export async function GET() {
  return NextResponse.json({ status: 'PIX webhook endpoint active' });
}
