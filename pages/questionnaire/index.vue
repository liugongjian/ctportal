<template>
  <div class="form">
    <!-- <el-card class="h5__card"> -->
    <el-form
      ref="userForm"
      :model="form"
      :rules="rules"
      label-position="top"
      label-width="100px"
    >
      <div class="form_title"><h2>天翼云视频监控需求问卷</h2></div>
      <div class="form_col-level1">基本信息</div>
      <el-form-item label="企业名称:" prop="companyName">
        <el-input v-model="form.companyName" clearable />
      </el-form-item>
      <el-form-item label="省份" prop="provinceCode">
        <el-select
          v-model="form.provinceCode"
          @change="provinceChange"
          :popper-append-to-body="false"
          placeholder="请选择省份"
          clearable
        >
          <el-option
            v-for="item in provinceList"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="城市" prop="cityCode">
        <el-select
          v-model="form.cityCode"
          :popper-append-to-body="false"
          placeholder="请选择城市"
          clearable
        >
          <el-option
            v-for="item in dynamicCity"
            :key="item.value"
            :value="item.value"
            :label="item.label"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属行业" prop="industry">
        <el-select
          v-model="form.industry"
          :popper-append-to-body="false"
          placeholder="请选择所属行业"
        >
          <el-option
            v-for="item in industry"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="企业联系人姓名" prop="contactName">
        <el-input v-model="form.contactName" clearable />
      </el-form-item>
      <el-form-item label="企业联系人电话" prop="contactTel">
        <el-input v-model="form.contactTel" clearable />
      </el-form-item>
      <el-form-item label="企业联系人邮箱" prop="contactEmail">
        <el-input v-model="form.contactEmail" clearable />
      </el-form-item>
      <div class="form_col-level1">需求信息</div>
      <el-form-item>
        <div class="form_col-level2">需要哪些通用能力</div>
        <el-checkbox-group v-model="form.ability">
          <el-checkbox label="1" disabled>视频接入</el-checkbox>
          <el-checkbox label="2">云存储</el-checkbox>
          <el-checkbox label="3">AI算法</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-if="form.ability.indexOf('3') > -1">
        <div class="form_col-level2">AI算法</div>
        <div v-for="item in ais" :key="item.name">
          <div class="descriptions-Info">{{ item.name }}</div>
          <el-checkbox-group v-model="form.aiAlgorithm">
            <el-checkbox
              v-for="ai in item.algorithms"
              :key="ai.id"
              v-model="ai.id"
              :label="+ai.id"
              >{{ ai.name }}</el-checkbox
            >
          </el-checkbox-group>
        </div>
        <div class="descriptions-Info">其他</div>
        <el-input v-model="form.aiAlgorithmOther" :rows="1" class="needWidth" clearable />
      </el-form-item>
      <el-form-item>
        <div class="form_col-level2">接入信息列表</div>
        <div v-for="(item, index) in form.potentialVideoOrders" :key="index">
          <el-form-item class="insertMessage">
            <el-select
              v-model="form.potentialVideoOrders[index].coderate"
              placeholder="请选择预计码率"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="rate in bitRateList"
                :key="rate.value"
                :label="rate.label"
                :value="rate.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item class="insertMessage">
            <el-select
              v-model="form.potentialVideoOrders[index].value"
              placeholder="请选择预计接入数量"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="num in accessQuantityList"
                :key="num.value"
                :label="num.label"
                :value="num.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item class="insertMessage">
            <el-select
              v-model="form.potentialVideoOrders[index].storageTime"
              placeholder="请选择存储周期"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="storage in storageCycleList"
                :key="storage.value"
                :label="storage.label"
                :value="storage.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item class="insertMessage">
            <el-select
              v-model="form.potentialVideoOrders[index].orderDuration"
              placeholder="请选择订购时长"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="storage in subDurationList"
                :key="storage.value"
                :label="storage.label"
                :value="storage.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item class="insertMessage">
            <el-button
              v-if="index + 1 === form.potentialVideoOrders.length"
              @click="addInsert"
              >+</el-button
            >
            <el-button
              v-if="form.potentialVideoOrders.length > 1"
              @click="deletInsert(index)"
              >-</el-button
            >
          </el-form-item>
        </div>
      </el-form-item>
      <el-form-item>
        <div class="form_col-level2">摄像头/NVR通过哪种协议进行接入</div>
        <el-checkbox-group v-model="form.inProtocol">
          <el-checkbox
            v-for="item in inProtocal"
            :key="item.value"
            v-model="item.value"
            :label="item.value"
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <div class="form_col-level2">摄像头/NVR通过哪种网络方式进行接入</div>
        <el-checkbox-group v-model="form.inNetworkType">
          <el-checkbox
            v-for="item in inNetworkType"
            :key="item.value"
            v-model="item.value"
            :label="item.value"
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <div class="form_col-level2">摄像头/NVR通过哪种网络方式进行播放</div>
        <el-checkbox-group v-model="form.playNetworkType">
          <el-checkbox
            v-for="item in playNetworkType"
            :key="item.value"
            v-model="item.value"
            :label="item.value"
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <div class="form_col-level2">备注需求</div>
        <div class="form_remarks">
        </div>
        <el-input
          v-model="form.otherReq"
          type="textarea"
          :rows="3"
          class="needWidth"
        />
      </el-form-item>
      <!-- <el-button :disabled="loading" type="primary" @click="submit">提交</el-button> -->
      <el-button :disabled="loading" class="form_button" @click="submit"
        >提交</el-button
      >
    </el-form>
    <!-- </el-card> -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {
  cityList,
  provinceList,
  provinceMapping,
  cityMapping
} from '@/assets/region/cities'
import { industry } from '@/assets/industry/industry'
import {
  inProtocal,
  inNetworkType,
  playNetworkType
} from '@/assets/business/protocal'
import {
  speedS,
  bitRateList,
  accessQuantityList,
  storageCycleList,
  subDurationList
} from '@/assets/business/insertMessage'
import { getAiAlgorithm, createCustomer } from '@/api/potential'

