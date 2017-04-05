export function between(from, to) {
  from = getDateObject(from);
  to = getDateObject(to);

  const fromMilli = Date.parse(from);
  const toMilli = Date.parse(to);
  const offset = Math.floor(Math.random() * (toMilli - fromMilli));
  const date = new Date(fromMilli + offset);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function betweenExcept(from, to, except) {
  from = getDateObject(from);
  to = getDateObject(to);
  except = getDateObject(except);

  let date = between(from, to);
  while (datesAreEqual(date, except)) {
    date = between(from, to);
  }
  return date;
}

export function forward(days=365) {
  const from = daysFromNow(1);
  const to = daysFromNow(days);
  const date = between(from, to);
  return date;
}

export function backward(days=365) {
  const from = daysFromNow(-days);
  const to = daysFromNow(-1);
  const date = between(from, to);
  return date;
}

export function birthday(minAge=18, maxAge=65) {
  const now = new Date();
  const from = new Date(now.getYear() - maxAge, now.getMonth(), now.getDay());
  const to = new Date(now.getYear() - minAge, now.getMonth(), now.getDay());
  const date = between(from, to);
  return date;
}

function getDateObject(date) {
  if (typeof(date) == 'string') {
    return new Date(Date.parse(date));
  }
  date.setHours(0, 0, 0, 0);
  return date;
}

function datesAreEqual(date1, date2) {
  return date1.getYear() == date2.getYear() &&
         date1.getMonth() == date2.getMonth() &&
         date1.getDate() == date2.getDate();
}

function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  d.setHours(0, 0, 0, 0);
  return d;
}
