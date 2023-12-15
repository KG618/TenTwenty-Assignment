import React, { useEffect, useState } from "react";
import Design from "./design";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetials, getUpcomingMovie } from "../../../redux";
import { useNavigation } from "@react-navigation/native";
import { NavigationPath } from "../../../constant/navigationRoute";

const Watch = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const [searchList, setSearchList] = useState([])
    const { upcomingMovieList } = useSelector((state) => state.watch);
    const navigation = useNavigation()

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
    const onPressItem = (item) => {
        dispatch(getMovieDetials(item.id))
        navigation.navigate(NavigationPath.MOVIEDETAILES)

    }
    return (
        <Design
            searchTextFun={searchTextFun}
            searchText={searchText}
            searchList={searchList}
            onCloseSearh={onCloseSearh}
            onPressItem={onPressItem}
        />
    )

}
export default Watch