import {Logic} from '../../enums/logic';
import {IRule} from './rule';

export interface IComplexRule {
    id: number;
    logic: Logic;
    rules: IRule[];
}
