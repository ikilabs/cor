/**
 * Interface for defining business rules in the Chain of Responsibility pattern.
 */
export interface BusinessRule {
    /**
     * Gets the name of the business rule.
     * 
     * @returns {string} The name of the business rule.
     */
    getName(): string;

    /**
     * Gets the ID of the business rule.
     * 
     * @returns {string} The ID of the business rule.
     */
    getId(): string;

    /**
     * Processes the given object according to the business rule.
     * 
     * @param {any} object - The object to process.
     * @returns {object} The processed object.
     */
    process(object: any): object;

    /**
     * Validates the given object to check if it meets the criteria of the business rule.
     * 
     * @param {any} object - The object to validate.
     * @returns {boolean} True if the object is valid, false otherwise.
     */
    validate(object: any): boolean;
}