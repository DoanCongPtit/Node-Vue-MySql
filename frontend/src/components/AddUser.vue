<template>
  <div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Name"
          v-model="userName"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Age</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Age"
          v-model="userAge"
        />
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="saveUser">SAVE</button>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";

export default {
  name: "AddUser",
  data() {
    return {
      userName: "",
      userPrice: "",
    };
  },
  methods: {
    async saveUser() {
      try {
        await axios.post("http://localhost:5000/users", {
          user_name: this.userName,
          user_age: this.userAge,
        });
        this.userName = "";
        this.userAge = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
  
<style>
</style>