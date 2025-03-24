import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faChartSimple,
  faUserGear,
} from "@fortawesome/pro-solid-svg-icons";
import {
  faHouse as farHouse,
  faChartSimple as farChartSimple,
  faUserGear as farUserGear,
} from "@fortawesome/pro-regular-svg-icons";

export default function useLoadFontAwesome() {
  library.add(
    faHouse,
    farHouse,
    faChartSimple,
    farChartSimple,
    faUserGear,
    farUserGear
  );
}
