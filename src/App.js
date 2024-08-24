import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./(after-login)/inverntory/home/home";
import Items from "./(after-login)/inverntory/ineventory-items/items/items.jsx";
import { Header } from "./components/header.jsx";
import Sidebar from "./components/sidebar.jsx";
import { ContextProvider } from "./Context.jsx";
import ItemGroup from "./(after-login)/inverntory/ineventory-items/item-groups/itemGroup.jsx";
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              path="/*"
              element={
                <div className="flex">
                  <Sidebar />
                  <main className="w-full min-h-screen bg-slate-100">
                    <Header />
                    <div className="w-full">
                      <Routes>
                        <Route
                          path="/inventory-items/items"
                          element={<Items />}
                        />
                        <Route
                          path="/inventory-items/item-groups"
                          element={<ItemGroup />}
                        />
                        <Route path="/home" element={<Home />} />
                        <Route path="/" element={<Home />} />
                      </Routes>
                    </div>
                  </main>
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
