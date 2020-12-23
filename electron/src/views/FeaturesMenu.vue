<template>
    <div>
        <h1>功能列表</h1>
        <div class="btn-wrap">
            <el-button>新增</el-button>
            <el-button>刪除</el-button>
            <el-button>查看</el-button>
            <el-button>設定</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FeaturesMenu"
    }
</script>

<style scoped>

    .btn-wrap {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
    }
</style>