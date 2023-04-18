import "wasi";
import { memory } from "@blockless/sdk";
import { Console } from "as-wasi/assembly";
let envVars = new memory.EnvVars().read().toJSON();
if (envVars) {
  let environmentValue = envVars.get("ENV_VAR_NAME");
  if (environmentValue) {
    Console.log("Hello " + environmentValue.toString());
  }
}
