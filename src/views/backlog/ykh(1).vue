<template>
  <div class="container">
    <div class="title">月考核提请</div>
    <div class="warp" style="padding-left: 20px;padding-right: 20px">
      <div style="margin-bottom:15px">
        <a-row>
          <a-button type="primary" icon="plus" ghost style="margin-left:10px" @click="showModal(0)">增加</a-button>
          <a-button type="primary" icon="edit" ghost style="margin-left:10px" @click="showModal(1)">修改</a-button>
          <a-popconfirm title="确定要删除选中的月考核记录？" ok-text="Yes" cancel-text="No" @confirm="confirmDelect" @cancel="cancel" okText="确认" cancelText="取消">
            <a-button type="danger" icon="delete" ghost style="margin-left:10px">
              删除
            </a-button>
          </a-popconfirm>
        </a-row>
      </div>
      <a-table :columns="columns" :data-source="columnsdata" :scroll="{ x:200 }" rowKey='oid' :pagination="false" :loading="loading" :customRow="customRow" size="small" bordered>
      </a-table>

      <a-modal :title="tctitle" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk" @cancel="handleCancel" width="860px">
        <a-spin :spinning="spinning">
          <div class="form-wrap">
            <a-form v-bind="layout">
              <a-row>
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">罪犯编号：</h3>
                </a-col>
                <a-col :span="4">
                  <a-input size="small" disabled v-model="bh"></a-input>
                </a-col>
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">罪犯姓名：</h3>
                </a-col>
                <a-col :span="4">
                  <a-input size="small" readOnly v-model="xm"></a-input>
                </a-col>
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">罪犯姓名：</h3>
                </a-col>
                <a-col :span="4">
                  <a-month-picker size="small" :disabled="disabled" style="width: 100%" v-model="khny" />
                </a-col>
                <!-- <a-col :span="8">
                  <a-form-item label="罪犯姓名：">
                    <a-input size="small" readOnly v-model="xm"></a-input>
                  </a-form-item>
                </a-col> -->
                <!-- <a-col :span="8">
                  <a-form-item label="考核月份：">
                    <a-month-picker size="small" :disabled="disabled" style="width: 100%" v-model="khny" />
                  </a-form-item>
                </a-col> -->
              </a-row>
              <Divider title="监管改造部分" />
              <a-row style="padding-bottom: 5px">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">累计加分：</h3>
                </a-col>
                <a-col span="2">
                  <a-input :min="0" readOnly v-model="jgljjf" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">累计扣分：</h3>
                </a-col>
                <a-col span="3">
                  <a-input readOnly v-model="jgljkf" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">基础分：</h3>
                </a-col>
                <a-col span="3">
                  <a-input-number :min="0" v-model="jgjcf" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">考核分：</h3>
                </a-col>
                <a-col span="3">
                  <a-input readOnly v-model="jgkhf" />
                </a-col>
              </a-row>
              <a-row style=" ">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">其他方面：</h3>
                </a-col>
                <a-col span="20">
                  <a-input v-model="jgqt" />
                </a-col>
              </a-row>
              <Divider title="教育与文化改造部分" />
              <!-- <div class="tableTitle"><span class="midText">教育与文化改造部分</span></div> -->
              <a-row style="padding-bottom: 5px">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">累计加分：</h3>
                </a-col>
                <a-col span="2">
                  <a-input readOnly v-model="jyljjf" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">累计扣分：</h3>
                </a-col>
                <a-col span="3">
                  <a-input readOnly v-model="jyljkf" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">基础分：</h3>
                </a-col>
                <a-col span="3">
                  <a-input v-model="jyjcf" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">考核分：</h3>
                </a-col>
                <a-col span="3">
                  <a-input readOnly v-model="jykhf" />
                </a-col>
              </a-row>
              <a-row style="padding-bottom: 5px">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">思想教育得分：</h3>
                </a-col>
                <a-col span="20">
                  <a-input v-model="jysxdf" />
                </a-col>
              </a-row>
              <a-row style=" ">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">其他方面：</h3>
                </a-col>
                <a-col span="20">
                  <a-input v-model="jyqt" />
                </a-col>
              </a-row>
              <Divider title="劳动改造考核" />
              <!-- <div class="tableTitle"><span class="midText">劳动改造考核</span></div> -->
              <a-row style="padding-bottom: 5px">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">累计加分：</h3>
                </a-col>
                <a-col span="2">
                  <a-input readOnly v-model="ldljjf" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">累计扣分：</h3>
                </a-col>
                <a-col span="3">
                  <a-input readOnly v-model="ldljkf" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">基础分：</h3>
                </a-col>
                <a-col span="3">
                  <a-input v-model="ldjcf" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">考核分：</h3>
                </a-col>
                <a-col span="3">
                  <a-input readOnly v-model="ldkhf" />
                </a-col>
              </a-row>
              <a-row style="padding-bottom: 5px">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">记0分天数：</h3>
                </a-col>
                <a-col span="2">
                  <a-input-number :min="0" v-model="jlfts" />
                </a-col>
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">0分天数说明：</h3>
                </a-col>
                <a-col span="14">
                  <a-input v-model="lftssm" />
                </a-col>
              </a-row>
              <a-row style="padding-bottom: 5px">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">辅勤岗位1：</h3>
                </a-col>
                <a-col span="20">
                  <a-input v-model="fqgw1" />
                </a-col>
              </a-row>
              <a-row style="padding-bottom: 5px">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">辅勤岗位2：</h3>
                </a-col>
                <a-col span="20">
                  <a-input v-model="fqgw2" />
                </a-col>
              </a-row>
              <a-row style="padding-bottom: 5px">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">直接劳动岗位：</h3>
                </a-col>
                <a-col span="20">
                  <a-input v-model="zjldgw" />
                </a-col>
              </a-row>
              <a-row style="padding-bottom: 5px">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">劳动定额：</h3>
                </a-col>
                <a-col span="2">
                  <a-input-number :min="0" v-model="ldde" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">完成情况：</h3>
                </a-col>
                <a-col span="2">
                  <a-input-number :min="0" v-model="wcqk" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">超(欠)产：</h3>
                </a-col>
                <a-col span="3">
                  <a-input v-model="cqc" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">劳动类级：</h3>
                </a-col>
                <a-col span="4">
                  <a-select placeholder="请选择劳动类级" v-model="lddj" style="width: 100%">
                    <a-select-option v-for="dd in lddjlist" :key="dd.bm" :value="dd.bm">
                      {{dd.mc}}
                    </a-select-option>
                  </a-select>
                </a-col>

              </a-row>
              <a-row style=" ">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">其他方面：</h3>
                </a-col>
                <a-col span="20">
                  <a-input v-model="ldqt" />
                </a-col>
              </a-row>
              <Divider title="其它情形" />
              <!-- <div class="tableTitle"><span class="midText">其它情形</span></div> -->
              <a-row style="padding-bottom: 5px">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">专项加分：</h3>
                </a-col>
                <a-col span="2">
                  <a-input readOnly v-model="zxjf" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">处罚扣分：</h3>
                </a-col>
                <a-col span="3">
                  <a-input readOnly v-model="cfkf" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">补回基础分：</h3>
                </a-col>
                <a-col span="3">
                  <a-input v-model="bhjcf" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">补分考核分：</h3>
                </a-col>
                <a-col span="3">
                  <a-input readOnly v-model="bfkhf" />
                </a-col>
              </a-row>
              <a-row style="padding-bottom: 5px">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">本月得分：</h3>
                </a-col>
                <a-col span="2">
                  <a-input readOnly v-model="dydf" />
                </a-col>
                <a-col span="3">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">上月累计分：</h3>
                </a-col>
                <a-col span="3">
                  <a-input readOnly v-model="khjf" />
                </a-col>
              </a-row>
              <a-row style="padding-bottom: 5px">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">提请建议：</h3>
                  <a-modal :title="titletqjy" :visible="visibletqjy" :confirm-loading="tqjyLoading" :footer="null" @cancel="tqjyCancel" width="450px">
                    <a-row>
                      <a-col>
                        <a-select placeholder="请选择常用词" v-model="cyc" style="width: 100%" @change="changeTqjy">
                          <a-select-option v-for="dd in cyclist" :key="dd.bm" :value="dd.bm">
                            {{dd.mc}}
                          </a-select-option>
                        </a-select>
                      </a-col>
                    </a-row>
                    <a-row>
                      <a-col>
                        <a-table :columns="columnscyc" :data-source="columnsdatacyc" :scroll="{ x: 400 }" rowKey='oid' :loading="loadingcyc" :pagination="false" :customRow="customRowcyc" size="small" bordered>
                        </a-table>
                      </a-col>
                    </a-row>
                  </a-modal>
                </a-col>
                <a-col span="20">
                  <a-textarea v-model="tqjy" placeholder="请双击选择常用词" @dblclick="dbclikeTqjy" />
                </a-col>
              </a-row>
              <a-row style="padding-bottom: 5px">
                <a-col span="4">
                  <h3 style="width: 100%;text-align:right;font-size: 15px;align-content: center;padding-top: 4px">备注：</h3>
                </a-col>
                <a-col span="20">
                  <a-textarea v-model="bz" />
                </a-col>
              </a-row>
            </a-form>
          </div>
        </a-spin>
      </a-modal>
    </div>
  </div>
