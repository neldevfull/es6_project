class DateHelper {
    constructor() {
        throw new Error('DateHelper cannot be instantiated!');
    }

    static convertForDate(strDate) {
        if(!(/\d{4}-\d{2}-\d{2}/.test(strDate)))
            throw new Error('Invalid format for date');

        return new Date(...strDate.split('-').map((item, index) => item - index % 2 ));
    }

    static convertForString(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}