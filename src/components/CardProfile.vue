<template>
  <div class="card-profile-container">
     <div class="card-profile--title">
       <div class="container-image">
        <img src="../assets/images/image-jeremy.png" 
          alt="image-jeremy" 
          class="card-profile-image">
       </div>
       <div class="container--name">
        <h2>Report for</h2>
        <h1>Jeremy Robson</h1>
       </div>
     </div>
    <div class="card-profile--descripcion">
      <p 
        @click="this.$emit('checkDaily')"
        :class="[activeDaily ?'daily' : '' ]">Daily</p>
      <p 
        @click="this.$emit('checkWeekly')"
        :class="[activeWeekly ? 'weekly' : '' ]">Weekly</p>
      <p 
        @click="this.$emit('checkMonthly')"
        :class="[activeMonthly ? 'monthly' : '' ]">Monthly</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeDaily: Boolean,
    activeWeekly: Boolean,
    activeMonthly: Boolean,
  }
}
</script>

<style scoped>

.card-profile-container {
  width: 85%;
  height: 180px;
  background-color: var(--bg-card);  
  border-radius: 10px;
  margin: auto;
}

.card-profile--title{
  display: flex;
  width: 100%;
  background-color: #5746EA;
  border-radius: 10px;
}

.container-image {
  width: 20%;
  height: min-content;
  margin: 1.3em;

}

.card-profile-image  {
  width: 50px;
  border-radius: 100%;
  border: 4px solid white;
}

.container--name {
  display: flex;
  width: 63%;
  margin: 1.8em .2em;
  flex-direction: column;
  text-align: start;
  gap: .4em;
}

.card-profile--title h1 {
  color: var(--text-color-primary);
  font-weight:400;
  font-size: 1.2em;
  margin: 0;
}

.card-profile--title h2 {
  color: var(--text-color-subtitle);
  font-weight: 400;
  font-size: .8em;
  margin: 0;
}

.card-profile--descripcion {
  display: flex;
  margin: 0.4em 1em;
  justify-content: space-between;
  color: var(--text-color-subtitle);
  font-size: 1em;
  font-weight: 500;
}

.card-profile--descripcion p {
  cursor: pointer;
}

.daily,
.weekly,
.monthly {
  color: var(--text-color-primary);
  font-weight: bold;
}


@media screen and (min-width: 700px) and (orientation: landscape) {
  .card-profile-container {
    height: 368px;
  }

  .card-profile--title {
    height: 70%;
    flex-direction: column;
  }

  .card-profile--title h1 {
    font-size: 1.5em;
    font-weight: normal;
  }

  .container--name {
    margin: 0em 1.5em;
  }

  .card-profile--descripcion {
    flex-direction: column;
    margin: .3em 1.3em;
    text-align: start;
  }

  .card-profile--descripcion p {
    margin: .5em;
    font-size: .8em;
  }
}
</style>