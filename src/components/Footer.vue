<template lang="pug">
footer.main-footer
  strong
    span {{ $t("labels.copyright") }} &copy; {{ currentYear }}
    span .
  .float-right.d-none.d-sm-inline-block
    b {{ $t("labels.version") }}
    span :&nbsp;1.0
</template>
<script lang="ts" setup>
import { DateTime } from 'luxon'
const currentYear: string = DateTime.now().toFormat('y')
</script>
<style lang="sass" scoped></style>
