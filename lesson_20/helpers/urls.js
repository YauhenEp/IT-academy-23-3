import urls from "../data/urls.json" assert { type: "json" };
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).argv

export async function getUrlByEnv() {
  return urls[argv.env];
}

export async function getUrlByEnv1() {
  return `https://www.${argv.env === 'prod' ? '': argv.env + '.'}21vek.by/`
}