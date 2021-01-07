import { ref } from '@vue/composition-api'

export const appTitle = ref('Certbot 管理器')
export const setAppTitle = newTitle => (appTitle.value = newTitle)
