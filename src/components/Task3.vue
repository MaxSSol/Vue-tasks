<template>
  <div class="main" :style="{background}">
    <form class="form">
      <input
          v-model="form.firstName"
          type="text"
          placeholder="Ім'я"
          @keydown="validateFirstName"
          @mousedown="validateFirstName"
      >
      <span v-show="msg.firstName" :style="{'color': msg.color}">Ім'я є обов'язковим полем*</span>
      <input
          v-model="form.lastName"
          type="text"
          placeholder="Прізвище"
          @keydown="validateLastName"
          @mousedown="validateLastName"
      >
      <span v-show="msg.lastName" :style="{'color': msg.color}">Прізвище є обов'язковим полем*</span>
      <input v-model="form.tel" type="text" placeholder="Телефонний номер">
      <span v-show="msg.tel" :style="{'color': msg.color}">Телефон має бути 380977777777 або 0977777777</span>
      <input v-model="form.nickname" type="text" placeholder="Нік">
      <span
          v-show="msg.nickname"
          :style="{'color': msg.color}"
      >
        Нік має містити A-Z a-z _, три цифри. Приклад: testEx_023
      </span>
      <div class="form-gender">
        <p>Оберіть стать:</p>
        <input type="radio"
               id="male"
               name="contact"
               value="male"
               v-model="form.gender"
               @mousemove="checkRadioButton"
               @keydown="checkRadioButton"
        >
        <label for="male">Чол</label>
        <span> / </span>
        <input
            type="radio"
            id="female"
            name="contact"
            value="female"
            v-model="form.gender"
            @mousemove="checkRadioButton"
            @keydown="checkRadioButton"
        >
        <label for="female">Жін</label>
        <span v-show="msg.gender" :style="{'color': msg.color}">Заповнення є обов'язковим</span>
      </div>
      <button class="btn">Відправити</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        gender: '',
        tel: '',
        nickname: ''
      },
      background: 'white',
      msg: {
        firstName: false,
        lastName: false,
        tel: false,
        nickname: false,
        gender: false,
        color: 'red'
      }
    }
  },
  watch: {
    'form.firstName': function () {
      this.validateFirstName()
    },

    'form.lastName': function () {
      this.validateLastName()
    },

    'form.tel': function () {
      this.validateTelNumber()
    },

    'form.nickname': function () {
      this.validateNickname()
    },

    'form.gender': function (value) {
      this.changeBackground(value)
    }
  },
  methods: {
    validateFirstName() {
      this.msg.firstName = this.form.firstName.length <= 0
    },

    validateLastName() {
      this.msg.lastName = this.form.lastName.length <= 0
    },

    validateTelNumber() {
      this.msg.tel = !/^(380\d{9}|0[1-9]{2}\d{7})$/.test(this.form.tel)
    },

    validateNickname() {
      this.msg.nickname = !/^([A-Z]{1}[a-z_]*\d{3}|[a-z_]*[A-Z]{1}[a-z_]*\d{3})$/.test(this.form.nickname)
    },

    changeBackground(value) {
      this.background = value === 'male' ? '#1d56ab' : '#5544f2'
    },

    checkRadioButton() {
      this.msg.gender = this.form.gender === '';
    }
  },

}
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: auto auto;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form > input {
  width: 700px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: solid 1px gray;
}

.btn {
  padding: 10px 20px;
  border: solid 1px gray;
  background: white;
  border-radius: 999px;
  font-size: 16px;
}

.btn:hover {
  background: rgba(12, 138, 94, 0.96);
  color: #fff;
}

.form-gender {
  width: 700px;
  display: flex;
  justify-content: start;
  align-items: center;
}
</style>