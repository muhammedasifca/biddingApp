import { Routes, Route } from "react-router-dom";
import ProfileSelect from "./Components/ProfileSelect";
import MainHome from "./Components/MainHome";
import Details from "./Components/Details";
import Not from "./Components/Notification";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<ProfileSelect></ProfileSelect>}></Route>
        <Route path="/home" element={<MainHome></MainHome>}></Route>
        <Route path="/home/details" element={<Details></Details>}></Route>
        <Route path="notification" element={<Not></Not>}></Route>
      </Routes>
    </UserContextProvider>
  );
}
export default App;
