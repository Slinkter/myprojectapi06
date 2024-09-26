import { Spinner, Typography } from "@material-tailwind/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const App = () => {
    window.document.title = "my-projectapi-06";
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const getDataImg = useCallback(async () => {
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
    }, []);

    // Memoriza el último índice basado en la longitud de `data`
    const lastElement = useMemo(() => data.length - 1, [data.length]);

    // Funciones de navegación optimizadas con useCallback
    const prevImg = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? lastElement : prev - 1));
    }, [lastElement]);

    const nextImg = useCallback(() => {
        setCurrentIndex((prev) => (prev === lastElement ? 0 : prev + 1));
    }, [lastElement]);

    useEffect(() => {
        getDataImg();
    }, [getDataImg]);

    if (loading) {
        return (
            <div className="container-custom">
                Loading data...
                <Spinner className="h-24 w-24" />
            </div>
        );
    }
    if (error) {
        return <div className="container-custom">error ... {error} </div>;
    }

    console.log(data);
    return (
        <>
            {!loading && (
                <div className="container-custom ">
                    <Typography variant="h2" className="my-6">
                        Picsum API + React + Tailwind CSS
                    </Typography>

                    <div className="container-div">
                        <BsArrowLeftCircleFill
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
                        <span className="circle-indicators-container ">
                            {data &&
                                data.length > 0 &&
                                data.map((item, idx) => {
                                    return (
                                        <button
                                            key={idx}
                                            className={
                                                currentIndex === idx
                                                    ? "current-indicator"
                                                    : "current-indicator inactive-indicator"
                                            }
                                            onClick={() => setCurrentIndex(idx)}
                                        ></button>
                                    );
                                })}
                        </span>
                        <BsArrowRightCircleFill
                            className="arrow-custom arrow-right"
                            onClick={() => nextImg()}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default App;
