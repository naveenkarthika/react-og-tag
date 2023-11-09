import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';





function ProductList() {
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    let limit = 10;

    const handleProduct = async () => {
        try {
            const productUrl = `https://z2z7negv2b.execute-api.us-west-2.amazonaws.com/staging/rest/public-posts?&offset=${offset}&limit=${limit}&filter=most_recent&product_filter=new_products`
            let result = await axios.get(productUrl).then(res => {
                console.log('res', res);

                setData((preState) => [...preState, ...res.data?.response])
                if (res?.data?.hasMore) {
                    setOffset(preState => preState + 1);
                }

            }).catch(err => console.log('err', err))
        } catch (err) {
            console.log('err', err)
        }
    }

    useEffect(() => {
        handleProduct();
    }, [offset]);

    if (!data) {
        return 'Loading...'
    }

    return <div>

        <h2>ProductList</h2>
        <ul>
            {data && data?.map((e, i) => {
                return <div key={i}>
                    <li>{e.product_title}</li>
                    <Link to={`/product/${e.id}`}>Product Link</Link>
                </div>

            })}
        </ul>

    </div>;
}

export default ProductList;
