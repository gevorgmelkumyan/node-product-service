import { Result } from '../../shared/Result';

export class Money {
    private readonly amount: number;
    private readonly currency: string;

    private constructor(amount: number, currency: string = 'USD') {
        this.amount = amount;
        this.currency = currency;
    }

    public static create(amount: number, currency?: string): Result<Money> {
        if (amount < 0) {
            return Result.fail<Money>('Amount cannot be negative');
        }

        if (!Number.isFinite(amount)) {
            return Result.fail<Money>('Amount must be a finite number');
        }

        return Result.ok<Money>(new Money(Math.round(amount * 100) / 100, currency));
    }

    public getAmount(): number {
        return this.amount;
    }

    public getCurrency(): string {
        return this.currency;
    }

    public add(other: Money): Result<Money> {
        if (this.currency !== other.currency) {
            return Result.fail<Money>('Cannot add money with different currencies');
        }
        return Money.create(this.amount + other.amount, this.currency);
    }

    public multiply(factor: number): Result<Money> {
        return Money.create(this.amount * factor, this.currency);
    }

    public equals(other: Money): boolean {
        return this.amount === other.amount && this.currency === other.currency;
    }

    public toJSON() {
        return {
            amount: this.amount,
            currency: this.currency
        };
    }
}
