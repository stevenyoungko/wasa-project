<template>
  <div class="about">
    <div>
      <button @click="redTheme">红色主题</button>
      <button @click="blueTheme">蓝色主题</button>
    </div>  
    <br />
    <div>
      <button class="theme-default-btn">默认</button>
      <button class="theme-primary-btn">主要</button>
      <button class="theme-info-btn">提示</button>
    </div>
    <br />
    <FormCell v-model="form.name" />
    <br />
    <FormCell v-model="form.gender" formType="radio" />
    <br />
    <FormCell v-model="form.score" formType="select" />

    <div>
      <p>姓名: {{ form.name }}</p>
      <p>性別: {{ form.gender }}</p>
      <p>分數: {{ form.score }}級</p>
    </div>

    <div>
       <table>
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
    </div>
  </div>
</template>
<script>
import FormCell from '@/components/FormCell'
import axios from "axios";
export default {
  components: {
    FormCell
  },
  metaInfo() {
    return {
      title: "About",
      meta: [
        { name: 'description', content: "This is about." }
      ]
    };
  },
  data() {
    return {
      form: {
        name: '',
        gender: '',
        score: ''
      },
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
    blueTheme() {
      this.$store.dispatch("themeChange", "blue");
    },
    redTheme() {
      this.$store.dispatch("themeChange", "red");
    },
    async getFakeData() {
      const { data } = await axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
      this.tableData = data
    }
  },
};
</script>