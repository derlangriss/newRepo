<template>
  <div>
    <section class="login">
      <form @submit.prevent="register()">
        <div class="login-container">
          <div class="container__main">
            <img src="../assets/plus.png" alt="profile_image" class="icon" />
          </div>
          <div class="container__profile">
            <div class="form">
              <div class="label">
                <span class="label"
                  ><label for="firstname">First Name</label></span
                >
              </div>
              <input type="text" v-model="form.firstname" />
            </div>
            <div class="form">
              <div class="label">
                <span class="label"
                  ><label for="lastname">Lastname</label></span
                >
              </div>
              <input type="text" v-model="form.lastname" />
            </div>
            <div class="form">
              <div class="label">
                <span class="label"><label for="email">Email</label></span>
              </div>
              <input type="email" v-model="form.email" />
            </div>
            <div class="form">
              <div class="label">
                <span class="label"
                  ><label for="lastname">Phone Number</label></span
                >
              </div>
              <input type="text" v-model="form.phoneNumber" />
            </div>
            <div class="form">
              <div class="label">
                <span class="label"
                  ><label for="password">Password</label></span
                >
              </div>
              <input type="password" v-model="form.password" />
            </div>
            <div class="form">
              <div class="label">
                <span class="label"
                  ><label for="confirmpassword">Confirm Password</label></span
                >
              </div>
              <input type="password" v-model="form.confirmpassword" />
              {{ verify() }}
            </div>
            <div class="form">
              <div class="label">
                <span class="label"><label for="avatar">Avatar</label></span>
              </div>
              <input type="file" id="avatar" @change="onSelectFile" />
            </div>

            <hr />
            <div class="form">
              <button class="button-login" type="submit">Register</button>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
const host = "https://camt-foodapi.pair-co.com";
export default {
  data: function () {
    return {
      form: {
        firstname: "sompong",
        lastname: "sfdfsd",
        phoneNumber: "1234564",
        email: "derlangriss7@gmail.com",
        password: "1234",
        confirmpassword: "1234",
        avatar: null,
      },
      profile:{}
    };
  },
  methods: {
    verify() {
      if (this.password !== this.confirmpassword) {
        return "password not match";
      } else {
        return "";
      }
    },
    onSelectFile(event) {
      this.avatar = event.target.files[0];
    },
    register() {
      const data = new FormData();
      data.append("firstname", this.form.firstname);
      data.append("lastname", this.form.lastname);
        data.append("email", this.form.email);
      data.append("phoneNumber", this.form.phoneNumber);    
      data.append("password", this.form.password);

      console.log(this.form)

      const registerURL = `${host}/register`;

      fetch(registerURL, {
        method: "POST",
        body: data,
      }).then((response) => {
        if (response.status === 204) {
          this.$router.push("./profile");
        }
        console.log(response);
      });

      // fetch("https://camt-foodapi.pair-co.com/register", {
      //   method: "POST",
      //   body: formData,
      // }).then((response) => {
      //   if (response.status === 204) {
      //     console.log(response)
      //   }
      //   console.log(response)
      // });
    },
    // login() {
    //   const data = {
    //     username: this.username,
    //     password: this.password,
    //   };
    //   console.log(data);
    //   fetch("https://camt-foodapi.pair-co.com/login", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => {
    //       if (response.status == 401) {
    //         alert("username หรือ password have problem");
    //       } else {
    //         return response.json();
    //       }
    //     })
    //     .then((data) => {
    //       store.setLoginToken(data.token);
    //       this.$router.push("./profile");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
  mounted() {
    // if (this.$root.state.loginToken) {
    //   fetch("https://camt-foodapi.pair-co.com/me", {
    //     headers: {
    //       Authorization: `Bearer ${this.$root.state.loginToken}`,
    //     },
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       this.$router.push("/profile");
    //       this.profile = data;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
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
  padding: 5px;
}

.button-login {
  padding: 10px;
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