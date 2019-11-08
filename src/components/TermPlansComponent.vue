<template>
  <div class="insurers row">
        <div class="card-columns col-md-12 mt-5">
        <div class="col-md-12" v-for="insurer in insurersList" :key="insurer.InsurerId">
            <router-link :to="{name: 'allplans', params:{data: insurersList}}" class="card text-center text-primary w-100 insCard font-weight-bolder">
                <div class="card-body">
                    <div class="card-text">{{insurer.Insurers}}</div>
                </div>
            </router-link>
        </div>
        </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'TermPlansComponent',
    data(){
        return {insurersList: []}
    },
    mounted(){
        axios.get('https://api.myjson.com/bins/11l98w').then((response) => {
            this.insurersList = response.data
        })
    },
}
</script>

<style>
   
</style>