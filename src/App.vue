<template>
  <div>
    <section class="banner-title webinar-banner">
      <div class="overlay"></div>
      <div class="container content">
        <div class="column-half left">
          <!-- <figure>
            <img src="./assets/lanna_logo.png" />
          </figure> -->
        </div>
        <div class="column-half">
          <div class="main-title center">
            <h2>
              <strong>FOOD DELIVERY </strong>
            </h2>
            <div class="caption-blog">
              <span class="caption1">Lanna</span>
              <br />
              <span class="caption2">Meals</span>
              <span class="caption3">CNX</span>
            </div>
            <hr class="linebreak" />
            <br />
            <div class="text-wrap">
              <div class="text">
                <strong>Order ผ่านระบบออนไลน์ </strong>
                <br />
                อิ่มอร่อยกับอาหารหลากหลายชนิด ให้ท่านได้เลือกสรร
                <br />
                ถ้าได้ชิมแล้วจะติดใจ จนพูดเป็นเสียงเดียวกันเลยว่า "ลำแต๊ ลำว่าาา"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <nav class="navbar">
      <section class="menu">
        <ul>
          <li><router-link to="/foodlist">รายการอาหาร</router-link></li>
          <li><router-link to="/login">สมาชิก</router-link></li>
          <li><div class="parentElement"><router-link to="/orderlist">รายการสั่งซื้อ</router-link><span class="childElement">{{$root.state.orderQty}}</span></div></li>
        </ul>
      </section>
    </nav>
    <main class="body">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      orderQty:0
    };
  },
  methods: {},

  mounted(){
    this.orderQty = this.$root.state.shoppingCart.length
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=BenchNine&family=Charmonman:wght@700&family=Faster+One&family=Hammersmith+One&family=Kodchasan:ital,wght@1,600&family=Open+Sans+Condensed:wght@300&family=Sriracha&display=swap");
html,
body,
h1,
h2 {
  margin: 0;
  padding: 0;
}

figure {
  margin: 0;
  padding: 0;
}

.body {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .body {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .body {
    width: 970px;
  }
}
@media (min-width: 1300px) {
  .body {
    width: 1270px;
  }
}

.banner-title {
  position: relative;
  width: 100%;
  background-size: cover;
  overflow: hidden;
}

.banner-title .container {
  display: flex;
  flex-direction: row;
}
.banner-title .container .column-half {
  flex: 1;
}

.banner-title.webinar-banner {
  background: url("./assets/lanna_banner.png");
  background-size: cover;
}

.banner-title .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
}

.banner-title .content {
  padding: 0;
  color: #ffffff;
}

.banner-title .content .main-title {
  text-align: right;
  margin-right: 25px;
  padding: 10px;
}

.banner-title .content .main-title h1 {
  margin: 0px auto;
  background: none;
  font-size: 60px;
  margin: 0px;
  text-transform: uppercase;
  vertical-align: top;
  top: 10px;
  padding: 0px;
  display: inline-block;
}

.banner-title .content .main-title h1 .middle {
  margin: 0px auto;
  background: none;
  color: #0dc6ff;
  font-size: 60px;
  margin: -10px;
  text-transform: uppercase;
  vertical-align: top;
  padding: 10px;
}

.banner-title .content .main-title h1 .light {
  color: #f7f7f7;
  font-family: "Sriracha", helvetica, sans-serif;
  font-weight: 300;
  font-size: 40px;
}

.banner-title .content .main-title h2 {
  color: #ffffff;
  font-family: "Sriracha", cursive;
  font-weight: 300;
  font-size: 90px;
  padding: 0;
}

.banner-title .content .main-title .text-wrap {
  display: block;
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: 20px;
}

.banner-title .content .main-title .text-wrap .text2 {
  display: inline-block;
}

.banner-title .content .main-title .text-wrap .text {
  font-size: 24px;
  display: inline-block;
  padding: 20px;
  margin: 0px 2.5px;
  background: rgba(0, 0, 0, 0.5);
  text-align: right;
}

.banner-title .content .main-title .text-wrap .image {
  font-size: 20px;
  display: inline-block;
  padding: 10px;
  margin: 0px 2.5px;
  background: rgba(250, 246, 246, 0.5);
  text-align: right;
}

.banner-title .content .main-title .text-wrap .text strong {
  font-size: 30px;
}

span.caption1 {
  font-family: "BenchNine", sans-serif;
  text-transform: uppercase;
  font-size: 90px;
  color: #01a001;
}
span.caption2 {
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 50px;
  text-transform: uppercase;
  font-weight: 100;
  margin-left: 10px;
  color: aliceblue;
}
span.caption3 {
  font-family: "Hammersmith One", sans-serif;
  text-transform: uppercase;
  font-size: 50px;
  margin-left: 10px;
  font-weight: 700;
  color: rgb(219, 235, 75);
}
.linebreak {
  height: 10px;
  border: 0;
  box-shadow: 0 10px 10px -10px #000000 inset;
  max-width: 280px;
  margin-right: 0;
}

/* menu */
.navbar {
  height: 60px;
  background-color: #729c3b;
  background-size: cover;
  display: flex;
  font-family: sans-serif;
  justify-content: center;
}

.menu {
  flex: 0;
}
.menu ul {
  display: flex;
  padding: 0;
  margin: 10px;
  flex-direction: row;
  list-style: none;
  /* justify-content: flex-end; */
  height: 100%;
}
.menu > ul > li {
  margin: 0 12px;
  width: 150px;
  text-align: center;
  font-size: 24px;
}

.menu > ul > li a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.menu > ul > li a:visited {
  color: rgb(255, 254, 254);
}

.menu > ul > li a:active {
  color: #fff;
  border: 1px solid black;
}

.menu > ul > li a:hover {
  color: #fff;
}

/*food list*/

.highlight-food-list {
  display: flex;
  flex-direction: row;
}
.blog-card {
  display: flex;
  flex-direction: column;
  margin: 3rem 2rem;
  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0, 0.1);
  margin-bottom: 5%;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
}
.blog-card {
  color: inherit;
}

