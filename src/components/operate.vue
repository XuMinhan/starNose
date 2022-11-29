<template>
  <div>
    <input class="upload" type="file" ref="upload" accept="image/jpeg,image/jpg,image/png"
              @change="uploadImg($event)">
    <button @click="submit">提交</button>
  </div>
</template>

<script>
var formData = new FormData();
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "operate",

  methods:{
    uploadImg (e) {
      // 获取file
      let file = e.target.files[0]
      // 实例化
      formData.set('file', file)
    },
    submit(){
      this.$axios({
        method: "post",
        headers: {
          'Content-Type': 'multipart/form-data;charset=UTF-8'
        },
        data: formData,
        url: "/upload/blog",
      }).then((res) => {
        console.log(res.data)
        if (res.data.success == false) {
          window.alert(res.data.errorMsg)
        }
      })    }
  }
}
</script>

<style scoped>

</style>