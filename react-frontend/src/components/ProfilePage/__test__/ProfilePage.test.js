import React from "react";
import { render, screen } from "@testing-library/react";

import ProfilePage from "../ProfilePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders profile page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProfilePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("profile-datatable")).toBeInTheDocument();
    expect(screen.getByRole("profile-add-button")).toBeInTheDocument();
});
