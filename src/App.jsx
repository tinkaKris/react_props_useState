import ButtonStateful from "./components/ButtonStateful";
import RandomClass from "./components/RandomClass";
import InputStateless from "./components/InputStateless";

const App = () => {
  return (
    <div>
      <h2>Лічильник:</h2>
      <InputStateless type="text" text="Номер лічильника" />
      <div className="App">
        <ButtonStateful />
        <RandomClass />
      </div>
    </div>
  );
};
export default App;
