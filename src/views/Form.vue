<template>
  <div class="about">
    <form class="form theme-border">
      <label>姓名:</label>
      <FormCell v-model="form.name" placeHolder="請輸入姓名" />
      <br />
      <label>性別:</label>
      <FormCell v-model="form.gender" formType="radio" :radioOptions="genderList" />
      <br />
      <label>分數:</label>
      <FormCell v-model="form.score" formType="select" placeHolder="請選擇分數" :selectOptions="scoreList" />
    </form>

    <div class="form theme-border">
      <h2 class="title">父子元件雙向繫結</h2>
      <p class="text">姓名: {{ form.name }}</p>
      <p class="text">性別: {{ form.gender }}</p>
      <p class="text">分數: {{ form.score }}級</p>
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
      genderList: [
        { label: '男', value: 'boy' },
        { label: '女', value: 'gril' }
      ],
      scoreList: [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'C', value: 'C' },
      ],
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