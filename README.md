# Backend da Aplicação de Chat

## Visão Geral
Este é o backend para uma aplicação de chat em tempo real que permite aos usuários enviar mensagens, criar salas de chat e gerenciar amizades. A aplicação é projetada para suportar chats individuais e em grupo, com várias funcionalidades adicionais para melhorar a experiência do usuário.

## Tecnologias

- Node
- Fastify
- Prisma ORM
- Postgrest
- Tsup
- Zod

## Funcionalidades
### Usuários
- Usuários podem criar uma conta e fazer login.
- Usuários podem atualizar seu perfil (nome de usuário, avatar, etc.).
- Usuários podem fazer logout da conta.
- Usuários podem adicionar e remover amigos.

### Funcionalidade de Chat
- Usuários podem enviar e receber mensagens em tempo real.
- Usuários podem entrar em diferentes salas de chat.
- Usuários podem ver uma lista de participantes em cada sala de chat.
- Usuários recebem notificações para novas mensagens quando a janela do chat não está aberta.
- Usuários podem enviar e receber emojis nas mensagens.
- Usuários podem ver o status de digitação de outros ("Usuário está digitando...").
- Usuários podem enviar e receber arquivos de mídia (ex.: imagens, vídeos).
- Usuários podem ver o horário de envio das mensagens.
- Usuários podem verificar quais usuários estão online ou offline.

### Funcionalidades de Chat em Grupo
- Usuários podem criar salas de chat em grupo.
- Usuários podem adicionar ou remover membros das salas de chat em grupo.
- Usuários podem designar administradores para as salas de chat em grupo.
- Usuários podem enviar convites para outros usuários participarem de uma sala de chat em grupo.

### Funcionalidades Extras
- O sistema permite buscar mensagens dentro de uma sala de chat.
- O sistema suporta o envio de mensagens de áudio.
- O sistema exibe a quantidade de mensagens não lidas.
- O sistema é responsivo para uso em dispositivos móveis.
- Usuários podem fixar mensagens importantes em uma sala de chat.
- O sistema permite a criação de canais públicos e privados.

## Lista de Tarefas para o Backend
### Usuários
- [x] Implementar endpoints para **criação de conta** (registro).
- [ ] Implementar endpoints para **login** e **logout**.
- [ ] Criar um sistema para **atualizações de perfil** (nome de usuário, avatar, etc.).
- [ ] Implementar a lógica para **adicionar e remover amigos**.
- [ ] Adicionar validação e tratamento de erros para operações de usuário.

### Funcionalidade de Chat
- [ ] Implementar a lógica para **envio de mensagens em tempo real** (WebSockets ou similar).
- [ ] Implementar a lógica para **recepção de mensagens em tempo real**.
- [ ] Criar um sistema para gerenciar **salas de chat** (criação, entrada, saída).
- [ ] Implementar funcionalidade para **listar participantes** em cada sala de chat.
- [ ] Implementar um **sistema de notificações** para novas mensagens.
- [ ] Adicionar suporte para **envio e recebimento de emojis** nas mensagens.
- [ ] Implementar o **status de digitação** ("Usuário está digitando...").
- [ ] Adicionar suporte para **envio e recebimento de arquivos de mídia** (imagens, vídeos).
- [ ] Implementar exibição de **timestamps** das mensagens.
- [ ] Criar lógica para mostrar quais usuários estão **online ou offline**.

### Funcionalidades de Chat em Grupo
- [ ] Implementar lógica para **criação de salas de chat em grupo**.
- [ ] Adicionar funcionalidade para **adicionar ou remover membros** das salas de chat em grupo.
- [ ] Implementar um sistema para **designar administradores** para salas de chat em grupo.
- [ ] Criar lógica para **enviar convites** para participar de salas de chat em grupo.

### Funcionalidades Extras
- [ ] Implementar um sistema para **buscar mensagens** em uma sala de chat.
- [ ] Adicionar suporte para **envio de mensagens de áudio**.
- [ ] Implementar um contador de **mensagens não lidas**.
- [ ] Garantir que o **sistema seja responsivo** para dispositivos móveis.
- [ ] Implementar funcionalidade para **fixar mensagens importantes** em uma sala de chat.
- [ ] Criar lógica para **criação de canais públicos e privados**.

### Segurança e Autenticação
- [ ] Implementar autenticação de usuário (JWT ou OAuth).
- [ ] Garantir que todas as operações sensíveis estejam **protegidas** e **autenticadas**.
- [ ] Adicionar **criptografia** para senhas e dados sensíveis.

### Testes e Documentação
- [ ] Criar testes unitários e de integração para todas as funcionalidades.
- [ ] Documentar a API usando Swagger ou ferramentas similares.
- [ ] Implementar monitoramento e registro de logs para identificar e resolver problemas em produção.

### Configuração e Implantação
- [ ] Configurar ambientes de desenvolvimento e produção.
- [ ] Implementar CI/CD para automatizar a implantação.
- [ ] Configurar o banco de dados e criar as migrações necessárias.

## Como Começar
1. Clone o repositório:
   ```bash
   git clone https://github.com/devmarcosantonio/chat

## Entidades

### Usuários

- ID: Identificador único do usuário.
- Apelido: Nome unico de usuário.
- Nome: Nome do usuário (deve ser único).
- Email: Endereço de email do usuário (para login).
- Senha: Senha do usuário (armazenada de forma segura).
- Status: Indica se o usuário está online/offline.
- Data de Criação: Data em que o usuário foi registrado.

### Configurações do Usuário (UserSettings)

- ID: Identificador único das configurações.
- ID do Usuário: Referência ao usuário.
- Preferências de Notificação: Configurações sobre como e quando o usuário deseja receber notificações.
- Tema: Preferências de tema (claro/escuro).

### Amizade (Friendship)

ID: Identificador único da amizade.
ID do Usuário 1: Referência ao primeiro usuário.
ID do Usuário 2: Referência ao segundo usuário.
Data de Criação: Data em que a amizade foi estabelecida.

### Mensagem_direta (direct_Message)

- ID: Identificador único da mensagem.
- Texto: Conteúdo da mensagem.
- ID do Remetente: Referência ao usuário que enviou a mensagem.
- ID do Destinatário: Referência ao usuário que receberá a mensagem (opcional).
- Timestamp: Data e hora em que a mensagem foi enviada.

### Mensagem_grupo (direct_Message)

- ID: Identificador único da mensagem.
- Texto: Conteúdo da mensagem.
- ID do Remetente: Referência ao usuário que enviou a mensagem.
- ID do canal/grupo: Referência ao grupo (opcional).
- Timestamp: Data e hora em que a mensagem foi enviada.

### Canal/Grupo (Channel/Group)

- ID: Identificador único do canal/grupo.
- Nome: Nome do canal ou grupo.
- Descrição: Descrição do canal ou grupo (opcional).
- Criador: Referência ao usuário que criou o canal/grupo.
- Data de Criação: Data em que o canal/grupo foi criado.
- Membros: Lista de usuários que são membros do canal/grupo.

### Participação (Membership)

- ID: Identificador único da participação.
- ID do Usuário: Referência ao usuário que é membro do grupo.
- ID do Canal/Grupo: Referência ao grupo em que o usuário é membro.
- Data de Adição: Data em que o usuário foi adicionado ao grupo.

### Notificação (Notification)

- ID: Identificador único da notificação.
- Texto: Conteúdo da notificação.
- ID do Usuário: Referência ao usuário que receberá a notificação.
- Timestamp: Data e hora em que a notificação foi criada.
- Lida: Booleano para indicar se a notificação foi lida.

