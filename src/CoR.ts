import { BusinessRule } from './BusinessRule';

export class CoR {

    private rules: BusinessRule[] = [];

    public addRule(rule: BusinessRule): void {
        this.rules.push(rule);
    }

    public execute(object: any): any {
        for (const rule of this.rules) {
            if (!rule.validate(object)) {
                throw new Error(`Validation failed for rule ${rule.getId()} - ${rule.getName()}`);
            }
            object = rule.process(object);
        }
        return object;
    }

}