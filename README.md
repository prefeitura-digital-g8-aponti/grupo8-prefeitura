![Auto Assign](https://github.com/prefeitura-digital-g8-aponti/demo-repository/actions/workflows/auto-assign.yml/badge.svg)

![Proof HTML](https://github.com/prefeitura-digital-g8-aponti/demo-repository/actions/workflows/proof-html.yml/badge.svg)

## Grupo 8 - Sistema Integrado da Prefeitura Municipal

**Disciplina:** DevOps

**Turma:** Turma 5 – Turno da Tarde

---
### Integrantes

- Gabriela Pires
    
- Luiz Felipe Gomes
    
- Rafael Albuquerque

### Estrutura do projeto
```
📁 prefeitura-soa/
│
├── README.md                 ← documentação completa
├── docs/
│   ├── apresentacao.pptx
│   └── imagens/              ← capturas do GitHub Projects 
├── .github/
│   └── workflows/            ← futuramente, pipeline CI/CD
└── src/                      ← estrutura do projeto (caso seja implementado)
```
---
# Sumário

- Introdução
    
- Contextualização
    
- Objetivos
    
- Escopo do Projeto
    
- Metodologia de Desenvolvimento
    
- Arquitetura da Solução
    
- Funcionalidades do Sistema
    
- Product Backlog
    
- Sprint Backlog
    
- Organização do Projeto
    
- Priorização das Atividades
    
- Dependências entre Funcionalidades
    
- Distribuição das Responsabilidades
    
- Planejamento da Pipeline CI/CD
    
- Considerações Finais

---
# Introdução

A transformação digital dos serviços públicos tem como objetivo um atendimento mais eficaz à população e aprimorar a gestão das informações entre os diferentes setores de uma Prefeitura Municipal. No entanto, muitas prefeituras ainda usam sistemas desenvolvidos em épocas diferentes, utilizando tecnologias distintas e com pouca interação entre eles.

A falta de integração gera problemas e retrabalho, duplicidade de informações e dificuldades para manutenção.

Neste contexto, este projeto propõe o planejamento da criação de um **Sistema Integrado à Prefeitura Municipal**, utilizando práticas ágeis e uma arquitetura orientada a serviços. O sistema abrange os módulos de IPTU, Tributos, Protocolos, Saúde, Educação, Recursos Humanos (RH) e Licitações.

A proposta foi elaborada com base nos conceitos aprendidos durante a disciplina, utilizando a metodologia Scrum para organização das atividades e a arquitetura **SOA (Service-Oriented Architecture)** para integração entre diferentes serviços da prefeitura.

# Contextualização
    
Uma Prefeitura Municipal é responsável por diversos serviços essenciais para a população, cada um atendendo necessidades específicas das secretarias municipais.

Entre os principais setores estão:

- IPTU;
    
- Tributos;
    
- Protocolos;
    
- Saúde;
    
- Educação;
    
- Recursos Humanos;
    
- Licitações.
    
Na maioria das administrações públicas, esses setores empregam sistemas autônomos, desenvolvidos em momentos diferentes e utilizando tecnologias variadas.

Essa situação acaba provocando vários problemas, como:

- dificuldade de comunicação entre sistemas;
    
- duplicidade de cadastros;
    
- retrabalho operacional;
    
- dificuldade de manutenção;
    
- baixa integração entre secretarias;
    
- crescimento limitado da infraestrutura tecnológica
    
Assim, é preciso encontrar uma solução que integre os serviços municipais sem eliminar completamente os sistemas já existentes.

---
# Objetivos
    
## Objetivo Geral

Planejar o desenvolvimento de um Sistema Integrado para a Prefeitura Municipal utilizando a metodologia ágil **Scrum** e a **arquitetura SOA**, organizando as atividades necessárias para uma futura implementação e para a construção de uma **pipeline de CI/CD.**

## Objetivos Específicos

- Organizar o desenvolvimento utilizando o framework Scrum;
    
- Definir a arquitetura mais adequada para o cenário proposto;
    
- Levantar todas as funcionalidades do sistema;
    
- Organizar as atividades utilizando o GitHub Projects;
    
- Definir prioridades para o desenvolvimento das funcionalidades;
    
- Distribuir as responsabilidades entre os integrantes da equipe;
    
- Planejar uma futura pipeline de Integração Contínua e Entrega Contínua (CI/CD).

---
# Escopo do Projeto

Os módulos neste projeto são:

| Módulo           | Descrição                                                       |
| ---------------- | --------------------------------------------------------------- |
| IPTU             | Consulta de débitos, emissão de guias e histórico de pagamentos |
| Tributos         | Emissão de DAM, consulta e gerenciamento tributário             |
| Protocolos       | Abertura e acompanhamento de solicitações                       |
| Saúde            | Prontuário eletrônico e cadastro de pacientes                   |
| Educação         | Matrículas, gerenciamento de vagas e turmas                     |
| Recursos Humanos | Cadastro e gerenciamento de servidores municipais               |
| Licitações       | Controle e acoplamento dos processos licitatórios               |

Cada módulo será responsável por um conjunto específico de serviços, permitindo maior organização e integração entre as diferentes áreas da Prefeitura.
