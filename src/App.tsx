import './App.css'
import { observer } from "mobx-react-lite";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import { useEffect } from 'react';
import System from './mobX/system'

const App = observer(() => {
  useEffect(() => {
    System.changeThem()
  }, [])
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
});

export default App;
