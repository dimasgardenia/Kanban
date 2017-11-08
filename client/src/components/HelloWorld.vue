<template>
  <div class="hello">
    <div class="container">
    <div class="row master">
      <div class="row-1">
          <taskcreate/><br>
      </div>
      <div class="row-2">
        <div class="col-md-3">
          <taskAssign/>
        </div>
        <div class="col-md-3">
          <tasklist/>
        </div>
        <div class="col-md-3">
          <inprogres/>
      </div>
        <div class="col-md-3">
          <donetask/>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import taskcreate from '@/components/taskcreate'
import tasklist from '@/components/tasklist'
import taskAssign from '@/components/taskAssign'
import inprogres from '@/components/inprogres'
import donetask from '@/components/donetask'
export default {
  name: 'HelloWorld',
  components: {
    taskcreate,
    tasklist,
    taskAssign,
    inprogres,
    donetask
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
