<template lang="pug">
.form-group
  label.select-label(:for="ID")
    slot
  select(:class="{ 'form-control': type === 'default', 'custom-select': type === 'custom' }" :id="ID" :name="ID" :disabled="disabled")
    option(:selected="isNoneSelected") None
    option(v-for="option in options" :value="option.value" :selected="modelValue === option.value") {{ option.label }}
</template>
<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid'

export interface Option {
  label: string
  value: any
}

const props = withDefaults(defineProps<{
  modelValue?: string
  disabled?: boolean
  type?: string
  options: Array<Option>
}>(), {
  disabled: false,
  type: 'default'
})

let ID: string = uuidv4()
let modelValue: string | undefined = props.modelValue
let disabled: boolean = props.disabled
let type: string = props.type
let options: Array<Option> = props.options

const emit = defineEmits(['update:modelValue'])

const onValueChange = (event: any) => {
  emit('update:modelValue', event.target.checked)
}
const isNoneSelected = () => {
  return !modelValue || options.findIndex(
    (option) => option.value === modelValue
  ) < 0
}
</script>
<style lang="sass" scoped>
.form-group
  .select-label
    font-weight: 500 !important
</style>
