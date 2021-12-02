<template>
  <div>
    <section class="profile">
      <div class="left-panel">
        <form class="formlogin" @submit.prevent="login">
          <div class="login-container">
            <div class="container__main">
              <img
                :src="`https://camt-foodapi.pair-co.com${profile.avatar}`"
                alt="profile_image"
                class="icon"
              />
            </div>
            <div class="container__profile">
              <div class="form">
                <div class="label">
                  <span class="label"
                    ><label for="lastname">First Name</label></span
                  >
                </div>
                <input type="text" v-model="profile.firstname" />
              </div>
              <div class="form">
                <div class="label">
                  <span class="label"
                    ><label for="lastname">Last Name</label></span
                  >
                </div>
                <input type="text" v-model="profile.lastname" />
              </div>
              <div class="form">
                <div class="label">
                  <span class="label"><label for="lastname">Email</label></span>
                </div>
                <input type="email" v-model="profile.email" />
              </div>
              <div class="form">
                <button class="button-login">แก้ไขข้อมูล</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="left-panel">
        <div class="panel-body" v-for="order in foodHistory" :key="order._id">
          <main class="leaderboard__profiles">
            <h1>OrderId {{ order._id }}</h1>
            <h2>ราคารวม {{ orderTotal(order._id) }}</h2>
            <article
              class="leaderboard__profile"
              v-for="foodOrder in order.foods"
              :key="foodOrder._id"
            >
              <img
                :src="`https://camt-foodapi.pair-co.com/foods/${foodOrder.photo}`"
                alt="Mark Zuckerberg"
                class="leaderboard__picture"
              />
              <span class="leaderboard__name">{{ foodOrder.name }}</span>
              <span class="leaderboard__value"
                >{{ foodOrder.price }}<span>B</span></span
              >
            </article>
          </main>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      profile: {},
      foodHistory: [],
    };
  },
  mounted() {
    if (!this.$root.state.loginToken) {
      this.$router.push("/login");
    } else {
      fetch("https://camt-foodapi.pair-co.com/me", {
        headers: {
          Authorization: `Bearer ${this.$root.state.loginToken}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.profile = data;
        })
        .catch((error) => {
          console.log(error);
        });

      fetch("https://camt-foodapi.pair-co.com/orders", {
        headers: {
          Authorization: `Bearer ${this.$root.state.loginToken}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.foodHistory = data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  methods: {
    orderTotal(id) {
      for (let i = 0; i < this.foodHistory.length; i++) {
        if (this.foodHistory[i]._id === id) {
          return this.foodHistory[i].foods.reduce((sum, food) => {
            sum += food.price;
            return sum;
          }, 0);
        }
      }
    },
  },
};
</script>
<style>
.profile {
  display: flex;
  flex-direction: row;
}
.profile .left-panel {
  flex: 1;
}
.profile .right-panel {
  flex: 1;
}
.panel-body {
  margin-top: 20px;
  padding: 20px;
  background: whitesmoke;
  border-radius: 5px;
  position: relative;
  font-family: "Libre Franklin", sans-serif;
}
.food-history-list {
  list-style: none;
}

.leaderboard {
  max-width: 490px;
  width: 100%;
  border-radius: 12px;
}
.leaderboard header {
  --start: 15%;
  height: 130px;
  background-image: repeating-radial-gradient(
      circle at var(--start),
      transparent 0%,
      transparent 10%,
      rgba(54, 89, 219, 0.33) 10%,
      rgba(54, 89, 219, 0.33) 17%
    ),
    linear-gradient(to right, #5b7cfa, #3659db);
  color: #fff;
  position: relative;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
}
.leaderboard header .leaderboard__title {
  position: absolute;
  z-index: 2;
  top: 50%;
  right: calc(var(--start) * 0.75);
  transform: translateY(-50%);
  text-transform: uppercase;
  margin: 0;
}
.leaderboard header .leaderboard__title span {
  display: block;
}
.leaderboard header .leaderboard__title--top {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 6.5px;
}
.leaderboard header .leaderboard__title--bottom {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 3.55px;
  opacity: 0.65;
  transform: translateY(-2px);
}
.leaderboard header .leaderboard__icon {
  fill: #fff;
  opacity: 0.35;
  width: 50px;
  position: absolute;
  top: 50%;
  left: var(--start);
  transform: translate(-50%, -50%);
}
.leaderboard__profiles {
  background-color: #fff;
  border-radius: 0 0 12px 12px;
  padding: 15px 15px 20px;
  display: grid;
  row-gap: 8px;
  margin: 20px;
}
.leaderboard__profile {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  padding: 10px 30px 10px 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  background-color: #fff;
}
.leaderboard__profile:hover {
  transform: scale(1.2);
  box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
}
.leaderboard__picture {
  max-width: 100%;
  width: 60px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #ebeef3, 0 0 0 22px #f3f4f6;
}
.leaderboard__name {
  color: #979cb0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.64px;
  margin-left: 12px;
}
.leaderboard__value {
  color: #35d8ac;
  font-weight: 700;
  font-size: 34px;
  text-align: right;
}
.leaderboard__value > span {
  opacity: 0.8;
  font-weight: 600;
  font-size: 13px;
  margin-left: 3px;
}

.leaderboard {
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.4);
}
.card-contanier {
  display: inline-block;
  text-align: center;
}

.card-contanier .container__profile {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 500px;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.315);
  flex: 1;
  padding: 0px;
  margin: 120px;
  display: inline-block;
}
</style>