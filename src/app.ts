import {URL} from '../assets/globals';
import {IComplexRule} from './models/rule/complex-rule';
import {OrdersService} from './services/orders-service';
import {RulesService} from './services/rules-service';
import {ValidateService} from './services/validate-service';

export class App {
    private rulesService: RulesService;
    private ordersService: OrdersService;
    private validateService: ValidateService;

    constructor() {
        this.initService();
        const frauds = this.countFrauds();
        console.log(`The number of frauds is ${frauds}`);
    }

    private initService(): void {
        this.rulesService = new RulesService();
        this.ordersService = new OrdersService();
        const rules: IComplexRule = this.rulesService.getRules();
        this.validateService = new ValidateService(rules);
    }

    private countFrauds(): number {
        const allOrders = this.ordersService.getAllOrders(URL);
        let frauds = 0;

        for (const order of allOrders) {
            if (!this.validateService.validate(order)) {
                frauds++;
            }
        }

        return frauds;
    }
}
