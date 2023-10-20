import MarketApi from '../../mobX/MarketApi'
import Card from '../Card/Card'
import Styles from './CardMap.module.css'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'


const CardMap = observer(() => {


    return (
        <div className={Styles.cardMap}>
            <h3>Our products</h3>
            <ul>
                {MarketApi.isLoading ? 'Loading...' : MarketApi.data.map(i => {
                    return <Link to={`/product/${i.id}`} className={Styles.li} key={i.id}><Card data={i} /></Link>
                })}
            </ul>
        </div>
    )
})

export default CardMap