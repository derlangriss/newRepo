<template>
  <div>
    <!-- <header class="banner">
      <section class="left">
        <figure>
          <img src="./assets/lanna_logo.png" />
        </figure>
      </section>
      <section class="right">
        <h1>เฮือนฮิมดอย</h1>
        <span class="caption1">Lanna</span>
        <br />
        <span class="caption2">LOCAL</span><span class="caption3">food</span>
        <hr class="linebreak" />
        <p class="description">
          <strong>อาหารล้านนาพาเพลิน</strong>
          <br />
          อิ่มอร่อยกับอาหารพื้นเมือง หลากหลายชนิด ให้ท่านได้ลองลิ้มรสชาติ
          <br />
          ถ้าได้ชิมแล้วจะติดใจ จนพูดเป็นเสียงเดียวกันเลยว่า "ลำแต๊ ลำว่า"
        </p>
      </section>
    </header>
    <nav class="navbar">
      <section class="menu">
        <ul>
          <li><router-link to="/foodlist">รายการอาหาร</router-link></li>
          <li><router-link to="/member">สมาชิก</router-link></li>
          <li><router-link to="/orderlist">รายการสั่งซื้อ</router-link></li>
        </ul>
      </section>
    </nav>
    <main class="body"><router-view></router-view></main> -->

    <!-- route outlet -->
    <!-- component matched by the route will render here -->

    <section class="banner-title webinar-banner">
        <div class="overlay"></div>
        <div class="container content">
            <div class="col-md-4 col-sm-4 col-xs-12">

            </div>
            <div class="col-md-8 col-sm-8 col-xs-12">
                <div class="main-title center">
                    <div class="text-wrap">
                        <div class="image">
                            <img src="assets/images/alllogo.png" alt="images" width="100%" class="pull-right img-align-right"></div>
                    </div>
                    <h2>
                        <strong>WEBINAR</strong>
                    </h2><br>
                    <h1>
                        <span class="light">สัมมนาออนไลน์เฉลิมพระเกียรติ </span>
                    </h1><br>
                    <h1>
                        <span class="middle">
                        สมเด็จพระพันปีหลวง</span>
                    </h1>
                    <div class="text-wrap">
                        <div class="text">“การอนุรักษ์ไม้ต้นที่ถูกคุกคามในประเทศไทย: พืชวงศ์จำปี”<br> ("Thailand Threatened Trees Conservation: Magnoliaceae")
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

figure {
  margin: 0;
  padding: 0;
}
.body {
  margin: auto 100px;
}
.banner {
  height: 640px;
  background-image: url("./assets/lanna_banner.png");
  display: flex;
  flex-direction: row;
}

.banner .left {
  flex: 1;
}

.banner .right {
  flex: 1;
  text-align: right;
  margin-right: 50px;
  justify-content: flex-end;
}

.banner .right h1 {
  color: rgb(4, 189, 14);
  font-size: 100px;
  font-family: "Kodchasan", sans-serif;
  font-weight: 800;
  margin-bottom: 0;
}

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
.logo {
  flex: 0;
  width: 100%;
}
.logo > figure > img {
  width: 100px;
  height: 64px;
  object-fit: contain;
}
span.caption1 {
  font-family: "BenchNine", sans-serif;
  text-transform: uppercase;
  font-size: 70px;
  color: #ebb400;
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
  box-shadow: 0 10px 10px -10px #8c8b8b inset;
  max-width: 280px;
  margin-right: 0;
}
.description {
  color: #8c8b8b;
  font-size: 1.2em;
}
/* food list 1st card */
.highlight-food-list {
  display: flex;
  flex-direction: row;
}
.blog-card {
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
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
  margin: auto;
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
  padding: 10px;
  width: 100%;
  font-size: 0.9rem;
}
.blog-card .details a {
  text-decoration: dotted underline;
}
.blog-card .details ul li {
  display: inline-block;
}
.blog-card .details .author:before {
  font-family: fontAwesome;
  margin-right: 10px;
  content: "\f133";
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
    max-width: 700px;
    flex-direction: row-reverse;
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
    flex-direction: row-reverse;
  }
  .blog-card.alt .description:before {
    left: inherit;
    right: -10px;
    /* transform: skew(3deg); */
  }
  .blog-card.alt .details {
    padding-left: 25px;
  }
}

/* FOOD LIST 2nd */
.container {
  background: url("https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 500px;
  position: relative;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.315);
  flex:1;
  padding:10px;
  margin: 20px
}
.container .container__info {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 20%;
  display: flex;
  align-items: flex-end;
  padding: 15px 30px;
  color: #fff;
}
.container .container__info span {
  margin-right: 20px;
}
.container .container__info i {
  margin-right: 10px;
}
.container .container__profile {
  background-color: #e4f2fd;
  display: flex;
  align-items: center;
  padding: 20px;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
}
.container .container__profile img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  margin-right: 10px;
}
.container .container__profile h2 {
  color: #334454;
  font-size: 1.2rem;
}
.container .container__profile p {
  color: #a1b2bc;
  font-size: 0.8rem;
}
.container .container__profile p b {
  font-style: italic;
}

/*food list 2nd */
.food-list ul{
  display: inline-block;
}

.food-list ul li{
 
}
</style>
