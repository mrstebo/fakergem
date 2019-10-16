import { Faker } from '../faker';
import { NumberRange } from '../types/NumberRange';
import { format as formatDate } from '../utils/date-helpers';

const ALL = 'ALL';
const DAY = 'DAY';
const NIGHT = 'NIGHT';
const MORNING = 'MORNING';
const AFTERNOON = 'AFTERNOON';
const EVENING = 'EVENING';
const MIDNIGHT = 'MIDNIGHT';
const BETWEEN = 'BETWEEN';

/**
 * @type { [key: string]: NumberRange }
 */
const TIME_RANGES = {
  [ALL]: { start: 0, end: 23 },
  [DAY]: { start: 9, end: 17 },
  [NIGHT]: { start: 18, end: 23 },
  [MORNING]: { start: 6, end: 11 },
  [AFTERNOON]: { start: 12, end: 17 },
  [EVENING]: { start: 17, end: 21 },
  [MIDNIGHT]: { start: 0, end: 4 },
};

export class Time {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  get ALL() {
    return ALL;
  }
  get DAY() {
    return DAY;
  }
  get NIGHT() {
    return NIGHT;
  }
  get MORNING() {
    return MORNING;
  }
  get AFTERNOON() {
    return AFTERNOON;
  }
  get EVENING() {
    return EVENING;
  }
  get MIDNIGHT() {
    return MIDNIGHT;
  }
  get BETWEEN() {
    return BETWEEN;
  }

  between(
    from: Date,
    to: Date,
    period: string = ALL,
    format: string | null = null
  ): string {
    const date = this.faker.Date.between(from, to);
    const time =
      period === BETWEEN
        ? date
        : new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            this.faker.Number.between(this.rangeFor(period).start, this.rangeFor(period).end),
            this.faker.Number.between(0, 59),
            this.faker.Number.between(0, 59),
          );
    return this.timeWithFormat(time, format);
  }

  forward(
    days: number = 365,
    period: string = ALL,
    format: string | null = null
  ): string {
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
    return this.timeWithFormat(time, format);
  }

  backward(
    days: number = 365,
    period: string = ALL,
    format: string | null = null
  ): string {
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
    return this.timeWithFormat(time, format);
  }

  private rangeFor(period: string): NumberRange {
    switch (period) {
      case ALL:
        return TIME_RANGES[ALL];

      case DAY:
        return TIME_RANGES[DAY];

      case NIGHT:
        return TIME_RANGES[NIGHT];

      case MORNING:
        return TIME_RANGES[MORNING];

      case AFTERNOON:
        return TIME_RANGES[AFTERNOON];

      case EVENING:
        return TIME_RANGES[EVENING];

      case MIDNIGHT:
        return TIME_RANGES[MIDNIGHT];

      default:
          throw new Error(`invalid period: ${period}`);
    }
  }

  private timeWithFormat(time: Date, format: string | null): string {
    if (!format) return time.toString();
    return formatDate(time, format);
  }

  private daysFromNow(n: number): Date {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return d;
  }
}