</template>
<script>

import Divider from "@/components/Divider";
import { uploadfile } from "@/api/common/uploadfile";
import { ykhbl } from "@/api/rcgl/ykhbl";
import { ykh } from "@/api/rcgl/ykh";
import { pubdmb } from "@/api/common/pubdmb";
import { options } from '@/api/common/option';

const columns = [
  { title: '序号', width: 50, dataIndex: 'xh', key: 'xh', },
  { title: '罪犯姓名', width: 80, dataIndex: 'zfXm', key: 'zfXm', },
  { title: '罪犯编号', width: 90, dataIndex: 'zfId', key: 'zfId', },
  { title: '考核月份', dataIndex: 'khny', key: 'khny', width: 80 },
  { title: '监管考核分', dataIndex: 'jgkhf', key: 'jgkhf', width: 80 },
  { title: '教育考核分', dataIndex: 'jykhf', key: 'jykhf', width: 100 },
  { title: '劳动考核分', dataIndex: 'ldkhf', key: 'ldkhf', width: 80 },
  { title: '本月得分', dataIndex: 'bydf1', key: 'bydf1', width: 80 },
  { title: '是否生效', dataIndex: 'vaildFlag', key: 'vaildFlag', width: 80 },
  { title: '录入方式', dataIndex: 'isBl', key: 'isBl', width: 80 },
  { title: '创建人', dataIndex: 'cjrxm', key: 'cjrxm', width: 70 },
];

