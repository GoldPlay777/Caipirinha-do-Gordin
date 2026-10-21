# Caipirinha do Gordin — Cardápio e Comanda V3

## Páginas
- `index.html`: cardápio vertical com foto, sabores, vodka/cachaça, quantidade e botão adicionar.
- `resumo.html`: comanda com observações individuais, dados de entrega, Pix, dinheiro/troco, cartão e WhatsApp.
- `style.css`: aparência responsiva.
- `app.js`: carrinho armazenado no navegador via localStorage e fluxo de compra.
- `config.js`: sabores, preços, taxa de entrega, chave Pix e WhatsApp.

## Configurar antes de publicar
1. Edite `config.js`, principalmente `whatsapp` com **55 + DDD + número** (campo inicialmente vazio), os preços demonstrativos e a taxa de entrega.
2. **Confirme o Pix**: o arquivo ainda contém os dados do projeto GOLDPLAY (GEAN MENDES SANTOS / Bradesco). Alterar se o recebedor da caipirinha for outro.
3. As fotos são ilustrativas e carregadas externamente, então dependem de internet.
4. Publique todos os arquivos na raiz de um repositório GitHub Pages. Abra `index.html`, selecione sabores, adicione e clique em **Ver resumo**.

O Pix é por cópia de chave com pagamento manual, sem cobrança automática nem confirmação bancária. O comprovante deve ser anexado pelo cliente na conversa do WhatsApp. O navegador armazena a comanda localmente; não há banco de dados.
