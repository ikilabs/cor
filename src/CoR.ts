import { BusinessRule } from './BusinessRule';

export class CoR {

    private rules: BusinessRule[] = [];

    public addRule(rule: BusinessRule): void {
        this.rules.push(rule);
    }

    public execute(object: any): boolean {
        for (const rule of this.rules) {
            if (!rule.validate(object)) {
                throw new Error(`Validation failed for rule ${rule.getId()} - ${rule.getName()}`);
            }
            if (!rule.process(object)) {
                throw new Error(`Processing failed for rule ${rule.getId()} - ${rule.getName()}`);
            }
        }
        return true;
    }

}