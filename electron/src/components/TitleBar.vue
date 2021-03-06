<template>
    <header id="titlebar">
        <div id="drag-region" class="drag-region">
            <div v-if="backArrowVisible" class="back-icon no-drag" @click="back">
                <i class="el-icon-back"></i>
            </div>

            <span class="ml-4 text-2xl text-green-200">{{ appTitle }}</span>

            <div id="window-controls" class="no-drag">
                <div class="button" id="min-button" @click="min">
                    <img class="icon" :src="require('../assets/icons/min-w-30.png')" draggable="false" />
                </div>

                <div class="button" id="restore-button" v-if="isMax" @click="restore">
                    <img class="icon" :src="require('../assets/icons/restore-w-30.png')" draggable="false" />
                </div>
                <div class="button" id="max-button" v-else @click="max">
                    <img class="icon" :src="require('../assets/icons/max-w-30.png')" draggable="false" />
                </div>

                <div class="button" id="close-button" @click="exit">
                    <img class="icon" :src="require('../assets/icons/close-w-30.png')" draggable="false" />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { appTitle } from '@/compositions/useTitle'
import { backArrowVisible } from '@/compositions/useBackArrow'
import { min, max, back, restore, exit } from '@/ipcRenderer/titlebar'

export default {
    name: 'TitleBar',
    setup() {
        return { backArrowVisible, appTitle }
    },
    methods: {
        back,
        min,
        max() {
            max()
            this.isMax = true
        },
        restore() {
            restore()
            this.isMax = false
        },
        exit,
    },
    data() {
        return {
            isMax: false,
        }
    },
}
</script>

<style scoped>
.back-icon {
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    font-size: 30px;
    color: #ffffff;
    border-radius: 50%;
    transition: all 0.2s;
}

.back-icon:hover {
    background-color: #b6b4b4;
}

.back-icon:active {
    background-color: #939292;
}

.drag-region {
    -webkit-app-region: drag;
}

.no-drag {
    -webkit-app-region: no-drag;
}

#titlebar {
    user-select: none;
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
    display: flex;
    align-items: center;
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

#max-button,
#restore-button {
    grid-column: 2;
}

#close-button {
    grid-column: 3;
}

#close-button:hover {
    background: #e81123 !important;
}

#close-button:active {
    background: #f1707a !important;
}

#close-button:active .icon {
    filter: invert(1);
}
</style>
