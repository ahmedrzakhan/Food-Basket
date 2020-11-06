import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

function Dummy(props) {
    const [data, setData] = useState([]);

    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const config = {
            method: "get",
            url:
                `http://localhost:5000/api/categories/product?_id=${params.id}`,
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const result = await axios(config);
            setData(result.data);
        } catch (err) {
            console.log("err", err);
        }
    };

    console.log(data)
    return (
        <>
            <div>Nmw</div>
            <div>{data.product["description"]}</div>
            <div>{data.product["title"]}</div>
            <img src={data.product["url"]} alt={data.product["title"]} />







        </>
    )
}
export default Dummy







