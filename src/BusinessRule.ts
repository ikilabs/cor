export interface BusinessRule {
    getName(): string;
    getId(): string;
    process(object: any): object;
    validate(object: any): boolean;
}  