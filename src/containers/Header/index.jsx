import HeaderNavbar from "../../components/Navbar";
import style from "./style.module.css";
import ImgBanner from "../../assets/img/img-banner.png";

function Header() {
    return(
        <>
        <div className={style['container-header']}>
            <HeaderNavbar />

            <div className={style['header-banner']}>
                <div className={style['item1']}>
                    <div className={style['title']}>
                        <span>Jadi expert bersama <br />edspert.id</span>
                    </div>
                    <div className={style['subtitle']}>
                    <span>Tingkatkan skill dan pengetahuan bersama para mentor <br />terbaik di bidangnya, untuk siapkan karir impian anda.</span>
                    </div>
                </div>
                
                <div className={style['item2']}>
                    <img src={ImgBanner} alt="img-banner"/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;