<template lang="html">
  <div class="panel panel-danger">
    <div class="panel-heading">
      <h3 class="glyphicon glyphicon-list-alt panel-title">  TaskAssign</h3>
    </div>
    <div class="panel-body">
    <div class="panel panel-default panel-danger" v-for="tasks in task">
      <div class="panel-heading">{{ tasks.title }}</div>
      <div class="panel-body">
        <p>Point : {{ tasks.point }}</p>
        <p>Assign to : {{tasks.assign_to }}</p>
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal2" @click="getData(tasks)">
         Details
        </button>
        <detailtask :detailtask="detailtask"/>
     </div>
    </div>
    </div>
  </div>
</template>

<script>
import detailtask from '@/components/detailtask'
export default {
  data () {
    return {
      detailtask: {}
    }
  },
  firebase: function () {
    return {
      task: this.$db.ref('task/create')
    }
  },
  methods: {
    getData (tasks) {
      this.detailtask = tasks
    }
  },
  components: {
    detailtask
  }
}
</script>

<style lang="css">
</style>
