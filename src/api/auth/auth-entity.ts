export class LoginEmail {
    email: string;
    password: string;
}

export class LoginUserCode {
    userCode: string;
    password: string;
}

export class Auth {
    accessToken: string;
    expireIn: number;
}
