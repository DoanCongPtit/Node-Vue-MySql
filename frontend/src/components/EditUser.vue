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
      <button class="button is-success" @click="updateUser">UPDATE</button>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";

export default {
  name: "EditUser",
  data() {
    return {
      userName: "",
      userAge: "",
    };
  },
  created: function () {
    this.getUserById();
  },
  methods: {
    async getUserById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/${this.$route.params.id}`
        );
        this.userName = response.data.user_name;
        this.userAge = response.data.user_age;
      } catch (err) {
        console.log(err);
      }
    },

    async updateUser() {
      try {
        await axios.put(
          `http://localhost:5000/users/${this.$route.params.id}`,
          {
            user_name: this.userName,
            user_age: this.userAge,
          }
        );
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