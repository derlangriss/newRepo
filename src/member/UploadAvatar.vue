<template>
  <div>
    <h1>Upload Avatar</h1>
    <form @submit.prevent="upload">
      <input type="file" @change="onSelectFile" />
      <!-- <input type="file" @change="onSelectFile" multiple/> -->
      <button type="submit">Upload</button>
    </form>
  </div>
</template>
<script>
export default {
  mounted() {
    
      if(!this.$root.state.loginToken){
          this.$router.push('/login')
      }
  },
  data: function () {
    return {
      file: null,
    };
  },
  methods: {
    onSelectFile(event) {
      this.file = event.target.files[0];
    },
    upload() {
      const formData = new FormData();
      formData.append("avatar", this.file);

      fetch("https://camt-foodapi.pair-co.com/me/avatar", {
        method: "PUT",
        headers: {
          Authorization:
            `Bearer ${this.$root.state.loginToken}`,
        },
        body: formData,
      }).then((response) => {
        if (response.status === 204) {
          this.$router.push("./profile");
        }
      });
    },
  },
};
</script>
<style>
</style>