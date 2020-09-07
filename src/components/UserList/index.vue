<template>
  <div class="userlist">
      <div class="role">Disponível - 1</div>
      <UserRow nickname="Natália fs"/>
      <div class="role">Offline</div>
      <UserRow nickname="Jane Doe"/>
      <UserRow nickname="John Doe" isBot/>
      <UserRow nickname="Natalia, the dev"/>
      <UserRow nickname="Devzinho Vue"/>
      <UserRow nickname="O mago do CSS3"/>
      <UserRow nickname="Fullstack Silva"/>
      <UserRow nickname="Front desempregado"/>
      <UserRow nickname="Bot Github" isBot/>
      <UserRow nickname="Maikel Neris Vue"/>
      <UserRow nickname="Another dev Santos Silva"/>
      <UserRow nickname="Another bot" isBot/>
      <UserRow nickname="Deschamps"/>
  </div>
</template>

<script>
import UserRow from './UserRow'
export default {
    components: {
        UserRow,
    }
}
</script>

<style lang="scss" scoped>
.userlist{
    grid-area: UL;
    display: flex;
    flex-direction: column;
    padding: 3px 6px 10px 16px;
    background-color: var(--secondary);
    max-height: calc(100vh - 46px);
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 4px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: var(--tertiary);
        border-radius: 4px;
    }
    &::-webkit-scrollbar-track{
        background-color: var(--secondary);
    }
}
.role{
    margin-top: 20px;
    color: var(--gray);
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
}
</style>