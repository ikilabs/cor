# CoR - Chain of Responsibility

`CoR` is a TypeScript library implementing the Chain of Responsibility pattern. This library allows you to define a series of business rules that process an object in sequence, where each rule can modify the object or validate it.

## Installation

You can install the package via npm:

```sh
npm install cor-ts
```

## Usage

### Defining Business Rules
First, define your business rules by implementing the BusinessRule interface. Each rule should define getName, getId, validate, and process methods. Note that the process method is asynchronous and should return a Promise.

```TypeScript
import { BusinessRule } from 'cor-ts';

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

    async process(object: any): Promise<object> {
        return object.toUpperCase();
    }
}

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

    async process(object: any): Promise<object> {
        return object.trim();
    }
}
```

### Creating the Chain of Responsibility

Create an instance of the CoR class and add your business rules to it. Remember to use await when calling the execute method.

```TypeScript
import { CoR, ToUpperCaseBR, TrimBR } from 'cor-ts';

async function run() {
    const chain = new CoR();
    chain.addRule(new ToUpperCaseBR());
    chain.addRule(new TrimBR());

    const input = '   hello world   ';
    const result = await chain.execute(input);
    console.log(result); // Output: 'HELLO WORLD'
}

run().catch(console.error);

```

### Handling Validation Errors

If an object does not pass validation for a rule, the CoR class will throw an error:

```TypeScript
import { CoR, ToUpperCaseBR, TrimBR } from 'cor-ts';

const chain = new CoR();
chain.addRule(new ToUpperCaseBR());
chain.addRule(new TrimBR());

try {
    const input = 12345;
    const result = await chain.execute(input);
} catch (error) {
    console.error(error.message); // Output: 'Validation failed for rule to_upper_case - ToUpperCaseBR'
}
```

## Testing

The project uses Jest for testing. You can run the tests with the following command:

```sh
npm test
```

Example test cases are provided in `src/CoR.test.ts.`

```TypeScript
import { CoR, ToUpperCaseBR, TrimBR } from 'cor-ts';

test('Chain of Responsibility with ToUpperCaseBR and TrimBR', async () => {
    const chain = new CoR();
    const toUpperCaseRule = new ToUpperCaseBR();
    const trimRule = new TrimBR();

    chain.addRule(toUpperCaseRule);
    chain.addRule(trimRule);

    let testString = '   hello world   ';
    const expectedString = 'HELLO WORLD';

    const result = await chain.execute(testString);

    expect(result).toBe(expectedString);
});

test('Chain of Responsibility throws error for non-string input', async () => {
    const chain = new CoR();
    const toUpperCaseRule = new ToUpperCaseBR();
    const name = toUpperCaseRule.getName();
    const id = toUpperCaseRule.getId();
    const trimRule = new TrimBR();

    chain.addRule(toUpperCaseRule);
    chain.addRule(trimRule);

    let testNumber = 12345;

    await expect(chain.execute(testNumber)).rejects.toThrowError(new Error(`Validation failed for rule ${id} - ${name}`));
});

```
## License

This project is licensed under the MIT License.

