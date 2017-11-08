<template lang="html">
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="glyphicon glyphicon glyphicon-edit panel-title">  Tasklist</h3>
    </div>
    <div class="panel-body ">
    <div class="panel panel-default panel-primary" v-for="tasks in task">
      <div class="panel-heading">{{ tasks.title }}</div>
      <div class="panel-body">
        <p>Point : {{ tasks.point }}</p>
        <p>Assign to : {{tasks.assign_to }}</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal3" @click="getDataTasks(tasks)">
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
              <button type="button" class="btn btn-danger" data-dismiss="modal" @click="moveToAss(detail['.key'], detail.title, detail.description, detail.point, detail.assign_to)">Move To Task Assign</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" @click="remove(detail['.key'])">Delete</button>
              <button type="button" class="btn btn-info" data-dismiss="modal" @click="moveToInprogress(detail['.key'], detail.title, detail.description, detail.point, detail.assign_to)">Change Status To Inprogres</button>
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
      task: this.$db.ref('task/tasklist')
    }
  },
  methods: {
    getDataTasks (tasks) {
      this.detail = tasks
    },
    remove (id) {
      this.$db.ref('task/tasklist/' + id).remove()
    },
    moveToAss (id, title, description, point, assign) {
      this.$db.ref('task/create').push({
        title: title,
        description: description,
        point: point,
        assign_to: assign,
        status: 'Not assign Yet'
      })
      this.$db.ref('task/tasklist/' + id).remove()
    },
    moveToInprogress (id, title, description, point, assign) {
      this.$db.ref('task/inprogres').push({
        title: title,
        description: description,
        point: point,
        assign_to: assign,
        status: 'inprogres'
      })
      this.$db.ref('task/tasklist/' + id).remove()
    }
  }
}
</script>

<style lang="css">
</style>
