import { getMessage } from "../utils/messageMethods";
import { dotSymbol, emailInvalidData, passwordInvalidData } from "../fixtures/registrationFieldsData"
import {emailDotError, emailDotMissingError} from "../fixtures/expectedValues";

export class RegistrationForm {
    static async validateEmailField(email: string): Promise<string> {
        const emailArr = email.trim().split("");
        const userNameLength = email.split(dotSymbol).splice(0, 1).toString().length;
        const domainNameLength = email.split(dotSymbol).splice(1, 1).toString().length;
        if (!emailArr.includes(dotSymbol)) {
            return emailDotMissingError;
        }
        if (emailArr.toString().startsWith(dotSymbol)) {
            return emailDotError;
        }
        if (domainNameLength > 255 || userNameLength > 64) {
            return await getMessage(email, "not valid");
        }
        if (emailArr.some(el => emailInvalidData.includes(el))) {
            return await getMessage(email, "not valid");
        } else {
            return email;
        }
    }

    static async validatePasswordField(password: string): Promise<string> {
        const passwordArr = password.trim().split("");
        if (password.trim().length < 8 || password.trim().length > 50) {
            return await getMessage(password, "not valid");
        }
        if (passwordArr.some(el => passwordInvalidData.includes(el))) {
            return await getMessage(password, "not valid");
        } else {
            return password.trim();
        }
    }
}