import { Suspense } from "react";
import MessagesOptimistic from "./components/messages-optimistic";
import { ThemeContextProvider } from "./contexts/theme";
import ThemeToggler from "./components/theme-toggler";

const App = () => {
  return (
    <ThemeContextProvider>
      <div>
        <ThemeToggler />
        <Suspense>
          {/* <Tasks /> */}
          {/* <Messages /> */}
          <MessagesOptimistic />
        </Suspense>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
