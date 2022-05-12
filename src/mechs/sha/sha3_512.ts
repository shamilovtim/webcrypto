import * as core from "webcrypto-core";
import { ShaCrypto } from "./crypto";

export class Sha3512Provider extends core.ProviderCrypto {
  public name = "SHA3-512";
  public usages = [];

  public override async onDigest(algorithm: Algorithm, data: ArrayBuffer): Promise<ArrayBuffer> {
    return ShaCrypto.digest(algorithm, data);
  }

}
