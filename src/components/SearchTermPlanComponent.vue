<template>
  <div class="row nav mt-5">
    <div class="col-md-4  offset-md-1 form-inline bg-info text-white font-weight-bolder">Term Insurance Plans in India</div>
    <div class="col-xs-2 offset-md-4 form-inline">
      <input class="form-control mr-sm-2" type="text" v-model="searchTxt"/>
    </div>
    <div class="col-xs-1 form-inline">
      <button class="btn btn-primary my-2 my-sm-0" @click="click"><i class="fa fa-search"></i></button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'SearchTermPlanComponent',
        data(){
            return {searchTxt: null}
        },
        methods: {
            click(){
                this.$emit('click', this.searchTxt)
            }
        }
    };
</script>

<style>
</style>