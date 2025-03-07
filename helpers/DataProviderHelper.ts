import { faker } from "@faker-js/faker";



export class DataProviderHelper {

    static getTimestamp() {
        return Math.floor(new Date().getTime() / 1000);
    }
    static getWorkspaceUserEmail() { 
        const strtimestamp = this.getTimestamp().toString()
        return process.env.WORKSPACE_USER_EMAIL?.replace("timestamp",strtimestamp)
    }

    static getAgentUserEmail() { 
        const strtimestamp = this.getTimestamp().toString()
        return process.env.AGENT_USER_EMAIL?.replace("timestamp",strtimestamp)
    }

    static getUrlMatchingRegexInHtml(extraSufixRegex: string = '') {
        return new RegExp(`a\\s+href=["'](\\S+)["'].*${extraSufixRegex}`);
    }

    // static getRandomPassword() {
    //     return faker.internet.password(1, false, /[A-Z]/) + faker.internet.password(8, false, /[a-z]/) + this.getTimestamp();
    // }

    // static getRandomString(length = 4) {
    //     return faker.random.alpha(length);
    // }

    static getRandomString(length = 4) {
        return faker.string.alpha(length);
    }

    static getRandomListName(length = 5) {
        return faker.string.alphanumeric(length);
    }

    static getRandomTaskName(length = 10) {
        return faker.string.alphanumeric(length);
    }








//     static getUrlValidationRegex(): RegExp {
//         return new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=\]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//\=]*)/);
//     }
} 
