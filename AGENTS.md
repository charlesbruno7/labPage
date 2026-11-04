# Forma3D — Landing Page

Landing page responsiva para uma loja de impressão 3D. Apresenta serviços, materiais, processo de orçamento, perguntas frequentes e preferências de cookies.

## Arquivos

- index.html: conteúdo e estrutura da página.
- styles.css: estilos e layout responsivo.
- script.js: menu mobile, preferências de cookies e formulário de orçamento via WhatsApp.
- AGENTS.md: orientações para contribuir com o repositório.

## Como visualizar

Abra index.html no navegador ou rode um servidor local na pasta do projeto:

python -m http.server 8000

Acesse http://localhost:8000.

## Antes de publicar

No index.html, substitua o número de exemplo no link do WhatsApp pelo contato comercial da loja. Inclua os textos definitivos de Privacidade e Termos de Uso, além dos dados reais da empresa.

O formulário prepara a mensagem para envio pelo WhatsApp; ele não envia arquivos nem armazena pedidos. Para receber uploads, configure um serviço no servidor com validação de tipo e tamanho e verificação de segurança. Configure também HTTPS e só carregue ferramentas de análise ou marketing após o consentimento correspondente.

## Personalização

Atualize o nome e o conteúdo da marca no index.html. Ajuste cores, tipografia e componentes em styles.css. O projeto não exige dependências ou processo de build.
