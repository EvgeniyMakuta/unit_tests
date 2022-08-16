export const POSITIVE_VALUES = {
    PASSWORD_FIRST: "werq1234",
    PASSWORD_SECOND: "09876543210",
    PASSWORD_THIRD: " 09876543210 ",
    PASSWORD_MIN: "12345678",
    PASSWORD_MAX: "12345678901234567890123456789012345678901234567890",
    EMAIL_FIRST: "test@test.com",
    EMAIL_SECOND: "test22@icl@oud.com",
    EMAIL_THIRD: "test@icloud.c0m",
    EMAIL_USERNAME64: "tweeeeeeeetweeeeeeeetweeeeeeeetweeeeeeeetweeeeeeeetweeeeeeee1234@test.com",
    EMAIL_DOMAIN_NAME255: "test@gmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmail" +
        "gmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmail" +
        "gmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailg.com",
};

export const NEGATIVE_VALUES = {
    PASSWORD_FIRST: "123[45678",
    PASSWORD_SECOND: "test12345$",
    PASSWORD_NULL: "",
    PASSWORD_MIN: "1234567",
    PASSWORD_MAX: "123456789012345678901234567890123456789012345678901",
    EMAIL_FIRST: "examplegmail.com",
    EMAIL_SECOND: "example@?icloud.com",
    EMAIL_THIRD: "@example12345icloud/com",
    EMAIL_USERNAME65: "tweeeeeeeetweeeeeeeetweeeeeeeetweeeeeeeetweeeeeeeetweeeeeeee12345@test.com",
    EMAIL_DOMAIN_NAME256: "test@gmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmail" +
        "gmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmail" +
        "gmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailg1.com",
};