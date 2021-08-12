<template>
  <div class="deduct-container">
    <div class="title">扣分提请</div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="罪犯姓名/编号：">
            <a-input placeholder="Basic usage" style="width:200px; margin:10px  " />

            <el-input size="small" v-model="form.name1" style="width:100%"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所属日期：">
            <el-date-picker size="small" v-model="form.name2" type="date" style="width:100%" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="劳动类型：">
            <el-select size="small" style="width:100%" v-model="laborValue" filterable placeholder="请选择">
              <el-option v-for="item in laborTpye" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="考核依据：">
        <el-input size="small" v-model="form.name3" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="分值：">
        <el-input size="small" v-model="form.name4" type="number"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="监区分支：">
            <el-select size="small" style="width:100%" v-model="form.name5" filterable placeholder="请选择">
              <el-option v-for="item in prisonTpye" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="科室分支：">
            <el-select size="small" style="width:100%" v-model="form.name6" filterable placeholder="请选择">
              <el-option v-for="item in officesTpye" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="本月成绩：">
        <el-input size="small" v-model="form.name7" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="扣分事实：">
        <el-input size="small" v-model="form.name8" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="扣分事实：">
        <el-input size="small" v-model="form.name9" placeholder="请双击选择常用词"></el-input>
      </el-form-item>
      <el-form-item label="备注：">
        <el-input size="small" v-model="form.name10" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="上传文件：">
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
          <el-button class="btn-theme" size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-row type="flex" justify="center">
        <el-form-item>
          <el-button style="width:220px" size="small" class="btn-theme" type="primary">提请</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {

      },
      laborTpye: [{
        value: '选项1',
        label: '监管分'
      }],
      laborValue: '',

      prisonTpye: [{
        value: '选项1',
        label: '分管监政管理副监区长'
      }],
      prisonValue: '',

      officesTpye: [{
        value: '选项1',
        label: '狱政管理负责人'
      },],
      officesValue: '',

      fileList: []
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
}
</script>

<style lang="scss" scoped>
.deduct-container {
  padding: 20px 200px !important;
  .title {
    font-size: 24px;
    text-align: center;
    padding-top: 16px;
    padding-bottom: 36px;
  }
}
</style>