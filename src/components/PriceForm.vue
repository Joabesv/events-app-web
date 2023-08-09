<script setup lang="ts">
import { ref, watch } from "vue";
import { Close } from "@element-plus/icons-vue";

const priceVisible = ref(false);
const price = ref("");

const emit = defineEmits(["newInit", "newEnd"]);

watch(price, (newInit) => {
  emit("newInit", newInit);
});

function closePrice() {
  priceVisible.value = false;
  price.value = "";
}
</script>
<template>
  <div>
    <div :id="priceVisible ? 'priceLayoutclosed' : 'priceLayoutopened'">
      <label class="formLabel" v-if="priceVisible.valueOf()">Ingresso</label>
      <div class="price">
        <s-button
          v-if="!priceVisible.valueOf()"
          label="+ ingresso"
          class="add-btn"
          @click="
            () => {
              priceVisible = true;
            }
          "
        />
        <s-input v-if="priceVisible.valueOf()" v-model="price" placeholder="R$" type="number"/>
        <el-button v-if="priceVisible.valueOf()" id="cancel" @click="closePrice"
          ><el-icon><Close /></el-icon
        ></el-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
#priceLayoutclosed {
  display: flex;
  flex-direction: column;
}

#priceLayoutopened {
  display: grid;
  grid-template-columns: 1.75fr 0.25fr;
  gap: 5px;
}

#cancel {
  background-color: white;
  border: 1px solid #98a1a8;
  color: #98a1a8;
  width: 40px;
}

.formLabel {
  font-weight: bold;
  font-size: 16px;
}

.add-btn {
  background-color: #f0f0f0;
  color: #98a1a8;
  border: none;
}

.price {
    display: flex;
    gap: 8px;
}
</style>
