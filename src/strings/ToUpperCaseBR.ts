import { BusinessRule } from '../BusinessRule';

export class ToUpperCaseBR implements BusinessRule {

    getName(): string {
        return 'ToUpperCaseBR';
    }

    getId(): string {
        return 'to_upper_case';
    }

    validate(object: any): boolean {
        return typeof object === 'string';
    }

    process(object: any): object {
        return object.toUpperCase();
    }
}
