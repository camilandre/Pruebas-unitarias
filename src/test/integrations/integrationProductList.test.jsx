import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import "@testing-library/jest-dom";
import ProductList from "../../pages/ProductList";
import { productsData, productData } from "../../constant";

describe('ProductList', () => {
    // Antes de todos los tests, espía la función console.log y la sustituye por una función vacía
    beforeAll(() => {
        vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    // Después de todos los tests, restaura console.log a su implementación original
    afterAll(() => {
        console.log.mockRestore();
    });

    // Test para renderizar la lista de productos
    test('renders product list', async () => {
        render(<ProductList />);
        // Espera a que los elementos se rendericen
        await waitFor(() => {
            const items = screen.getAllByRole('listitem');
            expect(items).toHaveLength(20); // Verifica que haya 20 elementos en la lista
            // Verifica que los primeros dos elementos contengan los textos especificados
            expect(items[0]).toHaveTextContent('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
            expect(items[1]).toHaveTextContent('Mens Casual Premium Slim Fit T-Shirts');
        });
    });

        // Test para verificar que cada elemento de la lista de productos se renderiza correctamente
        test('for each - renders product list', async () => {
          render(<ProductList />);
          await waitFor(() => {
              const items = screen.getAllByRole('listitem');
              expect(items).toHaveLength(20); // Verifica que haya 20 elementos en la lista
              // Verifica que el título de cada elemento coincida con el título correspondiente en productsData
              productsData.forEach((product, index) => {
                  expect(items[index].textContent).toContain(product.title); // Verifica el título del producto
              });
          });
      });

      // Test para verificar que se muestra un producto individual al hacer clic en un botón
    test('should fetch and display a single product on button click', async () => {
      render(<ProductList />);
      // Verifica que el producto no esté presente antes de hacer clic en el botón
      expect(screen.queryByLabelText('Mens Casual Premium Slim Fit T-Shirts')).not.toBeInTheDocument();
      fireEvent.click(screen.getByText('Click me')); // Simula el clic en el botón
      // Espera a que se muestre el producto
      await waitFor(() => {
          // Verifica que console.log se haya llamado con los datos del producto esperado
          expect(console.log).toHaveBeenCalledWith({
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
          });
          // Verifica que el elemento del producto esté presente en la pantalla
          expect(screen.getByLabelText('Mens Casual Premium Slim Fit T-Shirts')).toBeInTheDocument();
      });
    });

        // Test mejorado para verificar que se muestra un producto individual al hacer clic en un botón
        test('Better practice should fetch and display a single product on button click', async () => {
          render(<ProductList />);
          // Verifica que el producto no esté presente antes de hacer clic en el botón
          expect(screen.queryByLabelText('Mens Casual Premium Slim Fit T-Shirts')).not.toBeInTheDocument();
          fireEvent.click(screen.getByText('Click me')); // Simula el clic en el botón
          // Espera a que se muestre el producto
          await waitFor(() => {
              // Verifica que console.log se haya llamado con los datos del producto esperado (en este caso, productData)
              expect(console.log).toHaveBeenCalledWith(productData);
              // Verifica que el elemento del producto esté presente en la pantalla
              expect(screen.getByLabelText('Mens Casual Premium Slim Fit T-Shirts')).toBeInTheDocument();
              fireEvent.click(screen.getByText('Click me'));
              expect(screen.queryByLabelText('Mens Casual Premium Slim Fit T-Shirts')).toBeInTheDocument();
          });
      });
  });