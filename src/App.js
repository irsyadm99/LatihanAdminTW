import PageBase from "./PageBase";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

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
function Komoditas() {
  return (
    <div>
      <h2 className="text-2xl font-bold p-5">Komoditas</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <PageBase>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/harga" element={<Harga />} />
          <Route exact path="/komoditas" element={<Komoditas />} />
        </Routes>
      </PageBase>
    </div>
  );
}

export default App;
