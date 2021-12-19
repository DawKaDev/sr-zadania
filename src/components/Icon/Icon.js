import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function Icon({icon}) {
  return (
    <FontAwesomeIcon icon={icon}/>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired
}