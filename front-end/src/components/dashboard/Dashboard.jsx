import React, { useEffect } from "react";
import axios from 'axios'
import styles from "./dashboard.module.css";
import Box from "@material-ui/core/Box";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";




class Dashboard extends React.Component {


    componentDidMount = () => {
        this.handlereq()
    }
    handlereq = () => {
        var data = { category: "Fruits-and-Vegetables" }
        var config = {
            method: 'get',
            url: `http://localhost:5000/api/categories/category?category=Fruits-and-Vegetables`,


        };
        axios.get("http://localhost:5000/api/categories/category?category=Fruits-and-Vegetables")
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data))
    }
    render() {
        return (
            <><div>hello</div>

            </>
        );
    }
}
export default Dashboard;
