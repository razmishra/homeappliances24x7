function containsSpecialCharsOrNumbers(str) {
    const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|/=\-]/;
    const numbersRegex = /\d/;
  
    const containsSpecialChars = specialCharsRegex.test(str);
    const containsNumbers = numbersRegex.test(str);
  
    return {
      containsSpecialChars,
      containsNumbers,
    };
  }

  module.exports = containsSpecialCharsOrNumbers