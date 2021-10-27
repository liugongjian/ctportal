<template>
  <div class="form">
    <el-form
      ref="userForm"
      :model="ruleForm"
      :rules="rules"
      label-position="top"
      label-width="100px"
    >
      <div class="form_title"><h2>天翼云视频监控需求问卷</h2></div>
      <div class="form_col-level1">基本信息</div>
      <el-form-item label="企业名称:" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="省份" prop="province">
        <el-select v-model="ruleForm.province">
          <el-option
            v-for="item in provinces"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="城市" prop="city">
        <el-select v-model="ruleForm.city">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属行业" prop="industry">
        <el-select v-model="ruleForm.industry">
          <el-option
            v-for="item in industries"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="企业联系人姓名" prop="entrepreneur">
        <el-select v-model="ruleForm.entrepreneur">
          <el-option
            v-for="item in entrepreneurs"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="企业联系人电话" prop="entrepreneurNumber">
        <el-input v-model="ruleForm.entrepreneurNumber"></el-input>
      </el-form-item>
      <el-form-item label="企业联系人邮箱" prop="entrepreneurEmail">
        <el-input v-model="ruleForm.entrepreneurEmail"></el-input>
      </el-form-item>
      <div class="form_col-level1">需求信息</div>
      <el-form-item>
        <div class="form_col-level2">需要哪些通用能力</div>
        <el-checkbox-group v-model="ruleForm.checkedFunction">
          <el-col :span="24">
            <el-checkbox label="视频接入" disabled />
          </el-col>
          <el-col :span="24">
            <el-checkbox label="云存储" />
          </el-col>
          <el-checkbox label="AI算法" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-if="ruleForm.checkedFunction.indexOf('AI算法') > -1">
        <div class="form_col-level2">需要哪些AI算法</div>
        <div class="form_col-level3">人脸识别</div>
        <el-checkbox-group v-model="ruleForm.faceDistinguish">
          <el-col v-for="item in faceDistinguish" :key="item" :span="24">
            <el-checkbox :label="item" />
          </el-col>
        </el-checkbox-group>
        <div class="form_col-level3">人体识别</div>
        <el-checkbox-group v-model="ruleForm.bodyDistinguish">
          <el-col v-for="item in bodyDistinguish" :key="item" :span="24">
            <el-checkbox :label="item" />
          </el-col>
        </el-checkbox-group>
        <div class="form_col-level3">场景识别</div>
        <el-checkbox-group v-model="ruleForm.sceneDistinguish">
          <el-col v-for="item in sceneDistinguish" :key="item" :span="24">
            <el-checkbox :label="item"
          /></el-col>
        </el-checkbox-group>
        <div class="form_col-level3">其它</div>
        <el-input v-model="ruleForm.other" type="textarea" :rows="2"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="form_col-level2">接入信息列表</div>
        <div class="form_col-access-info">
          <div>接入信息-1</div>
          <el-select v-model="ruleForm.accessInfo" placeholder="请选择预计码率">
            <el-option
              v-for="item in accessInfo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="ruleForm.accessNumber"
            placeholder="请选择预计接入数量"
          >
            <el-option
              v-for="item in accessNumber"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="ruleForm.cycle" placeholder="请选择存储周期">
            <el-option
              v-for="item in cycle"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
          <el-select v-model="ruleForm.time" placeholder="请选择订购时长">
            <el-option
              v-for="item in time"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </div>
        <div class="form_col-access-info">
          <div>接入信息-2</div>
          <el-select v-model="ruleForm.accessInfo" placeholder="请选择预计码率">
            <el-option
              v-for="item in accessInfo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select
            v-model="ruleForm.accessNumber"
            placeholder="请选择预计接入数量"
          >
            <el-option
              v-for="item in accessNumber"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="ruleForm.cycle" placeholder="请选择存储周期">
            <el-option
              v-for="item in cycle"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
          <el-select v-model="ruleForm.time" placeholder="请选择订购时长">
            <el-option
              v-for="item in time"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </div>
        <el-button class="form_button" @click="append">+增加接入信息</el-button>
      </el-form-item>
      <el-form-item>
        <div class="form_col-level2">摄像头/NVR通过哪种协议进行接入</div>
        <el-checkbox-group v-model="ruleForm.protocol">
          <el-col v-for="item in protocol" :key="item" :span="24">
            <el-checkbox :label="item"
          /></el-col>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item
        ><div class="form_col-level2">摄像头/NVR通过哪种网络方式进行接入</div>
        <el-checkbox-group v-model="ruleForm.network">
          <el-col v-for="item in network" :key="item" :span="24">
            <el-checkbox :label="item"
          /></el-col>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <div class="form_col-level2">摄像头/NVR通过哪种网络方式进行播放</div>
        <el-checkbox-group v-model="ruleForm.network1">
          <el-col v-for="item in network1" :key="item" :span="24">
            <el-checkbox :label="item"
          /></el-col>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <div class="form_col-level2">备注需求</div>
        <div class="form_remarks">
          例如定制视频分析服务，比如人脸识别，口罩检测，人员聚集检测，人员布控，吸烟检测，安全帽发光服检测等
        </div>
        <el-input
          type="textarea"
          :rows="3"
          v-model="ruleForm.inputs"
        ></el-input>
      </el-form-item>
      <el-button class="form_button" @click="submit">提交</el-button>
    </el-form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      ruleForm: {
        name: '',
        province: '',
        city: '',
        industry: '',
        entrepreneur: '',
        entrepreneurNumber: '',
        entrepreneurEmail: '',
        checkedFunction: ['视频接入'],
        faceDistinguish: [],
        bodyDistinguish: [],
        sceneDistinguish: [],
        other: '',
        accessInfo: [],
        accessNumber: [],
        cycle: [],
        time: [],
        protocol: '',
        network: '',
        network1: '',
        inputs: ''
      },
      rules: {
        name: [{ required: true, trigger: 'blur' }],
        province: [{ required: true, trigger: 'change' }],
        city: [{ required: true, trigger: 'change' }],
        industry: [{ required: true, trigger: 'change' }],
        entrepreneur: [{ required: true, trigger: 'change' }],
        entrepreneurNumber: [{ required: true, trigger: 'blur' }],
        entrepreneurEmail: [{ trigger: 'blur' }]
      },
      provinces: [
        { value: 'option1', label: '湖北' },
        { value: 'option2', label: '浙江' },
        { value: 'option3', label: '河北' }
      ],
      cities: [
        { value: 'city1', label: '上海' },
        { value: 'city2', label: '北京' }
      ],
      industries: [
        { value: 'industry1', label: '金融' },
        { value: 'industry2', label: '互联网' }
      ],
      entrepreneurs: [{ value: 'entrpreneur1', label: '马云' }],
      faceDistinguish: ['未戴口罩', '人员布控'],
      bodyDistinguish: ['人员聚集', '吸烟检测', '安全帽反光服', '人体属性'],
      sceneDistinguish: ['危险区域检测', '烟雾明火'],
      accessInfo: [
        { value: 'info1', label: '0.5Mbps' },
        { value: 'info2', label: '1Mbps' },
        { value: 'info3', label: '2Mbps' }
      ],
      accessNumber: [{ value: 'number1', label: '<50路' }],
      cycle: [{ value: 'cycle1', label: '3天' }],
      time: [{ value: 'time1', label: '1个月' }],
      protocol: ['GB28181', 'RTMP', 'RTSP', 'EHOME', 'ONVIF'],
      network: ['互联网', '专线'],
      network1: ['互联网', '专线']
    }
  },
  layout: 'h5',
  methods: {
    submit() {
      console.log('submit!')
    },
    append() {
      console.log('append!')
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
}

.form_title {
  text-align: center;
}
.form_col-level1 {
  position: relative;
  font-weight: bolder;
  font-size: 1.3em;
  margin: 1em 2em;
}
.form_col-level2 {
  position: relative;
  font-weight: bolder;
  font-size: 1.2em;
}
.form_col-level3 {
  position: relative;
  font-weight: bolder;
  font-size: 1em;
}
.form_col-level1::before {
  position: absolute;
  content: '';
  width: 8px;
  height: 20px;
  background-color: #fa8334;
  margin: 0.2em -0.8em;
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