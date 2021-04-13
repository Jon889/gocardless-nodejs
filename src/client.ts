'use strict';

import { Environments } from './constants';
import { Api } from './api/api';
import { BankAuthorisationService } from './services/bankAuthorisationService';
import { BankDetailsLookupService } from './services/bankDetailsLookupService';
import { BillingRequestService } from './services/billingRequestService';
import { BillingRequestFlowService } from './services/billingRequestFlowService';
import { CreditorService } from './services/creditorService';
import { CreditorBankAccountService } from './services/creditorBankAccountService';
import { CurrencyExchangeRateService } from './services/currencyExchangeRateService';
import { CustomerService } from './services/customerService';
import { CustomerBankAccountService } from './services/customerBankAccountService';
import { CustomerNotificationService } from './services/customerNotificationService';
import { EventService } from './services/eventService';
import { InstalmentScheduleService } from './services/instalmentScheduleService';
import { InstitutionService } from './services/institutionService';
import { MandateService } from './services/mandateService';
import { MandateImportService } from './services/mandateImportService';
import { MandateImportEntryService } from './services/mandateImportEntryService';
import { MandatePdfService } from './services/mandatePdfService';
import { PayerAuthorisationService } from './services/payerAuthorisationService';
import { PaymentService } from './services/paymentService';
import { PayoutService } from './services/payoutService';
import { PayoutItemService } from './services/payoutItemService';
import { RedirectFlowService } from './services/redirectFlowService';
import { RefundService } from './services/refundService';
import { ScenarioSimulatorService } from './services/scenarioSimulatorService';
import { SubscriptionService } from './services/subscriptionService';
import { TaxRateService } from './services/taxRateService';
import { WebhookService } from './services/webhookService';

export class GoCardlessClient {
  private _api: Api;

  private _bankAuthorisations: BankAuthorisationService;
  private _bankDetailsLookups: BankDetailsLookupService;
  private _billingRequests: BillingRequestService;
  private _billingRequestFlows: BillingRequestFlowService;
  private _creditors: CreditorService;
  private _creditorBankAccounts: CreditorBankAccountService;
  private _currencyExchangeRates: CurrencyExchangeRateService;
  private _customers: CustomerService;
  private _customerBankAccounts: CustomerBankAccountService;
  private _customerNotifications: CustomerNotificationService;
  private _events: EventService;
  private _instalmentSchedules: InstalmentScheduleService;
  private _institutions: InstitutionService;
  private _mandates: MandateService;
  private _mandateImports: MandateImportService;
  private _mandateImportEntries: MandateImportEntryService;
  private _mandatePdfs: MandatePdfService;
  private _payerAuthorisations: PayerAuthorisationService;
  private _payments: PaymentService;
  private _payouts: PayoutService;
  private _payoutItems: PayoutItemService;
  private _redirectFlows: RedirectFlowService;
  private _refunds: RefundService;
  private _scenarioSimulators: ScenarioSimulatorService;
  private _subscriptions: SubscriptionService;
  private _taxRates: TaxRateService;
  private _webhooks: WebhookService;

  constructor(token: string, environment = Environments.Live, options = {}) {
    this._api = new Api(token, environment, options);

    this._bankAuthorisations = undefined;
    this._bankDetailsLookups = undefined;
    this._billingRequests = undefined;
    this._billingRequestFlows = undefined;
    this._creditors = undefined;
    this._creditorBankAccounts = undefined;
    this._currencyExchangeRates = undefined;
    this._customers = undefined;
    this._customerBankAccounts = undefined;
    this._customerNotifications = undefined;
    this._events = undefined;
    this._instalmentSchedules = undefined;
    this._institutions = undefined;
    this._mandates = undefined;
    this._mandateImports = undefined;
    this._mandateImportEntries = undefined;
    this._mandatePdfs = undefined;
    this._payerAuthorisations = undefined;
    this._payments = undefined;
    this._payouts = undefined;
    this._payoutItems = undefined;
    this._redirectFlows = undefined;
    this._refunds = undefined;
    this._scenarioSimulators = undefined;
    this._subscriptions = undefined;
    this._taxRates = undefined;
    this._webhooks = undefined;
  }

  get bankAuthorisations(): BankAuthorisationService {
    if (!this._bankAuthorisations) {
      this._bankAuthorisations = new BankAuthorisationService(this._api);
    }

    return this._bankAuthorisations;
  }

  get bankDetailsLookups(): BankDetailsLookupService {
    if (!this._bankDetailsLookups) {
      this._bankDetailsLookups = new BankDetailsLookupService(this._api);
    }

    return this._bankDetailsLookups;
  }

