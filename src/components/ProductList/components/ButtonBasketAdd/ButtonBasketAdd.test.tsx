import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import ButtonBasketAdd from "./ButtonBasketAdd"
import { BasketContext } from "src/contexts/basket"


// mock Context
const mockContextValue = {
    basket: {
        "Test Product": 1,
    },
    setBasket: jest.fn(),
};

const renderButtonBasketAddComponent = () => {
    render(
        <BasketContext.Provider value={mockContextValue}>
            <ButtonBasketAdd name={'Test Name'} />
        </BasketContext.Provider>
    )
}
describe("ButtonBasketAdd", () => {
    test("renders button with correct name", () => {
        renderButtonBasketAddComponent()
        const buttonElement = screen.getByRole("button", { name: /add/i });
        expect(buttonElement).toBeInTheDocument();
    });

   it("calls setBasket with correct arguments when button is clicked", () => {
        renderButtonBasketAddComponent()
        const buttonElement = screen.getByRole("button", { name: /add/i });
        buttonElement.click()
        expect(mockContextValue.setBasket).toHaveBeenCalledWith({ "Test Product": 1, "Test Name": 1 });
    });
});
