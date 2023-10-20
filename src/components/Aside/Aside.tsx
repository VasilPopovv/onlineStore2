import Styles from './Aside.module.css'
import MarketApi from '../../mobX/MarketApi'
import {observer} from 'mobx-react-lite'

const Aside: React.FC = observer(() => {

  return (
    <aside className={Styles.aside}>
        <div className={Styles.cardBlock}>
            <span>Payment card</span>
            <div className={Styles.card}>
                <p>Universal card</p>
                <div>0000 0000 0000 0000</div>
                <time>12/24</time>
            </div>
        </div>
        <div className={Styles.cartBlock}>
            <p>Your cart</p>
            <ul>
              {MarketApi.dataCart.map(i => <li key={i.id}>{i.title}</li>)}
            </ul>
        </div>
    </aside>
  )
})

export default Aside