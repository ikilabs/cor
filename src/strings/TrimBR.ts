import { BusinessRule } from '../BusinessRule';

/**
 * Business rule to trim leading and trailing spaces from a string.
 */
export class TrimBR implements BusinessRule {

    /**
     * Gets the name of the business rule.
     * 
     * @returns {string} The name of the business rule.
     */
    getName(): string {
        return 'TrimBR';
    }

    /**
     * Gets the ID of the business rule.
     * 
     * @returns {string} The ID of the business rule.
     */
    getId(): string {
        return 'trim';
    }

    /**
     * Validates if the given object is a string.
     * 
     * @param {any} object - The object to validate.
     * @returns {boolean} True if the object is a string, false otherwise.
     */
    validate(object: any): boolean {
        return typeof object === 'string';
    }

    /**
     * Processes the given string to trim leading and trailing spaces.
     * 
     * @param {any} object - The string to process.
     * @returns {object} The trimmed string.
     */
    process(object: any): Promise<object> {
        return object.trim();
    }
}