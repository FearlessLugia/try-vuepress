---
title: TJLX
author: kiiro
date: '2021-12-12'
# categories:
# - frontend
# tags:
# -vue
---

# Introduction
1234

:::tip
- aaaa
- bbbb
:::

## aaaaaaaaa
12345

```js
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
```
```vue-html
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
```

- **Declarative Rendering**: Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaS

## asdf
12345

### Which to Choose?

:::tip Prerequisites
The rest o required.
:::

#### Waas?

### Which t22?
```vue
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```


:::warning sss
123
:::

:::danger kkk
234
:::