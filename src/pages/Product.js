import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import MetaDecorator from '../MetaDecorator';

function Product() {
    const params = useParams();
    const [data, setData] = useState(false);

    const handleProduct = async () => {
        try {
            const productUrl = `https://z2z7negv2b.execute-api.us-west-2.amazonaws.com/staging/rest/public-posts/${params?.id}`
            let result = await axios.get(productUrl).then(res => {
                console.log('res', res.data);

                setData(res.data)
            }).catch(err => console.log('err', err))
        } catch (err) {
            console.log('err', err)
        }
    }

    let productImage = data && data?.product_gallery && data?.product_gallery?.split(',');
    productImage = productImage && productImage[0]

    useEffect(() => {
        if (params?.id) {
            handleProduct();
        }
    }, [params]);

    if (!data) {
        return 'Loading...'
    }


    return <div>
        <MetaDecorator title={data?.product_title} description={data?.detailed_description?.substr(0, 300)} imageUrl={productImage} id={data?.post_id} />
        <h2>Product</h2>
        <div>Product title - {data?.product_title}</div>
        <div>Product description - {data?.detailed_description}</div>
        <div><img src={productImage} style={{ width: '150px', height: '150px' }} /></div>
    </div>;
}

export default Product;
