const RBI = ["01", "10", "30", "33", "35", "44", "45", "49", "50", "51", "52", "53", "54", "86", "91", "98", "99"];

export default class Code {
  constructor(faker) {
    this.faker = faker;
  }

  isbn() {

  }

  ean() {

  }

  imei() {
    const str = [...Array(15)].map(_ => 0);
    let sum = 0;
    let t = 0;
    let lengthOffset = 0;
    let length = 15;

    // Fill in the first two values of the string based with the specified prefix.
    // Reporting Body Identifier list: http://en.wikipedia.org/wiki/Reporting_Body_Identifier
    // arr = sample(RBI)
    // str[0] = arr[0].to_i
    // str[1] = arr[1].to_i
    // pos = 2

    // Fill all the remaining numbers except for the last one with random values.
    // while (pos < len - 1)
    //   str[pos] = this.faker.Number.between(0, 9)
    //   pos += 1
    // end

    // Calculate the Luhn checksum of the values thus far
    // len_offset = (len + 1) % 2
    // (0..(len - 1)).each do |position|
    //   if (position + len_offset).odd?
    //     t = str[position] * 2

    //     t -= 9 if t > 9

    //     sum += t
    //   else
    //     sum += str[position]
    //   end
    // end

    // Choose the last digit so that it causes the entire string to pass the checksum.
    // str[len - 1] = (10 - (sum % 10)) % 10

    // Output the IMEI value.
    str.join('')
  }

  asin() {

  }

  npi() {
    return ('0000000000' + this.faker.Number.between(0, 9999999999)).slice(-10);
  }

  rut() {

  }

  nric() {

  }
}
