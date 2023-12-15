import React from "react";
import { View, Text, FlatList } from "react-native"
import { styles } from "./styles";
import Header from "../../../component/header";
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../../constant/sizeHelper";
import WatchMovieListItem from "../../../component/watchMovieListItem";
import { useSelector } from "react-redux";
import SearchItem from "../../../component/searchItem";
import RegularText from "../../../typography/ regular-text";
import TicketItemView from "../../../component/TicketItemView";
import { useNavigation } from "@react-navigation/native";
import { NavigationPath } from "../../../constant/navigationRoute";

const Design = (props) => {

    const { upcomingMovieList } = useSelector((state) => state.watch);

    const renderItem = ({ item }) => {

        return (
            <View style={{ margin: 10 }}>
                {props.searchText.length > 0 ?
                    <SearchItem
                        item={item}
                        onPress={props.onPressItem}
                    />
                    :

                    <WatchMovieListItem
                        item={item}
                        onPress={props.onPressItem}
                    />
                }
            </View>
        )

    }
    return (
        <View style={styles.container}>
            <Header
                onChangeText={props.searchTextFun}
                value={props.searchText}
                onCloseSearh={props.onCloseSearh}
                count={props.searchList.length}
            />
            {props.searchText.length > 0 &&
                <>
                    <RegularText label={'Top Search'} ml={WIDTH_BASE_RATIO(20)} mt={HEIGHT_BASE_RATIO(10)} />
                    <View style={styles.divider} />

                </>

            }
            <FlatList
                style={{ flex: 1 }}

                //rnumColumns={1}
                data={props.searchText.length > 0 ? props.searchList : upcomingMovieList}
                contentContainerStyle={styles.contentContainerStyle}
                ListEmptyComponent={() => {
                    return (
                        <Text style={{ alignSelf: "center" }}>{"NO_DATA_FOUND"}</Text>
                    )
                }}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item, index) => "SC" + item.id}
            //key={(item, index) => "SC" + item.id}
            />
        </View>
    )
}
export default Design