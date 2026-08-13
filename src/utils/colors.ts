export const reset = '\\x1b[0m';
export const red = (t: string) => `\\x1b[31m${t}${reset}`;
export const green = (t: string) => `\\x1b[32m${t}${reset}`;
export const yellow = (t: string) => `\\x1b[33m${t}${reset}`;
export const blue = (t: string) => `\\x1b[34m${t}${reset}`;
export const magenta = (t: string) => `\\x1b[35m${t}${reset}`;
export const cyan = (t: string) => `\\x1b[36m${t}${reset}`;
export const gray = (t: string) => `\\x1b[90m${t}${reset}`;
