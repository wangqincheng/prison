<template>
  <div class="container">
    <div class="title">月度计分考核</div>
    <el-row style="margin:24px 0">

      <el-button class="btn-theme btn-edit" size="small" type="primary" @click="add">
        <img src="@/assets/images/add_icon.png" style="margin-right:5px" width="12" alt />
        新增
      </el-button>
      <el-button class="btn-edit" size="small" plain style="color: #3072D0;
    border-color: #3072D0;">
        <img src="@/assets/images/edit_icon.png" style="margin-right:5px" width="12" alt />
        修改
      </el-button>
      <el-button class="btn-edit" size="small" style="color: #EB5757;
    border-color: #EB5757;" plain>
        <img src="@/assets/images/delete_icon.png" style="margin-right:5px" width="12" alt />
        删除
      </el-button>
    </el-row>
    <el-table :data="tableData" :header-cell-style="{ background: 'linear-gradient(180deg, #40BAFF 0%, #3072D0 100%)', color: '#fff' }" :cell-style="{ color: '#000', 'border-color': '#BDBDBD' }" style="width: 100%;border-bottom:1px solid #BDBDBD">
      <el-table-column type="index" :index="1" label="序号"></el-table-column>
      <el-table-column prop="date" label="犯罪姓名"></el-table-column>
      <el-table-column prop="name" label="犯罪编号"></el-table-column>
      <el-table-column prop="name" label="考核月份"></el-table-column>
      <el-table-column prop="name" label="监管考核分"></el-table-column>
      <el-table-column prop="name" label="教育考核分"></el-table-column>
      <el-table-column prop="name" label="劳动考核分"></el-table-column>
      <el-table-column prop="name" label="本月得分"></el-table-column>
      <el-table-column prop="name" label="是否生效"></el-table-column>
      <el-table-column prop="name" label="录入方式"></el-table-column>
      <el-table-column prop="name" label="创建人"></el-table-column>
    </el-table>
    <div class="pagination-wrap">
      <el-row type="flex" justify="end">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination>
      </el-row>
    </div>

    <el-dialog :visible.sync="dialogVisible">
      <div slot="title">
        <span style="font-size:18px;font-weight:700;color:#fff">提请月考核</span>
      </div>
      <div class="form-wrap">
        <el-form ref="form" :model="form" label-width="120px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="罪犯编号：">
                <el-input size="small" v-model="form.num" style="width:90%"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="罪犯姓名：">
                <el-input size="small" v-model="form.name" style="width:90%"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="考核月份：">
                <el-date-picker size="small" v-model="form.time" type="date" style="width:90%" placeholder="选择日期"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <Divider title="监管改造部分" />
          <el-row>
            <el-col :span="6">
              <el-form-item label="累计加分：">
                <el-input size="small" type="number" v-model="form.addScore1" style="width:100px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="累计扣分：">
                <el-input size="small" type="number" v-model="form.reduce1" style="width:100px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="基础分：">
                <el-input size="small" type="number" v-model="form.baseScore1" style="width:100px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="考核分：">
                <el-input size="small" type="number" v-model="form.assessScore1" style="width:100px"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="其他方面：">
            <el-input size="small" v-model="form.others1" type="number"></el-input>
          </el-form-item>
          <Divider title="教育与文化改造部分" />
          <el-row>
            <el-col :span="6">
              <el-form-item label="累计加分：">
                <el-input size="small" type="number" v-model="form.addScore2" style="width:100px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="累计扣分：">
                <el-input size="small" type="number" v-model="form.reduce2" style="width:100px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="基础分：">
                <el-input size="small" type="number" v-model="form.baseScore2" style="width:100px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="考核分：">
                <el-input size="small" type="number" v-model="form.assessScore2" style="width:100px"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="思想教育得分：">
            <el-input size="small" type="number" v-model="form.thought"></el-input>
          </el-form-item>
          <el-form-item label="其他方面：">
            <el-input size="small" type="number" v-model="form.others2"></el-input>
          </el-form-item>

          <Divider title="劳动改造考核" />
          <el-row>
            <el-col :span="6">
              <el-form-item label="累计加分：">
                <el-input size="small" type="number" v-model="form.addScore3" style="width:100px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="累计扣分：">
                <el-input size="small" type="number" style="width:100px" v-model="form.reduce3"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="基础分：">
                <el-input size="small" type="number" style="width:100px" v-model="form.baseScore3"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="考核分：">
                <el-input size="small" type="number" style="width:100px" v-model="form.assessScore3"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="记0分天数：">
            <el-input size="small" type="number" v-model="form.zero"></el-input>
          </el-form-item>
          <el-form-item label="辅助岗位1：">
            <el-input size="small" type="number" v-model="form.station1"></el-input>
          </el-form-item>
          <el-form-item label="辅助岗位2：">
            <el-input size="small" type="number" v-model="form.station2"></el-input>
          </el-form-item>
          <el-form-item label="直接劳动岗位：">
            <el-input size="small" type="number" v-model="form.station"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="6">
              <el-form-item label="工时定额：">
                <el-input size="small" type="number" style="width:100px" v-model="form.workTime"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="完成工时：">
                <el-input size="small" type="number" style="width:100px" v-model="form.finishTime"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="超（欠）产：">
                <el-input size="small" type="number" style="width:100px" v-model="form.debt"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="劳动类型：">
                <el-select size="small" v-model="form.labourValue" filterable placeholder="请选择">
                  <el-option v-for="item in labourOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="其他方面：">
            <el-input size="small" type="number" v-model="form.others3"></el-input>
          </el-form-item>

          <Divider title="其他情形" />
          <el-row>
            <el-col :span="6">
              <el-form-item label="专项加分：">
                <el-input size="small" type="number" v-model="form.special" style="width:100px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="处罚扣分：">
                <el-input size="small" type="number" style="width:100px" v-model="form.punish"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="补回基础分：">
                <el-input size="small" type="number" style="width:100px" v-model="form.compensateScore"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="补分考核分：">
                <el-input size="small" type="number" style="width:100px" v-model="form.compensateAssess"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="当月得分：">
                <el-input size="small" type="number" style="width:100px" v-model="form.monthScore"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="考核扣分：">
                <el-input size="small" type="number" style="width:100px" v-model="form.assessReduce"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="提请建议：">
            <el-input size="small" type="textarea" v-model="form.suggest"></el-input>
          </el-form-item>
          <el-form-item label="备注：">
            <el-input size="small" type="textarea" v-model="form.remark"></el-input>
          </el-form-item>
          <el-row type="flex" justify="end">
            <el-form-item>
              <el-button size="small" @click="handleCancle">取消</el-button>
              <el-button class="btn-theme" size="small" type="primary" @click="confirm">确认</el-button>
            </el-form-item>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Divider from '@/components/Divider'
export default {
  name: 'AssessIndex',
  components: {
    Divider
  },
  data() {
    return {
      form: {},
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
      dialogVisible: false,
      labourOptions: [{
        value: '选项1',
        label: '劳动类型1'
      }],
      labourValue: ''
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    add() {
      this.dialogVisible = true
    },
    confirm() {
      this.dialogVisible = false
    },
    handleCancle() {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  // height: 100vh;

  .title {
    font-size: 24px;
    text-align: center;
    padding-top: 16px;
  }
  .pagination-wrap {
    margin-top: 100px;
  }
  // ::v-deep .el-dialog__body {
  //   padding: 30px 220px;
  // }
  ::v-deep .el-dialog {
    min-width: 1148px;
    .el-dialog__header {
      background: #3072d0;
    }
  }
  .form-title {
    margin: 0;
    padding: 20px 0;
    border-bottom: 0.5px solid #e0e0e0;
  }
  ::v-deep .btn-edit {
    margin-right: 14px;
    span {
      display: flex;
    }
  }
  .form-wrap {
    padding: 20px 0;
  }
}
</style>

