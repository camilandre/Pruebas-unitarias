import { describe, expect, test } from "vitest";
import { intValue } from "../../utils/Utils";

describe("test intValue", () => {
  test("return true for a valid integer string", () => {
    expect(intValue("123")).toBe(true);
    expect(intValue("0")).toBe(true);
  });

  test("return false for a not valid interger string", () => {
    expect(intValue("camila")).toBe(false);
    expect(intValue("otro")).toBe(false);
    expect(intValue(undefined)).toBe(false);
    expect(intValue("0.5")).toBe(false);
    expect(intValue(0.5)).toBe(false);
  });

  test("return false for an empty value or an empty space", () => {
    expect(intValue("66532 ")).toBe(false);
    expect(intValue(" ")).toBe(false);
    expect(intValue("unde fined")).toBe(false);
  });

  test("return false for a negative value", () => {
    expect(intValue("-66532 ")).toBe(false);
    expect(intValue("-5")).toBe(false);
    expect(intValue("-10.5")).toBe(false);
  });
});
