/* EDITE ESTE ARQUIVO PARA PERSONALIZAR SUA LOJA. */
window.CAIPI_CONFIG = {
  nomeLoja: 'CAIPI CLUB',
  whatsapp: '', // OBRIGATÓRIO: ex. '5531999999999' (55 + DDD + número). Não configurei um número sem sua confirmação.
  pix: {
    chave: '264e88d7-6826-4b33-a0cb-ae0003423a4a', // Chave informada no projeto anterior. Confira se será a mesma desta loja.
    recebedor: 'GEAN MENDES SANTOS',
    banco: 'Banco Bradesco S.A.'
  },
  taxaEntrega: null, // null = a combinar; ou defina um valor, por exemplo 5.00
  // PREÇO DEMONSTRATIVO: substitua pelo preço real antes de divulgar.
  produtos: [
    { id:'maracuja', nome:'Caipirinha de Maracujá', descricao:'Monte sua caipirinha com a bebida de sua preferência.', preco:22.00, imagem:'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85', emoji:'🥭' }
  ],
  ingredientesPadrao: ['Maracujá', 'Leite condensado', 'Açúcar'],
  bebidas: [
    {id:'vodka', nome:'Vodka', adicional:0},
    {id:'cachaca', nome:'Cachaça', adicional:0}
  ]
};
