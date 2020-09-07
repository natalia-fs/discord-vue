<template>
  <div class="container">
    <div class="icon">
      <Hashtag :size="24" />
    </div>
    <div class="title">chat Livre</div>
    <div class="separator"></div>
    <div class="description">Canal aberto para conversas</div>
  </div>
</template>

<script>
import Hashtag from "vue-material-design-icons/Pound";
export default {
  components: {
    Hashtag
  }
};
</script>

<style lang="scss" scoped>
.container {
  grid-area: CI;
  background: var(--primary);
  display: flex;
  align-items: center;
  padding: 0 17px;
  box-shadow: rgba(0, 0, 0, .6) 0 1px 0 0;
  z-index: 2;
}
.title {
  color: var(--white);
  font-size: 16px;
  margin-left: 9px;
  font-weight: bold;
}
.description {
  color: var(--gray);
  font-size: 15px;
  cursor: pointer;
}
.separator {
  background: var(--primary);
  height: 24px;
  width: 1px;
  opacity: 0.2;
  margin: 0 13px;
}
.icon {
  color: var(--symbol);
}
</style>
