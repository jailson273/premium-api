import bcrypt from "bcryptjs";

export class Encrypt {
    static encryptPassword(password: string) {
        return bcrypt.hashSync(password, 8);
    }

    static comparePassword(password: string, hashPassword: string) {
        return bcrypt.compareSync(password, hashPassword);
    }
}
