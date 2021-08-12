<template>
  <div class="home">
    <el-container style="height: 100vh;">
      <el-header>
        <div class="header-top">
          <div class="header-top-title">狱政管理平台1</div>
          <div class="header-top-layout">
            退出
            <i class="el-icon-s-unfold"></i>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <div class="toggle-button" @click="toggle">
            <img src="../assets/images/menu-collapse.svg" alt />
          </div>
          <el-menu
            router
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            :collapse-transition="false"
            style="height:100vh;border-right:none;"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">个人工作台</span>
            </el-menu-item>
            <el-menu-item index="/assess">
              <i class="el-icon-document"></i>
              <span slot="title">计分考核</span>
            </el-menu-item>
            <el-menu-item index="/deduct">
              <i class="el-icon-setting"></i>
              <span slot="title">分级处遇</span>
            </el-menu-item>
            <el-menu-item index="/backlog">
              <i class="el-icon-setting"></i>
              <span slot="title">系统配置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
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
<style lang="scss">
.el-header {
  background-color: #3072d0;
  color: #fff;
  line-height: 70px;
  height: 70px !important;
  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-top-title {
      font-style: 24px;
      font-weight: 700;
    }
    .header-top-layout {
      cursor: pointer;
      font-size: 14px;
    }
  }
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  margin: 20px;
  padding: 20px 30px;
  background-color: #fff;
}

body > .el-container {
  margin-bottom: 40px;
}

.toggle-button {
  background-color: #fff;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  padding-top: 15px;
}
</style>
