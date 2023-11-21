import useWindowDimensions from "src/hooks/useWindowDimensions"
import Basket from "./components/Basket/Basket"
import FullMenu from "./components/FullMenu/FullMenu"
import CompactMenu from "./components/CompactMenu/CompactMenu"

// Aside from the basket, much of this component is more of a visual UI concept to test different viewport sizes than functional.
const Header = () => {
  const {isNarrowViewport} = useWindowDimensions()
  return (
    <nav className="w-full min-w-[450px] h-16 sticky top-0 flex justify-between items-center px-8 shadow-md text-xl bg-cognito-blue text-gray-100">
      <a href="/" className="text-white hover:scale-110 duration-300">
        <img src="store-logo.svg" className="h-8 w-8 inline-block mr-2 fill white hover:animate-spin" alt="badge with a star emblem" />
        {!isNarrowViewport && <span>Cognitozon</span>}
      </a>
      {isNarrowViewport ? <CompactMenu /> : <FullMenu />}
      <Basket />
    </nav>
  )
}

export default Header
