import {IValidator} from './validator';

export class GreaterValidator implements IValidator {
    public execute(value: number, compare:number): boolean {
        return value > compare;
    }
}
