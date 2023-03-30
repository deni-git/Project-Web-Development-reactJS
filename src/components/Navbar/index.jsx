import style from './style.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function HeaderNavbar() {
  return (
    <>
    <div className={style['navbar-header']}>
        <span  className={style['logo']}>Edspert.id</span>
        <div className={style['navbar-menu']}>
                <ul>
                    <li>
                      Program
                      <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:7}}/>
                    </li>
                    <li>
                      Bidang Ilmu
                      <FontAwesomeIcon icon={faChevronUp} style={{marginLeft:7}}/>
                    </li>
                    <li>Tentang Edspert</li>
                </ul>
                <button>Masuk / Daftar</button>
        </div>
    </div>
    </>
  );
}

export default HeaderNavbar;