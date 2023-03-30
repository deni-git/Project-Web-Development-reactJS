import { useState } from "react";
import Card from "../../components/Card";
import style from './style.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Content() {
    const [active, setActive] = useState();

    function handleSetActive(activeParams) {
        setActive(activeParams);
    }

    const dataObj = [
        {
            bootcamp : "Intensive Bootcamp", 
            title   : "Programming React",
            subtitle : "(Getting Started with Laravel 9)",
            batch : "September 2022",
            mentor : "William Hartono, Farel Prayoga",
            harga : "2060.000"
        },
        {
            bootcamp : "Intensive Bootcamp",
            title  : "Programming Laravel & React Native Programming Laravel & React Native",
            subtitle : "(Getting Started with Laravel 9)",
            batch : "Desember 2022",
            mentor : "William Hartono, Farel Prayoga",
            harga : "2060.000"
        },
        {
            bootcamp : "Intensive Bootcamp",
            title  : "Programming Golang",
            subtitle : "(Getting Started with Laravel 9)",
            batch : "Januari 2023",
            mentor : "William Hartono, Farel Prayoga",
            harga : "2060.000"
        },
        {
            bootcamp : "Intensive Bootcamp",
            title  : "Programming PHP",
            subtitle : "(Getting Started with Laravel 9)",
            batch : "Februari 2023",
            mentor : "William Hartono, Farel Prayoga",
            harga : "2060.000"
        },
        {
            bootcamp : "Intensive Bootcamp",
            title  : "Programming Javascript",
            subtitle : "(Getting Started with Laravel 9)",
            batch : "Maret 2023",
            mentor : "William Hartono, Farel Prayoga",
            harga : "2060.000"
        },
        {
            bootcamp : "Intensive Bootcamp",
            title  : "Programming Dart",
            subtitle : "(Getting Started with Laravel 9)",
            batch : "April 2023",
            mentor : "William Hartono, Farel Prayoga",
            harga : "2060.000"
        },
    ]

    return(
        <>
        <div className={style['container-card-1']}>
            {
                dataObj.map((item, key) => {
                    return <Card 
                    bootcamp={item.bootcamp} 
                    title={item.title}
                    subtitle={item.subtitle}
                    isSoldOut={item.isSoldOut} 
                    key={key} 
                    onClick={handleSetActive} 
                    index={key} 
                    active={active}
                    batch={item.batch}
                    mentor={item.mentor}
                    harga={item.harga}
                    />
                    }
                )
            }
        </div>
        <div className={style['container-card-2']}>
            {
                dataObj.map((item, key) => {
                    return <Card 
                    bootcamp={item.bootcamp} 
                    title={item.title}
                    subtitle={item.subtitle}
                    isSoldOut={item.isSoldOut} 
                    key={key} 
                    onClick={handleSetActive} 
                    index={key} 
                    active={active}
                    batch={item.batch}
                    mentor={item.mentor}
                    harga={item.harga}
                    />
                    }
                )
            }
        </div>
        <div className={style['container-card-3']}>
            {
                dataObj.map((item, key) => {
                    return <Card 
                    bootcamp={item.bootcamp} 
                    title={item.title}
                    subtitle={item.subtitle}
                    isSoldOut={item.isSoldOut} 
                    key={key} 
                    onClick={handleSetActive} 
                    index={key} 
                    active={active}
                    batch={item.batch}
                    mentor={item.mentor}
                    harga={item.harga}
                    />
                    }
                )
            }
        </div>
        <div className={style['pagination']}>
            <a href="#"><FontAwesomeIcon icon={faChevronLeft} style={{marginLeft:7}}/></a>
            <a href="#">Sebelumnya</a>
            <span>
                <a href="#" active className={style['active']}>1</a>
            </span>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">...</a>
            <a href="#">10</a>
            <a href="#">Selanjutnya</a>
            <a href="#"><FontAwesomeIcon icon={faChevronRight} style={{marginLeft:7}}/></a>
        </div>
        </>
    );
}

export default Content;