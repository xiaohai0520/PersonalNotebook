import { getAuth, signOut } from "firebase/auth";
import Header from "./Header";
import Menus from "./Menus";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

export const Home = () => {
  return (
    <div class="wrapper">
      <Header />
      <Menus />
      <Dashboard />
      <Footer />
      <button onClick={() => signOut(getAuth())}>Sign out</button>
    </div>
  );
};
