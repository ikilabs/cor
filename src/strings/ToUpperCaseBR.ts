import { BusinessRule } from '../BusinessRule';

/**
 * Business rule to convert a string to upper case.
 */
export class ToUpperCaseBR implements BusinessRule {

    /**
     * Gets the name of the business rule.
     * 
     * @returns {string} The name of the business rule.
     */
    getName(): string {
        return 'ToUpperCaseBR';
    }

    /**
     * Gets the ID of the business rule.
     * 
     * @returns {string} The ID of the business rule.
     */
    getId(): string {
        return 'to_upper_case';
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
     * Processes the given string to convert it to upper case.
     * 
     * @param {any} object - The string to process.
     * @returns {object} The upper case string.
     */
    process(object: any): object {
        return object.toUpperCase();
    }
}