<template>
  <div>
    <section class="hilight-container">
      <ul class="highlight-food-list">
        <li
          v-for="highlight in foodHighlight"
          :key="highlight.id"
          class="flex-container"
        >
          <div id="product-container">
            <div class="product-details">
              <h1>{{ highlight.name }}</h1>

              <p class="information">Recommend</p>
             
              <div class="control">
                <a class="cursorlink" @click="order(highlight)">
                  <img src="../assets/plus.png" alt="people" />
                </a>

                <div class="container__profile__text">
                  <p>
                    <span class="normal-price">{{ highlight.price }} THB</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="product-image">
              <img
                :src="`https://camt-foodapi.pair-co.com${highlight.photo}`"
                alt
                class="icon"
              />

              <div class="info">
                <h2>Description</h2>
                <ul>
                  <li><strong>ลดราคาพิเศษ : </strong>10%</li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="food-list">
      <ul>
        <li v-for="food in foodList" :key="food.id">
          <div class="card-container">
            <div class="container_name">
              <h2>{{ food.name }}</h2>
            </div>
            <div class="container__main">
              <img
                :src="`https://camt-foodapi.pair-co.com${food.photo}`"
                alt
                class="icon"
              />
            </div>

            <div class="container__profile">
              <a class="cursorlink" @click="order(food)">
                <img src="../assets/plus.png" alt="people" />
              </a>

              <div class="container__profile__text">
                <p>
                  <span class="normal-price">{{ food.price }} THB</span>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      foodList: [],
      foodHighlight: [],
    };
  },
  methods: {
    order(id) {
      store.setOrderList(id)
      
    },
  },
  mounted() {
    fetch("https://camt-foodapi.pair-co.com/foods/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const filterdata = data.filter((datause) => {
          return (
            datause._id !== "619a945836ccd278f2954355" ||
            datause._id !== "619a945836ccd278f2954351"
          );
        });
        const recommmendData = data.filter((datause) => {
          return (
            datause._id == "619a945836ccd278f2954355" ||
            datause._id == "619a945836ccd278f2954351"
          );
        });
        this.foodHighlight = recommmendData;
        this.foodList = filterdata;
      })
      .catch((error) => {
        console.log(error);
      });
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
#product-container {
  box-shadow: 0 15px 30px 1px grey;
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 1em auto;
  height: 350px;
  width: 580px;
}

.hilight-container {
  padding: 15px;
}

.product-details {
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 30px;
  height: 100%;
  float: left;
  width: 43%;
}

.product-details p {
  text-align: left;
  font-size: 50px;
}

#product-container .product-details h1 {
  font-family: "Sriracha", helvetica, sans-serif;
  display: inline-block;
  position: relative;
  font-size: 30px;
  color: #729c3b;
  margin: 50;
}

#product-container .product-details h1:before {
  position: absolute;
  content: "";
  right: 0%;
  top: 0%;
  transform: translate(25px, -15px);
  font-family: "Sriracha", helvetica, sans-serif;
  display: inline-block;
  background: #ffe6e6;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px;
  color: white;
  margin: 0;
  animation: chan-sh 6s ease infinite;
}

.hint-star {
  display: inline-block;
  margin-left: 0.5em;
  color: gold;
  width: 50%;
}

#product-container .product-details > p {
  font-family: "EB Garamond", serif;
  text-align: left;
  font-size: 18px;
  color: #7d7d7d;
  font-size: 1.5rem;
}
.control {
   background-color: #729c3b;
  display: flex;
  align-items: center;
  padding: 20px;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  width:100%
}
.control img {
  width: 35px;
}
.btn {
  transform: translateY(0px);
  transition: 0.3s linear;
  background: #dedfe0;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  border: none;
  color: #eee;
  padding: 0;
  margin: 0;
}

.btn:hover {
  transform: translateY(-6px);
  background: #1a66ff;
}

.btn span {
  font-family: "Farsan", cursive;
  transition: transform 0.3s;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  margin: 0;
}
.btn .price,
.shopping-cart {
  background: #333;
  border: 0;
  margin: 0;
}

.btn .price {
  transform: translateX(-10%);
  padding-right: 15px;
}

.btn .shopping-cart {
  transform: translateX(-100%);
  position: absolute;
  background: #333;
  z-index: 1;
  left: 0;
  top: 0;
}

.btn .buy {
  z-index: 3;
  font-weight: bolder;
}

.btn:hover .price {
  transform: translateX(-110%);
}

.btn:hover .shopping-cart {
  transform: translateX(0%);
}

.product-image {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;
  right: 0;
  width: 46.65%;
  display: inline-block;
}

#container img {
  width: 100%;
  height: 100%;
}

.info {
  background: rgba(27, 26, 26, 0.9);
  font-family: "Bree Serif", serif;
  transition: all 0.3s ease-out;
  transform: translateX(-100%);
  position: absolute;
  line-height: 1.8;
  text-align: left;
  font-size: 105%;
  cursor: no-drop;
  color: #fff;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.info h2 {
  text-align: center;
}
.product-image:hover .info {
  transform: translateX(0);
}

.info ul li {
  transition: 0.3s ease;
}
.info ul li:hover {
  transform: translateX(50px) scale(1.3);
}

.product-image:hover img {
  transition: all 0.3s ease-out;
}
.product-image:hover img {
  transform: scale(1.2, 1.2);
}

.highlight-food-list {
  display: flex;
  flex-direction: row;
}
.flex-container {
  flex: 1;
}
.cursorlink{
  cursor:pointer;
}
</style>
