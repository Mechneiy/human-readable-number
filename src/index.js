module.exports = function toReadable(number) {
    const namber_0_9 = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ],
        namber_20 = [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ],
        namber_100 = [
            "zero",
            "ten",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ],
        num_str = number.toString();
    let result = "",
        counter = num_str.length;

    for (let i = 0; counter > 0; i += 1) {
        const cunvert_digit = Number(num_str[i]);
        if (counter === 3) result = `${namber_0_9[cunvert_digit]} hundred `;
        if (counter === 2) {
            if (cunvert_digit === 1) {
                const num_buf = Number(num_str[i + 1]);
                num_buf === 0
                    ? (result += namber_20[0])
                    : (result += namber_20[num_buf]);
                break;
            }
            if (cunvert_digit > 1) result += `${namber_100[cunvert_digit]} `;
        }
        if (counter === 1 && cunvert_digit > 0)
            result += namber_0_9[cunvert_digit];
        counter -= 1;
    }
    if (number === 0) return "zero";
    return result.trim();
};
