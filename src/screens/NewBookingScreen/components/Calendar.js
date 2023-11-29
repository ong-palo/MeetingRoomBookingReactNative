import {Calendar} from 'react-native-calendars';

function Calendar({currentDate, onDayPress}) {
    return (
        <Calendar
            onDayPress={onDayPress}
            current={currentDate}
        />
    )
}