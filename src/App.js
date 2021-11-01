import { Provider } from "react-redux";
import { store } from "./store/store";

import { SecretFriendApp } from "./components/SecretFriendApp";

function App() {
  return (
    <Provider store={store}>
      <SecretFriendApp />
    </Provider>
  );
}

export default App;
