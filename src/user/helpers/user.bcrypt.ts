import * as bcrypt from 'bcrypt';

export class Encrypt {
  static async CryptPass(pass: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(pass, salt);
  }

  static async ComparePass(enterPass: string, userPass: string) {
    return await bcrypt.compare(enterPass, userPass);
  }
}
