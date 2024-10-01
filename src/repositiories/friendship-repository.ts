import { Friendship, Prisma, User } from "@prisma/client";



interface FriendshipRepository {
    create(friendship: Prisma.FriendshipCreateInput): Promise<Friendship>;
    delete(user1Id: string, user2Id: string): Promise<void>;
    getFriends(userId: string): Promise<User[]>; 
}