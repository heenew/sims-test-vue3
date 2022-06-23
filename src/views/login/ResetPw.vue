<template>
  <div class="login-form">
    <form class="box">
      <h4 class="title is-5" style="text-align: center">비밀번호 변경</h4>

      <!-- 사번, 이메일 화면 단 -->
      <div class="userInfo">
        <div class="field">
          <label class="label">사번</label>

          <input
            class="input"
            type="text"
            placeholder="비밀번호를 변경할 사번 입력"
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
            placeholder="인증번호를 받을 SNET이메일 입력"
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
            />
            <button
              class="button is-info is-hovered"
              style="width: auto"
              @click="checkAuth()"
            >
              확인
            </button>
          </div>
          <div class="time">{{ rTime }}</div>
          <div id="btn">
            <button
              class="button is-info is-hovered"
              @click.prevent="reSendEmail()"
            >
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
            <button
              style="margin: 0"
              class="button is-info is-outlined"
              @click="clearAuth()"
            >
              닫기
            </button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userid: [],
      email: [],
      authcode: [],
      newPw: [],
      newPwCheck: [],

      setDisable: false, // 사번, 이메일 input 비활성화
      showAuth: false,
      showSetPw: false,
      rTime: "00:00",
      interval: "",
    };
  },

  methods: {
    // 이메일로 인증번호 보내기
    sendEmail() {
      this.userid = this.userid.trim().toUpperCase();
      this.email = this.email.trim();

      if (this.userid == null) {
        this.$alert("사번을 입력해주세요.");
      }

      if (this.email == null) {
        this.$alert("이메일을 입력해주세요.");
      }

      // ======== test ========
      this.setDisable = true;
      this.showAuth = true;

      this.countDown();
      //---------------------------

      // this.$axios
      //   .post("", { email: this.email })
      //   .then((response) => {
      //     if (response.data.success) {
      //       this.$alert(
      //         "이메일로 인증번호가 발송되었습니다. 인증번호를 입력하여 주세요."
      //       );
      //       this.setDisable = true;
      //       this.showAuth = true;

      //       this.countDown();
      //     } else {
      //       this.$alert("인증번호 요청에 실패하였습니다. 관리자에게 문의하세요.");
      //     }
      //     this.btnLock = false;
      //   })
      //   .catch(() => {
      //     this.openthis.$alert(
      //       "인증번호 요청에 실패하였습니다. 관리자에게 문의하세요."
      //     );
      //   });
    },
    reSendEmail() {
      clearInterval(this.interval);
      this.sendEmail();
    },
    checkAuth() {
      // ====== test ======
      this.showAuth = false;
      this.showSetPw = true;

      if (this.authcode === "123") {
        this.showAuth = false;
        this.showSetPw = true;
        clearInterval(this.interval);
      } else {
        this.$alert("인증번호 요청 검증에 실패했습니다. 다시 확인해주세요.");
      }
      //---------------------

      // this.userid = this.userid.trim().toUpperCase();
      // this.authcode = this.authcode.trim();

      // this.$axios
      //   .post("", {
      //     userid: this.userid,
      //     authcode: this.authcode,
      //   })
      //   .then((response) => {
      //     if (response.data.success) {
      //       this.showAuth = false;
      //       this.showSetPw = true;
      //       clearInterval(this.interval);
      //     } else {
      //       this.$alert("인증번호 요청 검증에 실패했습니다. 다시 확인해주세요.");
      //     }
      //   })
      //   .catch(() => {
      //     this.$alert(
      //       "인증번호 요청 검증에 실패했습니다. 다시 확인해주세요."
      //     );
      //   });

      //   //----------------------------------
    },

    pwReset() {
      this.newPw = this.newPw.trim();
      this.newPwCheck = this.newPwCheck.trim();

      // ====== test ======
      if (this.newPw === this.newPwCheck) {
        this.$alert("비밀번호 변경이 완료되었습니다.");
        this.$router.push({ name: "login" });
      } else {
        this.$alert("비밀번호가 일치하지 않습니다.");
        this.newPw = null;
        this.newPwCheck = null;
      }

      // ------------------------------

      // if (this.newPw === this.newPwCheck) {
      //   this.$axios
      //     .post("", {
      //       userid: this.userid,
      //       password: this.newPw,
      //       authcode: this.authcode,
      //     })
      //     .then((response) => {
      //       if (response.data.success) {
      //         this.$alert("비밀번호 변경이 완료되었습니다.");
      //         this.$router.push({ name: "login" });
      //       } else {
      //         if (response.data.resultCd == "102") {
      //           this.$alert(response.data.resultMsg);
      //         } else {
      //           this.$alert("비밀번호 초기화에 실패했습니다. 다시 시도하세요.");
      //         }
      //       }
      //     })
      //     .catch(() => {
      //       this.$alert("비밀번호 초기화에 실패했습니다. 다시 시도하세요.");
      //     });
      // } else {
      //   this.$alert("비밀번호가 일치하지 않습니다.");
      //   this.newPw = null;
      //   this.newPwCheck = null;
      // }
    },

    countDown() {
      let count = 180;
      this.interval = setInterval(() => {
        count--;
        if (count > 0) {
          let min = Math.floor(count / 60);
          let sec = count % 60;
          let style =
            min.toString().padStart(2, "0") +
            ":" +
            sec.toString().padStart(2, "0");
          console.log(style);
          this.rTime = style;
        } else {
          this.rTime = "입력시간 초과";
          clearInterval(this.interval);
          this.$alert(
            "인증 시간이 만료되었습니다. 이메일 인증을 다시 진행해주세요."
          );
        }
      }, 1000);
    },
    clearAuth() {
      clearInterval(this.interval);
    },
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
