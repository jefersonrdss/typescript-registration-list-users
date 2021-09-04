import { v4 as uuidV4 } from "uuid";

class User {
    id: string;
    name: string;
    admin: boolean;
    email: string;
    created_at: Date;
    update_at: Date;
}

export { User };
