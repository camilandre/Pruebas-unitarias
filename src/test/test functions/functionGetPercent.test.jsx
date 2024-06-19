import { describe, expect, test } from "vitest";
import { getPercent } from "../../utils/Utils";

describe("Test percent function", () => {
  test("calculates correct percentage", () => {
    const result = getPercent(50, 200);
    expect(result).toBe(25.0);
    expect(typeof result).toBe("number");
    expect(typeof result).not.toBe("string");
  });

  test("if value or total is not a number throw error ", () => {
    expect(() => getPercent("50", "200")).toThrow(
      "Both value and total must be numbers"
    );
    expect(() => getPercent("50", 200)).toThrow(
      "Both value and total must be numbers"
    );
    expect(() => getPercent(50, "200")).toThrow(
      "Both value and total must be numbers"
    );
    expect(() => getPercent("abc", 200)).toThrow(
      "Both value and total must be numbers"
    );
  });

  test("if total is cero throw error", () => {
    expect(() => getPercent(5, 0)).toThrow("Total must not be zero");
    expect(() => getPercent(5, 0)).toThrowError();
  });

  test("if total is null throw error", () => {
    expect(() => getPercent(5, null)).toThrow(
      "Both value and total must be numbers"
    );
    expect(() => getPercent(5, null)).toThrowError();
    expect(() => getPercent(null, 5)).toThrow(
      "Both value and total must be numbers"
    );
    expect(() => getPercent(null, null)).toThrowError();
  });
});
