import PageBase from "./PageBase";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold p-5">Home</h2>
    </div>
  );
}
function Harga() {
  return (
    <div>
      <h2 className="text-2xl font-bold p-5">Harga</h2>
    </div>
  );
}

function App() {
  return (
    <>
      <PageBase>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route exact path="/harga" element={Harga} />
          <Route
            exact
            path="/komoditas"
            render={() => (
              <h1 className="text-2xl font-bold p-5">hello Komoditas</h1>
            )}
          />
        </Routes>
      </PageBase>
    </>
  );
}

export default App;
