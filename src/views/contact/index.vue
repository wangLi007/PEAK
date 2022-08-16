<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from 'element-plus';
import { startAnimation, handleThrottle } from '@/utils/tools';
import axios from '@/utils/request';

import i18n from '@/locales/i18n';
const $t = i18n.global.t;

const formRef = ref<FormInstance>();
const form = reactive({
  name: '',
  email: '',
  needs: '',
});
const status = ref(); // 0 || 1 || 2  nft预售申请 平台合作 建议反馈

/* 用于邮箱验证的函数 */
function validateEmail(email) {
  // 邮箱验证正则
  var reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
  return reg.test(email);
}

const checkEmail = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error($t('contact.msg.1')));
  }

  if (validateEmail(value)) {
    callback();
  } else {
    callback($t('contact.msg.2'));
  }
};

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: $t('contact.msg.4'),
      trigger: 'blur',
    },
  ],
  email: [
    {
      trigger: 'blur',
      validator: checkEmail,
    },
  ],
  needs: [
    {
      required: true,
      message: $t('contact.msg.5'),
      trigger: 'blur',
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      const params = {
        category: status.value + 1,
        name: form.name,
        describe: form.needs,
        email: form.email,
      };
      axios.post('http://47.242.1.254/api/feedback', params).then((res: any) => {
        if (res.code == 200) {
          ElMessage({
            message: $t('contact.msg.3'),
            type: 'success',
          });
          formEl.resetFields();
        }
      });
    } else {
      console.log('error submit!', fields);
    }
  });
};

// 建议提交
const handleSubmit = handleThrottle(args => submitForm(args), 500);

// 点击tab切换状态
const changeStatus = type => {
  status.value = type;
};

// 背景滚动
onMounted(() => {
  const main = document.querySelector('.contact-us-wrap');
  startAnimation(main);
});
</script>

