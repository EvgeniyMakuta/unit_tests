import { RegistrationForm } from "../forms/registrationForm";
import { POSITIVE_VALUES } from "../fixtures/fieldValues"
import { expect } from "chai";
import { POSITIVE_EXPECTED_VALUES, emailDotError } from "../fixtures/expectedValues";

describe("Registration form positive tests", () => {
    let password: string, email: string;
    it("Email test 1", async () => {
        email = await RegistrationForm.validateEmailField(POSITIVE_VALUES.EMAIL_FIRST)
        await expect(email).to.eql(POSITIVE_EXPECTED_VALUES.EMAIL_1);
    });
    it("Email test 2", async () => {
        email = await RegistrationForm.validateEmailField(POSITIVE_VALUES.EMAIL_SECOND)
        await expect(email).to.eql(POSITIVE_EXPECTED_VALUES.EMAIL_2);
    });
    it("Email test 3", async () => {
        email = await RegistrationForm.validateEmailField(POSITIVE_VALUES.EMAIL_THIRD)
        await expect(email).to.eql(POSITIVE_EXPECTED_VALUES.EMAIL_3);
    });
    it("Email test username 64 characters", async () => {
        email = await RegistrationForm.validateEmailField(POSITIVE_VALUES.EMAIL_DOMAIN_NAME255)
        await expect(email).to.eql(POSITIVE_EXPECTED_VALUES.EMAIL_DOMAIN_NAME255);
    });
    it("Email test domain name 255 characters", async () => {
        email = await RegistrationForm.validateEmailField(POSITIVE_VALUES.EMAIL_THIRD)
        await expect(email).to.eql(POSITIVE_EXPECTED_VALUES.EMAIL_3);
    });
    it("Password test 1 ", async () => {
        password = await RegistrationForm.validatePasswordField(POSITIVE_VALUES.PASSWORD_FIRST)
        await expect(password).to.eql(POSITIVE_EXPECTED_VALUES.PASSWORD_1);
    });
    it("Password test 2 ", async () => {
        password = await RegistrationForm.validatePasswordField(POSITIVE_VALUES.PASSWORD_SECOND)
        await expect(password).to.eql(POSITIVE_EXPECTED_VALUES.PASSWORD_2);
    });
    it("Password spaces test  ", async () => {
        password = await RegistrationForm.validatePasswordField(POSITIVE_VALUES.PASSWORD_THIRD)
        await expect(password).to.eql(POSITIVE_EXPECTED_VALUES.PASSWORD_3);
    });
    it("Password min test ", async () => {
        password = await RegistrationForm.validatePasswordField(POSITIVE_VALUES.PASSWORD_MIN)
        await expect(password).to.eql(POSITIVE_EXPECTED_VALUES.PASSWORD_MIN);
    });
    it("Password max test", async () => {
        password = await RegistrationForm.validatePasswordField(POSITIVE_VALUES.PASSWORD_MAX)
        await expect(password).to.eql(POSITIVE_EXPECTED_VALUES.PASSWORD_MAX);
    });
})