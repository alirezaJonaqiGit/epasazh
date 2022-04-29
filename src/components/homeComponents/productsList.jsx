import ProductsListSlider from "./productListSlider";

function ProductsList() {
    return ( 
        <>
            <div className="productsList my-2">
                <div className="productsList_inner shadow shadow-sm">

                    <header className="productsList_header">
                        <h2 className="productsList_haderTitle">گوشی موبایل</h2>
                    </header>

                    <section className="productsList_sliderBody"> 
                        <ProductsListSlider />
                    </section>
                </div>
            </div> 
        </>
    );
}

export default ProductsList;