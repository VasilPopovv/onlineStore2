import { makeAutoObservable, runInAction } from 'mobx'

export type TypeData = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

class MarketApi {
    data: Array<TypeData> | [] = []
    dataCart: Array<TypeData> | [] = []
    dataFavorit: Array<TypeData> | [] = []
    product: TypeData | object = {}
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    getData() {
        try {
            this.isLoading = true
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => {
                    return runInAction(() => {
                        this.data = data
                        this.isLoading = false
                    })
                })
        } catch (error) {
            console.log(error)
        }
    }
    addToCart(id: number) {
        this.data.forEach(i => {
            if (id === i.id) {
                this.dataCart.push(i)
            }
        })
    }
    getProduct(id: number) {
        this.data.forEach(i => {
            if(id === i.id) {
                this.product = i
            }
        })
    }
}


export default new MarketApi()