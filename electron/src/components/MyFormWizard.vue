<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>設定 SSL 資訊</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <el-steps :active="1">
            <el-step title="信件通知(選用)" icon="el-icon-edit"></el-step>
            <el-step title="域名(必要)" icon="el-icon-upload"></el-step>
            <el-step title="" icon="el-icon-picture"></el-step>
        </el-steps>
    </el-card>
</template>

<script>
export default {
    name: 'MyFormWizard',
    methods: {
        onComplete: function () {
            // 安裝一個新的 SSL 憑證 , 流程該為 ?
            /*

      1. 確認 Certbot 是否已安裝 , 未安裝 => 帶到下載頁
      2. 

       */
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
