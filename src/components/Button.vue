<template lang="pug">

button(:class="{ 'btn': true, 'btn-block': props.block }" :type="props.type" :disabled="isDisabled()")
  font-awesom-icon.font-awesome-icon.mr-2(v-if="props.icon" :icon="['fab', props.icon]")
  slot
  .spinner-border.ml-2(v-if="props.loading" role="status")
    span.sr-only {{ $t("labels.loading") }}

</template>
<script lang="ts" setup>
const props = withDefaults(defineProps<{
  icon?: string,
  type: 'submit' | 'reset' | 'button',
  block: string,
  theme?: string,
  loading: boolean,
  disabled: boolean
}>(), {
  type: 'button',
  loading: false,
  disabled: false
})
const isDisabled = () => props.loading || props.disabled

</script>
<style lang="sass" scoped>
.btn
  display: flex
  justify-content: center
  align-items: center
.spinner-border
  border-width: 0.15em
  width: 1rem
  height: 1rem
</style>
