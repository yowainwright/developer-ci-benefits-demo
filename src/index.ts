/**
 * DEVELOPER CI BENEFITS
 * ----
 * build an assertion tool with ts
 */

export const asserter = (
  expected: string | number | boolean,
  result: string | number | boolean,
  message: string): void => console.assert(expected === result, message)


