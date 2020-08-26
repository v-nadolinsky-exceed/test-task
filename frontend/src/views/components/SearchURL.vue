<template>
  <div class="input">
    <b-form @submit="onSubmit" @reset="onReset" >
      <b-form-input v-model="text" type="url" placeholder="Enter your url"></b-form-input>
      <div class="buttons">
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>
    <router-link class="link" to="/content">Content</router-link>
  </div>
</template>

<script>

import { indexed } from '../../api';
export default {
  name: 'SearchURL',
  components: {},
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      indexed.post(this.text)
      .then((res) => {
        this.$router.push('/content');
        this.$store.commit('set_content', res.data)
        this.text = '';
      })
      .catch((error) => {
        console.error(error);
      })
    },
    onReset(evt) {
      evt.preventDefault();
      this.text = ''
    }
  }
}
</script>

<style>
.input {
  padding-top: 300px;
  width: 600px;
  margin: 0 auto;
}
.buttons {
  margin: 20px auto;
  width: 200px;
  display: flex;
  justify-content: space-around;
}

.link {
  color: white;
}

.link:hover {
  color: coral;
  text-decoration: none;
}
</style>
