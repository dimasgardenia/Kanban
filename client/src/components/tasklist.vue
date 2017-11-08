<template lang="html">
  <div class="panel panel-danger">
    <div class="panel-heading">
      <h3 class="glyphicon glyphicon-list-alt panel-title">  TaskList</h3>
    </div>
    <div class="panel-body">
    <div class="panel panel-default panel-danger" v-for="logs in log">
      <div class="panel-heading">{{ logs.title }}</div>
      <div class="panel-body">
        <p>Point : {{ logs.point }}</p>
        <p>Assign to : {{logs.assign_to }}</p>
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal2" @click="getData(logs)">
         Details
        </button>
        <modalDetail :dataTask="dataTask "></modalDetail>
     </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
