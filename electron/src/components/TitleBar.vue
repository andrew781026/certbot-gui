<template>
  <header id="titlebar">
    <div id="drag-region" class="drag-region">
      <div id="window-controls" class="no-drag">

        <div class="button" id="min-button">
          <img class="icon" :src="require('../assets/icons/min-w-30.png')" draggable="false"/>
        </div>

        <div class="button" id="restore-button" v-if="isMax" @click="isMax = false">
          <img class="icon" :src="require('../assets/icons/restore-w-30.png')" draggable="false"/>
        </div>
        <div class="button" id="max-button" v-else @click="isMax = true">
          <img class="icon" :src="require('../assets/icons/max-w-30.png')" draggable="false"/>
        </div>

        <div class="button" id="close-button">
          <img class="icon" :src="require('../assets/icons/close-w-30.png')" draggable="false"/>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TitleBar",
  data() {

    return {
      isMax: false
    }
  }
}
</script>

<style scoped>

.drag-region {
  -webkit-app-region: drag;
}

.no-drag {
  -webkit-app-region: no-drag;
}

#titlebar {
  position: relative;
  display: block;
  height: 50px;
  width: 100%;
  background: #254053;
  padding: 8px 0 8px 0;
}

#titlebar #drag-region {
  width: 100%;
  height: 100%;
}

#window-controls {
  display: grid;
  grid-template-columns: repeat(3, 46px);
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}

#window-controls .button {
  grid-row: 1 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
}

#window-controls .button:hover {
  background: rgba(255, 255, 255, 0.1);
}

#window-controls .button:active {
  background: rgba(255, 255, 255, 0.2);
}

#min-button {
  grid-column: 1;
}

#max-button, #restore-button {
  grid-column: 2;
}

#close-button {
  grid-column: 3;
}

#close-button:hover {
  background: #E81123 !important;
}

#close-button:active {
  background: #F1707A !important;
}

#close-button:active .icon {
  filter: invert(1);
}

</style>