<template lang="pug">
.input-group
  input.form-control(:type="props.type"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    :autocomplete="props.autocomplete"
    @change="onValueChange($event)")
  .input-group-append(v-if="props.icon")
    .input-group-text
      font-awesome-icon(:icon="props.icon")
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: string,
  icon: string,
  type: string,
  placeholder: string,
  autocomplete: string
}>()

const emit = defineEmits(['update:modelValue'])

const onValueChange = (event: any) => emit('update:modelValue', event.target.value)
</script>
<style lang="sass" scoped></style>
