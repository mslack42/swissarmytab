export const minify = (s: string) => {
  try {
    return JSON.stringify(JSON.parse(s));
  } catch {
    return s;
  }
};

export const beautify = (s: string) => {
  try {
    return JSON.stringify(JSON.parse(s), null, 4);
  } catch {
    return s;
  }
};

export const escape = (s: string) => {
  try {
    const wrap = { data: s };
    const escapedWrapped = JSON.stringify(wrap);
    const escapedUnwrapped = escapedWrapped.match(/^{"data":"(?<content>.*)"}$/)
      ?.groups?.content;
    return escapedUnwrapped ?? s;
  } catch {
    return s;
  }
};

export const unescape = (s: string) => {
  try {
    const wrap = `{"data":"${s}"}`;
    const unescapedWrapped = JSON.parse(wrap);
    return unescapedWrapped.data ?? s;
  } catch {
    return s;
  }
};
