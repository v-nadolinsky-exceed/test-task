<template>
  <div class="list-wrap">
    <div v-for="item in indexedContents">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info">{{ item.address }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <IndexedContent />
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
import { indexed } from '../../api';
import IndexedContent from "@/views/components/IndexedContent";
export default {
  name: 'ListIndexedPages',
  components: { IndexedContent },
  data() {
    return {
      indexedContents: [],
      selectedContent: {}
    }
  },
  created() {
    indexed.find({})
      .then((res) => {
        console.log(" res=", res.data );
        this.indexedContents = res;
        
      })
      .catch((err) => {
        this.$bvToast.toast('Content is not found', {
          title: 'Request error',
          variant: 'danger',
          solid: true
        });
        console.error(err);
      })
  }
}
</script>

<style>
  .list-wrap {
    padding: 20px;
    background: linear-gradient(225deg, rgb(62, 175, 132), rgb(53, 73, 94));
    height: 100vh;
    overflow-y: scroll;
  }
</style>