import Styles from './ProductPage.module.css'
import { useParams, useNavigate } from 'react-router-dom'
import MarketApi from '../../mobX/MarketApi'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

const ProductPage = observer(() => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = MarketApi.product

  useEffect(() => {
    MarketApi.getProduct(Number(id))
  }, [])

  return (
    <div className={Styles.productPage}>
      <h1>ProductPage</h1>
      <p onClick={() => navigate(-1)}>{'<< Back <<'}</p>
      <img className={Styles.img} src={product.image}></img>
      <h2>{product.title}</h2>
      <h3>{product.description}</h3>
      <h2>{product.price + '$'}</h2>
    </div>
  )
})

export default ProductPage