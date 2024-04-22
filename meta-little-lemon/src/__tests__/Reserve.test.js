import React from 'react';
import { render, screen } from "@testing-library/react";
import Reserve from "../components/pages/Reserve.jsx";
import { MemoryRouter } from 'react-router-dom'


test('Renders the BookingForm heading', () => {
    render(
    <MemoryRouter>
      <Reserve />
    </MemoryRouter>);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})