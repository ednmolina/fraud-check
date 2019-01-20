import {ILogic} from './logic';

export class AddLogic implements ILogic {
    public terminate(value: boolean): boolean {
        return !value;
    }
}
