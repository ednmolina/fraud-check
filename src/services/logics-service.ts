import {Logic} from '../enums/logic';
import {AddLogic} from '../models/logics/add-logic';
import {ILogic} from '../models/logics/logic';

export class LogicsService {
    private logics: Map<Logic, ILogic>;

    constructor() {
        this.init();
    }

    public getLogic(logic: Logic): ILogic {
        return this.logics[logic];
    }

    private init(): void {
        this.logics = new Map<Logic, ILogic>();
        this.logics[Logic.And] = new AddLogic();
    }
}
