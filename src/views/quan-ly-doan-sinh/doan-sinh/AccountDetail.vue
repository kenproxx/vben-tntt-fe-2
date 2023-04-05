<template>
  <PageWrapper :title="`Thông tin tài khoản`" contentBackground @back="goBack">
    <template #extra>
      <a-button type="primary" danger>Chỉnh sửa</a-button>
      <a-button type="primary">Lưu</a-button>
    </template>
    <template #footer>
      <a-tabs default-active-key="detail" v-model:activeKey="currentKey">
        <a-tab-pane key="detail" tab="Chi tiết" />
        <a-tab-pane key="logs" tab="Lịch sử thao tác" />
        <!--        chỉ admin cấp cao mới được quyền xem lịch sử thao tác-->
      </a-tabs>
    </template>
    <div class="pt-4 m-4 desc-wrap">
      <template v-if="currentKey == 'detail'">
        <div v-for="i in 10" :key="i">这是用户{{ userId }}资料Tab</div>
      </template>
      <template v-if="currentKey == 'logs'">
        <div v-for="i in 10" :key="i">这是用户{{ userId }}操作日志Tab</div>
      </template>
    </div>
  </PageWrapper>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { PageWrapper } from '/@/components/Page';
  import { useGo } from '/@/hooks/web/usePage';
  import { useTabs } from '/@/hooks/web/useTabs';
  import { Tabs } from 'ant-design-vue';
  export default defineComponent({
    name: 'AccountDetail',
    components: { PageWrapper, ATabs: Tabs, ATabPane: Tabs.TabPane },
    setup() {
      const route = useRoute();
      const go = useGo();
      // 此处可以得到用户ID
      const userId = ref(route.params?.id);
      const currentKey = ref('detail');
      const { setTitle } = useTabs();
      // TODO
      // 本页代码仅作演示，实际应当通过userId从接口获得用户的相关资料

      // 设置Tab的标题（不会影响页面标题）
      setTitle('详情：用户' + userId.value);

      // 页面左侧点击返回链接时的操作
      function goBack() {
        // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
        go('/system/account');
      }
      return { userId, currentKey, goBack };
    },
  });
</script>

<style></style>