  get billingRequests(): BillingRequestService {
    if (!this._billingRequests) {
      this._billingRequests = new BillingRequestService(this._api);
    }

    return this._billingRequests;
  }

  get billingRequestFlows(): BillingRequestFlowService {
    if (!this._billingRequestFlows) {
      this._billingRequestFlows = new BillingRequestFlowService(this._api);
    }

    return this._billingRequestFlows;
  }

  get creditors(): CreditorService {
    if (!this._creditors) {
      this._creditors = new CreditorService(this._api);
    }

    return this._creditors;
  }

  get creditorBankAccounts(): CreditorBankAccountService {
    if (!this._creditorBankAccounts) {
      this._creditorBankAccounts = new CreditorBankAccountService(this._api);
    }

    return this._creditorBankAccounts;
  }

  get currencyExchangeRates(): CurrencyExchangeRateService {
    if (!this._currencyExchangeRates) {
      this._currencyExchangeRates = new CurrencyExchangeRateService(this._api);
    }

    return this._currencyExchangeRates;
  }

  get customers(): CustomerService {
    if (!this._customers) {
      this._customers = new CustomerService(this._api);
    }

    return this._customers;
  }

  get customerBankAccounts(): CustomerBankAccountService {
    if (!this._customerBankAccounts) {
      this._customerBankAccounts = new CustomerBankAccountService(this._api);
    }

    return this._customerBankAccounts;
  }

  get customerNotifications(): CustomerNotificationService {
    if (!this._customerNotifications) {
      this._customerNotifications = new CustomerNotificationService(this._api);
    }

    return this._customerNotifications;
  }

  get events(): EventService {
    if (!this._events) {
      this._events = new EventService(this._api);
    }

    return this._events;
  }

  get instalmentSchedules(): InstalmentScheduleService {
    if (!this._instalmentSchedules) {
      this._instalmentSchedules = new InstalmentScheduleService(this._api);
    }

    return this._instalmentSchedules;
  }

  get institutions(): InstitutionService {
    if (!this._institutions) {
      this._institutions = new InstitutionService(this._api);
    }

    return this._institutions;
  }

  get mandates(): MandateService {
    if (!this._mandates) {
      this._mandates = new MandateService(this._api);
    }

    return this._mandates;
  }

  get mandateImports(): MandateImportService {
    if (!this._mandateImports) {
      this._mandateImports = new MandateImportService(this._api);
    }

    return this._mandateImports;
  }

  get mandateImportEntries(): MandateImportEntryService {
    if (!this._mandateImportEntries) {
      this._mandateImportEntries = new MandateImportEntryService(this._api);
    }

    return this._mandateImportEntries;
  }

  get mandatePdfs(): MandatePdfService {
    if (!this._mandatePdfs) {
      this._mandatePdfs = new MandatePdfService(this._api);
    }

    return this._mandatePdfs;
  }

  get payerAuthorisations(): PayerAuthorisationService {
    if (!this._payerAuthorisations) {
      this._payerAuthorisations = new PayerAuthorisationService(this._api);
    }

    return this._payerAuthorisations;
  }

  get payments(): PaymentService {
    if (!this._payments) {
      this._payments = new PaymentService(this._api);
    }

    return this._payments;
  }

  get payouts(): PayoutService {
    if (!this._payouts) {
      this._payouts = new PayoutService(this._api);
    }

    return this._payouts;
  }

  get payoutItems(): PayoutItemService {
    if (!this._payoutItems) {
      this._payoutItems = new PayoutItemService(this._api);
    }

    return this._payoutItems;
  }

  get redirectFlows(): RedirectFlowService {
    if (!this._redirectFlows) {
      this._redirectFlows = new RedirectFlowService(this._api);
    }

    return this._redirectFlows;
  }

  get refunds(): RefundService {
    if (!this._refunds) {
      this._refunds = new RefundService(this._api);
    }

    return this._refunds;
  }

  get scenarioSimulators(): ScenarioSimulatorService {
    if (!this._scenarioSimulators) {
      this._scenarioSimulators = new ScenarioSimulatorService(this._api);
    }

    return this._scenarioSimulators;
  }

  get subscriptions(): SubscriptionService {
    if (!this._subscriptions) {
      this._subscriptions = new SubscriptionService(this._api);
    }

    return this._subscriptions;
  }

  get taxRates(): TaxRateService {
    if (!this._taxRates) {
      this._taxRates = new TaxRateService(this._api);
    }

    return this._taxRates;
  }

  get webhooks(): WebhookService {
    if (!this._webhooks) {
      this._webhooks = new WebhookService(this._api);
    }

    return this._webhooks;
  }
}
