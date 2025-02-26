import "@/styles/globals.css";
import 'remixicon/fonts/remixicon.css';
import type { AppProps } from "next/app";
import { store, persistor } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import SidebarCart from '@/components/cart/SidebarCart'; // Import SidebarCart

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
        <SidebarCart /> {/* Render SidebarCart globally */}
      </PersistGate>
    </Provider>
  );
}
