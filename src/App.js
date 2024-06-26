import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Header, MainContainer, CreateContainer } from "./components";
import { Route, Routes } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { listItem } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  const fetchData = async () => {
    await listItem().then(data => {
      dispatch(
        {
          type: actionType.SET_FOOD_ITEMS,
          foodItems: data
        }
      )
    });
  }

  const isLoggedIn = () =>{
    return user!== null && user !== undefined && user.token !== undefined
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <AnimatePresence mode="wait">
      {isLoggedIn() ? 
        <div className="w-screen h-auto flex flex-col bg-primary">

          <Header />
          <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
            <Routes>
              <Route path="/" element={<MainContainer />} />
              <Route path="/createItem" element={<CreateContainer />} />
            </Routes>

          </main>
        </div> : <>
        Login
        </>
      }
    </AnimatePresence>
  )
}

export default App;