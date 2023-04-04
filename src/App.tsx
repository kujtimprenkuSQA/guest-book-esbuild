// src/App.tsx
import * as React from 'react'
import ReactDOM from 'react-dom/client';
import {ExportAccountSelectorContextProvider} from "./contexts/WalletSelectorExportContext";
import {WalletSelectorContextProvider} from "./contexts/WalletSelectorContext";
import Content from "./components/Content";
import ExportContent from "./components/ExportContent";
import {useState, Fragment} from "react";
import "./styles.css";
import "@near-wallet-selector/modal-ui/styles.css";
import "@near-wallet-selector/account-export/styles.css";

// App Component
const App = () => {
const [showImport, setShowImport] = useState<boolean>(false);

return (
    <Fragment>
        <div className="title-container">
            <h1>{showImport ? "Export Account" : "NEAR Guest Book"}</h1>
            <button onClick={() => setShowImport(!showImport)}>
                {showImport ? "Back to Log in" : "Try Export Account"}
            </button>
        </div>
        {showImport ? (
            <ExportAccountSelectorContextProvider>
                <ExportContent />
            </ExportAccountSelectorContextProvider>
        ) : (
            <WalletSelectorContextProvider>
                <Content />
            </WalletSelectorContextProvider>
        )}
    </Fragment>
)};

// Mount component
const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(<App />)
