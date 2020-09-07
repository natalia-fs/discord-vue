<template>
  <div id="grid">
    <ServerList />
    <ServerName />
    <ChannelList />
    <UserInfo />
    <ChannelInfo />
    <ChannelData />
    <UserList />
  </div>
</template>

<script>
import ServerList from './Components/ServerList';
import ServerName from './Components/ServerName';
import ChannelList from './Components/ChannelList';
import UserInfo from './Components/UserInfo';
import ChannelInfo from './Components/ChannelInfo';
import ChannelData from './Components/ChannelData';
import UserList from './Components/UserList';

export default {
  components: {
    ServerList,
    ServerName,
    ChannelList,
    UserInfo,
    ChannelInfo,
    ChannelData,
    UserList,
  }
}
</script>

<style scoped>
#grid{
  display: grid;
  height: 100vh;
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  grid-template-areas:
    "SL SN CI CI"
    "SL CL CD UL"
    "SL UI CD UL"
  ;
}
</style>