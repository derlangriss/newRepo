<template>
  <div>
    <section>
      <ul class="highlight-food-list">
        <li v-for="highlight in foodHighlight" :key="highlight.id">
          <div class="blog-card">
            <div class="meta">
              <div class="photo">
                <img :src="highlight.foodImg" alt class="icon" />
              </div>
            </div>
            <div class="description">
              <h1>{{ highlight.foodName }}</h1>
              <h2>Recommend</h2>
              <p>
                {{ highlight.description }}
              </p>
              <p class="read-more">
                <a @click="order(food.id)">
                  <img src="../assets/plus.png" alt="order" />
                </a>
                <span class="hilight-price"
                  >{{ highlight.price }} {{ highlight.unit }}</span
                >
              </p>
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
              <h2>{{ food.foodName }}</h2>
            </div>
            <div class="container__main">
              <!-- <img
                v-bind:src="require(`${food.foodImg}`)"
                alt="people"
              /> -->
              <img :src="food.foodImg" alt class="icon" />
            </div>

            <div class="container__profile">
              <a @click="order(food.id)">
                <img src="../assets/plus.png" alt="people" />
              </a>

              <div class="container__profile__text">
               
                <p>
                  <span class="normal-price"
                    >{{ food.price }} {{ food.unit }}</span
                  >
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
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      foodList: [
        {
          id: 1,
          foodName: "แกงตูนปลา",
          price: 80,
          unit: "THB",
          description: "",
          foodImg: require("@/assets/foodImages/1.jpg"),
        },
        {
          id: 2,
          foodName: " น้ำพริกอ่องทูน่า",
          price: 85,
          unit: "THB",
          description: "",
          foodImg: require("@/assets/foodImages/2.jpg"),
        },
        {
          id: 3,
          foodName: " แกงอ่อมหมู",
          price: 85,
          unit: "THB",
          description: "",
          foodImg: require("@/assets/foodImages/3.jpg"),
        },
        {
          id: 4,
          foodName: " หมูหนาว",
          price: 60,
          unit: "THB",
          description: "",
          foodImg: require("@/assets/foodImages/4.jpg"),
        },
        {
          id: 5,
          foodName: "ไส้อั่ว",
          price: 80,
          unit: "THB",
          description: "",
          foodImg: require("@/assets/foodImages/5.jpg"),
        },
        {
          id: 6,
          foodName: "ผัดยอดฟักแม้ว",
          price: 65,
          unit: "THB",
          description: "",
          foodImg: require("@/assets/foodImages/6.jpg"),
        },
        {
          id: 7,
          foodName: "น้ำพริกหนุ่ม",
          price: 45,
          unit: "THB",
          description: "",
          foodImg: require("@/assets/foodImages/7.jpg"),
        },
        {
          id: 8,
          foodName: "น้ำพริกแมงดา",
          price: 45,
          unit: "THB",
          description: "",
          foodImg: require("@/assets/foodImages/8.jpg"),
        },
        {
          id: 9,
          foodName: "แกงหัวปลีกระดูกอ่อน",
          price: 60,
          unit: "THB",
          description: "",
          foodImg: require("@/assets/foodImages/9.jpg"),
        },
        {
          id: 10,
          foodName: " ยำสะนัด",
          price: 50,
          unit: "THB",
          description: "",
          foodImg: require("@/assets/foodImages/10.jpg"),
        },

        {
          id: 11,
          foodName: " น้ำพริกตาแดง",
          price: 30,
          unit: "THB",
          description: "",
          foodImg: require("@/assets/foodImages/11.jpg"),
        },

        {
          id: 14,
          foodName: "ข้าวผัดกะปิน้ำพริกหนุ่ม",
          price: 80,
          unit: "THB",
          description: "",
          foodImg: require("@/assets/foodImages/14.jpg"),
        },

        {
          id: 13,
          foodName: "ขาหมูต้มผักกาดดอง",
          price: 60,
          unit: "THB",
          description: "",
          foodImg: require("@/assets/foodImages/13.jpg"),
        },
      ],
      foodHighlight: [
        {
          id: 12,
          foodName: "ขนมจีนน้ำเงี้ยว",
          price: 30,
          unit: "THB",
          description:
            "อาหารจานเดียวประเภทหนึ่งของภาคเหนือ น้ำแกงมีมันลอยหน้าสีแดงข้นจากหมูสับ ซี่โครงหมูสับ และเลือดหมู ปรุงรสเค็มเล็กน้อย สิ่งที่ขาดไม่ได้คือ ดอกงิ้ว ซึ่งเป็นดอกนุ่มที่ตากแห้ง มีกลิ่นหอม เวลารับประทานตักน้ำเงี้ยวราดบนเส้นขนมจีน โรยด้วยต้นหอมซอย ผักชีซอย ",
          foodImg: require("@/assets/foodImages/12.jpg"),
        },
        {
          id: 15,
          foodName: "แกงฮังเล",
          price: 120,
          unit: "THB",
          description:
            " “แกงฮังเล” เมนูอาหารเหนือชื่อดังที่เชื่อกันว่าได้รับอิทธิพลมาจากประเทศเพื่อนบ้านอย่างเมียนมาร์ โดยคำว่า 'ฮี่น' ในภาษาพม่าแปลว่า 'แกง' ส่วน 'เล่' ก็แปลว่า 'เนื้อสัตว์' นั่นเองค่ะ น้ำแกงสุดเข้มข้นเข้าเนื้อหมูนุ่ม ๆ เคี้ยงเพลิน ๆ มาพร้อมกลิ่นเครื่องเทศสุดหอมหวล ",
          foodImg: require("@/assets/foodImages/150.jpg"),
        },
      ],
    };
  },
  methods: {
    order(id) {
      console.log(id);
    },
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
