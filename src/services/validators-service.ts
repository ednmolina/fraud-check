import {Operator} from '../enums/operator';
import {ContainsCommand} from '../models/validators/contains-validator';
import {GreaterValidator} from '../models/validators/greater-validator';
import {IValidator} from '../models/validators/validator';

export class ValidatorsService {
    public validators: Map<Operator, IValidator>;

    constructor() {
        this.init();
    }

    public getValidator(operator: Operator): IValidator {
        return this.validators[operator];
    }

    private init(): void {
        this.validators = new Map<Operator, IValidator>();
        this.validators[Operator.Greater] = new GreaterValidator();
        this.validators[Operator.Contains] = new ContainsCommand();
    }
}
