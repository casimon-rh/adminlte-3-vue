<template lang="pug">
section.content-header
  .container-fluid
    .row.mb-2
      .col-sm-6
        h1 {{ $t("labels.profile") }}
      .col-sm-6
        ol.breadcrumb.float-sm-right
          li.breadcrumb-item
            a(href="#") Home
          li.breadcrumb-item.active {{ $t("labels.userProfile") }}
section.content
  .container-fluid
    .card
      .card-header
        h3.card-title Title
        .card-tools
          button.btn.btn-tool(data-widget="collapse" data-toggle="tooltip" title="Collapse" type="button")
            i.fa.fa-minus
          button.btn.btn-tool(data-widget="remove" data-toggle="tooltip" title="Remove" type="button")
            i.fa.fa-times
      .card-body Start creating your amazing application!
      .card-footer
</template>
<script lang="ts" setup>
</script>
<style lang="sass" scoped>
</style>
