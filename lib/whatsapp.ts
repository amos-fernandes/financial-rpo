export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5500000000000';

export function buildWhatsAppLink(phone: string, message: string) {
  const clean = phone.replace(/\D/g, '');
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}

export function buildSaleMessage(ebookTitle: string, price: number) {
  return `Olá! Quero comprar o e-book *${ebookTitle}* por R$ ${price}.\n\nPode me enviar a chave PIX? 😊`;
}

export function buildLeadMessage(name?: string) {
  const greeting = name ? `Olá, ${name}! ` : 'Olá! ';
  return `${greeting}Vi seus e-books sobre finanças e quero saber mais. Pode me ajudar?`;
}

export function openWhatsApp(message: string) {
  const url = buildWhatsAppLink(WHATSAPP_NUMBER, message);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener noreferrer');
  }
}
