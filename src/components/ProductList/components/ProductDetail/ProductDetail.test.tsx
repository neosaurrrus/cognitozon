import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import ProductDetail from "./ProductDetail"

// Mock ButtonBasketAdd component
jest.mock("../ButtonBasketAdd/ButtonBasketAdd", () => () => <div data-testid="mock-button-basket-add" />)

 // Mock props
 const selectedProduct = {
    id: 1,
    name: "Test Product",
    price: 9.99,
    description: "This is a test product",
}

// Mock functions
const setSelectedProductFn = jest.fn()
const closeDialogFn = jest.fn()

// Mock Basket context
jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useContext: () => ({
        basket: {'Test Product' : {count: 2, price: 9.99}},
        setBasket: () => {},
    }),
}))

const renderProductDetailComponent = () => {
    render(
        <ProductDetail
            selectedProduct={selectedProduct}
            setSelectedProductFn={setSelectedProductFn}
            closeDialogFn={closeDialogFn}
        />
    )
}

describe("Test ProductDetail", () => {
    describe("Test visual elements", () => {
        it("renders product details correctly", () => {
            renderProductDetailComponent()
            expect(screen.getByText("Test Product")).toBeInTheDocument()
            expect(screen.getByText("£9.99")).toBeInTheDocument()
            expect(screen.getByText("This is a test product")).toBeInTheDocument()
            expect(screen.getByText(/2 in basket/)).toBeInTheDocument()
        })
        it("renders ButtonBasketAdd component", () => {
            renderProductDetailComponent()
            expect(screen.getByTestId("mock-button-basket-add")).toBeInTheDocument()
        })
        it("renders the Close button", () => {
            renderProductDetailComponent()
            expect(screen.getByRole("button", {name: "Close"})).toBeInTheDocument()
        })
    })
    
    describe("Test functionality", () => {
        it("calls closeDialogFn when Close button is clicked", () => {
            renderProductDetailComponent()
            screen.getByRole("button", {name: "Close"}).click()
            expect(closeDialogFn).toHaveBeenCalled()
        })
    })
})

