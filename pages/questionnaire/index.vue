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
      <div class="form_title"><h2>天翼云智能视图服务需求问卷</h2></div>
      <div class="form_col-level1">基本信息</div>
      <el-form-item label="企业名称" prop="companyName">
        <el-input v-model="form.companyName" />
      </el-form-item>
      <el-form-item label="省份" prop="provinceCode">
        <el-select
          v-model="form.provinceCode"
          @change="provinceChange"
          :popper-append-to-body="false"
          placeholder="请选择省份"
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
        <el-input v-model="form.contactName" />
      </el-form-item>
      <el-form-item label="企业联系人电话" prop="contactTel">
        <el-input v-model="form.contactTel" />
      </el-form-item>
      <el-form-item label="企业联系人邮箱" prop="contactEmail">
        <el-input v-model="form.contactEmail" />
      </el-form-item>
      <div class="form_col-level1">需求信息</div>
      <el-form-item>
        <div class="form_col-level2">需要哪些通用能力</div>
        <el-checkbox-group v-model="form.ability" @change="resetStorageTime">
          <el-checkbox :label="ability1" disabled>视频接入</el-checkbox>
          <el-checkbox :label="ability2">云存储</el-checkbox>
          <el-checkbox :label="ability3">AI算法</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-if="form.ability.indexOf(3) > -1">
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
        <el-input v-model="form.aiAlgorithmOther" :rows="1" class="needWidth" />
      </el-form-item>
      <el-form-item>
        <div class="form_col-level2">接入信息列表</div>
        <div class="form_order" v-for="(item, index) in form.potentialVideoOrders" :key="index">
          <el-form-item class="insertMessage">
            <el-select
              v-model="form.potentialVideoOrders[index].coderate"
              placeholder="请选择预计码率"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="rate in bitRateList"
                :key="rate.value"
                :disabled="rate.disabled"
                :label="rate.label"
                :value="rate.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item class="insertMessage">
            <el-select
              v-model="form.potentialVideoOrders[index].value"
              placeholder="请选择预计接入设备数量"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="num in accessQuantityList"
                :key="num.value"
                :disabled="num.disabled"
                :label="num.label"
                :value="num.value"
              />
            </el-select>
            <el-input
                v-if="form.potentialVideoOrders[index].value === 'custom'"
                v-model="form.potentialVideoOrders[index].customOrders"
                onkeyup="value=value.replace(/[^\d]/g,'')"
                :rows="1"
                class="value-orders"
                placeholder="请输入自定义接入设备数量"
              />
          </el-form-item>
          <el-form-item class="insertMessage">
            <el-select
              v-model="form.potentialVideoOrders[index].storageTime"
              placeholder="请选择存储周期"
              :disabled="form.ability.indexOf(2) < 0"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="storage in storageCycleList"
                :key="storage.value"
                :disabled="storage.disabled"
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
                :disabled="storage.disabled"
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
<script>
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
import { signature } from '@/api/wx'

