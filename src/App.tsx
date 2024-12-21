import { Route, Routes } from "react-router";

import Home from "./components/Home";
import Layout from "./pages/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUPForm from "./components/SignUPForm";
function App() {
  const token = "jjjj";
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute
                token={Boolean(token)}
                link="sign"
                page={<Home />}
              />
            }
          />
          <Route
            path="sign"
            element={
              <ProtectedRoute token={!token} link="/" page={<SignUPForm />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
