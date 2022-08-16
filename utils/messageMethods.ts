import { Validation } from "../fixtures/types";

export async function getMessage(str: string, type: Validation): Promise<string> {
    return `'${str}' value is ${type}`;
}