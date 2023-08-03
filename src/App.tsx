import { useEffect } from "react";
// import { GetTest } from "./store/actions/TestAction";
import { CakeView } from "./display/components/CakeView";
import { IceView } from "./display/components/IceView";
import { TestView } from "./display/components/TestView";

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <CakeView></CakeView>
      <IceView></IceView>
      <TestView></TestView>
    </>
  );
}

export default App;
