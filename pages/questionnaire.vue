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
      <div class="form_col">基本信息</div>
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
      <div class="form_col">需求信息</div>
      <el-form-item>
        <div class="form_colmin">需要哪些通用能力</div>
        <el-checkbox-group v-model="ruleForm.checkedFunction">
          <el-col :span="12">
            <el-checkbox label="视频接入" disabled />
          </el-col>
          <el-col :span="12">
            <el-checkbox label="云存储" />
          </el-col>
          <el-checkbox label="AI算法" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-if="ruleForm.checkedFunction.indexOf('AI算法') > -1">
        <el-form-item>
          <div class="form_colmin">需要哪些AI算法</div>
          <div class="form_colminmin">人脸识别</div>
          <el-checkbox-group v-model="ruleForm.faceDistinguish">
            <el-col v-for="item in faceDistinguish" :key="item" :span="12">
              <el-checkbox :label="item" />
            </el-col>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <div class="form_colminmin">人体识别</div>
          <el-checkbox-group v-model="ruleForm.bodyDistinguish">
            <el-col v-for="item in bodyDistinguish" :key="item" :span="12">
              <el-checkbox :label="item" />
            </el-col>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <div class="form_colminmin">场景识别</div>
          <el-checkbox-group v-model="ruleForm.sceneDistinguish">
            <el-col v-for="item in sceneDistinguish" :key="item" :span="12">
              <el-checkbox :label="item"
            /></el-col>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <div class="form_colminmin">其它</div>
          <el-input
            v-model="ruleForm.other"
            type="textarea"
            :rows="2"
          ></el-input>
        </el-form-item>
      </el-form-item>
      <div class="form_colmin">接入信息列表</div>
      <div class="form_colAccessInfo">
        <el-form-item>
          <div>接入信息-1</div>
          <el-select v-model="ruleForm.accessInfo" placeholder="请选择预计码率">
            <el-option
              v-for="item in accessInfo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
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
        </el-form-item>
        <el-form-item>
          <el-select v-model="ruleForm.cycle" placeholder="请选择存储周期">
            <el-option
              v-for="item in cycle"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="ruleForm.time" placeholder="请选择订购时长">
            <el-option
              v-for="item in time"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="form_colAccessInfo">
        <el-form-item>
          <div>接入信息-2</div>
          <el-select v-model="ruleForm.accessInfo" placeholder="请选择预计码率">
            <el-option
              v-for="item in accessInfo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
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
        </el-form-item>
        <el-form-item>
          <el-select v-model="ruleForm.cycle" placeholder="请选择存储周期">
            <el-option
              v-for="item in cycle"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="ruleForm.time" placeholder="请选择订购时长">
            <el-option
              v-for="item in time"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item class="form_title">
        <el-button class="form_button" @click="append">+增加接入信息</el-button>
      </el-form-item>
      <div class="form_colmin">摄像头/NVR通过哪种协议进行接入</div>
      <el-form-item>
        <el-checkbox-group v-model="ruleForm.protocol">
          <el-col v-for="item in protocol" :key="item" :span="12">
            <el-checkbox :label="item"
          /></el-col>
        </el-checkbox-group>
      </el-form-item>
      <div class="form_colmin">摄像头/NVR通过哪种网络方式进行接入</div>
      <el-form-item>
        <el-checkbox-group v-model="ruleForm.network">
          <el-col v-for="item in network" :key="item" :span="12">
            <el-checkbox :label="item"
          /></el-col>
        </el-checkbox-group>
      </el-form-item>
      <div class="form_colmin">摄像头/NVR通过哪种网络方式进行播放</div>
      <el-form-item>
        <el-checkbox-group v-model="ruleForm.network1">
          <el-col v-for="item in network1" :key="item" :span="12">
            <el-checkbox :label="item"
          /></el-col>
        </el-checkbox-group>
      </el-form-item>
      <div class="form_colmin">备注需求</div>
      <div class="form_remarks">
        例如定制视频分析服务，比如人脸识别，口罩检测，人员聚集检测，人员布控，吸烟检测，安全帽发光服检测等
      </div>
      <el-form-item>
        <el-input
          type="textarea"
          :rows="3"
          v-model="ruleForm.inputs"
        ></el-input>
      </el-form-item>
      <el-form-item class="form_title"
        ><el-button class="form_button" @click="submit"
          >提交</el-button
        ></el-form-item
      >
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
  background-color: rgb(241, 241, 238);
  padding: 30px 40px 50px 80px;
}

.form_title {
  text-align: center;
}
.form_col {
  position: relative;
  padding: 10px 10px;
  font-family: '黑体';
  font-weight: bolder;
  font-size: 20px;
}
.form_colmin {
  position: relative;
  font-family: '黑体';
  font-weight: bolder;
  font-size: 18px;
  padding: 10px 0px 10px 0px;
}
.form_colminmin {
  position: relative;
  font-family: '黑体';
  font-weight: bolder;
  font-size: 15px;
}
.form_col::before {
  position: absolute;
  content: '';
  width: 8px;
  height: 20px;
  background-color: #fa8334;
  margin: 1px -20px;
}
.checkbox--verticalArrange {
  display: block;
}
.form_colAccessInfo {
  border-style: solid;
  padding: 8px 10px 5px 10px;
  margin: 10px 0px 20px 0px;
  border-width: 2px;
  border-color: rgb(230, 230, 229);
  font-family: '黑体';
  font-weight: bolder;
  font-size: 15px;
}
.form_button {
  background: #fa8334;
  width: 50%;
  color: aliceblue;
}
.form_remarks {
  color: darkgray;
  margin-bottom: 10px;
}
</style>