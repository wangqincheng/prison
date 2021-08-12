<template>
  <div class="login-container">
    <div class="login-wrap">
      <div class="login-left">
        <div class="left-top">
          <img src="@/assets/images/login-logo.png" alt />
          <div>广东省监狱管理局</div>
        </div>
      </div>
      <div class="login-right">
        <div class="login-form">
          <div class="form-title">狱政管理平台</div>
          <div class="form-box">
            <div class="login_form">
              <div class="account">
                <span>账户</span>
                <input type="text" class placeholder="请输入登录手机账户" v-model="form.userName" />
              </div>
              <div class="passw">
                <span>密码</span>
                <input :type="isPas ? 'password' : 'text'" placeholder="请输入登录密码" v-model="form.password" />
                <i :class="['iconfont', isPas ? 'icon-biyan' : 'icon-zhengyan']" @click="isPas = !isPas"></i>
              </div>
            </div>
          </div>
          <div class="form-btn">
            <div class="login-btn" style="margin-left: -11px;margin-right: 38px;" @click="$router.push('/assess')">账号登录</div>
            <div class="login-btn" @click="$router.push('/assess')">CA登录</div>
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
      form: {},
      isPas: true
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login-wrap {
    width: 90%;
    height: 90vh;
    min-height: 500px;
    background-color: #fff;
    // margin: 90px auto;
    border-radius: 22px;
    display: flex;
    .login-left {
      width: 50%;
      background: url("../../assets/images/login-left.png") no-repeat;
      background-size: 100%;
      .left-top {
        display: flex;
        align-items: center;
        margin-top: 43px;
        margin-left: 54px;
        img {
          margin-right: 15px;
        }
        div {
          font-size: 42px;
          color: #333;
        }
      }
    }
    .login-right {
      width: 50%;
      margin: 20px 0;
      .login-form {
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .form-title {
          text-align: center;
          font-size: 48px;
          font-weight: 700;
          // color: linear-gradient(180deg, #40baff 0%, #3072d0 100%);
          background-image: -webkit-linear-gradient(
            top,
            #40baff 0%,
            #3072d0 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .form-box {
          display: flex;
          justify-content: center;
          align-items: center;
          .account {
            width: 407px;
            padding: 25px 0;
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
            span {
              margin-right: 30px;
              font-size: 24px;
              color: #666;
            }
            input {
              width: 300px;
              height: 50px;
              font-size: 24px;
              border: 0;
              color: #999;
              margin-top: 2px;
            }
          }
          .passw {
            width: 407px;
            padding: 25px 0;
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
            span {
              margin-right: 30px;
              font-size: 24px;
              color: #666;
            }
            input {
              width: 300px;
              height: 50px;
              font-size: 24px;
              border: 0;
              color: #999;
              margin-top: 2px;
            }
          }
        }
        .form-btn {
          margin-top: 50px;
          display: flex;
          //  display: flex;
          justify-content: center;
          align-items: center;
          .login-btn {
            cursor: pointer;
            padding: 6px 49px;
            font-size: 24px;
            background: linear-gradient(180deg, #40baff 0%, #3072d0 100%);
            color: #fff;
            border-radius: 8px;
          }
        }
      }
    }
  }
}
</style>

<style>
body {
  background: linear-gradient(180deg, #40baff 0%, #3072d0 100%);
}
</style>