<template>
  <div>
    <section class="login">
      <form class="formlogin" @submit.prevent="login">
        <div class="login-container">
          <div class="container__main">
            <img src="../assets/plus.png" alt="profile_image" class="icon" />
          </div>
          <div class="container__profile">
            <div class="form">
              <div class="label">
                <span class="label"
                  ><label for="lastname">USER NAME</label></span
                >
              </div>
              <input type="text" v-model="username" />
            </div>
            <div class="form">
              <div class="label">
                <span class="label"
                  ><label for="lastname">PASSWORD</label></span
                >
              </div>
              <input type="password" v-model="password" />
            </div>
            <div class="form">
              <button class="button-login">Login</button>
            </div>
            <hr>
             <div class="form">
              <button class="button-login"><router-link to="./register">Register</router-link></button>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
import store from "../store";
export default {
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };
      console.log(data);
      fetch("https://camt-foodapi.pair-co.com/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status == 401) {
            alert("username หรือ password have problem");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          store.setLoginToken(data.token);
          this.$router.push("./profile");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    if (this.$root.state.loginToken) {
      fetch("https://camt-foodapi.pair-co.com/me", {
        headers: {
          Authorization: `Bearer ${this.$root.state.loginToken}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.$router.push("/profile");
          this.profile = data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>
<style>
.login {
  justify-content: center;
  text-align: center;
  margin: auto;
}
.formlogin {
  display: inline-block;
}

.login-container {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 500px;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.315);
  flex: 1;
  padding: 0px;
  margin: 20px;
}

.login-container .container__main img {
  width: 100%;
  height: 500px;
  object-position: center;
  object-fit: cover;
  margin-right: 10px;
}

.login-container .container__info {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 20%;
  display: flex;
  align-items: flex-end;
  padding: 15px 30px;
  color: #fff;
}
.login-container .container__info span {
  margin-right: 20px;
}
.login-container .container__info i {
  margin-right: 10px;
}
.login-container .container__profile {
  background-color: #729c3b;
  display: inline-block;
  align-items: left;
  padding: 20px;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
}

.login-container .container__profile .form {
  text-align: left;
  padding:5px
}

.button-login{
  padding:10px;
}
.login-container .container_name {
  background-color: #729c3b;
  display: flex;
  align-items: center;
  padding: 20px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
}

.login-container .container_name h2 {
  /*thisrec*/
  color: #fff;
  font-size: 20px;
  font-family: "Sriracha", helvetica, sans-serif;
}

.login-container .container__profile img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  margin-right: 10px;
}
.login-container .container__profile h2 {
  /*thisrec*/
  font-family: "Sriracha", helvetica, sans-serif;
  color: #ffffff;
  font-size: 1.3rem;
}
.login-container .container__profile p {
  color: #c7dd03;
  font-size: 1.1rem;
}
.login-container .container__profile p b {
  font-style: italic;
}
</style>