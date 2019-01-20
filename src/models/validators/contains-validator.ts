import {IValidator} from './validator';

export class ContainsCommand implements IValidator {
    public execute(value: string, compare: string): boolean {
        return value.includes(compare);
    }
}
