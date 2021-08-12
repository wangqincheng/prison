<template>
  <div class="wrap">
    <div class="el-header">
      <div class="header-top">
        <div class="header-top-title">狱政管理平台1</div>
        <div class="header-top-user">
          <img src="@/assets/images/user_icon.png" alt />
          <div>002 二监区 部门内勤，监区长（流程）...</div>
        </div>
        <div class="header-top-layout">
          <img src="@/assets/images/help_icon.png" alt />
          <img src="@/assets/images/lock_icon.png" alt />
          <img src="@/assets/images/banben_icon.png" alt />
          <img src="@/assets/images/sign_out_icon.png" alt />
        </div>
      </div>
    </div>
    <el-container class="el-content">
      <div class="content-left">
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <div class="toggle-button" @click="toggle">
            <img src="@/assets/images/menu-collapse.svg" alt />
          </div>
          <el-menu router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :collapse-transition="false">
            <el-menu-item index="/login">
              <!-- <i class="el-icon-document" style="margin-right:5px"></i> -->
              <img src="@/assets/images/workbench_icon.png" alt style="margin-right:5px" />
              <div slot="title">
                <span style="padding-right:15px">个人工作台</span>
                <img src="@/assets/images/more_icon.png" alt />
              </div>
            </el-menu-item>
            <el-menu-item index="/assess">
              <img src="@/assets/images/checkup_icon.png" alt style="margin-right:5px" />
              <div slot="title">
                <span style="padding-right:28px">计分考核</span>
                <img src="@/assets/images/more_icon.png" alt />
              </div>
            </el-menu-item>
            <el-menu-item index="/deduct">
              <img src="@/assets/images/punish_icon.png" alt style="margin-right:5px" />
              <div slot="title">
                <span style="padding-right:28px">分级处遇</span>

                <img src="@/assets/images/more_icon.png" alt />
              </div>
            </el-menu-item>
            <el-menu-item index="/backlog">
              <img src="@/assets/images/setting_icon.png" alt style="margin-right:5px" />
              <div slot="title">
                <span style="padding-right:28px">系统配置</span>
                <img src="@/assets/images/more_icon.png" alt />
              </div>
            </el-menu-item>
          </el-menu>
        </el-aside>
      </div>

      <el-main>
        <router-view class="el-main-content" :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      isCollapse: false,
      clientHeight: '',
    }
  },

  methods: {

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggle() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style lang="scss" scoped >
.wrap {
  background-color: #f5f5f5 !important;
  .el-header {
    position: fixed;
    background-color: #3072d0;
    color: #fff;
    line-height: 60px;
    width: 100%;
    z-index: 999;
    min-width: 1200px;
    .header-top {
      display: flex;
      // justify-content: space-between;
      align-items: center;
      .header-top-title {
        flex: 1;
        font-size: 24px;
        font-weight: 600;
      }
      .header-top-layout {
        display: flex;
        cursor: pointer;
        font-size: 14px;
        img {
          margin-right: 24px;
        }
      }
      .header-top-user {
        margin-right: 62px;
        display: flex;
        align-items: center;
        font-size: 14px;
        img {
          margin-right: 11px;
        }
      }
    }
  }
  .el-content {
    background: url("../assets/images/bg.png");
    padding-top: 60px;
    display: flex;
    height: 100vh;
    .content-left {
      box-sizing: border-box;
      .el-aside {
        background-color: #fff;
        color: #333;
        text-align: center;
        line-height: 200px;
        height: calc(100vh - 60px);
        position: relative;

        .toggle-button {
          background-color: #fff;
          line-height: 24px;
          text-align: center;
          cursor: pointer;
          padding-top: 15px;
        }
        // .toggle-button-true {
        //   text-align: left;
        //   padding-left: 38px;
        // }
        .el-menu {
          border: 0;
          .el-menu-item {
            // margin:  38px;
            color: #333;
            padding: 0 28px 0 38px !important;
            display: flex;
            align-items: center;
            img {
              width: 16px;
              height: 16px;
            }
            i {
              font-size: 16px;
            }
            & > span {
              flex: 1;
              display: inline-block;
              text-align: left;
              // margin-left: 13px;
              position: relative;
              img {
                position: absolute;
                right: 0;
                top: 20px;
              }
            }
          }
        }
      }
    }

    .el-main {
      .el-main-content {
        padding: 20px 18px 20px;
        // background-color: #fff;
      }
    }
  }
}
</style>