<template>
  <div class="contact-us-wrap">
    <div class="wrap">
      <header>
        <div class="logo">
          <img src="@img/PEAK_BOY.png" alt="" />
        </div>
        <h3>{{ $t('contact.1') }}</h3>
        <div class="tab-wrap">
          <div :class="['tab-item', status === 0 ? 'active' : '']" @click="changeStatus(0)">
            <img src="@img/contact/apply.svg" alt="" />
            <span>{{ $t('contact.2') }}</span>
          </div>
          <div :class="['tab-item', status === 1 ? 'active' : '']" @click="changeStatus(1)">
            <img src="@img/contact/cooperate.svg" alt="" />
            <span>{{ $t('contact.3') }}</span>
          </div>
          <div :class="['tab-item', status === 2 ? 'active' : '']" @click="changeStatus(2)">
            <img src="@img/contact/feedbacks.svg" alt="" />
            <span>{{ $t('contact.4') }}</span>
          </div>
        </div>
      </header>
      <section class="content">
        <p>{{ $t('contact.5') }}</p>
        <p>
          {{ $t('contact.6') }}
        </p>
        <transition name="el-zoom-in-top">
          <div class="form-box" v-show="status === 1 || status === 2 || status === 0">
            <p>{{ $t('contact.7') }}</p>
            <el-form ref="formRef" :model="form" :rules="rules" class="Form" status-icon>
              <div class="input-group">
                <el-form-item class="vertical" :label="$t('contact.8')" prop="name">
                  <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item class="vertical" :label="$t('contact.9')" prop="email">
                  <el-input v-model="form.email" />
                </el-form-item>
              </div>
              <el-form-item class="vertical" :label="$t('contact.10')" prop="needs">
                <el-input v-model="form.needs" type="textarea" />
              </el-form-item>
              <el-button type="primary" @click="handleSubmit(formRef)">Submit</el-button>
            </el-form>
            <p class="center">{{ $t('contact.11') }}</p>
            <p class="center">PeakBoyNFT@gmail.com</p>
          </div>
        </transition>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-us-wrap {
  text-align: center;
  background: url('~@img/page-bgc.webp') no-repeat;
  background-size: cover;
  background-color: #171717;
  min-height: 100vh;
  overflow: hidden;
  .wrap {
    margin: 50px 276px 125px;
    background-color: #171717;
    box-shadow: 0.3px 0.3px 4.47px 0px rgba(255, 255, 255, 0.65);
    @media (max-width: $phone) {
      margin: 0;
      box-shadow: none;
    }
  }
  .logo {
    padding-top: 70px;
    @media (max-width: $phone) {
      padding-top: 40px;
    }
  }
  .logo img {
    margin: 0 auto;
    width: 130px;
  }
  h3 {
    font-size: 40px;
    font-weight: 400;
    color: #ffffff;
    margin-top: 31px;
    margin-bottom: 80px;
    @media (max-width: $phone) {
      font-size: 21px;
      margin-bottom: 46px;
    }
  }

  .tab-item {
    @include flexPos(center);
    flex-direction: column;
    background: url('~@img/contact/pc-tab-btn.png') no-repeat;
    background-size: 100% 100%;
    width: 250px;
    height: 140px;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    &.active {
      background: url('~@img/contact/pc-tab-btn-active.png') no-repeat;
      background-size: 100% 100%;
    }

    > img {
      margin-bottom: 15px;
      width: 50px;
    }
    &:not(:last-child) {
      margin-right: 50px;
    }

    @media (max-width: $phone) {
      background: url('~@img/contact/mob-tab-btn-small.png') no-repeat;
      background-size: 100% 100%;
      width: 151px;
      height: 71px;
      &.active {
        background: url('~@img/contact/mob-tab-btn-small-active.png') no-repeat;
        background-size: 100% 100%;
      }
      &:first-child {
        background: url('~@img/contact/mob-tab-btn-big.png') no-repeat;
        background-size: 100% 100%;
        &.active {
          background: url('~@img/contact/mob-tab-btn-big-active.png') no-repeat;
          background-size: 100% 100%;
        }
      }
      &:not(:first-child) {
        margin-right: 0;
      }
    }
  }

  .tab-wrap {
    @include flexPos(space-between);
    padding: 0 80px;
    @media (max-width: $phone) {
      padding: 0 20px;
      flex-wrap: wrap;
      .tab-item {
        font-size: 12px;
      }
      .tab-item img {
        width: 25px;
      }
      .tab-item:nth-child(1) {
        width: 375px;
        margin-right: 0;
        width: 362px;
        height: 82px;
        margin-bottom: 16px;
      }
    }
  }

  .content {
    color: #fff;
    margin-top: 60px;
    padding: 0 80px 50px;
    @media (max-width: $phone) {
      padding: 0 20px;
    }
    p {
      font-size: 18px;
      text-align: left;
      color: #ffffff;
      line-height: 40px;
      letter-spacing: 3px;
      @media (max-width: $phone) {
        font-size: 12px;
        line-height: 30px;
      }
    }
  }

  // 表单项 纵向
  :deep(.vertical) {
    @include flexPos(center, flex-start);
    flex-direction: column;
    .el-form-item__content {
      width: 100%;
      margin-bottom: 32px;
    }
    .el-input__wrapper {
      width: 100%;
      height: 60px;
      font-size: 30px;
      @media (max-width: $phone) {
        height: 50px;
        font-size: 18px;
      }
    }
  }

  :deep(label) {
    font-size: 20px;
    color: #ffffff;
    line-height: 56px;
    margin-bottom: 29px;
    @media (max-width: $phone) {
      line-height: 30px;
      font-size: 12px;
      margin-bottom: 0;
    }
    &::before {
      display: none;
    }
  }

  .form-box {
    margin-top: 80px;
    // @media (max-width: $phone) {
    //   margin-top: 80px;
    // }
    @media (max-width: $phone) {
      padding-bottom: 40px;
      p.center {
        text-align: center;
      }
    }
  }
  .Form {
    margin-top: 80px;
    @media (max-width: $phone) {
      margin-top: 30px;
    }
    :deep(.el-textarea) {
      border-radius: 18px;
    }
    :deep(.el-textarea__inner) {
      border-radius: 18px;
      font-size: 30px;
      text-indent: 2px;
      min-height: 213px !important;
      @media (max-width: $phone) {
        font-size: 18px;
      }
    }
    :deep(.el-input__wrapper) {
      border-radius: 18px;
    }

    button {
      width: 540px;
      @include flexPos(center);
      background: url('~@img/contact/btn-bgc.png') no-repeat;
      background-size: 100% 100%;
      height: 106px;
      color: #fff;
      border: none;
      font-size: 32px;
      margin: 70px auto 131px;
      @media (max-width: $phone) {
        margin: 10px auto;
        width: 230px;
        height: 45px;
        background: url('~@img/contact/mob-btn-bgc.png') no-repeat;
        background-size: 100% 100%;
        font-size: 12px;
        margin-bottom: 75px;
      }
    }
  }

  :deep(.el-form-item__error) {
    font-size: 30px;
    @media (max-width: $phone) {
      font-size: 12px;
    }
  }
  .input-group {
    @include flexPos(space-between);
    @media (max-width: $phone) {
      flex-direction: column;
    }
    .vertical {
      flex: 1;
      @media (max-width: $phone) {
        width: 100%;
      }
      &:first-child {
        margin-right: 48px;
        @media (max-width: $phone) {
          margin-right: 0px;
        }
      }
    }
  }
}
</style>
