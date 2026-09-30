function generateOTP(length) {
  let otp = "";
  const characters =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    otp += characters.charAt(Math.floor(Math.random() * charactersLength));
    // Pick a random index from 0 to charactersLength - 1,
    // then take that character from the string and append it to otp.
  }

  return otp; // Return the final generated OTP.
}

console.log(generateOTP(4)); // Example: 7K2m
console.log(generateOTP(6)); // Example: A9f2Q7
