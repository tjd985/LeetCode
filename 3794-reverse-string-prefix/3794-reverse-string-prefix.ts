function reversePrefix(s: string, k: number): string {
  const pre = s.slice(0, k);
  const post = s.slice(k);

  return pre.split("").reverse().join("") + post;
};