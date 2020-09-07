<template>
  <div class="channel-list">
    <div class="category">
      <div>Canais de Texto</div>
      <div class="category-icon">
        <AddCategoryIcon :size="21" />
      </div>
    </div>
    <ChannelButton selected channelName="chat-livre" />
    <ChannelButton channelName="cursos" />
    <ChannelButton channelName="javascript" />
    <ChannelButton channelName="jogos" />
    <ChannelButton channelName="node" />
    <ChannelButton channelName="react" />
    <ChannelButton channelName="typescript" />
    <ChannelButton channelName="vue" />
  </div>
</template>

<script>
import AddCategoryIcon from "vue-material-design-icons/Plus";
import ChannelButton from "./ChannelButton";
export default {
  components: {
    AddCategoryIcon,
    ChannelButton,

  }
};
</script>

<style scoped lang="scss">
.channel-list {
  grid-area: CL;
  display: flex;
  flex-direction: column;
  padding: 24px 10px 0 16px;
  background-color: var(--secondary);
}

.category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  color: var(--gray);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;

  .category-icon{
    color: var(--symbol);
    cursor: pointer;
  }
}
</style>
