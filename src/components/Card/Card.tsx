import { TypeData } from '../../mobX/MarketApi'
import Styles from './Card.module.css'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import MarketApi from '../../mobX/MarketApi'
import {observer} from 'mobx-react-lite'

interface Iprops {
    data: TypeData
}

const Card: React.FC<Iprops> = observer(({ data }) => {
    const stars = new Array(Math.round(data.rating.rate)).fill('0')

    const cart = (e:React.MouseEvent<HTMLInputElement>, id: number) => {
        e.preventDefault()
        e.stopPropagation()
        MarketApi.addToCart(id)
    }

    return (
        <div className={Styles.card}>
            <span className={Styles.heart}><AiOutlineHeart/></span>
            <div className={Styles.imgBox}>
                <img className={Styles.img} src={data.image} />
            </div>
            <div className={Styles.title}>{data.title}</div>
            <p className={Styles.stars}>{stars.map((_, index) => <span key={index}><AiFillStar/></span>)}</p>
            <p className={Styles.price}>{data.price + '$'}</p>
            <input onClick={(e) => cart(e, data.id)} type="button" value={'Add to cart'} />
        </div>
    )
})

export default Card