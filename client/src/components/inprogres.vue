<template lang="html">
  <div class="panel panel-info">
    <div class="panel-heading">
      <h3 class="glyphicon glyphicon glyphicon-edit panel-title">  Inprogress</h3>
    </div>
    <div class="panel-body ">
    <div class="panel panel-default panel-info" v-for="inprogress in inprogres">
      <div class="panel-heading">{{ inprogress.title }}</div>
      <div class="panel-body">
        <p>Point : {{ inprogress.point }}</p>
        <p>Assign to : {{inprogress.assign_to }}</p>
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal4" @click="getDataInprogres(inprogress)">
         Details
        </button>
      </div>
     </div>
     <!-- Modal -->
      <div class="modal fade" id="myModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel2">Details task "{{ detail.title }}" for {{ detail.assign_to }}</h3>
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
              <button type="button" class="btn btn-primary" data-dismiss="modal" @click="moveToTasklist(detail['.key'], detail.title, detail.description, detail.point, detail.assign_to)">Move To Task List</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" @click="remove(detail['.key'])">Delete</button>
              <button type="button" class="btn btn-success" data-dismiss="modal" @click="moveToDone(detail['.key'], detail.title, detail.description, detail.point, detail.assign_to)">Change Status To DOne</button>
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
      inprogres: this.$db.ref('task/inprogres')
    }
  },
  methods: {
    getDataInprogres (inprogres) {
      this.detail = inprogres
    },
    remove (id) {
      this.$db.ref('task/inprogres/' + id).remove()
    },
    moveToTasklist (id, title, description, point, assign) {
      this.$db.ref('task/tasklist').push({
        title: title,
        description: description,
        point: point,
        assign_to: assign,
        status: 'Assign to'
      })
      this.$db.ref('task/inprogres/' + id).remove()
    },
    moveToDone (id, title, description, point, assign) {
      this.$db.ref('task/donelist').push({
        title: title,
        description: description,
        point: point,
        assign_to: assign,
        status: 'done'
      })
      this.$db.ref('task/inprogres/' + id).remove()
    }
  }
}
</script>

<style lang="css">
</style>
