<template>
  <div class="container-grid">
    <div class="column-left">
      <CardProfile 
        :activeDaily="activeDaily"
        :activeWeekly="activeWeekly"
        :activeMonthly="activeMonthly"
        :lastFrecuency="lastFrecuency"
        @checkDaily="checkDaily"
        @checkWeekly="checkWeekly"
        @checkMonthly="checkMonthly"/>
    </div>
    <div class="column-right">

    <CardWork 
      :currentWork="currentWork"
      :previousWork="previousWork"
      :lastFrecuency="lastFrecuency"/>
    <CardPlay 
      :currentPlay="currentPlay"
      :previousPlay="previousPlay"
      :lastFrecuency="lastFrecuency"/>
    <CardStudy     
      :currentStudy="currentStudy"
      :previousStudy="previousStudy"
      :lastFrecuency="lastFrecuency"/>
    <CardExercise
      :currentExercise="currentExercise"
      :previousExercise="previousExercise"
      :lastFrecuency="lastFrecuency"/>
    <CardSocial
      :currentSocial="currentSocial"
      :previousSocial="previousSocial"
      :lastFrecuency="lastFrecuency"/>
    <CardSelfCare
      :currentSelfCare="currentSelfCare"
      :previousSelfCare="previousSelfCare"
      :lastFrecuency="lastFrecuency"/>
    </div>
  </div>

</template>

<script>
import {defineAsyncComponent} from 'vue'
import dataJson from '../src/assets/json/data.json'


export default {
  name: 'App',
  components: {
    CardProfile: defineAsyncComponent(() => import('../src/components/CardProfile')),
    CardWork: defineAsyncComponent(() => import('../src/components/CardWork')),
    CardPlay: defineAsyncComponent(() => import('../src/components/CardPlay')),
    CardStudy: defineAsyncComponent(() => import('../src/components/CardStudy')),
    CardExercise: defineAsyncComponent(() => import('../src/components/CardExercise')),
    CardSocial: defineAsyncComponent(() => import('../src/components/CardSocial')),
    CardSelfCare: defineAsyncComponent(() => import('../src/components/CardSelfCare')),
  },

  data() {
    return {
      dataJson,
      activeDaily: true,
      activeWeekly: false,
      activeMonthly: false,
      lastFrecuency: '',
      currentWork: 0,
      previousWork: 0,
      currentPlay: 0,
      previousPlay: 0,
      currentStudy: 0,
      previousStudy: 0,
      currentExercise: 0,
      previousExercise: 0,
      currentSocial: 0,
      previousSocial: 0,
      currentSelfCare: 0,
      previousSelfCare: 0,

    }
  },
  methods: {
    checkDaily(){
      this.activeDaily = true
      this.activeWeekly = false
      this.activeMonthly = false
      this.lastFrecuency = 'Daily'
      this.currentWork = this.dataJson[0].timeframes.daily.current
      this.previousWork = this.dataJson[0].timeframes.daily.previous
      this.currentPlay = this.dataJson[1].timeframes.daily.current
      this.previousPlay = this.dataJson[1].timeframes.daily.previous
      this.currentStudy = this.dataJson[2].timeframes.daily.current
      this.previousStudy = this.dataJson[2].timeframes.daily.previous
      this.currentExercise = this.dataJson[3].timeframes.daily.current
      this.previousExercise = this.dataJson[3].timeframes.daily.previous
      this.currentSocial = this.dataJson[4].timeframes.daily.current
      this.previousSocial = this.dataJson[4].timeframes.daily.previous
      this.currentSelfCare = this.dataJson[5].timeframes.daily.current
      this.previousSelfCare = this.dataJson[5].timeframes.daily.previous
    },

    checkWeekly(){
      this.activeDaily = false
      this.activeWeekly = true
      this.activeMonthly = false
      this.lastFrecuency = 'Weekly'
      this.currentWork = this.dataJson[0].timeframes.weekly.current
      this.previousWork = this.dataJson[0].timeframes.weekly.previous
      this.currentPlay = this.dataJson[1].timeframes.weekly.current
      this.previousPlay = this.dataJson[1].timeframes.weekly.previous
      this.currentStudy = this.dataJson[2].timeframes.weekly.current
      this.previousStudy = this.dataJson[2].timeframes.weekly.previous
      this.currentExercise = this.dataJson[3].timeframes.weekly.current
      this.previousExercise = this.dataJson[3].timeframes.weekly.previous
      this.currentSocial = this.dataJson[4].timeframes.weekly.current
      this.previousSocial = this.dataJson[4].timeframes.weekly.previous
      this.currentSelfCare = this.dataJson[5].timeframes.weekly.current
      this.previousSelfCare = this.dataJson[5].timeframes.weekly.previous
    },

    checkMonthly(){
      this.activeDaily = false
      this.activeWeekly = false
      this.activeMonthly = true
      this.lastFrecuency = 'Monthly'
      this.currentWork = this.dataJson[0].timeframes.monthly.current
      this.previousWork = this.dataJson[0].timeframes.monthly.previous
      this.currentPlay = this.dataJson[1].timeframes.monthly.current
      this.previousPlay = this.dataJson[1].timeframes.monthly.previous
      this.currentStudy = this.dataJson[2].timeframes.monthly.current
      this.previousStudy = this.dataJson[2].timeframes.monthly.previous
      this.currentExercise = this.dataJson[3].timeframes.monthly.current
      this.previousExercise = this.dataJson[3].timeframes.monthly.previous
      this.currentSocial = this.dataJson[4].timeframes.monthly.current
      this.previousSocial = this.dataJson[4].timeframes.monthly.previous
      this.currentSelfCare = this.dataJson[5].timeframes.monthly.current
      this.previousSelfCare = this.dataJson[5].timeframes.monthly.previous

    }


  },

  created() {
    this.checkDaily()
  }

  
}
</script>

<style>

#app {
  font-family: montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color-primary);
  
}

.container-grid {
  margin-top: 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px;
}

@media screen and (min-width: 700px) and (orientation: portrait) {
  .container-grid {
    grid-template-columns: 1fr 1fr;
  }
  
}


@media screen and (min-width: 700px) and (orientation: landscape) {

  .container-grid {
    margin: 10em 7.5em;
    grid-template-columns: 200px repeat(3, 250px);
    grid-template-rows: repeat(2, 90px);
  }

  .column-left {
    display: grid;
    grid-template-rows: 200px;
  }

  .column-right {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: 100px;
    gap: 5.8em 0;
  }
}



@media screen and (min-width: 1100px) and (orientation: landscape) {

  .container-grid {
    margin-left: 15%;
    
  }
}

@media screen and (min-width: 1200px){

  .container-grid {
    margin: 15% 20% 0;
  }
}


@media screen and (min-width: 1400px){

  .container-grid {
    margin-left: 23%;
  }
}


@media screen and (min-width: 1800px) {

  .container-grid {
    margin: 17em 35em ;
  }
}
</style>
