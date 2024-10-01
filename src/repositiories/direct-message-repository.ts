import { DirectMessage, Prisma } from "@prisma/client";


export interface DirectMessagesRepository {
    findById(id: string): Promise<DirectMessage | null>;
    create(message: Prisma.DirectMessageCreateInput): Promise<DirectMessage>;
    delete(id: string): Promise<void>;
    getAllByUserId(userId: string): Promise<DirectMessage[]>; // retorna todas as mensagens enviadas ou recebidas por um usuário
}