export default Vue.extend({
  data() {
    // 验证规则
    let validateUserName = (rule: any, value: any, callback: Function) => {
      if (!/^[\u4E00-\u9FA5\uF900-\uFA2D|\w]{2,16}$/.test(value)) {
        callback(new Error('2-16位，可包含字母、中文、数字、下划线'))
      } else {
        callback()
      }
    }
    let validatePhone = (rule: any, value: string, callback: Function) => {
      if (value && !/^\d{11}$/.test(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    let validateEmail = (rule: any, value: string, callback: Function) => {
      if (
        value &&
        !/^[\w-]+@[a-zA-Z\d-]+(\.[a-zA-Z]{2,8}){1,2}$/gi.test(value)
      ) {
        callback(new Error('请输入正确的邮箱'))
      } else {
        callback()
      }
    }
    let validateAddress = (rule: any, value: string, callback: Function) => {
      if (value.length !== 2) {
        callback(new Error('请选择客户属地'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      ais: [],
      dynamicCity: [
        {
          label: '请先选择省份',
          value: null,
          disabled: true
        }
      ],
      form: {
        ability: ['1'],
        // provinceCity: [],
        industry: null,
        companyName: '',
        contactName: '',
        contactTel: '',
        contactEmail: '',
        salesManager: '',
        cityCode: '',
        provinceCode: '',
        salesManagerTel: '',
        potentialVideoOrders: [
          {
            value: null,
            coderate: null,
            storageTime: null,
            orderDuration: null
          }
        ],
      inProtocol: [],
        inNetworkType: [],
        playNetworkType: [],
        progress: 0,
        remark: '',
        otherReq: '',
        aiAlgorithm: [],
        aiAlgorithmOther: ''
      },
      cityList: cityList,
      industry: industry,
      provinceList: provinceList,
      speedS: speedS,
      bitRateList: bitRateList,
      accessQuantityList: accessQuantityList,
      storageCycleList: storageCycleList,
      subDurationList: subDurationList,
      inProtocal: inProtocal,
      inNetworkType: inNetworkType,
      playNetworkType: playNetworkType,
      // createCustomer: createCustomer,
      // getAiAlgorithm: getAiAlgorithm,
      rules: {
        companyName: [
          { required: true, message: '请输入企业名称', trigger: 'change' },
          { validator: validateUserName, trigger: 'change' }
        ],
        contactName: [
          { required: true, message: '请输入企业联系人姓名', trigger: 'change' },
          { validator: validateUserName, trigger: 'change' }
        ],
        contactTel: [
          { required: true, message: '请输入企业联系人电话', trigger: 'change' },
          { validator: validatePhone, trigger: 'change' }
        ],
        salesManager: [
          { required: true, message: '请输入销售经理名', trigger: 'change' },
          { validator: validateUserName, trigger: 'change' }
        ],
        salesManagerTel: [
          { required: true, message: '请输入销售经理电话', trigger: 'change' },
          { validator: validatePhone, trigger: 'change' }
        ],
        contactEmail: [
          { required: true, message: '请输入正确的邮箱', trigger: 'change' },
          { validator: validateEmail, trigger: 'change' }
        ],
        industry: [
          { required: true, message: '请选择所属行业', trigger: 'change' }
        ],
        provinceCode: [
          { required: true, message: '请选择省份', trigger: 'change' }
        ],
        cityCode: [
          { required: true, message: '请选择城市', trigger: 'blur' }
        ]
      }
    }
  },
  layout: 'h5',
  async mounted() {
    await this.renderAiAlgorithm()
  },
  methods: {
    addInsert() {
      this.form.potentialVideoOrders.push({
        value: null,
        coderate: null,
        storageTime: null,
        orderDuration: null
      })
    },
    deletInsert(index: any) {
      this.form.potentialVideoOrders.splice(index, 1)
    },
    // 省份城市联动
    provinceChange() {
      // 重置城市
      this.form.cityCode = ''
      if(this.form.provinceCode) {
          cityList.map((item: any) => {
          // const val = item.value.slice(1, 3)
          if(item.value === this.form.provinceCode) {
            this.dynamicCity = item.children
          } 
        })
      } else {
        // clearable
        this.dynamicCity = [
          {
            label: '请先选择省份',
            value: null,
            disabled: true
          }
        ]
      }
      
    },
    async renderAiAlgorithm() {
      const ai: any = await getAiAlgorithm()
      this.ais = ai.info
    },
    async submit() {
      const form: any = this.$refs.userForm
      form.validate(async (valid: any) => {
        if (!valid) {
          this.$message.error('请修改错误信息！')
          return
        }
        this.createNewUser()
      })
    },
    async createNewUser() {
      try {
        this.loading = true
        this.form.progress = +this.form.progress
        // this.form.cityCode = this.form.provinceCity[1]
        // this.form.provinceCode = this.form.provinceCity[0]
        this.form.ability.forEach(function (v: any, i: any, a: any) {
          a[i] = +v
        })
        const params = {
          ...this.form
        }
        await createCustomer(params)
        this.$router.push({
          path: '/questionnaire/success'
        })
        // this.$message.success('新建客户成功')
      } catch (e) {
        this.$message.error(e && e.data.message)
      } finally {
        this.loading = false
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.form {
  padding: 20px 0px;
  background-color: rgb(241, 241, 238);
  .el-select {
    width: 100%;
  }

  .el-form-item {
    background-color: #fff;
    padding: 1em 1.5em;
  }

  ::v-deep .el-form-item__error {
    position: relative;
  }

  ::v-deep .el-form-item__label {
    font-size: 1.4em;
  }

  ::v-deep .el-checkbox__label {
    font-size: 1.4em;
  }

  ::v-deep .el-input__inner {
    font-size: 1.4em;
  }

  ::v-deep .el-select-dropdown__item {
    font-size: 1.4em;
  }
}

.form_title {
  text-align: center;
  font-size: 1.4em;
}

.form_col-level1 {
  position: relative;
  font-weight: bolder;
  font-size: 1.7em;
  margin: 1em 2em;
}

.form_col-level2 {
  position: relative;
  font-weight: bolder;
  font-size: 1.6em;
}

.form_col-level3 {
  position: relative;
  font-weight: bolder;
  font-size: 1.4em;
}

.form_col-level1::before {
  position: absolute;
  content: '';
  width: 8px;
  height: 20px;
  background-color: #fa8334;
  margin: 0.2em -0.8em;
}

.descriptions-Info {
  font-size: 1.4em;
  font-weight: bolder;
}

.form_col-access-info {
  border-style: solid;
  border-width: 2px;
  padding: 0.5em 1em;
  border-color: rgb(230, 230, 229);
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 2em;
  .el-select {
    margin: 0.5em 0em;
  }
}

.form_button {
  background: #fa8334;
  width: 80%;
  color: aliceblue;
  margin: 0 10%;
}

.form_remarks {
  color: darkgray;
  line-height: 1.4em;
  margin-bottom: 1em;
}
</style>
