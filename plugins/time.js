import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export default ({ app }, inject) => {
  inject("time", dayjs);
};
