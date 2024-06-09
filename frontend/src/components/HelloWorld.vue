<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
    </ul>
  </div>
</template>

<script>
import ProjectService from '@/services/ProjectService';

export default {
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    ProjectService.getProjects()
      .then(response => {
        this.projects = response.data;
      })
      .catch(error => {
        console.error('There was an error:', error.response);
      });
  }
}
</script>


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
