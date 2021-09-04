import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private users: User[];

    private static INSTANCE: UsersRepository;

    private constructor() {
        this.users = [];
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
        // Complete aqui
    }

    findByEmail(email: string): User | undefined {
        // Complete aqui
    }

    turnAdmin(receivedUser: User): User {
        // Complete aqui
    }

    list(): User[] {
        return this.users;
    }
}

export { UsersRepository };
