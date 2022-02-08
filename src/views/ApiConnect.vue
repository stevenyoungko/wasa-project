<template>
  <div class="api-container">
    <table v-if="tableData.length > 0">
      <thead>
        <tr>
          <th v-for="col in  columns" :key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.city">
          <td v-for="col in columns" :key="col">
            {{ item[col] }}
          </td>
        </tr>
      </tbody>
    </table>
    <h1 v-else>Loading...</h1>
  </div>
</template>

<script>
import { getFakeData } from '../apis/index'
export default {
  name: 'ApiConnect',
  metaInfo() {
    return {
      title: "Api",
      meta: [
        { name: 'description', content: "This is api." }
      ]
    };
  },
  data() {
    return {
      tableData: [],
      columns: [
        'city',
        'name'
      ]
    }
  },
  created() {
    this.getFakeData()
  },
  methods: {
    async getFakeData() {
      const res = await getFakeData()
      this.tableData = res
    }
  },
}
</script>

<style lang="scss" scoped>

</style>