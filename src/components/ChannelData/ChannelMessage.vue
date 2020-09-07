<template>
  <div class="channel-message" :class="{ 'has-mention': hasMention }">
    <div class="avatar" :class="{ 'bot-avatar': isBot }"></div>
    <div class="message">
      <div class="user">
        <strong>{{ author }}</strong>
        <span class="bot" v-if="isBot">Bot</span>
        <span class="date">{{ date }}</span>
      </div>
      <div class="body">{{msg ? (hasMention ? `${msg}, ` : msg) : 'Mensagem'}} <span v-if="hasMention" class="mention">@here</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    date: String,
    hasMention: Boolean,
    isBot: Boolean,
    msg: String,
  }
};
</script>

<style lang="scss" scoped>
.channel-message {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-right: 4px;
  background-color: transparent;
  margin-top: 10px;
  margin-top: 5px;

  &:hover {
    background-color: var(--quaternary);
  }

  &.has-mention {
    background-color: var(--mention-message);
    border-left: solid 2px var(--mention-detail);

    &:hover{
      background-color: var(--mention-message);
      filter: brightness(105%);
    }
  }
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--secondary);
  flex-shrink: 0;

  &.bot-avatar {
    background-color: var(--mention-detail);
  }
}

.message {
  margin-left: 17px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  line-height: 1.4rem;
  min-height: 1.4rem;

  strong {
    color: var(--white);
    font-size: 16px;
  }

  .bot {
    margin-left: 9px;
    background-color: var(--discord);
    color: var(--white);
    padding: 4px 5px;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: bold;
  }

  .date {
    margin-left: 6px;
    color: var(--gray);
    font-size: 13px;
  }

  .body {
    color: var(--white);
    text-align: left;
    font-size: 16px;

    .mention{
      color: var(--link);
      cursor: pointer;
      transition: .2s;

      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>
