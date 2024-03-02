import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../header"
import { Provider } from "react-redux"
import AppStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'

describe("test header component",()=>{
    it("loaded with login button",()=>{
        render(
            <BrowserRouter>
                <Provider store={AppStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>


        
        )
        //const login = screen.getByText("Login");
        const login = screen.getByRole("button",{name:'Login'})
        expect(login).toBeVisible();
    });
    it("login button click to logout button",()=>{
        render(
            <BrowserRouter>
                <Provider store={AppStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>


        
        )
            const loginButton = screen.getByRole('button',{name:'Login'});
            fireEvent.click(loginButton);
            const logoutButton = screen.getByRole('button',{name:'Logout'});
            expect(logoutButton).toBeInTheDocument();

    })
})