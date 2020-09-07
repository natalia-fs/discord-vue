<template>
  <div class="channel-data">
    <div class="messages">
      <ChannelMessage author="John Doe" date="01/09/2020" isBot hasMention msg="A wild bot appeared"></ChannelMessage>
      <ChannelMessage author="Jane Doe" date="02/09/2020" hasMention msg="Olha isso aqui">
      </ChannelMessage>
      <ChannelMessage author="John Doe" date="01/09/2020" isBot msg="Sou o melhor bot por aqui"></ChannelMessage>
      <ChannelMessage
        v-for="(messages, index) in 15"
        :key="index"
        author="Natália fs"
        date="05/09/2020"
        msg="Clonei o Discord com VueJS">
      </ChannelMessage>
    </div>
    <div class="input-wrapper">
      <input type="text" placeholder="Conversar em #chat-livre" />
      <div class="icon">
        <At :size="24" />
      </div>
    </div>
  </div>
</template>

<script>
import ChannelMessage from './ChannelMessage';
import At from "vue-material-design-icons/At";
export default {
  components: {
    ChannelMessage,
    At,
  }
};

</script>

<style lang="scss" scoped>
.channel-data {
  grid-area: CD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary);
  flex: 1;
}
.messages {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 46px - 68px);
    max-height: calc(100vh - 46px - 68px);
    overflow-y: scroll;

    .channel-message:first-child{
        margin-top: 0;
    }

    &::-webkit-scrollbar{
        width: 8px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: var(--tertiary);
        border-radius: 4px;
    }
    &::-webkit-scrollbar-track{
        background-color: var(--secondary);
    }
}
.input-wrapper {
  width: 100%;
  padding: 0 16px;
  height: 68px;

  input {
    color: var(--white);
    width: 100%;
    height: 44px;
    padding: 0 10px 0 57px;
    border-radius: 5px;
    background-color: var(--chat-input);
    position: relative;

    &::placeholder {
        color: var(--gray);
    }
  }
  .icon{
      color: var(--gray);
      position: relative;
      top: -50%;
      left: 14px;
      transition: .2s;
      width: 24px;
  }
}
</style>