const columnscyc = [
  { title: '序号', width: 80, dataIndex: 'xh', key: 'xh', fixed: 'left' },
  { title: '常用意见', width: 300, dataIndex: 'content', key: 'content', fixed: 'left', ellipsis: true },

];
export default {
  name: 'AssessIndex',
  components: {
    Divider
  },
  data() {
    return {
      disabled: false,
      spinning: false,
      confirmLoadingpl: false,
      visiblepl: false,
      layout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      },
      khny: this.$moment(this.$moment().format('YYYY-MM')),
      visible: true,
      confirmLoading: false,
      tctitle: "提交月考核",
      loading: false,
      columns,
      columnsdata: [],
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0
      },
      zfData: [],
      selectoid: "",
      lddjlist: [],
      bh: "4405004579",
      xm: "海农",
      jgkhf: "0",
      jgjcf: "0",
      jgljjf: "0",
      jgljkf: "0",
      jgqt: "",
      jykhf: "0",
      jyjcf: "0",
      jyljjf: "0",
      jyljkf: "0",
      jysxdf: "",
      jyqt: "",
      ldkhf: "0",
      ldjcf: "0",
      ldljjf: "0",
      ldljkf: "0",
      jlfts: "0",
      lftssm: "",
      fqgw1: "",
      fqgw2: "",
      zjldgw: "",
      ldde: "0",
      lddj: "",
      ldqt: "",
      wcqk: "0",
      cqc: "",
      zxjf: "0",
      cfkf: "0",
      bhjcf: "0",
      bfkhf: "0",
      dydf: "0",
      khjf: "0",
      bz: "",
      tqjy: "",
      isBl: "",
      wfid: "",
      cyc: [],
      cyclist: [],
      loadingcyc: false,
      titletqjy: "常用词",
      visibletqjy: false,
      tqjyLoading: false,
      columnsdatacyc: [],
      columnscyc,
      uploading: false,
      customRow: (record) => {
        return {
          on: {
            click: (e) => {
              let oldList = document.querySelectorAll(".checked-td-of-add-table")
              if (oldList) {
                for (let j = 0; j < oldList.length; j++) {
                  oldList[j].classList.remove("checked-td-of-add-table")
                }
              }
              let children = e.target.parentNode.children
              for (let i = 0; i < children.length; i++) {
                children[i].classList.add("checked-td-of-add-table")
              }
              this.selectoid = record.oid;
              this.zfbh = record.zfId;
              this.bz = record.bz;
              this.zyts = parseInt(record.zyts);
              this.bh = record.zfId;
              this.xm = record.zfXm;
              this.isBl = record.isBl;
              this.jgljjf = record.jgjf;
              this.jgljkf = record.jgkf;
              this.jgjcf = record.jgjcf;
              this.jgkhf = record.jgkhf;
              this.jgqt = record.jgqt;
              this.jyljjf = record.jyjf;
              this.jyljkf = record.jykf;
              this.jyjcf = record.jyjcf;
              this.jykhf = record.jykhf;
              this.jyqt = record.jyqt;
              this.jysxdf = record.jyks;
              this.ldljjf = record.ldjf;
              this.ldljkf = record.ldkf;
              this.ldjcf = record.ldjcf;
              this.ldkhf = record.ldkhf;
              this.fqgw1 = record.fqGw1;
              this.fqgw2 = record.fqGw2;
              this.jlfts = record.jlfts;
              this.lftssm = record.lftssm;
              this.zjldgw = record.gw;
              this.ldde = record.ldde;
              this.lddj = record.lddj;
              this.wcqk = record.ldqk;
              this.cqc = record.cqc;
              this.zxjf = record.zxjf;
              this.cfkf = record.cfkf;
              this.bhjcf = record.bhjcf;
              this.bfkhf = record.bhkhf;
              this.dydf = record.bydf1;
              this.wfid = record.wfId;
              this.tqjy = record.tqjy;
              this.bz = record.bzsm;
              this.khny = this.$moment(record.khrq).format('YYYY-MM');
            },
          },
        };
      },

      customRowcyc: (record) => {
        return {
          on: {
            click: () => {
            },
            dblclick: () => {
              this.tqjy = record.content;
              this.visibletqjy = false;
            },
          },
        };
      },
    };
  },
  mounted() {
    // this.fetch();
  },
  methods: {


    handleCancelpl() {
      this.visiblepl = false;
    },
    handleUpload() {
      this.uploading = true;
      let username = localStorage.getItem("username");
      let realName = localStorage.getItem("realName");
      let dwbm = localStorage.getItem("dwbm");
      let params = new FormData();
      params.append("file", this.filepl);
      params.append("uploadUserid", username);
      params.append("uploadUsername", realName);
      params.append("dwbm", dwbm);
      uploadfile.uploadJyldf(params).then(res => {
        if (res.code == "200") {
          if (res.message == "ok") {
            this.fileListpl = [];
            this.uploading = false;
            this.$message.success("保存成功！");
            this.visiblepl = false;
            this.fetch();
          } else {
            this.$message.error(res.message);
            this.uploading = false;
          }
        } else {
          this.$message.error(res.message);
          this.uploading = false;
        }
      })
    },
    showModal(flag) {
      if (flag == 0) {
        this.tctitle = "月考核提请"
        this.disabled = false;
        this.bz = "";
        this.zyts = 1;
        this.fileList = [];

        this.khrq = this.$moment(this.$moment().format('YYYY-MM'));
        this.visible = true;
      }

      this.spinning = true;
      pubdmb.getBylb("kh-17").then(res => {
        if (flag == "0") {
          console.log(res[0]);
          this.lddj = res[0].bm;
        }
        this.lddjlist = res;
        this.spinning = false;
      })

    },
    fetch() {
      this.loading = true;
      ykhbl.getYkhByZfbh(this.zfbh).then(res => {
        this.loading = false;
        this.columnsdata = res.khYkhNewList;
      })
    },
    tqjyOk() {
      this.tqjy = this.cyc
      this.visibletqjy = false;
    },
    tqjyCancel() {
      this.visibletqjy = false;
    },
    dbclikeTqjy() {
      this.visibletqjy = true;
      options.getoptionsLb().then(res => {
        this.cyclist = res.comopinions;
        console.log('---bm--' + res.comopinions[0].bm);
        this.cyc = res.comopinions[0].bm;
        this.columnsdatacyc = res.comopinionfbs;
      })
      return false;
    },
    changeTqjy(value) {
      console.log("value===" + value);
      options.getoptions(value).then(res => {
        this.columnsdatacyc = res;
      })
    },
    handleChangeRdyy(value) {
      this.rdbm = value.key;
      this.rdyymc = value.label;
      console.log("rdyy====" + this.rdyy);
      console.log("rdyymc====" + this.rdyymc);
    },

    handleCanceljs() {
      this.visiblejs = false;
    },
    handleOk() {
      alert("1111");
      if (this.tctitle == "月考核提请") {
        if (this.bh == "") {
          this.$message.error('罪犯姓名编号不能为空!');
          return false;
        }
        if (this.khny == "") {
          this.$message.error('考核月份不能为空!');
          return false;
        }

        alert("khny===" + this.khny);
        let username = localStorage.getItem("username");
        let realName = localStorage.getItem("realName");
        let dwbm = localStorage.getItem("dwbm");
        let groupOid = localStorage.getItem("groupoid");
        let groupName = localStorage.getItem("zzmc");
        console.log("dwbm====" + dwbm);
        let khny = this.$moment(this.khny).format('YYYY-MM');
        alert(khny);
        this.confirmLoading = true;
        ykh.saveYkh(this.bh, khny, this.jgljjf, this.jgljkf, this.jgjcf,
          this.jgkhf, this.jgqt, this.jyljjf, this.jyljkf, this.jyjcf, this.jykhf,
          this.jysxdf, this.jyqt, this.ldljjf, this.ldljkf, this.ldjcf, this.ldkhf, this.jlfts, this.fqgw1, this.fqgw2, this.zjldgw,
          this.ldde, this.wcqk, this.cqc, this.lddj, this.ldqt, this.zxjf, this.cfkf, this.bhjcf, this.bfkhf, this.dydf,
          this.bz, this.tqjy, username, realName, dwbm, groupOid, groupName, this.lftssm).then(res => {
            if (res.code == "200") {
              if (res.message == "ok") {
                this.$message.success('保存成功!');
                this.visible = false;
                this.fetch();
              } else {
                this.$message.error(res.message);

              }
            } else {
              this.$message.error(res.message);
              //  this.confirmLoading = false;
            }
            this.confirmLoading = false;
          })

      }
      this.romveclass();
    },
    romveclass() {
      let oldList = document.querySelectorAll(".checked-td-of-add-table")
      if (oldList) {
        for (let j = 0; j < oldList.length; j++) {
          oldList[j].classList.remove("checked-td-of-add-table")
        }
      }
    },
    handleCancel() {
      console.log('Clicked cancel button');
      this.selectoid = "";
      this.visible = false;
      this.romveclass();
    },
    confirmDelect() {
      if (this.selectoid == "") {
        this.$message.warn("请选择要删除的记录!");
        return false;
      }
      if (this.isBl == "正常") {
        this.$message.warn("正常录入不允许删除!");
        return false;
      }
      if (this.wfId != null && this.wfId != "") {
        this.$message.warn("该记录已经提请流程不允许删除!");
        return false;
      }
      let username = localStorage.getItem("username");
      let realName = localStorage.getItem("realName");
      ykhbl.deleteYkh(this.selectoid, username, realName).then(res => {
        this.loading = false;
        if (res.code == "200") {
          if (res.message == "ok") {
            this.$message.success("删除成功！");
            this.fetch();
          } else {
            this.$message.error(res.message);
          }
        } else {
          this.$message.error(res.message);
          this.confirmLoading = false;
        }
      })

    },
    cancel(e) {
      console.log(e);
    },
  },

};
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
  // ::v-deep .el-dialog {
  //   min-width: 1148px;
  //   .el-dialog__header {
  //     background: #3072d0;
  //   }
  // }
  .form-title {
    margin: 0;
    padding: 20px 0;
    border-bottom: 0.5px solid #e0e0e0;
  }

  .form-wrap {
    padding: 20px 0;
  }
  h3 {
    color: #606266;
  }
}
::v-deep .ant-form-item {
  margin-bottom: 0px;
}
::v-deep .ant-modal-header {
  background: #3072d0;
  .ant-modal-title {
    color: #fff !important;
  }
}
::v-deep .ant-modal-close-x {
  color: #fff !important;
}
</style>