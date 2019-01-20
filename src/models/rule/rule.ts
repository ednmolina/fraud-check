import {Logic} from '../../enums/logic';
import {Operator} from '../../enums/operator';

export interface IRule {
    id?: number;
    ruleId?: number;
    key: string;
    operator: Operator;
    value: any;
    type?: Logic;
}
