import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faChartSimple,
  faUserGear,
} from "@fortawesome/pro-solid-svg-icons";
import {
  faChartScatter as farChartScatter,
  faEnvelope as farEnvelope,
  faLock as farLock,
  faHouse as farHouse,
  faChartSimple as farChartSimple,
} from "@fortawesome/pro-regular-svg-icons";

import {
  faUserGear as falUserGear,
} from "@fortawesome/pro-light-svg-icons";

export default function useLoadFontAwesome() {
  library.add(
    farEnvelope,
    farLock,
    faHouse,
    farHouse,
    faChartSimple,
    farChartSimple,
    faUserGear,
    falUserGear,
    farChartScatter
  );
}
