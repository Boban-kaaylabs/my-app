import React, { Suspense } from "react";

const Home = React.lazy(() => import("./Home"));

const App = () => {
  return (
    <div>
      This is parent
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  );
};
export default App;
