export interface BusinessRule {
    getName(): string;
    getId(): string;
    process(object: any): boolean;
    validate(object: any): boolean;
}  