<template lang="html">
  <div class="">
    <!-- Modal -->
   <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog" role="document">
       <div class="modal-content">
         <div class="modal-header">
           <h3 class="modal-title" id="exampleModalLabel">Details task "{{ detailtask.title }}" for {{ detailtask.assign_to }}</h3>
           <button type="button" class="close" data-dismiss="modal">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body">
          Task Description: {{ detailtask.description }},
          Task Point: {{ detailtask.point }},
          Status: {{ detailtask.status}}
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-danger" data-dismiss="modal" @click="remove(detailtask['.key'])">Delete</button>
           <button type="button" class="btn btn-primary" data-dismiss="modal" @click="moveToTodo(detailtask['.key'], detailtask.title, detailtask.description, detailtask.point, detailtask.assign_to)">Add To Tasklist</button>
         </div>
       </div>
     </div>
   </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['detailtask'],
  methods: {
    remove (id) {
      this.$db.ref('task/create/' + id).remove()
    },
    moveToTodo (id, title, description, point, assign) {
      this.$db.ref('task/tasklist').push({
        title: title,
        description: description,
        point: point,
        assign_to: assign,
        status: 'Assigend'
      })
      this.$db.ref('task/create/' + id).remove()
    }
  }
}
</script>

<style lang="css">
</style>
