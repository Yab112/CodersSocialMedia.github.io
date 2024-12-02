  <template>
  <div class="dark:bg-[#eeeeee] bg-[#000000] text-gray-100 dark:text-gray-900 ">
    <nav class=" flex justify-between mx-4 items-center">
      <div>
        <CategorySelection :items="categoryItems" :selectedItems="selectedItems" />
      </div>
      <div class="flex gap-2 my-auto">
        <Icon :icon="['fas', 'message']" class="text-blue-500 my-auto cursor-pointer" />
        <Icon :icon="['fas', 'bell']" class="text-blue-500 my-auto cursor-pointer" />
        <button
        @click="toggleDarkMode"
        class="px-4 py-2 text-black dark:text-white rounded"
        :class="colorMode.value === 'dark' ? 'Switch to Dark Mode' : 'Switch to Light Mode' " 
        > 
        <Icon :icon="['fas', 'moon']" class="text-gray-100 dark:text-black hover:bg-slate-300 hover:rounded-full rounded-full p-3" v-if="colorMode.value === 'dark'" />
        <Icon :icon="['fas', 'sun']" class="text-gray-100 dark:text-black hover:bg-slate-500 hover:rounded-full rounded-full p-3" v-else/>
        </button>
        <ProfileSection
          source="/yabprofile.jpg"
          name="Yabibal Aladia" 
          status="online"
          statusText="Available" 
         />
      </div>

    </nav>
    <main class="p-4">
      
    </main>
  </div>
</template>

<script setup lang="ts">
    import ProfileSection from '../molecules/profileicon.vue';
    import Icon from '~/components/atoms/Icons.vue';
    import CategorySelection from '~/components/molecules/CathagotySelect.vue';
    const colorMode = useColorMode(); 
    const toggleDarkMode = () => {
      colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'; 
    };

const categoryItems = [
  { value: 'python', label: 'Python' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
];
const selectedItems = ref(['python']);
  </script>