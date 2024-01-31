import {Routes, Route} from "react-router-dom";

import Layout from "../layout/layout";
import HomePage from "../../pages/homePage/homePage";
import ProfilePage from "../../pages/profilePage/profilePage";
import TicketsPage from "../../pages/ticketsPage/ticketsPage";

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Layout />}>
       <Route index element={<HomePage />} />
       <Route path="profile" element={<ProfilePage />} />
       <Route path="tickets" element={<TicketsPage />} />
       </Route>
     </Routes>
   </>
  );
}

export default App;
