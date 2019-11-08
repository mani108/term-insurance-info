<template>
  <div class="dtls col-lg-12">
    <div class="row">
      <div class="col-md-12">
        <nav>
          <SearchTermPlanComponent v-on:click="updateTable"/>
        </nav>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-10 offset-md-1">
        <table class="table table-bordered table-sm" id="dtlstbl">
          <thead>
            <tr>
              <th>Insurers</th>
              <th>Term Plans</th>
              <th>Maximum Maturity</th>
              <th>Min. Sum Assured</th>
              <th>Claim Settlement</th>
              <th>Premium(for Cover amount 1cr.)</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="insurer in insurersList" :key="insurer.InsurerId">
                  <td class="insName">{{insurer.Insurers}}</td>
                  <td>{{insurer.TermPlans}}</td>
                  <td>{{insurer.MaximumMaturity}}</td>
                  <td>{{insurer.MinSumAssured}}</td>
                  <td>{{insurer.ClaimSettlement}}</td>
                  <td>{{insurer.PremiumPerMonth}}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
//import $ from "jquery";
import SearchTermPlanComponent from '@/components/SearchTermPlanComponent.vue'
export default {
  name: "termdetailscomponent",
  components: {SearchTermPlanComponent},
  data() {
    return {
      insurersList: this.$route.params.data,
      unfilteredList: this.$route.params.data,
    };
  },
  methods:{
      updateTable(searchText){
        this.insurersList = this.unfilteredList.filter(function (el) {
            return el.Insurers.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        })
        // Jquery Approach Hides the tr where Insurer name does not match  
        //   $("#dtlstbl tbody tr").filter(function(){
        //       //console.log($(this).text());
        //      $(this).toggle($(this).find('td:first').text().toLowerCase().indexOf(searchText.toLowerCase()) > -1) 
        //   }) 
         
      }
  },
};
</script>

<style>
</style>