<template>
  <div class="form-container">
    <form class="form theme-border">
      <label class="label">姓名:</label>
      <FormCell v-model="form.name" placeHolder="請輸入姓名" maxlength="2" />
      <br />
      <label class="label">性別:</label>
      <FormCell v-model="form.gender" formType="radio" :radioOptions="genderList" />
      <br />
      <label class="label">分數:</label>
      <FormCell v-model="form.score" formType="select" placeHolder="請選擇分數" :selectOptions="scoreList" />
    </form>

    <div class="form theme-border">
      <h2 class="title">父子元件雙向繫結</h2>
      <p class="text">姓名: {{ form.name }}</p>
      <p class="text">性別: {{ form.gender }}</p>
      <p class="text">分數: {{ form.score }}級</p>
    </div>
  </div>
</template>
<script>
import FormCell from '@/components/FormCell'
export default {
  name: 'Form',
  components: {
    FormCell
  },
  metaInfo() {
    return {
      title: "Form",
      meta: [
        { name: 'description', content: "This is form." }
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
      ]
    }
  }
};
</script>