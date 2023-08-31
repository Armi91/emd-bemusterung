export interface UserData {
    firstname: string,
    lastname: string,
    email: string,
    password?: string,
    city: string,
    street: string,
    postalCode: string,
    projectsIds?: string[];
    uid?: string;
}