import { render, screen } from "@testing-library/react"
import Contact from "../contact"
import '@testing-library/jest-dom'

describe("It is used to group test cases",()=>{
    test("component loaded or not",()=>{
        render(<Contact/>)
    
        const heading = screen.getByRole("heading")
    
        expect(heading).toBeInTheDocument();
    })
})
