<template>
  <div class="relative border-b-2 focus-within:border-blue-500 mt-8 mb-2">

    <!-- input -->
    <input v-if="type !== 'textarea' && type !== 'checkbox'" :id="id" :type="type" :required="required" :name="label"
           placeholder=" "
           :value="value" @input="$emit('input', $event.target.value)"
           class="block w-full appearance-none focus:outline-none bg-transparent"/>

    <!-- checkbox -->
    <input v-else-if="type === 'checkbox'" :id="id" :type="type" :required="required" :name="label"
           :value="value" @input="$emit('input', $event.target.value)"
           class="mr-1">

    <!-- textarea -->
    <textarea v-else :id="id" :required="required" placeholder=" " :name="label" :value="value"
              @input="$emit('input', $event.target.value)"
              class="block w-full appearance-none focus:outline-none bg-transparent"/>

    <!-- label -->
    <label :for="id" :class="labelClasses">
      {{ `${label.trim()}${required ? "*" : ""}` }}
    </label>

  </div>
</template>
<script>
import { generate } from "randomstring";

export default {
  data() {
    return {
      id: generate(12)
    }
  },
  computed: {
    labelClasses() {
      return {
        'absolute top-0 duration-300 origin-0 pointer-events-none': this.type !== 'checkbox',
        'text-center': this.type === 'checkbox'
      }
    }
  },
  props: {
    value: {
      type: String
    },
    label: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="scss">
input:focus-within ~ label,
input:not(:placeholder-shown) ~ label,
textarea:focus-within ~ label,
textarea:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-6;
}

input:focus-within ~ label,
textarea:focus-within ~ label {
  @apply text-blue-500;
}

</style>