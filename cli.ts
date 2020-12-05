import { A as OA } from "./dns.ts";

function A(ip: string, ...address: Array<string>) {
  const res = OA(ip, ...address);
  log(res);
}

function log(expanded: Array<string>) {
  for (const e of expanded) {
    console.log(e);
  }
}

async function remoteStaticHosts(url: string) {
  console.log(`# Fetching ${url}`);
  const res = await fetch(url);
  const text = await res.text();
  console.log(text);
}

const context = {
  A,
  log: console.log,
  remoteStaticHosts,
};

//  Return the results of the in-line anonymous function we .call with the passed context
function evalInContext(js: string, context: Record<string, unknown>) {
  return function () {
    return eval(js);
  }.call(context);
}

const files = Deno.args;

for (const file of files) {
  const content = await Deno.readTextFile(file);
  await evalInContext(content, context);
}
