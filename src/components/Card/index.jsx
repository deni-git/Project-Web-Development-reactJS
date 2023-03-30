import style from './style.module.css';
import ImgPeople from '../../assets/img/people.png';

const Card = ({bootcamp, title, subtitle, batch, mentor, harga, isSoldOut, onClick, active, index}) => {
    return (
        <>
        {/* <div className={style['containerCard']} style={{backgroundColor: active === index ? 'green' : 'white'}}>
            <h1 style={{color: active === index ? 'white' : 'black'}}>{name}</h1>
            <p style={{ color: isSoldOut || active === index ? "red": "black"}}>{price}</p>
            <Button onClick={() => onClick(index)}>Set Active</Button>
        </div> */}

    <div className={style['container']}>
        <div className={style['card']}>

                <div className={style['item-1']}>
                    <img src={ImgPeople} alt="people" />
                    <div>
                       <span className={style['bootcamp']}>{bootcamp}</span>
                       <br />
                       <span className={style['title']}>{title}</span>
                       <br />
                       <span className={style['subtitle']}>{subtitle}</span>
                    </div>
                </div>
                
                <div className={style['item-2']}>
                    <span className={style['title']}>{title}</span>
                    <br />
                    <span className={style['subtitle']}>{subtitle}</span>
                    <br />
                    <span className={style['batch']}><span style={{color: '#999999', marginRight: '10px'}}>Batch</span> {batch}</span>
                    <br />
                    <span className={style['mentor']}><span style={{color: '#999999', marginRight: '4px'}}>Mentor</span> {mentor}</span>
                    <br />
                    <div style={{textAlign: 'right', marginTop: '15px'}}>
                    <span className={style['harga']}>{harga}</span>
                    <span style={{color: '#0ACF83', fontWeight: 'bold'}}>Rp 560.000</span>
                    </div>
                </div>
            </div>
    </div>
        </>
    );
}

export default Card;