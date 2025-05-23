import "./App.css";
import { ThemeProvider } from "./contexts/theme";

function App() {
  return (
    // <>
    //   <h1 className="p-4 bg-pink-600 text-3xl">Akshat</h1>
    // </>
    <ThemeProvider>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/*Theme*/}
          </div>

          <div className="w-full max-w-sm mx-auto">{/*content*/}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
