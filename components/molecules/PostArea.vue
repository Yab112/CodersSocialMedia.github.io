<template>
    <div class="flex flex-col gap-2 bg-black dark:bg-slate-200 px-8 rounded-sm py-2">
            <PostuserProfile :icon="['user-icon', 'clock']" :source="'/yabprofile.jpg'" :name="'John Doe'"
                :status="'online'" :statusText="'12 mins ago'" />
            <Text text="Fetching component in Python " class="text-xl text-slate-400 dark:text-slate-700" />
            <Text
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                class="text-sm text-slate- dark:text-slate-700" />
            <div class="flex gap-1">
                <TagWithIcon :tags="tags" />
            </div>
            <CodePost :code="code" />
            <div class="flex justify-around">
               <TagWithIcon :tags="reaction"/>
            </div>
        </div>
</template>
<script setup lang="ts">
import CodePost from '../molecules/CodePost.vue';
import TagWithIcon from '../molecules/TagWithIcon.vue';
import PostuserProfile from '../molecules/PostUserProfile.vue';
import Text from '../atoms/Text.vue';

defineProps({
    code:{
        type:String,
    }
})
const tags = [
    { icon: ['fas', 'hashtag'], label: 'Python' },
    { icon: ['fas', 'hashtag'], label: 'VueJS' },
    { icon: ['fas', 'hashtag'], label: 'JavaScript' }
]
const reaction = [
    { icon: ['fas', 'thumbs-up'], label: '12' },
    { icon: ['fas', 'comment'], label: '2' },
    { icon: ['fas', 'share'], label: '3' }
]   
</script>