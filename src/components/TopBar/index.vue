<script setup lang="ts">
import MobComp from './MobComp.vue';
import PcComp from './PCComp.vue';
import { useAppStore } from '@store/appStore';
const appStore = useAppStore();
</script>

<template>
  <MobComp v-if="appStore.curDevice === 'phone'" />
  <PcComp v-else />
</template>

<style lang="scss" scoped></style>
