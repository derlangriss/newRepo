const store = {
    state: {
        loginToken: null,
        shoppingCart: [],
        orderQty: null
    },
    setLoginToken(loginToken) {
        this.state.loginToken = loginToken
    },
    setOrderList(food) {
        this.state.shoppingCart.push(food)
        this.state.orderQty = this.state.shoppingCart.length

    }
}

export default store