.blog-card a:hover {
  color: #5ad67d;
}
.blog-card:hover .photo {
  transform: scale(1.3) rotate(3deg);
}
.blog-card .meta {
  position: relative;
  z-index: 0;
  height: 200px;
}
.blog-card .photo {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.2s;
}

.blog-card .details .blog-card .details ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.blog-card .details {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -100%;
  margin: auto;
  transition: left 0.2s;
  background: rgba(0, 0, 0, 0, 0.6);
  color: #fff;
  padding: 0px;
  width: 100%;
  font-size: 0.9rem;
}
.blog-card .details a {
  text-decoration: dotted underline;
}
.blog-card .details ul li {
  display: inline-block;
    margin:0;
  padding:0

}
.blog-card .details .author:before {
  list-style: none;
}
.blog-card .details .author img {
  width:100px;
}
.blog-card .details .author figure {
  margin:0;
  padding:0
}
.blog-card .details .date:before {
  font-family: fontAwesome;
  margin-right: 10px;
  content: "\f133";
}
.blog-card .details .tags li:first-child {
  margin-left: 4px;
}
.blog-card .description {
  padding: 1rem;
  background: #fff;
  position: relative;
  z-index: 1;
}
.blog-card .description h1,
.blog-card .description h2 {
  font-family: "Courier New", Courier, monospace;
}
.blog-card .description h1 {
  line-height: 1;
  margin: 0;
  font-size: 1.7rem;
}
.blog-card .description h2 {
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  color: #a2a2a2;
  margin-top: 5px;
}
.blog-card .description .read-more a {
  color: #5ad67d;
  display: inline-block;
  position: relative;
}
.hilight-price {
  font-size: 30px;
  font-family: "BenchNine", sans-serif;
  color: #5ad67d;
  display: inline-block;
  position: relative;
  margin-left: 20px
}

.normal-price {
  font-size: 30px;
  font-family: "BenchNine", sans-serif;
  color: #deeb34;
  display: inline-block;
  position: relative;
  margin-left: 10px
}

.blog-card .description .read-more a img{
  width: 40px;
}
.blog-card .description .read-more a:after {
  content: "\f061";
  font-family: fontAwesome;
  margin-left: -10px;
  opacity: 0;
  vertical-align: middle;
  transition: margin 0.3s, opacity 0.3s;
}
.blog-card .description .read-more a:hover:a:afer {
  margin-left: 5px;
  opacity: 1;
}
.blog-card p {
  position: relative;
  margin: 1rem 0 0;
}
.blog-card p:first-of-type {
  margin-top: 1.25rem;
}
.blog-card p:first-of-type:before {
  content: "";
  position: absolute;
  height: 5px;
  background: #5ad67d;
  width: 35px;
  top: -0.75rem;
  border-radius: 3px;
}
.blog-card:hover .details {
  left: 0%;
}
@media (min-width: 640px) {
  .blog-card {
    flex-direction: row;
    max-width: 600px;
    flex-direction: row;
  }
  .blog-card .meta {
    flex-basis: 50%;
    height: auto;
  }
  .blog-card .description {
    flex-basis: 50%;
  }
  .blog-card .description:before {
    /* transform: skewX(-3deg); */
    content: "";
    background: #fff;
    width: 30px;
    position: absolute;
    left: -10px;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
  .blog-card.alt {
    flex-direction: row;
  }
  .blog-card.alt .description:before {
    left: inherit;
    right: -10px;
    /* transform: skew(3deg); */
  }
  .blog-card.alt .details {
    padding-left: 50px;
  }
}

/* FOOD LIST 2nd */
.card-container {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 255px;
  height: 500px;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.315);
  flex: 1;
  padding: 0px;
  margin: 20px;
}

.card-container .container__main img {
  width: 100%;
  height: 500px;
  object-position: center;
  object-fit: cover;
  margin-right: 10px;
}

.card-container .container__info {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 20%;
  display: flex;
  align-items: flex-end;
  padding: 15px 30px;
  color: #fff;
}
.card-container .container__info span {
  margin-right: 20px;
}
.card-container .container__info i {
  margin-right: 10px;
}
.card-container .container__profile {
  background-color: #729c3b;
  display: flex;
  align-items: center;
  padding: 20px;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
}

