import moment from "moment-timezone";

export const getMoment = (date, tz) => {
    let m = moment(date);

    if (tz) {
        m.tz(tz);
    }

    return m;
};

export const updateLocale = (name, config) => {
    moment.updateLocale(name, config);
};
