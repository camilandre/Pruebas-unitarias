import { describe, expect, expectTypeOf, test } from "vitest";
import { getProducts, getProduct } from "../../service/Api";
import { productsData, productData } from '../../constant';

describe('Api Test', () => {
    test('should fetch products from api', async () => {
        const result = await getProducts(); 
        expect(Array.isArray(result)).toBe(true); // Verifica que el resultado sea un arreglo
        expect(Array.isArray(productsData)).toBe(true); // Verifica que productsData también sea un arreglo (constante local)
        expect(result).toHaveLength(20); // Verifica que el resultado tenga una longitud de 20 productos
        expect(productsData).toHaveLength(20); // Verifica que productsData tenga una longitud de 20 productos
        expect(result).toEqual(productsData);
    });

    test('should fetch a single product from the real API', async () => {
        // Prueba para verificar la obtención de un producto individual desde el API
        const result = await getProduct(2); // Obtiene el producto con ID 2 usando la función getProduct del servicio API
        // Afirmaciones
        expect(typeof productData).toEqual('object'); // Verifica que productData sea de tipo objeto
        expect(typeof result).toEqual('object'); // Verifica que el resultado obtenido sea de tipo objeto
        expect(result).toEqual(productData); // Verifica que el resultado obtenido sea igual a la constante local productData
        expect(result).toEqual(  {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "rating": {
              "rate": 4.1,
              "count": 259
              }
            }) 
            expect(result.price).toEqual(22.3);
            const title = result.title
            expect(title).toEqual("Mens Casual Premium Slim Fit T-Shirts ");
            expect(title).toContain("Mens Casual Premium");
            expect(typeof title).toEqual('string');
            
      });

});