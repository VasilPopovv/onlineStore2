import Styles from './Main.module.css'
import { RiSearchLine } from 'react-icons/ri'
import { BiSolidDownArrow } from 'react-icons/bi'
import { PiUserCircleFill } from 'react-icons/pi'
import { observer } from 'mobx-react-lite'
import CardMap from '../CardMap/CardMap'

const Main = observer(() => {

    return (
        <div className={Styles.main}>
            <div className={Styles.headerBlock}>
                <div className={Styles.userBlock}>
                    <div className={Styles.userAvatar}><PiUserCircleFill /></div>
                    <div className={Styles.userName}>User Name</div>
                    <span><BiSolidDownArrow /></span>
                </div>
                <div className={Styles.searchBlock}>
                    <label htmlFor="inp">
                        <input id='inp' type="text" />
                        <span><RiSearchLine /></span>
                    </label>
                </div>
            </div>
            <div className={Styles.addBlock}></div>
            <div className={Styles.products}>
                <CardMap />
            </div>
        </div>
    )
})

export default Main