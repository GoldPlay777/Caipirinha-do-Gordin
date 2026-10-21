/* EDITE ESTE ARQUIVO PARA PERSONALIZAR SUA LOJA. */
window.CAIPI_CONFIG = {
  nomeLoja: 'CAIPIRINHA DO GORDIN',
  whatsapp: '', // OBRIGATÓRIO: ex. '5531999999999' (55 + DDD + número). Não configurei um número sem sua confirmação.
  pix: {
    chave: '264e88d7-6826-4b33-a0cb-ae0003423a4a', // Chave informada no projeto anterior. Confira se será a mesma desta loja.
    recebedor: 'GEAN MENDES SANTOS',
    banco: 'Banco Bradesco S.A.'
  },
  taxaEntrega: null, // null = a combinar; ou defina um valor, por exemplo 5.00
  // PREÇO DEMONSTRATIVO: substitua pelo preço real antes de divulgar.
  produtos: [
    {id:'maracuja', nome:'Caipirinha de Maracujá', descricao:'Maracujá, leite condensado e açúcar.', preco:22, imagem:'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1000&q=85', emoji:'🥭'},
    {id:'limao', nome:'Caipirinha de Limão', descricao:'Limão fresco e açúcar.', preco:22, imagem:'https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=1000&q=85', emoji:'🍋'},
    {id:'morango', nome:'Caipirinha de Morango', descricao:'Morango e açúcar.', preco:22, imagem:'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85', emoji:'🍓'},
    {id:'abacaxi', nome:'Caipirinha de Abacaxi', descricao:'Abacaxi e açúcar.', preco:22, imagem:'https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1000&q=85', emoji:'🍍'},
    {id:'kiwi', nome:'Caipirinha de Kiwi', descricao:'Kiwi e açúcar.', preco:22, imagem:'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1000&q=85', emoji:'🥝'},
    {id:'frutas-vermelhas', nome:'Caipirinha de Frutas Vermelhas', descricao:'Mix de frutas vermelhas e açúcar.', preco:22, imagem:'https://images.unsplash.com/photo-1532634896-26909d0d4b68?auto=format&fit=crop&w=1000&q=85', emoji:'🍒'}
  ],
  ingredientesPadrao: ['Maracujá', 'Leite condensado', 'Açúcar'],
  bebidas: [
    {id:'vodka', nome:'Vodka', adicional:0},
    {id:'cachaca', nome:'Cachaça', adicional:0}
  ]
};
