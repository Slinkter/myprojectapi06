import { Button, Typography } from "@material-tailwind/react";
import { Input } from "postcss";
import React, { useEffect, useState } from "react";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const getDataImg = async () => {
        try {
            setLoading(true);
            const url = "https://picsum.photos/v2/list?page=1&limit=10";
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    const prevImg = () => {
        const lastElemnt = data.length - 1;

        setCurrentIndex(currentIndex === 0 ? lastElemnt : currentIndex - 1);
    };
    const nextImg = () => {
        const lastElemnt = data.length - 1;
        setCurrentIndex(currentIndex === lastElemnt ? 0 : currentIndex + 1);
    };

    useEffect(() => {
        getDataImg();
    }, []);

    console.log(data);

    return (
        <>
            <div className="container-custom ">
                <div>
                    <FaArrowCircleLeft
                        className="arrow-custom arrow-left"
                        onClick={() => prevImg()}
                    />

                    {data &&
                        data.length > 0 &&
                        data.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <img
                                        src={item.download_url}
                                        alt={item.author}
                                        className={
                                            currentIndex == idx
                                                ? "img-custom"
                                                : "hidden"
                                        }
                                    />
                                </div>
                            );
                        })}

                    <FaArrowCircleRight
                        className="arrow-custom arrow-right"
                        onClick={() => nextImg()}
                    />
                </div>
            </div>
        </>
    );
};

export default App;
