# Documentação do Site - Projeto

Este site foi desenvolvido como um projeto simples, com foco em apresentar informações sobre produtos e serviços, além de incorporar vídeos do YouTube. O layout inclui um cabeçalho com navegação, seções de conteúdo com vídeos e informações sobre tecnologias, e um rodapé com links e ícones de redes sociais.

## Parte 1: Estrutura Geral do Site

### 1.1 **Objetivo do Site**
O site tem como objetivo exibir informações sobre diferentes tecnologias, como *pfSense*, *Linux* e *Windows*, e fornecer vídeos relacionados a essas tecnologias. O design é simples, com uma navegação intuitiva e uma apresentação clara dos dados.

### 1.2 **Layout e Design**
O layout é dividido em várias seções principais:
- **Cabeçalho (Header)**: Contém o nome da logo e o menu de navegação.
- **Conteúdo Principal (Main)**: Exibe uma seção com vídeos e outra com informações sobre diferentes tecnologias.
- **Rodapé (Footer)**: Contém links sobre a empresa e ícones de redes sociais.

## Parte 2: Detalhamento das Seções do Site

### 2.1 **Cabeçalho (Header)**
O cabeçalho contém dois elementos principais:
- **Logo**: Um título simples com a classe `logo` que exibe "Logo Header".
- **Menu de Navegação**: Através da classe `nav`, o menu inclui links para as seções do site, como "Home", "Sobre", "Produtos", "Serviços" e "Contato". Estes links são formatados em negrito usando a tag `<strong>`.

#### 2.1.1 **Links de Navegação**
- **Home**
- **Sobre**
- **Produtos**
- **Serviços**
- **Contato**

### 2.2 **Conteúdo Principal (Main)**

#### 2.2.1 **Seção de Vídeos (vide-section)**
A seção de vídeos é composta por três cards de vídeo, cada um com um **iframe** do YouTube que exibe vídeos sobre diferentes tecnologias. Cada `div` com a classe `video-card` contém um iframe com o link para o vídeo correspondente.

- **Primeiro Vídeo**: [YouTube Video 1](https://www.youtube.com/watch?v=4RMc-3aq8rU)
- **Segundo Vídeo**: [YouTube Video 2](https://www.youtube.com/watch?v=33RSAm2IeiY)
- **Terceiro Vídeo**: [YouTube Video 3](https://www.youtube.com/watch?v=Ea7rO5_QFL0)

#### 2.2.2 **Seção de Informações (info-section)**
Essa seção apresenta três cards de informações sobre diferentes tecnologias. Cada card contém um título, uma descrição e um botão "Saiba Mais".

- **Firewall pfSense**: A solução de segurança de rede, com recursos avançados como filtragem de pacotes e VPN.
- **Linux**: Uma plataforma robusta e segura para desenvolvimento e implantação de aplicativos.
- **Windows**: A popular escolha para sistemas operacionais de desktop, com foco em produtividade e experiência do usuário.

Cada card é representado por uma `div` com a classe `info-card`, e o botão "Saiba Mais" é um simples botão com a classe `info-button`.

### 2.3 **Rodapé (Footer)**
O rodapé contém três elementos principais:

#### 2.3.1 **Links de Rodapé**
Dois botões são incluídos para informações adicionais:
- **Quem somos**: Um link (ou botão) sobre a empresa.
- **Contato**: Um link para a página de contato.

#### 2.3.2 **Redes Sociais**
Na parte inferior do rodapé, são exibidos ícones representando várias redes sociais. Cada ícone é uma imagem com uma classe associada (`youtubeimg`, `twitterimg`, `githubimg`, `instaimg`), e os seguintes serviços são
