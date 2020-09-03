<template>
  <div class="input">
    <b-form @submit="onSubmit" @reset="onReset" >
      <b-form-input 
          ref="url" 
          v-model="text"
          placeholder="Enter your url"
      ></b-form-input>
      <div class="buttons">
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>
    <div v-if="receivedContent">
      <router-link
          class="link"
          to="/content"
      >Content</router-link>
    </div>
    <div v-if="!receivedContent && isloading">
      <b-spinner
          variant="primary"
          label="Spinning"
      ></b-spinner>
    </div>
  </div>
</template>

<script>
import { indexed } from '../../api';
import { mapGetters } from 'vuex';
export default {
  name: 'SearchURL',
  components: {},
  data() {
    return {
      text: '',
      isloading: false
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.text.trim() === '') {
        this.$bvToast.toast('The input field is empty', {
          title: 'Enter url',
          variant: 'warning',
          solid: true
        })
        return false
      }
      this.isloading = true;
      indexed.post(this.text)
      .then((res) => {
        this.$router.push('/content');
        this.$store.commit('set_content', res.data);
        this.text = '';
      })
      .catch((error) => {
        this.$bvToast.toast('Content is not found', {
          title: 'Request error',
          variant: 'danger',
          solid: true
        })
        this.isloading = false;
        this.text = '';
        console.error(error);
      })
    },
    onReset(evt) {
      evt.preventDefault();
      this.text = ''
    }
  },
  computed: {
    ...mapGetters(['content']),
    receivedContent () {
      if (this.content.address) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    this.$refs.url.focus();
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
