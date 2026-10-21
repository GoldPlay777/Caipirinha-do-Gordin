# Caipirinha do Gordin — Comanda digital

Projeto estático para GitHub Pages. O cliente escolhe **uma bebida entre Vodka e Cachaça** em cada item. Maracujá, leite condensado e açúcar são ingredientes padrão, listados no formulário. O campo de observações permite indicar mudanças na receita. O cliente pode adicionar várias unidades, inclusive combinações diferentes com observações diferentes, ao carrinho e enviar a comanda via WhatsApp.

## Configurar antes de publicar
Abra `config.js`:
- `whatsapp`: **preenchimento obrigatório** com número da loja `55 + DDD + telefone`, somente números. Não há número confirmado para esta loja; enquanto estiver vazio, o site não consegue abrir o WhatsApp de destino.
- `produtos[0].preco`: preço atualmente **demonstrativo** de R$ 22,00. Altere pelo preço real.
- `pix`: os dados Pix foram reaproveitados do projeto anterior e **precisam ser confirmados** antes de usar nesta loja.
- `taxaEntrega`: `null` para combinar com o estabelecimento, ou valor fixo.
- `produtos[0].imagem`: substitua por uma foto real se desejar; a URL atual é uma imagem ilustrativa externa.

## Instalar no GitHub Pages
Envie `index.html`, `style.css`, `config.js` e `app.js` para a raiz do repositório. Em Settings > Pages, selecione publicação da branch principal na raiz.

## Funcionamento
Cada combinação de bebida + observações forma uma linha distinta, com quantidade ajustável e remoção. A mensagem de WhatsApp discrimina bebida, ingredientes, observações, valores e dados de entrega. Pix apresenta chave simples copiável, mas não comprova pagamento; comprovante deve ser anexado pelo próprio cliente. Dinheiro calcula o troco estimado; cartão é pago na entrega. Existe confirmação declaratória de maioridade, mas a conferência é responsabilidade do estabelecimento. Não há sistema de pagamento automático ou banco de dados.

Instagram: https://www.instagram.com/caipirinha_do_gordin/
