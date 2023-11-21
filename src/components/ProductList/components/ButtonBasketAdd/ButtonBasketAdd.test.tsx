import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ButtonBasketAdd from "./ButtonBasketAdd"
import { BasketContext } from "src/contexts/basket"

// mock Context
const mockContextValue = {
    basket: {
        "Test Product": {count: 1, price: 9.99},
    },
    setBasket: jest.fn(),
};

const renderButtonBasketAddComponent = () => {
    render(
        <BasketContext.Provider value={mockContextValue}>
            <ButtonBasketAdd name={"Test Name"} price={1}/>
        </BasketContext.Provider>
    )
}

describe("ButtonBasketAdd", () => {
    it("renders button with correct name", () => {
        renderButtonBasketAddComponent()
        const buttonElement = screen.getByRole("button", { name: /add/i });
        expect(buttonElement).toBeInTheDocument();
    });

   it("calls setBasket with correct arguments when button is clicked", () => {
        renderButtonBasketAddComponent()
        const buttonElement = screen.getByRole("button", { name: /add/i });
        buttonElement.click()
        expect(mockContextValue.setBasket).toHaveBeenCalledWith({ "Test Product": {count:1, price: 9.99}, "Test Name": {count: 1, price: 1} });
    });
});
