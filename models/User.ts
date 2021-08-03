export default class User {
    id?: string;
    accessToken?: string;
    firstName?: string;
    lastName?: string;
    emailAddress?: string;

    constructor(id?: string, accessToken?: string, firstName?: string, lastName?: string, emailAddress?: string) {
        this.id = id;
        this.accessToken = accessToken;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
    }
}
