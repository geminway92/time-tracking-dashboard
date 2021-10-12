<template>
    <div class="card">
        <div class="container-logo">
           <img src="../assets/images/icon-study.svg" alt="">
        </div>
        <div class="container-info">
            <div class="work-left">
              <h1>Study</h1>
              <h2>{{currentStudy}}hrs</h2>
            </div>
            <div class="work-right">
              <img src="../assets/images/icon-ellipsis.svg" alt="" class="ellipsis">
              <h3 class="frecuency">Last {{lastFrecuency}} - {{previousStudy}}hrs</h3>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentStudy: Number,
        previousStudy: Number,
        lastFrecuency: String
    }
}
</script>

<style scoped>

.card {
    width: 85%;
    height: 100px;
    border-radius: 10px;
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: #FF5E7D;  
    margin-bottom: 3.5em;
} 

.container-logo {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.container-logo img {
    width: 140px;
    height: 90px;
    margin-left: 50%;
    object-position: 2em -.5em;
    object-fit:scale-down;
}

.container-info {
    display: flex;
    height: 300px;
    position: relative;
    border-radius: 10px;
    background-color: var(--bg-card);
    bottom:60%;
    justify-content: space-between;
}


.work-left {
    flex-direction: column;
    margin: 1em;
    text-align: start;
}

.work-left h1 {
    font-size: 1em;
    margin: .3em 0;
}

.work-left h2 {
    font-size: 1.5em;
    font-weight: normal;
    margin: .3em 0;

}

.work-right h3 {
    color: var(--text-color-subtitle);
    font-size: .9em;
    font-weight: normal;
}

.work-right {
    position: relative;
    height: min-content;
    flex-direction: column;
    text-align: end;
    top: 1.2em;
    right: 1.2em;
}

.work-right img {
    width: 15%;
}

@media screen and (min-width: 700px) and (orientation: landscape) {

    .container-info {
        min-height: 140px;
        width: 100%;
    }

    .container-info:hover {
        cursor: pointer;
        background-color: #34397B;

    }
    
    .container-logo img {
        margin-left: 30%;
    }

    .container-info h1 {
        font-size: .7em;
    }

    .container-info h2 {
        font-size: 2.5em;
        width: 150px;
    }

    .work-right {
        font-size: .8em;
    }
    .frecuency {
        width: 180px;
        position: relative;
        top: 6em;
        text-align: start;
        right: 12.5em;

    }
    
    .ellipsis {
        width: 100%;
        object-fit: scale-down;
        position: absolute;
        right: 15em;
    }

    .ellipsis:hover {
        cursor: pointer;
        object-fit: initial;
    }
    
}

</style>