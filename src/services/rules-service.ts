import {Operator} from '../enums/operator';
import {Logic} from '../enums/logic';
import {IComplexRule} from '../models/rule/complex-rule';
import {IRule} from '../models/rule/rule';

export class RulesService {
    public getRules(): IComplexRule {
        const totalPriceRule: IRule = {
            id: 1,
            key: 'total_price',
            operator: Operator.Greater,
            value: 100,
        };

        const emailRule: IRule = {
            id: 2,
            key: 'email',
            operator: Operator.Contains,
            value: 'gmail.com',
        };

        return {
            id: 1,
            rules: [totalPriceRule, emailRule],
            logic: Logic.And,
        };
    }
}
