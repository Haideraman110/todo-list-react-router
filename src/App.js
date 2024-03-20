import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./routes/Rootlayout";
import TodoPage from "./pages/TodoPage";
import Home from "./pages/Home";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'todo',
          element: <TodoPage />
        }
      ]
    }
  ])




  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
