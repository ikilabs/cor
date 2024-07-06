import { BusinessRule } from './BusinessRule';

/**
 * Class to implement the Chain of Responsibility pattern.
 */
export class CoR {

    private rules: BusinessRule[] = [];

    /**
     * Adds a business rule to the chain.
     * 
     * @param {BusinessRule} rule - The business rule to add.
     */
    public addRule(rule: BusinessRule): void {
        this.rules.push(rule);
    }

    /**
     * Executes the chain of business rules on the given object.
     * 
     * @param {any} object - The object to process.
     * @returns {Promise<any>} The processed object.
     * @throws {Error} If validation fails for any rule.
     */
    public async execute(object: any): Promise<any> {
        for (const rule of this.rules) {
            if (!rule.validate(object)) {
                throw new Error(`Validation failed for rule ${rule.getId()} - ${rule.getName()}`);
            }
            object = await rule.process(object);
        }
        return object;
    }

}
