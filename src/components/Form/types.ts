export interface iForm {
    typeForm: boolean;
}

export interface iUser {
    email: string;
    password: string;
    name?: string;
    confirmPassword?: string;
}