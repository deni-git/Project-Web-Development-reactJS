import style from "./style.module.css";

function Footer() {
  return (
    <>
      <div className={style["footer"]}>
        <div className={style["myDIV"]}>
          <div className={style["item1"]}>
            <span className={style["tagline"]}>TAGLINE edspert disini</span>
            <br />
            <span  className={style["subtagline"]}>
              Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. <br />
              Ngaglik, Kabupaten Sleman, Daerah Istimewa <br />
              Yogyakarta 55581
            </span>
          </div>
          <div className={style["item2"]}>
                <span className={style["program"]}>Program</span>
                <br />
                <span  className={style["online-course"]}>Online Course</span>
                <br />
                <span  className={style["mini-bootcamp"]}>Mini bootcamp</span> 
                <br />
                <span  className={style["bootcamp"]}>Bootcamp</span>
          </div>
          <div className={style["item3"]}>
                <span className={style["bidang-ilmu"]}>Bidang ilmu</span>
                <br />
                <span  className={style["digital-marketing"]}>Digital marketing</span>
                <br />
                <span  className={style["product-management"]}>Product management</span> 
                <br />
                <span  className={style["english"]}>English</span>
                <br />
                <span  className={style["programming"]}>Programming</span>
          </div>
          <div className={style["item4"]}>
                <span className={style["tentang-edspert"]}>Tentang edspert</span>
                <br />
                <span  className={style["bantuan"]}>Bantuan</span>
                <br />
                <span  className={style["kontak-kami"]}>Kontak kami</span> 
                <br />
                <span  className={style["media-sosial"]}>Media sosial</span>
          </div>
          <div className={style["item5"]}>
                <span className={style["edspert"]}>Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
