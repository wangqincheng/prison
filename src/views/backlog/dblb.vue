<template>
  <div class="warp">
    <div style="margin-bottom:15px">
      <a-button type="primary" @click="add" icon="plus">
        Primary
      </a-button>
      <a-button type="danger" icon="delete" ghost style="margin-left:10px">
        Danger
      </a-button>
      <a-button type="primary" icon="edit" ghost style="margin-left:10px">
        Primary
      </a-button>
    </div>
    <a-table :columns="columns" :customRow="customRow" :data-source="data">
    </a-table>
    <ykh ref="ykh"></ykh>
  </div>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];
const customRow = (record) => {
  return {
    on: { // 事件
      click: (event) => {
        document.querySelectorAll('.ant-table-row-level-0').forEach(e => {
          e.style.backgroundColor = "#fff"
        })
        event.path[1].style.backgroundColor = "#c3e2ff"
      },
    },

  };

}

// )};
import ykh from './ykh(1).vue'
export default {
  data() {
    return {
      data,
      columns,
      customRow
    };
  },
  components: {
    ykh
  },
  methods: {
    add() {
      this.$refs.ykh.visible = true
    }
  }
};
</script>
<style lang="scss" scoped>
.warp {
  background-color: #fff;
}
</style>
