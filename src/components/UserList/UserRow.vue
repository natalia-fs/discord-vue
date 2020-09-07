<template>
  <div class="userrow">
    <div class="avatar" :class="{ 'bot-avatar' : isBot }"></div>
    <strong>{{ nickname }}</strong>
    <div class="bot" v-if="isBot">Bot</div>
  </div>
</template>

<script>
export default {
  props: {
    isBot: Boolean,
    nickname: String
  }
};
</script>

<style lang="scss" scoped>
.userrow {
  display: flex;
  margin-top: 5px;
  padding: 5px;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  background: transparent;
  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--primary);
  }

  .bot-avatar {
    background-color: var(--mention-detail);
  }

  .bot {
    margin-left: 9px;
    background-color: var(--discord);
    color: var(--white);
    padding: 4px 5px;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
}
</style>
