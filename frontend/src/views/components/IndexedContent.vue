<template>
    <b-card-group deck class="content">
      <b-card 
          header="h1" 
          class="content__item"
          id="h1-content"
      >
        <b-list-group v-for="content in content.indexedContent.h1">
          <b-list-group-item href="#">{{ content }}</b-list-group-item>
        </b-list-group>
      </b-card>
      <b-card 
          header="h2"
          class="content__item"
          id="h2-content"
      >
        <b-list-group v-for="content in content.indexedContent.h2">
          <b-list-group-item href="#">{{ content }}</b-list-group-item>
        </b-list-group>
      </b-card>
      <b-card 
          header="h3"
          class="content__item"
          id="h3-content"
      >
        <b-list-group v-for="content in content.indexedContent.h3">
          <b-list-group-item href="#">{{ content }}</b-list-group-item>
        </b-list-group>
      </b-card>
      <b-card 
          header="link"
          class="content__item"
      >
        <b-list-group v-for="content in partContent[currentPage - 1]">
          <b-list-group-item  href="#">{{ content }}</b-list-group-item>
        </b-list-group>
        <b-pagination
            class="pagination"
            v-model="currentPage"
            align="center"
            :total-rows="linkRows"
            :per-page="perPage"
        ></b-pagination>
      </b-card>
    </b-card-group>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'IndexedContent',
  components: {},
  data() {
    return {
      perPage: 25,
      currentPage:1
    }
  },
  computed: { 
    ...mapGetters(['content']),
    linkRows() {
      return this.content.indexedContent.link.length
    },
    partContent() {
      const array = this.content.indexedContent.link.map((e, i) => {
        return i % this.perPage === 0 ? this.content.indexedContent.link.slice(i, i + this.perPage) : null;
      }).filter((e) =>  e );
      return array;
    }
  }
}
</script>

<style>
.content {
  margin-top: 50px;
  display: flex ;
  flex-direction: column !important;
}

.content__item {
  width: 900px;
  display: block ;
  margin: 20px auto !important;
}

.pagination {
  margin-top: 20px;
}
</style>
