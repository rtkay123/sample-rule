import { DatabaseManagerInstance, LoggerService, ManagerConfig } from '@frmscoe/frms-coe-lib';
import { RuleConfig, RuleRequest, RuleResult } from '@frmscoe/frms-coe-lib/lib/interfaces';
export declare function handleTransaction(req: RuleRequest, determineOutcome: (value: number, ruleConfig: RuleConfig, ruleResult: RuleResult) => RuleResult, ruleRes: RuleResult, loggerService: LoggerService, ruleConfig: RuleConfig, databaseManager: DatabaseManagerInstance<ManagerConfig>): Promise<RuleResult>;
