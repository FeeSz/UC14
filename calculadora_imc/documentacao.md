# Documentação do Site - Calculadora de IMC

Este site foi desenvolvido para calcular o Índice de Massa Corporal (IMC) de um usuário, fornecendo informações sobre a classificação do IMC e suas implicações para a saúde. A página é simples, direta e fácil de usar, com uma interface limpa para o cálculo do IMC e a visualização dos resultados.

## Parte 1: Estrutura e Objetivo do Site

### 1.1 **Objetivo do Site**
A **Calculadora de IMC** é uma ferramenta interativa que permite ao usuário calcular seu IMC com base em sua altura e peso. O IMC é utilizado para avaliar se uma pessoa está em um peso saudável, sobrepeso ou obesa. O site fornece o valor calculado do IMC junto com a classificação correspondente.

### 1.2 **Layout do Site**
O layout da página é simples e intuitivo, com as seguintes seções:

- **Formulário de Entrada**: Onde o usuário insere sua altura e peso.
- **Botões de Ação**: Para calcular o IMC ou limpar os campos de entrada.
- **Exibição do Resultado**: Após o cálculo, o site mostra o IMC calculado, a classificação da situação atual do usuário e a tabela com as classificações de IMC.
- **Botão de Voltar**: Para retornar ao formulário inicial.

## Parte 2: Detalhamento das Seções do Site

### 2.1 **Seção: Formulário de Entrada**
O formulário de entrada contém dois campos principais onde o usuário fornece seus dados:

- **Altura**: Campo para inserir a altura do usuário. O valor esperado é um número decimal (ex: 1,75).
- **Peso**: Campo para inserir o peso do usuário. O valor esperado é um número decimal (ex: 70,5).

#### 2.1.1 **Campos do Formulário**
- **Altura (`#height`)**: Este campo requer que o usuário insira sua altura no formato de número decimal (por exemplo, 1,75).
- **Peso (`#weight`)**: O usuário insere o peso no mesmo formato numérico (ex: 70,5).

### 2.2 **Botões de Ação**
O formulário inclui dois botões principais:

- **Calcular (`#calc-btn`)**: Aciona a função para calcular o IMC com os valores de altura e peso fornecidos pelo usuário. Quando o usuário clicar nesse botão, o cálculo será feito e o resultado será exibido na seção de resultados.
- **Limpar (`#clear-btn`)**: Reseta os campos de entrada para o estado inicial, apagando quaisquer valores previamente inseridos.

### 2.3 **Seção de Resultados**
Após o cálculo do IMC, os resultados são apresentados nesta seção, incluindo:

- **IMC Calculado (`#imc-number`)**: O valor do IMC calculado é exibido aqui.
- **Situação Atual (`#imc-info`)**: Com base no IMC calculado, o site exibe a classificação da situação de saúde do usuário (por exemplo, "Peso saudável", "Sobrepeso", etc.).
- **Classificação de IMC**: A tabela exibe a relação entre o IMC e a classificação de peso, fornecendo uma visão geral dos intervalos de IMC e suas implicações para a saúde.
  
### 2.4 **Tabela de Classificação de IMC**
A tabela de classificação de IMC é dividida em três colunas:

- **IMC**: Os valores de IMC em intervalos.
- **Classificação**: A categoria de peso associada ao intervalo de IMC (Ex: "Magreza", "Peso saudável", "Sobrepeso", etc.).
- **Obesidade**: Indicação de se o IMC está relacionado com diferentes níveis de obesidade (Ex: "Obesidade grau 1", "Obesidade grau 2", etc.).

### 2.5 **Botão de Voltar**
O botão **Voltar (`#back-btn`)** permite que o usuário retorne ao formulário de entrada para realizar novos cálculos ou corrigir as informações inseridas anteriormente.

## Parte 3: Considerações Técnicas

### 3.1 **HTML**
A estrutura do HTML é simples, contendo os elementos necessários para o funcionamento da página. A página está dividida em dois contêineres principais:

- **Formulário (`#calc-container`)**: Contém os campos de entrada de dados e os botões de ação.
- **Resultado (`#result-container`)**: Mostra o IMC calculado e a tabela com as classificações.

### 3.2 **CSS**
O site faz uso de dois arquivos CSS:

- **reset.css**: Arquivo utilizado para remover os estilos padrão do navegador e garantir que a página seja exibida de maneira consistente em diferentes dispositivos.
- **main.css**: Arquivo principal de estilos, responsável por definir o layout, fontes e outros elementos visuais da página.

### 3.3 **JavaScript**
O arquivo `main.js` é responsável por controlar a interatividade da página. Ele contém funções para calcular o IMC com base nos dados inseridos, exibir o resultado, limpar os campos de entrada e alternar entre o formulário e os resultados.

#### 3.3.1 **Funções principais do JavaScript**:
- **Calcular IMC**: Lê os valores de altura e peso, calcula o IMC e atualiza a exibição do resultado.
- **Limpar Campos**: Reseta os valores nos campos de altura e peso e esconde os resultados.
- **Alternância entre Formulário e Resultados**: Quando o cálculo é feito, o formulário é escondido e a seção de resultados é mostrada.



## Parte 4: Conclusão

### 4.1 **Usabilidade**
O site é simples de usar, com uma interface intuitiva que permite ao usuário calcular facilmente o IMC e entender sua classificação. Ele também fornece informações sobre os limites do IMC e o que cada faixa significa para a saúde.

### 4.2 **Design Responsivo**
A página foi projetada para ser responsiva, com um layout que se adapta a diferentes tamanhos de tela, garantindo uma boa experiência tanto em dispositivos móveis quanto em desktops.


