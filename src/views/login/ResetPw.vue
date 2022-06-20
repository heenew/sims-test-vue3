<template>
  <div class="login-form">
    <form class="box">
      <h4 class="title is-5" style="text-align: center">
        비밀번호 변경 및 초기화
      </h4>

      <!-- 사번, 이메일 화면 단 -->
      <div class="userInfo">
        <div class="field">
          <label class="label">사번</label>

          <input
            class="input"
            type="text"
            placeholder="변경 혹은 초기화할 사번 입력"
            v-model="userid"
            required
            :disabled="setDisable"
          />
        </div>

        <div class="field" style="padding-bottom: 1em">
          <label class="label">Email</label>

          <input
            class="input"
            type="email"
            placeholder="인증번호를 받을 이메일 입력"
            v-model="email"
            required
            :disabled="setDisable"
          />
        </div>

        <div id="btn" v-if="!setDisable">
          <button class="button is-info is-hovered" @click="sendEmail()">
            이메일로 인증번호 발송
          </button>
        </div>
      </div>
      <!-- 인증 화면 단 -->
      <div class="auth" v-if="showAuth">
        <div class="field">
          <label class="label">인증번호</label>
          <div class="rap">
            <input
              class="input"
              type="text"
              placeholder="이메일에서 인증번호를 확인해주세요"
              v-model="authcode"
              required
            />
            <button
              class="button is-info is-hovered"
              style="width: auto"
              @click="checkAuth()"
            >
              확인
            </button>
          </div>
          <div id="btn">
            <button class="button is-info is-hovered" @click="reSendEmail()">
              인증번호 재 발송
            </button>
          </div>
        </div>
      </div>

      <!-- 비밀번호 재설정 화면 단 -->
      <div class="setPw" v-if="showSetPw">
        <div class="field">
          <label class="label">새 비밀 번호</label>

          <input
            class="input"
            type="text"
            placeholder="새로운 비밀 번호 입력"
            v-model="newPw"
            required
          />
        </div>
        <div class="field">
          <label class="label">비밀번호 확인</label>

          <input
            class="input"
            type="text"
            placeholder="변경 할 비밀번호 확인"
            v-model="newPwCheck"
            required
          />
        </div>

        <div id="btn">
          <button class="button is-info is-hovered" @click="pwReset()">
            비밀번호 변경
          </button>
        </div>
      </div>

      <div class="field">
        <div id="btn">
          <router-link to="/login">
            <button style="margin: 0" class="button is-info is-outlined">
              닫기
            </button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      setDisable: false,
      showAuth: false,
      showSetPw: false,
    };
  },

  methods: {
    // 이메일로 인증번호 보내기
    sendEmail() {
      this.setDisable = true;
      this.showAuth = true;
    },
    reSendEmail() {},
    checkAuth() {
      this.showAuth = false;
      this.showSetPw = true;
    },
    pwReset() {},
  },
};
</script>

<style scoped>
.rap {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1em;
}
.button {
  width: 100%;
}
#btn {
  padding-top: 1em;
}
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.box {
  /* padding: 4em;
  padding-left: 8em;
  padding-right: 8em; */

  width: 500px;
}
</style>
