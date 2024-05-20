import styles from "./DetailsNav.module.css";
import servicesData from "../../data/servicesData";
import { NavLink } from "react-router-dom";

function DetailsNav() {
  return (
    <div className={styles.navLinksContainer}>
      <nav className={styles.navLinks}>
        <ul>
          {servicesData.map(service => (
            <li key={service.id}>
              <NavLink className={styles.navLink} to={`/Details/${service.id}`}>
                {service.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default DetailsNav;
