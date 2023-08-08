<script setup lang="ts">

</script>

<template>
  <FormKit type="form">

    <FormKit
      type="text"
      name="name"
      validation="required"
      label="Name"
      help="Enter your character's full name"
      placeholder="“Scarlet Sword”"
    />

  </FormKit>
</template>

<style scoped lang="css">
.form-container {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}
</style>
