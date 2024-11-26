import { execSync } from "child_process";
import fs from 'fs';
import dotenv from 'dotenv';
const envConfig = dotenv.parse(fs.readFileSync('.env'));
executeCode();
async function executeCode() {
  await executeProcess("npm run build");
  await executeProcess("npm run wdio"); // here 1st set configuration will run
  configUpdate('light', 'blue', 'Galaxy S10', '11', '5.90*2.77*0.31_in', '1440x3040')
  await executeProcess("npm run wdio"); // here 2nd set configuration will run
  configUpdate('light', 'green', 'Pixel 6 Pro', '12', '6.45*2.99*0.35_in', '1440x3120')
  await executeProcess("npm run wdio") // here 3rd set configuration will run
  configUpdate('dark', 'green', 'Pixel 5', '11', '5.70*2.77*0.31_in', '1080x2340')
  await executeProcess("npm run wdio && allure generate allure-results --clean");// here 4th set configuration will run  
  configUpdate('dark', 'blue', 'Galaxy S23 Ultra', '13', '6.43*3.07*0.35_in', '1440x3088')
}

function executeProcess(command: string) {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.log(error)
  }
}

function configUpdate(theme: string, color: string, device: string, version: string, screensize: string, resolution: string) {
  envConfig.APP_THEME = theme;
  envConfig.THEME_COLOR = color;
  envConfig.DEVICE = device
  envConfig.PLATFORM_VERSION = version
  envConfig.SCREEN_SIZE = screensize
  envConfig.RESOLUTION = resolution
  const updatedEnv = Object.keys(envConfig)
    .map(key => `${key}=${envConfig[key]}`)
    .join('\n');
  // Write the updated environment variables back to the .env file
  fs.writeFileSync('.env', updatedEnv);
  console.log('Updated .env file with new values.');
}