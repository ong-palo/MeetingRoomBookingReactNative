import {FlatList, Text, View} from "react-native";
import BookingDetail from "./BookingDetail";
import {useContext, useState} from "react";

function BookingDetailList({data}) {
    function render(item) {
        const {
            id,
            bookingNo,
            roomNo,
            maxGuest,
            startAt,
            endAt,
            status
        } = item
        const detailProps = {
            bookingNo,
            roomNo,
            maxGuest,
            startAt,
            endAt,
            status
        }
        return (
            <BookingDetail
                key={id}
                {...detailProps}
            />
        )
    }
    return (
        // <FlatList data={data} renderItem={render} keyExtractor={(item) => item.id} />
        <View>
            {data.length > 0 ? data.map((item) => {
                    return render(item)
                })
                :
                <Text>You currently have no bookings</Text>
            }
        </View>
    )
}

export default BookingDetailList