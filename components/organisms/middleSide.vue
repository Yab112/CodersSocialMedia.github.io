<template>
    <div class="flex flex-col gap-2 dark:text-slate-200 text-gray-100 ">
        <div>
            <CreatePost :icon="['fas', 'plus-square']" text=" Create Your Post" />
        </div>
        <PostArea :code="codeString" />
        <PostArea :code="codeString"/>
        
    </div>
</template>

<script setup lang="ts">

const codeString = `import pandas as pd
import matplotlib.pyplot as plt

# Sample data
data = {
  'Month': ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  'Sales': [1200, 1500, 1300, 1800, 2100]
}

# Create DataFrame
df = pd.DataFrame(data)

# Create line plot
plt.figure(figsize=(10, 6))
plt.plot(df['Month'], df['Sales'], marker='o')
plt.title('Monthly Sales Data')
plt.xlabel('Month')
plt.ylabel('Sales ($)')
plt.grid(True)
plt.show()`

import CreatePost from '../molecules/CreatePost.vue';
import PostArea from '../molecules/PostArea.vue';
</script>