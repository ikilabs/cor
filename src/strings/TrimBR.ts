import { BusinessRule } from '../BusinessRule';

export class TrimBR implements BusinessRule {

    getName(): string {
        return 'TrimBR';
    }

    getId(): string {
        return 'trim';
    }

    validate(object: any): boolean {
        return typeof object === 'string';
    }

    process(object: any): object {
        return object.trim();
    }
}