# Aplicação de Chat em Tempo Real

Esta é uma aplicação pessoal de chat em tempo real construída utilizando React.js no front-end e Fastify com WebSockets no back-end.

## Tecnologias

- Node
- Fastify
- Prisma ORM
- Postgrest
- Tsup
- Zod

## Requisitos Funcionais

### Usuários
- [ ] Usuários devem ser capazes de criar uma conta e fazer login.
- [ ] Usuários devem ser capazes de atualizar o perfil (nome de usuário, avatar, etc.).
- [ ] Usuários devem ser capazes de fazer logout da conta.
- [ ] Usuários devem ser capazes de adicionar amigos.

### Funcionalidades de Chat
- [ ] Usuários devem ser capazes de enviar mensagens em tempo real.
- [ ] Usuários devem ser capazes de receber mensagens em tempo real.
- [ ] Usuários devem ser capazes de entrar em diferentes salas de chat.
- [ ] Usuários devem ser capazes de ver uma lista de participantes em cada sala de chat.
- [ ] Usuários devem ser capazes de receber notificações de novas mensagens quando não estiverem com a janela do chat aberta.
- [ ] Usuários devem ser capazes de enviar e receber emojis nas mensagens.
- [ ] Usuários devem ser capazes de ver o status de digitação (ex.: "Usuário está digitando...").
- [ ] Usuários devem ser capazes de enviar e receber arquivos de mídia (ex.: imagens, vídeos).
- [ ] Usuários devem ser capazes de ver o horário de envio das mensagens.
- [ ] Usuários devem ser capazes de ver quais usuários estão online ou offline.

### Funcionalidades de Chat em Grupo
- [ ] Usuários devem ser capazes de criar salas de chat em grupo.
- [ ] Usuários devem ser capazes de adicionar ou remover membros das salas de chat em grupo.
- [ ] Usuários devem ser capazes de definir administradores para as salas de chat em grupo.
- [ ] Usuários devem ser capazes de enviar convites para outros usuários participarem de uma sala de chat em grupo.

### Funcionalidades Extras
- [ ] O sistema deve permitir buscas por mensagens dentro de uma sala de chat.
- [ ] O sistema deve suportar o envio de mensagens de áudio.
- [ ] O sistema deve exibir a quantidade de mensagens não lidas.
- [ ] O sistema deve ser responsivo para uso em dispositivos móveis.
- [ ] Usuários devem ser capazes de fixar mensagens importantes em uma sala de chat.
- [ ] O sistema deve permitir a criação de canais públicos e privados.


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

