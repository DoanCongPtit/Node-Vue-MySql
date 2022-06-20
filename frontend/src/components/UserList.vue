<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button add-btn is-success mt-5"
      ><button>Add New</button></router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.user_name }}</td>
          <td>{{ item.user_age }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
          </td>
          <td class="has-text-centered">
            <a
              class="button delete is-danger is-small"
              @click="deleteUser(item.id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import axios from "axios";

export default {
  name: "UserList",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getUsers();
  },

  methods: {
    async getUsers() {
      try {
        const response = await axios.get("http://localhost:5000/users");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        this.getUsers();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
  
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.add-btn {
  height: 80px;
  width: 100px;
  border-radius: 1px solid blue;
}
.delete {
  color: red;
  cursor: pointer;
}
</style>