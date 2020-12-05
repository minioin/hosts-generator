export function expand(joiner: string, ...args: Array<any>) {
  let [first, ...rest] = args;
  if (typeof first === "string") {
    first = [first];
  }

  // Argument should be string or array
  if (typeof first !== "string" && !Array.isArray(rest)) {
    return first;
  }

  if (!rest || rest.length === 0) {
    return first;
  }

  const res = [];
  rest = expand(joiner, ...rest);
  for (const f of first) {
    for (const r of rest) {
      res.push(`${f}${joiner}${r}`);
    }
  }
  return res;
}

export function A(ip: string, ...address: Array<string>) {
  return expand(" ", ip, expand(".", ...address));
}
