import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private users: User[];

    private static INSTANCE: UsersRepository;

    private constructor() {
        this.users = [{
            id: "123e4567-e89b-12d3-a456-426614174000",
            name: "Jeferson",
            email: "jefersonr.santos@outlook.com",
            admin: true,
            created_at: new Date(),
            update_at: new Date()
        }];
    }

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE;
    }

    create({ name, email }: ICreateUserDTO): User {

        //object user
        const user = {
            name,
            email,
            admin: false,
            created_at: new Date(),
            update_at: new Date()
        }

        // inserting user
        this.users.push(user);

        return user; // return user
    }

    findById(id: string): User | undefined {
        const user = this.users.find(user => user.id === id);
        return user;
    }

    findByEmail(email: string): User | undefined {
        const user = this.users.find(user => user.email === email);
        return user;
    }

    turnAdmin(receivedUser: User): User {
        receivedUser.admin = true;
        return receivedUser;
    }

    list(): User[] {
        return this.users;
    }
}

export { UsersRepository };
