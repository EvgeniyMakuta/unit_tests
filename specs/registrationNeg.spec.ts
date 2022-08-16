import { RegistrationForm } from "../forms/registrationForm";
import { NEGATIVE_VALUES } from "../fixtures/fieldValues"
import { expect } from "chai";
import { emailDotError, errorMsg, emailDotMissingError } from "../fixtures/expectedValues";

describe("Registration form negative tests", () => {
    let password: string, email: string;
    it("Email test 1", async () => {
        email = await RegistrationForm.validateEmailField(NEGATIVE_VALUES.EMAIL_FIRST)
        await expect(email).to.eql(`${emailDotMissingError}`);
    });
    it("Email test 2", async () => {
        email = await RegistrationForm.validateEmailField(NEGATIVE_VALUES.EMAIL_SECOND)
        await expect(email).to.eql(`'${NEGATIVE_VALUES.EMAIL_SECOND}' ${errorMsg}`);
    });
    it("Email test 3", async () => {
        email = await RegistrationForm.validateEmailField(NEGATIVE_VALUES.EMAIL_THIRD)
        await expect(email).to.eql(`${emailDotError}`);
    });
    it("Email test username 65 characters", async () => {
        email = await RegistrationForm.validateEmailField(NEGATIVE_VALUES.EMAIL_USERNAME65)
        await expect(email).to.eql(`'${NEGATIVE_VALUES.EMAIL_USERNAME65}' ${errorMsg}`);
    });
    it("Email test domain name 256 characters", async () => {
        email = await RegistrationForm.validateEmailField(NEGATIVE_VALUES.EMAIL_DOMAIN_NAME256)
        await expect(email).to.eql(`'${NEGATIVE_VALUES.EMAIL_DOMAIN_NAME256}' ${errorMsg}`);
    });
    it("Password test 1 ", async () => {
        password = await RegistrationForm.validatePasswordField(NEGATIVE_VALUES.PASSWORD_FIRST)
        await expect(password).to.eql(`'${NEGATIVE_VALUES.PASSWORD_FIRST}' ${errorMsg}`);
    });
    it("Password test 2 ", async () => {
        password = await RegistrationForm.validatePasswordField(NEGATIVE_VALUES.PASSWORD_SECOND)
        await expect(password).to.eql(`'${NEGATIVE_VALUES.PASSWORD_SECOND}' ${errorMsg}`);
    });
    it("Password min test ", async () => {
        password = await RegistrationForm.validatePasswordField(NEGATIVE_VALUES.PASSWORD_MIN);
        await expect(password).to.eql(`'${NEGATIVE_VALUES.PASSWORD_MIN}' ${errorMsg}`);
    });
    it("Password max test", async () => {
        password = await RegistrationForm.validatePasswordField(NEGATIVE_VALUES.PASSWORD_MAX)
        await expect(password).to.eql(`'${NEGATIVE_VALUES.PASSWORD_MAX}' ${errorMsg}`);
    });
})