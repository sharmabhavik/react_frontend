import "./App.css";
import Alert from "./components/Alert";
import Design from "./components/Design";
import Styles from "./components/styles";

function App() {
  return (
    <>
      {/* <Alert>I am your Children</Alert> */}
      {/* <Design>I am here for Design</Design>
      <Design type="error">Something went wrong in Design</Design> */}
      <Styles>I am here for importing styles Object</Styles>
      <Styles type="error">
        Something went wrong in importing styles Object
      </Styles>
    </>
  );
}

export default App;
