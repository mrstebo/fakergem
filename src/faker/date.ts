import { Faker } from '../faker';

export class DateFaker {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public between(from: Date | string, to: Date | string): Date {
    from = this.getDateObject(from);
    to = this.getDateObject(to);

    const fromMilliseconds = from.getTime();
    const toMilliseconds = to.getTime();
    const offset = this.faker.Number.between(0, toMilliseconds - fromMilliseconds);
    const date = new Date(fromMilliseconds + offset);
    return this.getDateObject(date);
  }

  public betweenExcept(from: Date | string, to: Date | string, except: Date | string): Date {
    from = this.getDateObject(from);
    to = this.getDateObject(to);
    except = this.getDateObject(except);

    let date = this.between(from, to);
    while (this.datesAreEqual(date, except)) {
      date = this.between(from, to);
    }
    return this.getDateObject(date);
  }

  public forward(days: number = 365): Date {
    const from = this.daysFromNow(1);
    const to = this.daysFromNow(days);
    const date = this.between(from, to);
    return this.getDateObject(date);
  }

  public backward(days: number = 365): Date {
    const from = this.daysFromNow(-days);
    const to = this.daysFromNow(-1);
    const date = this.between(from, to);
    return this.getDateObject(date);
  }

  public birthday(minAge: number = 18, maxAge: number = 65): Date {
    const from = new Date();
    from.setFullYear(from.getFullYear() - maxAge);
    const to = new Date();
    to.setFullYear(to.getFullYear() - minAge);
    const date = this.between(from, to);
    return this.getDateObject(date);
  }

  private getDateObject(date: Date | string): Date {
    if (typeof date === 'string') {
      return new Date(Date.parse(date));
    }
    date.setHours(0, 0, 0, 0);
    return date;
  }

  private datesAreEqual(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  private daysFromNow(n: number): Date {
    const d = new Date();
    d.setDate(d.getDate() + n);
    d.setHours(0, 0, 0, 0);
    return d;
  }
}
