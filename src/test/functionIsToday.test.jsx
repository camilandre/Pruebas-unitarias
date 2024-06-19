import { describe, expect, test } from "vitest";
import { isToday } from "../utils/Utils";

describe('Test isToday function', () => {

    test('return true for today date', () => {
        expect(isToday(new Date())).toBe(true);
        expect(isToday('2024,06,19')).toBe(true);
    });

    test('return false for a past date', () => {
        expect(isToday(new Date('2010-10-12'))).toBe(false);
        expect(isToday('2024,06,18')).toBe(false);
    });

    test('return false for a future date', () => {
        expect(isToday(new Date('2045-10-12'))).toBe(false);
        expect(isToday('2025,06,18')).toBe(false);
    });

    test('throw error for an invalid date string', () => {
        expect(() => {
            isToday('Camila')
        }).toThrow('Invalid date');
    });

    test('throw an error for an invalid date object', () => {
        expect(()=> {
          isToday({}) 
          }).toThrow('Invalid date')
       })
    
    
       test('throw an error for a null', () => {
        expect(()=> {
          isToday(null) 
          }).toThrow('Invalid date')
       })
    
    
       test('throw an error for an undefined', () => {
        expect(()=> {
          isToday(undefined) 
          }).toThrow('Invalid date')
        expect(()=> {
          isToday(undefined) 
        }).toThrowError();
       })
    
    
       test('throw an error for an undefined', () => {
        expect(()=> {
          isToday(54) 
          }).toThrow('Invalid date')
        expect(()=> {
          isToday(undefined) 
        }).toThrowError();
       })

});