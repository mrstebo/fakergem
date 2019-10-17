import { Faker } from '../faker';
import { NumberRange } from '../types/NumberRange';

export class TimeRange {
  public static All: NumberRange = { start: 0, end: 23 };
  public static Day: NumberRange = { start: 9, end: 17 };
  public static Night: NumberRange = { start: 18, end: 23 };
  public static Morning: NumberRange = { start: 6, end: 11 };
  public static Afternoon: NumberRange = { start: 12, end: 17 };
  public static Evening: NumberRange = { start: 17, end: 21 };
  public static Midnight: NumberRange = { start: 0, end: 4 };
}

export class Time {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  get ALL() {
    return 'ALL';
  }
  get DAY() {
    return 'DAY';
  }
  get NIGHT() {
    return 'NIGHT';
  }
  get MORNING() {
    return 'MORNING';
  }
  get AFTERNOON() {
    return 'AFTERNOON';
  }
  get EVENING() {
    return 'EVENING';
  }
  get MIDNIGHT() {
    return 'MIDNIGHT';
  }
  get BETWEEN() {
    return 'BETWEEN';
  }

  between(from: Date, to: Date, period: string = this.ALL): Date {
    const date = this.faker.Date.between(from, to);
    const time =
      period === this.BETWEEN
        ? date
        : new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            this.faker.Number.between(this.rangeFor(period).start, this.rangeFor(period).end),
            this.faker.Number.between(0, 59),
            this.faker.Number.between(0, 59),
          );

    return time;
  }

  forward(days: number = 365, period: string = this.ALL): Date {
    const from = this.daysFromNow(1);
    const to = this.daysFromNow(days);
    const date = this.faker.Date.between(from, to);
    const range = this.rangeFor(period);
    const time = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      this.faker.Number.between(range.start, range.end),
      this.faker.Number.between(0, 59),
      this.faker.Number.between(0, 59),
    );

    return time;
  }

  backward(days: number = 365, period: string = this.ALL): Date {
    const from = this.daysFromNow(-days);
    const to = this.daysFromNow(-1);
    const date = this.faker.Date.between(from, to);
    const range = this.rangeFor(period);
    const time = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      this.faker.Number.between(range.start, range.end),
      this.faker.Number.between(0, 59),
      this.faker.Number.between(0, 59),
    );

    return time;
  }

  private rangeFor(period: string): NumberRange {
    switch (period) {
      case this.ALL:
        return TimeRange.All;

      case this.DAY:
        return TimeRange.Day;

      case this.NIGHT:
        return TimeRange.Night;

      case this.MORNING:
        return TimeRange.Morning;

      case this.AFTERNOON:
        return TimeRange.Afternoon;

      case this.EVENING:
        return TimeRange.Evening;

      case this.MIDNIGHT:
        return TimeRange.Midnight;

      default:
        throw new Error(`invalid period: ${period}`);
    }
  }

  private daysFromNow(n: number): Date {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return d;
  }
}
