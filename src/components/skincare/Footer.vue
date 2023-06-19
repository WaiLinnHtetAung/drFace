<template>
    <footer :class="{blur: isChoose}">
        &copy; Copy Right Served
    </footer>
</template>

<script>
import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    export default {
        setup() {
            const router = useRouter();
            let isChoose = ref();

            router.afterEach((to) => {
                if(to.path == '/') {
                    isChoose.value = true;
                } else {
                    isChoose.value = false;
                }
            })

            return {isChoose}
        }
    }
</script>

<style>
    footer {
        height: 40px;
        background-color: rgb(68, 65, 65);
        color: #fff;
        padding-top: 9px;
        text-align: center;
        width: 100%;
        bottom: 0;
    }
    .blur {
        display: none;
    }
</style>
