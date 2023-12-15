import React, { useEffect, useState } from "react";
import Design from "./design";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingMovie } from "../../../redux";

const Watch = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const [searchList, setSearchList] = useState([])
    const { upcomingMovieList } = useSelector((state) => state.watch);

    useEffect(() => {
        dispatch(getUpcomingMovie())
    }, [])

    const searchTextFun = (text) => {
        console.log(text)
        setSearchText(text)
        searchArray(text)

    }
    const searchArray = (text) => {
        let searchList = upcomingMovieList.filter(
            (item) =>
                item.title.toLowerCase().includes(text.toLowerCase()) ||
                item.original_title.toLowerCase().includes(text.toLowerCase())
        );
        setSearchList(searchList)
    };
    onCloseSearh = () => {
        setSearchText('')
        setSearchList([])
    }
    return (
        <Design
            searchTextFun={searchTextFun}
            searchText={searchText}
            searchList={searchList}
            onCloseSearh={onCloseSearh}
        />
    )

}
export default Watch