export default Vue.extend({
  layout: 'h5',
  head(){
    return {
      title: '天翼云视频监控需求问卷',
      script: [
        { src: 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js' }
      ],
    }
  },
  data() {
    // 验证规则
    let validateUserName = (rule, value, callback) => {
      if (!/^[\u4E00-\u9FA5\uF900-\uFA2D|\w]{2,16}$/.test(value)) {
        callback(new Error('2-16位，可包含字母、中文、数字、下划线'))
      } else {
        callback()
      }
    }
    let validatePhone = (rule, value, callback) => {
      if (value && !/^\d{11}$/.test(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    let validateEmail = (rule, value, callback) => {
      if (
        value &&
        !/^[\w-]+@[a-zA-Z\d-]+(\.[a-zA-Z]{2,8}){1,2}$/gi.test(value)
      ) {
        callback(new Error('请输入正确的邮箱'))
      } else {
        callback()
      }
    }
    let validateAddress = (rule, value, callback) => {
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
      ability1:1,
      ability2:2,
      ability3:3,
      // storageHolder: '0天',
      oldStorageTime: null,
      form: {
        ability: [1],
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
            orderDuration: null,
            customOrders: null
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
  async mounted() {
    this.setShareInfo()
    await this.renderAiAlgorithm()
    this.oldStorageTime = this.form.ability
  },
  methods: {
    async setShareInfo() {
      const link = `https://vcn.ctyun.cn/questionnaire/`
      const { data } = await signature({
        url: link
      })
      // @ts-ignore
      wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.noncestr,
        signature: data.signature,
        jsApiList: [
          'updateTimelineShareData',
          'updateAppMessageShareData'
        ]
      })
      // @ts-ignore
      wx.ready(() => {
        var config = {
          title: '天翼云视频监控需求问卷',
          desc: `这里有专业的技术构架师，为您提供专业咨询，助您轻松上云！`,
          link,
          imgUrl: 'https://console.vcn.ctyun.cn/vss/img/landing.10348bce.png'
        }
        // @ts-ignore
        wx.updateTimelineShareData(config)
        // @ts-ignore
        wx.updateAppMessageShareData(config)
      })
    },
    addInsert() {
      this.form.potentialVideoOrders.push({
        value: null,
        coderate: null,
        storageTime: null,
        orderDuration: null
      })
    },
    resetStorageTime(val) {
    if ((val.indexOf(2) > 0 && this.oldStorageTime.indexOf(2) < 0) || (val.indexOf(2) < 0 && this.oldStorageTime.indexOf(2) > 0)) {
      this.form.potentialVideoOrders.map((item) => {
        item.storageTime = null
      })
      this.oldStorageTime = val
    }
  },
    deletInsert(index) {
      this.form.potentialVideoOrders.splice(index, 1)
    },
    // 省份城市联动
    provinceChange() {
      // 重置城市
      this.form.cityCode = ''
      if(this.form.provinceCode) {
          cityList.map((item) => {
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
      const ai = await getAiAlgorithm()
      this.ais = ai.info
    },
    async submit() {
      const form = this.$refs.userForm
      form.validate(async (valid) => {
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
        const params = {
          ...this.form
        }
        // this.form.cityCode = this.form.provinceCity[1]
        // this.form.provinceCode = this.form.provinceCity[0]
        params.aiAlgorithm = params.ability.indexOf(3) > 0 ? this.form.aiAlgorithm : []
        params.potentialVideoOrders.map((item) => {
          item.value = (item.value === 'custom' ? item.customOrders : item.value) || undefined
          item.coderate = item.coderate || undefined
          item.storageTime = params.ability.indexOf(2) > 0 ? item.storageTime : undefined
          item.orderDuration = item.orderDuration || undefined
        })
        await createCustomer(params)
        this.$router.push({
          path: '/questionnaire/success'
        })
      } catch (e) {
        console.log(e)
        this.$message.error(e && (e.message || e.data.message))
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
  max-width: 700px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  color: #333333;
  padding-top: 70px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  background-color: transparent;

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
    font-size: 1.3em;
  }

  ::v-deep .el-checkbox {
    width: 100%;
    margin: 0;
  }

  ::v-deep .el-checkbox__label {
    font-size: 1.3em;
    font-weight: normal;
  }

  ::v-deep .el-checkbox__inner {
    width: 20px;
    height: 20px;

    &::after {
      height: 11px;
      left: 7px;
    }
  }

  ::v-deep .el-input__inner {
    font-size: 1.3em;
  }

  ::v-deep .el-select-dropdown__item {
    font-size: 1.3em;
  }
}

.form_title {
  text-align: center;
  font-size: 1.3em;
}

.form_col-level1 {
  position: relative;
  font-weight: bolder;
  font-size: 1.7em;
  margin: 1em 2em;
}

.form_col-level2 {
  position: relative;
  font-size: 1.3em;
  color: #000;
  margin-bottom: 0.5em;
}

.form_col-level3 {
  position: relative;
  font-weight: bolder;
  font-size: 1.3em;
}

.form_col-level1::before {
  position: absolute;
  content: '';
  width: 8px;
  height: 20px;
  background-color: #fa8334;
  margin: 0.2em -0.8em;
}

.form_order {
  border: 1px solid #eee;
}

.descriptions-Info {
  font-size: 1.3em;
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
  line-height: 1.3em;
  margin-bottom: 1em;
}

.value-orders {
  display: block;
  margin-top: 15px;
}
</style>
