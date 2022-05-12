<template lang="pug">
section.content-header
  .container-fluid
    .row.mb-2
      .col-sm-6
        h1 {{ $t("labels.dashboard") }}
      .col-sm-6
        ol.breadcrumb.float-sm-right
          li.breadcrumb-item
            router-link(to="/") {{ $t("labels.home") }}
          li.breadcrumb-item.active Dashboard v1
section.content
  .container-fluid
    .row
      .col-lg-3.col-6
        .small-box.bg-info
          .inner
            h3 150
            p New Orders
          .icon
            i.ion.ion-bag
          router-link.small-box-footer(to="/") More info 
            i.fas.fa-arrow-circle-right
      .col-lg-3.col-6
        .small-box.bg-success
          .inner
            h3 53
              sup(style="font-size: 20px") %
            p Something
          .icon
            i.ion.ion-stats-bars
          router-link.small-box-footer(to="/") More info 
            i.fas.fa-arrow-circle-right
      .col-lg-3.col-6
        .small-box.bg-warning
          .inner
            h3 44
            p User Registrations
          .icon
            i.ion.ion-person-add
          router-link.small-box-footer(to="/") More info 
            i.fas.fa-arrow-circle-right
      .col-lg-3.col-6
        .small-box.bg-danger
          .inner
            h3 65
            p Unique Visitors
          .icon
            i.ion.ion-pie-graph
          router-link.small-box-footer(to="/") More info 
            i.fas.fa-arrow-circle-right
</template>
<script lang="ts" setup>
</script>
<style lang="sass" scoped>
</style>
