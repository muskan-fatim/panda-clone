import Navbar from "./components/nav";
import Main from "./components/main";
import BusinessLunch from "./components/bussnies";
import RestaurantGrid from "./components/resturant";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div className="bg-gray-100 h-screen w-screen">

<Navbar />
<Main />
<RestaurantGrid />
<BusinessLunch />
<Footer/>

    </div>
  );
}

