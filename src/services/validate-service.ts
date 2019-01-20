import {ILogic} from '../models/logics/logic';
import {IComplexRule} from '../models/rule/complex-rule';
import {IValidator} from '../models/validators/validator';
import {LogicsService} from './logics-service';
import {ValidatorsService} from './validators-service';

export class ValidateService {
    private readonly complexRule: IComplexRule;
    private validatorsService: ValidatorsService;
    private complexRuleLogic: ILogic;

    constructor(rule: IComplexRule) {
        this.validatorsService = new ValidatorsService();
        this.complexRule = rule;
        this.complexRuleLogic = new LogicsService().getLogic(this.complexRule.logic);
    }

    public validate(order): boolean {
        for (const rule of this.complexRule.rules) {
            const validator: IValidator = this.validatorsService.getValidator(rule.operator);
            const valid: boolean = validator.execute(order[rule.key], rule.value);

            if (this.complexRuleLogic.terminate(valid)) {
                return false;
            }
        }

        return true;
    }
}
