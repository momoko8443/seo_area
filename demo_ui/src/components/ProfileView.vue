<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <p>{{ description}}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      name:'',
      description:''
    }
  },
  mounted() {
    this.loadProfile();
  },
  methods: {
    loadProfile(){
      let url = "http://localhost:8081/api/profile";
      axios.get(url).then((result)=>{
        let profile = result.data.data;
        this.name = profile.name;
        this.description = profile.description;
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
