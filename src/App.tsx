import { Route, Routes, useRoutes } from "react-router-dom";
import Router from "./Routers";

const App = () => {
  const Routers = useRoutes(Router);

  return (
    <Routes>
      <Route path="/*" element={Routers} />
    </Routes>
  );
};

export default App;
