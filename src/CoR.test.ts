import { CoR } from './CoR';
import { ToUpperCaseBR } from './strings/ToUpperCaseBR';
import { TrimBR } from './strings/TrimBR';

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