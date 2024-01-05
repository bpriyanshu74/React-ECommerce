import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// dev-l8jnzgwjiofat3bb.us.auth0.com

// client Sl1DksCsDg5WuFHh76zL15NuE8bBb4ZV

root.render(
  <Auth0Provider
    domain="dev-l8jnzgwjiofat3bb.us.auth0.com"
    clientId="Sl1DksCsDg5WuFHh76zL15NuE8bBb4ZV"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
