import SimpleBottomNavigation from "../components/bottomNavigation";
import Header from "../components/homeComponents/header";
import HeaderSlider from "../components/homeComponents/headerSlider";
import ProductsList from "../components/homeComponents/productsList";
import { useEffect, useState } from "react";
import UserContext from "../context/productsContext";
import axios from "axios";

function Home() {

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        
        const getProducts = async () => {
            let products = await axios.get('https://reqres.in/api/users?page=2');
            setProductsList(products.data.data);
        };

        getProducts();

    }, []);

    return ( 
        <>
            <div className="container px-2 pt-2 wx-576">

                <Header />
                
                <HeaderSlider />

                <UserContext.Provider value={productsList}>
                    <ProductsList />
                </UserContext.Provider>

                <SimpleBottomNavigation />
            </div>
        </>
    );
}

export default Home;