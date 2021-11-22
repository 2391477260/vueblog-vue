<template>
    <div class="container">
            <mavon-editor style="height: 100%" v-model="editBlogContent" ></mavon-editor>
    </div>
</template>
<script>

    export default {
        name: 'editor',
        components: {
        },
        data(){
            return{
                editBlogContent:"赶紧编辑你自己的博客吧",
            }
        },
        methods:{

        }
    }
</script>
<style>
    .container {
        margin: auto;
        width: 100%;
        height: 90%;
    }

</style>
