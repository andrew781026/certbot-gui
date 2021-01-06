<template>
    <div>
        <h1>下載 Ngrok</h1>
        <el-progress v-if="error" type="circle" status="exception" :percentage="percentage"></el-progress>
        <el-progress v-else-if="downloading" type="circle" :percentage="percentage"></el-progress>
        <template v-else>
            <a href="https://github.com/andrew781026/certbot-gui/releases/download/v0.0.1-alpha/ngrok.exe">
                https://github.com/andrew781026/certbot-gui/releases/download/v0.0.1-alpha/ngrok.exe
            </a>
            <br>
            <el-button type="primary" @click="install">安裝 Ngrok</el-button>
            <el-button type="warning" @click="toCheckCertbotPage">使用 Certbot</el-button>
        </template>
    </div>
</template>

<script>
    import {downloadNgrok, gotDataListener, errMsgListener} from "@/ipcRenderer/ngrok";

    export default {
        name: "PleaseInstallNgrok",
        mounted() {

            // register getData
            gotDataListener(({downloadedLength, totalLength}) => {

                this.percentage = Math.floor(downloadedLength * 100 / totalLength);
            });

            errMsgListener(errMsg => this.error = errMsg);
        },
        methods: {

            install() {

                downloadNgrok()
                        .then(
                                () => this.$router.push({name: 'NgrokControl'}),
                                console.error
                        )

                this.downloading = true;
            },

            toCheckCertbotPage() {

                this.$router.push({name: 'CheckCertbot'});
            }
        },
        data() {

            return {
                percentage: 0,
                downloading: false,
                error: undefined,
            }
        }
    }
</script>

<style scoped>

</style>