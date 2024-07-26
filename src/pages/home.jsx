import { useEffect, useState } from "react";
import { Circles, DNA } from "react-loader-spinner";
import ProductTile from "../components/product-title";
import { Spinner } from "@material-tailwind/react";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchListOfProducts() {
        setLoading(true);
        const url_api = "https://fakestoreapi.com/products";
        //
        const res = await fetch(url_api);
        const data = await res.json();
        console.log(data);
        if (data) {
            setProducts(data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }

    useEffect(() => {
        fetchListOfProducts();
    }, []);

    return (
        <div>
            {loading ? (
                <div className="min-h-screen w-full flex justify-center items-center">
                    {/*   <DNA
                        visible={true}
                        height={"120"}
                        width={"120"}
                        ariaLabel="dna-loading"
                        color="rgb(127,29,29)"
                    /> */}

                    <Spinner className="h-12 w-12" color="red" />
                </div>
            ) : (
                <div className=" flex  flex-wrap justify-center items-center gap-6  max-w-6xl mx-auto ">
                    {products && products.length
                        ? products.map((item) => (
                              <ProductTile key={item.id} product={item} />
                          ))
                        : null}
                </div>
            )}

            <div className=" max-w-6xl mx-auto">
                <pre>{JSON.stringify(products, null, 2)}</pre>
            </div>
        </div>
    );
};

export default Home;
