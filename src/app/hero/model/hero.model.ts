export interface Hero {
    id: string;
    name: string;
    description?: string;
    role: Role
}

export enum Role {
    Fighter = "Fighter",
    Support = "Support",
    Healer = "Healer",
}