import Styles from './Mycart.module.css'
import {observer} from 'mobx-react-lite'
import MarketApi from '../../mobX/MarketApi'

const Mycart: React.FC = observer(() => {
  return (
    <div className={Styles.mycart}>
      <p>Mycart</p>
      <ul>
        {MarketApi.dataCart.map(i => <li key={i.id}>{i.title}</li>)}
      </ul>
      </div>
  )
})

export default Mycart