.card-container .container_name {
  background-color: #729c3b;
  display: flex;
  align-items: center;
  padding: 20px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
}

.card-container .container_name h2{
  /*thisrec*/ 
  color: #fff;
  font-size:20px;
   font-family: "Sriracha", helvetica, sans-serif;
}



.card-container .container__profile img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  margin-right: 10px;
}
.card-container .container__profile h2 {
  /*thisrec*/
  font-family: "Sriracha", helvetica, sans-serif;
  color: #ffffff;
  font-size: 1.3rem;
}
.card-container .container__profile p {
  color: #c7dd03;
  font-size: 1.1rem;
}
.card-container .container__profile p b {
  font-style: italic;
}

.food-list ul {
  display: inline-block;
}

.about-wrap {
  padding: 40px 0px 0px;
  width: 100%;
}

.about-wrap .main-title {
  padding-bottom: 9px;
}

.schedule .content .title h2 {
  color: #ffffff;
  text-transform: uppercase;
  font-size: 24px;
  margin: 0px;
}

.about-wrap .text p {
  text-align: center;
  width: 70%;
  margin: 0 auto;
  font-size: 22px;
}

.about-wrap .personnel-wrap {
  padding: 40px 0px;
}

.about-wrap .personnel-wrap .personnel {
  position: relative;
  padding: 30px 0px;
}

.about-wrap .personnel-wrap .personnel.first-child {
  padding: 0px 0px;
}

.about-wrap .personnel-wrap .personnel .photo-wrap {
  text-align: center;
}

.about-wrap .personnel-wrap .personnel .photo-wrap .shape {
  margin: 20px 0px;
  display: inline-block;
  width: 130px;
  height: 130px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  border: 1px solid #121212;
  overflow: hidden;
}

.about-wrap .personnel-wrap .personnel .photo-wrap .shape.photo {
  position: relative;
  overflow: hidden;
  -o-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.about-wrap .personnel-wrap .personnel .photo-wrap .shape.photo::after {
  content: "";
  position: absolute;
  top: -25px;
  left: -25px;
  width: 180px;
  height: 180px;
  background: inherit;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.about-wrap .personnel-wrap .personnel .photo-wrap .shape .overlay {
  background: rgba(250, 76, 41, 0.8);
  position: absolute;
  width: 130px;
  height: 130px;
  display: table;
  z-index: 3;
  opacity: 0;
  -webkit-opacity: 0;
  -moz-opacity: 0;
}

.about-wrap .personnel-wrap .personnel .photo-wrap .shape .overlay.animated {
  animation-duration: 0.3s;
  -webkit-animation-duration: 0.3s;
}

.about-wrap .personnel-wrap .personnel .photo-wrap .shape .overlay:hover {
  opacity: 1;
  -webkit-opacity: 1;
  -moz-opacity: 1;
}

.about-wrap .personnel-wrap .personnel .photo-wrap .shape .overlay .name {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-weight: 700;
  z-index: 4;
  color: #ffffff;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  text-transform: uppercase;
}

.about-wrap .personnel-wrap .personnel .description {
  height: 100%;
  padding-left: 0px;
  margin-top: 10px;
}

.about-wrap .personnel-wrap .personnel .description .text {
  font-size: 20px;
}

.about-wrap .personnel-wrap .personnel .description.left {
  text-align: right;
}

.about-wrap .personnel-wrap .personnel .description .title h3 {
  font-size: 24px;
  font-family: "Lato", helvetica, sans-serif;
  margin: 0px;
}

.about-wrap .personnel-wrap .personnel .description .position {
  color: #002d8d;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 18px;
  font-weight: 600;
}

.about-wrap .bottom-image {
  margin-top: 40px;
  height: 400px;
  width: 100%;
  background-size: cover !important;
  overflow: hidden;
  position: relative;
}

.about-wrap .bottom-image .overlay {
  position: absolute;
  height: 100%;
  width: 100%;
}

.about-wrap .bottom-image .container {
  height: 100%;
  display: table;
}

.about-wrap .bottom-image .container .content {
  display: table-cell;
  vertical-align: middle;
  height: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
}

.about-wrap .bottom-image .container .content .title {
  margin-bottom: 5px;
}

.about-wrap .bottom-image .container .content .title h3 {
  font-family: "Oswald", helvetica, sans-serif;
  font-weight: 400;
  font-size: 30px;
  color: #fe7e00;
  display: inline-block;
  text-transform: uppercase;
}

.about-wrap .bottom-image .container .content .text {
  width: 80%;
  margin: 0 auto;
}

.about-wrap .bottom-image .container .content .text p {
  font-size: 24px;
  line-height: 24px;
  color: #ffffff;
  font-weight: 300;
}

div.parentElement{
    position: relative;
    width: 200px;
    height: 37px;
  
}

span.childElement {
    color:#f7f703;
    position: absolute;
    top: -5px;
    right: 15px;
    width: 20px;
    height: 20px;
  
}

</style>
