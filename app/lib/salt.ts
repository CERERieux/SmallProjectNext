const bcrypt = require("bcryptjs");

export function isPassCorrect(pass: string, salted: string) {
  return bcrypt.compareSync(pass, salted);
}
