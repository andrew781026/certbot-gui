import {ref} from "@vue/composition-api";

export const backArrowVisible = ref(false);
export const showBackArrow = () => backArrowVisible.value = true;
export const hideBackArrow = () => backArrowVisible.value = false;

