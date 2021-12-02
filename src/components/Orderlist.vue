<template>
  <div class="orderlist">
    <h1>ราคารวม {{ total }} THB</h1>
    <button @click="orderOk">ตกลงสั่งซื้อ</button>
    <div class="panel-body" v-for="order in foodOrder" :key="order.orderId">
      <main class="leaderboard__profiles">
        <h1>{{ order.name }}</h1>
        <article>
          <img
            :src="`https://camt-foodapi.pair-co.com${order.photo}`"
            alt="Mark Zuckerberg"
            class="leaderboard__picture"
          />
          <span class="leaderboard__name">{{ order.name }}</span>
          <span class="leaderboard__value"
            >{{ order.price }}<span>B</span></span
          >
        </article>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      foodOrder: {},
      total: 0,
    };
  },
  methods: {
    orderOk: function () {
      const GetFoodIds = this.$root.state.shoppingCart;
      const foodIds = GetFoodIds.map((a) => a._id);
      const OrderUrl = "https://camt-foodapi.pair-co.com/orders";
      fetch(OrderUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.$root.state.loginToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({foodIds:foodIds}),
      })
        .then((response) => {
          console.log(response.status);
          if (response.status >= 200 && response.status < 300) {
            alert("สำเร็จ");
           this.$root.state.shoppingCart = []
           this.$root.state.orderQty = 0
           this.$router.push('./foodlist')

          } else {
            alert("ต้อง login ก่อน");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.foodOrder = this.$root.state.shoppingCart;
    this.total = this.foodOrder.reduce((sum, food) => {
      sum += food.price;
      return sum;
    }, 0);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
