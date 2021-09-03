import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";
// Arrange, Act and Assert
// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render (<CheckoutForm/>)

});



test("shows success message on submit with form details", () => {
     // Arrange: Display Checkout Component
     render (<CheckoutForm/>)
        

     // Act: 



     // First Name
     const firstNameInput = screen.getByLabelText("First Name:")
     userEvent.type(firstNameInput, "Nyriq")
     
     // Last Name
     const lastNameInput = screen.getByLabelText("Last Name:")
     userEvent.type(lastNameInput, "Faber")
 
    // Address
     const addressNameInput = screen.getByLabelText("Address:")
     userEvent.type(addressNameInput, "96 Porter St")

     // City
     const cityNameInput = screen.getByLabelText("City:")
     userEvent.type(cityNameInput, "New Haven")

     
     // State
     const stateNameInput = screen.getByLabelText("State:")
     userEvent.type(stateNameInput, "CT")

     // Zip
     const zipNameInput = screen.getByLabelText("Zip:")
     userEvent.type(zipNameInput, "06519")
   
    // Button
     const button = screen.getByRole("button")
     userEvent.click(button)


     const success = screen.queryByText(/You have ordered some plants! Woo-hoo!/i)
     
      //Assert
     
     expect(success).toBeInTheDocument();
});

