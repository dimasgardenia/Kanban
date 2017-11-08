<template lang="html">
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="glyphicon glyphicon glyphicon-edit panel-title">  TaskAssign</h3>
    </div>
    <div class="panel-body ">
    <div class="panel panel-default panel-primary" v-for="tasks in task">
      <div class="panel-heading">{{ tasks.title }}</div>
      <div class="panel-body">
        <p>Point : {{ tasks.point }}</p>
        <p>Assign to : {{tasks.assign_to }}</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal3" @click="getDataTodo(tasks)">
         Details
        </button>
      </div>
     </div>
     <!-- Modal -->
      <div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel1">Details task "{{ detail.title }}" for {{ detail.assign_to }}</h3>
              <button type="button" class="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
             Task Description: {{ detail.description }},
             Task Point: {{ detail.point }},
             Status: {{ detail.status}}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal" @click="remove(detail['.key'])">delete</button>
              <button type="button" class="btn btn-info" data-dismiss="modal" @click="moveToDoing(detail['.key'], detail.title, detail.description, detail.point, detail.assign_to)">Doing</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      detail: {}
    }
  },
  firebase: function () {
    return {
      task: this.$db.ref('task/create')
    }
  },
  methods: {
    getDataTodo (tasks) {
      this.detail = tasks
    }
  }
}
</script>

<style lang="css">
</style>
