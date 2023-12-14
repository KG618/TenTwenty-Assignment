import React, { useEffect } from "react";
import Design from "./design";
import { useDispatch } from "react-redux";
import { getUpcomingMovie } from "../../../redux";

const Watch = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUpcomingMovie())
    }, [])
    return (
        <Design />
    )

}
export default Watch