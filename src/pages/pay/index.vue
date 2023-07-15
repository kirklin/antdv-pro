<script setup lang="ts">
import type { FormInstance } from 'ant-design-vue'

const labelCol = { span: 6 }
const wrapperCol = { span: 18 }
const loading = shallowRef(false)
const onSubmit = () => {
  // TODO
}
const formRef = shallowRef<FormInstance>()
const formData = reactive({
  orderNo: '',
  phone: '',
  email: '',
})
</script>

<template>
  <div p-20px max-w-1200px mx-auto>
    <h1 text-center>
      课程购买优惠
    </h1>
    <a-alert>
      <template #message>
        <p>填写订单号会自动换算优惠金额</p>
        <p>默认不填写会给予一定的优惠</p>
        <p>付款成功后添加客服wx：aibayanyu2022</p>
      </template>
    </a-alert>
    <h2 text-center mt-20px>
      课程信息
    </h2>
    <a-form
      ref="formRef"
      :model="formData"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      layout="horizontal"
    >
      <a-form-item label="《后台管理课程》订单号（选填）" name="orderNo">
        <a-input v-model:value="formData.orderNo" placeholder="《后台管理》订单号" />
      </a-form-item>
      <a-form-item
        name="phone"
        label="联系手机"
        :rules="[
          {
            required: true,
            message: '请输入联系手机',
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '请输入正确的手机号',
          },
        ]"
      >
        <a-input v-model:value="formData.phone" placeholder="请输入联系手机号" />
      </a-form-item>
      <a-form-item
        label="联系邮箱"
        name="email"
        :rules="[
          {
            required: true,
            message: '请输入联系邮箱',
          },
          {
            type: 'email',
            message: '请输入正确的邮箱',
          },
        ]"
      >
        <a-input v-model:value="formData.email" placeholder="请输入邮箱地址" />
      </a-form-item>
      <a-form-item class="flex justify-end">
        <a-button type="primary" :loading="loading" @click="onSubmit">
          获取优惠订单
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
