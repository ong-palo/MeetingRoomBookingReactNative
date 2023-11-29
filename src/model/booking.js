class Booking {
    constructor(
        id,
        roomNo,
        status,
        bookingNo,
        maxGuest,
        startAt,
        endAt,
    ) {
        this.id = id;
        this.roomNo = roomNo;
        this.status = status;
        this.bookingNo = bookingNo;
        this.maxGuest = maxGuest;
        this.startAt = startAt;
        this.endAt = endAt;
    }

    toJSON() {
        return {
            id: this.id,
            roomNo: this.roomNo,
            status: this.status,
            bookingNo: this.bookingNo,
            maxGuest: this.maxGuest,
            startAt: this.startAt,
            endAt: this.endAt,
        }
    }
}

export default Booking;