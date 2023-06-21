<template>
    <h1 class="text-red-500">From Test page content is below it</h1>
    <h2 class="fancy-header"><Markdown :use="$slots.data" unwrap="p" /></h2>
    <ContentRenderer :value="data!">
      <ContentRendererMarkdown :value="data!" />
    </ContentRenderer>

    <h1 class="text-blue-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, obcaecati minus porro fugit,
         corrupti nesciunt fuga neque id quas sapiente
         error quis corporis architecto ipsa sequi, incidunt rerum dicta ullam?
    </h1>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('page-data', () => queryContent('/about').findOne())

</script>