<template>
  <div class="login-container">
    <div class="top">
      <img src="@/assets/images/login-logo.png" alt />
      <span>广东省监狱管理局</span>
    </div>
    <div class="wrap">
      <div class="bg-left">
        <img src="@/assets/images/login-left.png" alt />
      </div>
      <div class="login-form">
        <div class="form-title">狱政管理平台</div>
        <div class="form-box">
          <div class="login-type">
            <div
              class="account-login"
              :class="{ active: activeIndex == 0 }"
              @click="activeIndex = 0"
            >账号登录</div>
            <div
              class="ca-login"
              :class="{ active: activeIndex == 1 }"
              @click="activeIndex = 1"
            >CA登录</div>
          </div>
          <div class="form1" v-if="activeIndex == 0">
            <el-form :model="form1">
              <el-form-item label="账号" label-width="40px">
                <el-input placeholder="请输入账号" v-model="form1.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" label-width="40px">
                <el-input placeholder="请输入密码" v-model="form1.password" show-password></el-input>
              </el-form-item>
              <el-row type="flex" justify="end">
                <el-form-item>
                  <el-button type="text">忘记密码</el-button>
                </el-form-item>
              </el-row>
              <el-row type="flex" justify="center">
                <el-form-item>
                  <el-button type="primary">登录</el-button>
                </el-form-item>
              </el-row>
            </el-form>
          </div>
          <div class="form2" v-if="activeIndex == 1">
            <el-form :model="form2">
              <el-form-item label="账号" label-width="40px">
                <el-input placeholder="请输入账号" v-model="form2.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" label-width="40px">
                <el-input placeholder="请输入密码" v-model="form2.password" show-password></el-input>
              </el-form-item>
              <el-row type="flex" justify="end">
                <el-form-item>
                  <el-button type="text">忘记密码</el-button>
                </el-form-item>
              </el-row>
              <el-row type="flex" justify="center">
                <el-form-item>
                  <el-button type="primary">登录</el-button>
                </el-form-item>
              </el-row>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      form1: {},
      form2: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  position: relative;
  left: 0;
  right: 0;
  .top {
    padding: 24px 0 0 42px;
    display: flex;
    align-items: center;
    span {
      margin-left: 16px;
      font-size: 20px;
    }
  }
  .wrap {
    display: flex;
    justify-content: space-around;

    .login-form {
      padding: 54px 79px;
      width: 520px;
      height: 684px;

      background-color: #fff;
      box-shadow: 0px 4px 16px rgba(48, 114, 208, 0.16);
      border-radius: 8px;
      .form-title {
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        color: #3072d0;
      }
      .form-box {
        margin-top: 80px;
        .login-type {
          display: flex;
          font-size: 18px;
          .account-login {
            text-align: center;
            padding-bottom: 16px;
            width: 50%;
            border-bottom: 2px solid #333;
            cursor: pointer;
            &.active {
              border-bottom: 2px solid #3072d0;
              color: #3072d0;
            }
          }
          .ca-login {
            text-align: center;
            padding-bottom: 16px;
            width: 50%;
            border-bottom: 2px solid #333;
            cursor: pointer;

            &.active {
              border-bottom: 2px solid #3072d0;
              color: #3072d0;
            }
          }
        }
        .form1,
        .form2 {
          margin-top: 104px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
body {
  background-color: #f2f8fc;
}
</style>