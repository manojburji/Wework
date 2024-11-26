import { remote } from "webdriverio";
import { config } from "../wdio.conf";


console.log("Hello");

const opts = {
  capabilities: config.capabilities[0],
};
let driver;

export async function setDriver() {
  if (driver) return;
  driver = await remote(opts);
}

setDriver();


