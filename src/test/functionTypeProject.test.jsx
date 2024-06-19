import { describe, expect, test } from "vitest";
import { typeProject } from "../utils/Utils";

describe('Test typeProject function', () => {

    test('return correct project', () => {
        let result = typeProject(0);
        expect(typeof result).toBe("string");
        expect(result).toBe("Consumo");

        result = typeProject(1);
        expect(typeof result).toBe("string");
        expect(typeof result).not.toBe("number");
        expect(result).toBe("Autoconsumo");
    });

    test('return default project', () => {
        let result = typeProject(7);
        expect(typeof result).toBe("string");
        expect(typeof result).not.toBe("number");
        expect(result).toBe("No definido");

        result = typeProject([0,1]);
        expect(typeof result).toBe("string");
        expect(typeof result).not.toBe("number");
        expect(result).toBe("No definido");

        result = typeProject({});
        expect(typeof result).toBe("string");
        expect(typeof result).not.toBe("number");
        expect(result).toBe("No definido");
    });

})