<template lang="pug">

div(:class="{ 'icheck-primary': type === 'icheck', 'form-check': type === 'default', 'custom-control custom-checkbox': type === 'custom' }")
  input(type="checkbox" :id="ID"
    :class="{ 'form-check-input': type === 'default', 'custom-control-input': type === 'custom' }"
    :checked="modelValue" @change="onValueChange($event)")
  label(:for="ID"
    :class="{ 'form-check-label': type === 'default', 'custom-control-label': type === 'custom' }")
    slot
  
</template>
<script lang="ts" setup>

import { v4 as uuidv4 } from 'uuid'
const props = withDefaults(defineProps<{
  modelValue?: boolean,
  type?: string
}>(), {
  type: 'default'
})
const emit = defineEmits(['update:modelValue'])
const ID: string = uuidv4()
let modelValue: boolean
const type: string = props.type

const onValueChange = (event: any) => {
  emit('update:modelValue', event.target.checked)
}
</script>
<style lang="sass" scoped>
</style>
