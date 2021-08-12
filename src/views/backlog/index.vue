<template>
  <div class="backlog-container">
    <div class="title">待办列表</div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row>
        <el-col :span="5">
          <el-form-item label="任务名称：">
            <el-input v-model="form.name" size="small"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="所属对别：">
            <el-select size="small" v-model="form.rightValue" filterable placeholder="请选择">
              <el-option v-for="item in rightTpye" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="提交日期：">
            <el-date-picker size="small" style="width:96%" v-model="form.data" type="daterange" range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="流程类型：">
            <el-select size="small" v-model="form.flowValue" filterable placeholder="请选择">
              <el-option v-for="item in flowTpye" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="5">
          <el-form-item label="分值：">
            <el-input type="number" v-model="form.scoreStart" size="small" style="width:41.9%"></el-input>
            <span style="margin:0 10px;color:#999">—</span>
            <el-input type="number" v-model="form.scoreEnd" size="small" style="width:41.9%"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="状态：">
            <el-select size="small" v-model="form.statusValue" filterable placeholder="请选择">
              <el-option v-for="item in statusTpye" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="数据类型：">
            <el-select size="small" v-model="form.dataValue" filterable placeholder="请选择">
              <el-option v-for="item in dataTpye" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="排序列：">
            <el-select size="small" v-model="form.sortValue" filterable placeholder="请选择">
              <el-option v-for="item in sortTpye" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-button class="btn btn-active btn-theme">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-row style="margin-bottom:24px;">
      <el-button v-for="(item,index) in btnList" :key="index" class="btn" :class="{ ' btn-active': index == activeIndex }" @click="activeIndex = index">
        <!-- <i :class="['iconfont', item.icon]"></i> -->
        <img :src="item.icon" width="14" style="margin-right:5px" alt />
        <!-- <i v-if="item.name !== '单个审批'" :class="['iconfont', item.icon]"></i> -->
        <!-- <img v-else src="@/assets/images/Group 48.png" alt /> -->
        {{ item.name }}
      </el-button>
    </el-row>
    <el-table :data="tableData" :header-cell-style="{ background: 'linear-gradient(180deg, #40baff 0%, #3072d0 100%)', color: '#fff' }" :cell-style="{ color: '#000', borderColor: '#BDBDBD' }" style="width: 100%;border-bottom:1px solid #BDBDBD">
      <el-table-column type="selection"></el-table-column>
      <el-table-column type="index" :index="1" label="序号"></el-table-column>
      <el-table-column prop="date" label="流程名称"></el-table-column>
      <el-table-column prop="name" label="分值"></el-table-column>
      <el-table-column prop="name" label="任务名称"></el-table-column>
      <el-table-column prop="name" label="数据类型"></el-table-column>
      <el-table-column prop="name" label="当前环节"></el-table-column>
      <el-table-column prop="name" label="发起人"></el-table-column>
      <el-table-column prop="name" label="提交时间"></el-table-column>
      <el-table-column prop="name" label="状态"></el-table-column>
      <el-table-column prop="name" label="所属队别"></el-table-column>
      <el-table-column prop="name" label="条款依据"></el-table-column>
      <el-table-column prop="name" label="认定理由"></el-table-column>
    </el-table>

    <div class="pagination-wrap">
      <el-row type="flex" justify="end">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      rightTpye: [{ value: 'all', label: '全部' }],
      rightValue: '',
      flowTpye: [{ value: 'all', label: '全部' }],
      flowValue: '',
      statusTpye: [{ value: 'all', label: '全部' }],
      statusValue: '',
      dataTpye: [{ value: 'all', label: '全部' }],
      dataValue: '',
      sortTpye: [{ value: 'all', label: '提交时间降序' }],
      sortValue: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      currentPage4: 4,
      btnList: [
        { name: '接收', icon: require('@/assets/images/receive_icon.png') },
        { name: '单个审批', icon: require('@/assets/images/Single_approval_icon.png') },
        { name: '批量审批', icon: require('@/assets/images/batch_icon.png') },
        { name: '流程跟踪', icon: require('@/assets/images/Single_approval_icon1.png') },
      ],
      activeIndex: 0
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 36px;
}
.pagination-wrap {
  margin-top: 100px;
}

::v-deep .btn {
  padding: 7px 33px;
  margin-right: 14px;
  // background-color: #3072d0;
  color: #3072d0;
  border-color: #3072d0;
  span {
    display: flex;
    align-items: center;
  }
  &.btn-active {
    background: linear-gradient(180deg, #40baff 0%, #3072d0 100%);
    color: #fff;
  }
}
</style>