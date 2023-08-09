<script setup lang="ts">
import { ref, watch } from "vue";
import { Close } from "@element-plus/icons-vue";

const limitVisible = ref(false);
const limit = ref("");

const emit = defineEmits(["newInit", "newEnd"]);

watch(limit, (newInit) => {
  emit("newInit", newInit);
});

function closePrice() {
  limitVisible.value = false;
  limit.value = "";
}
</script>
<template>
  <div>
    <div class="limitLayout">
      <label class="formLabel" v-if="limitVisible.valueOf()"
        >Limite de convidados</label
      >
      <div class="limit">
        <s-button
          v-if="!limitVisible.valueOf()"
          label="+ limite de convidados"
          class="add-btn"
          @click="
            () => {
              limitVisible = true;
            }
          "
        />
        <s-input
          v-if="limitVisible.valueOf()"
          v-model="limit"
          placeholder="0"
          type="number"
        />
        <el-button v-if="limitVisible.valueOf()" id="cancel" @click="closePrice"
          ><el-icon><Close /></el-icon
        ></el-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.formLabel {
  font-weight: bold;
  font-size: 16px;
}

.calendarLayout {
  display: grid;
  grid-template-columns: 1.75fr 0.25fr;
  align-items: center;
  gap: 10px;
}

#limitLayoutclosed {
  display: flex;
  gap: 10px;
  flex-direction: column;
}

#priceLayoutopened {
  display: grid;
  grid-template-columns: 0.2fr 0.05fr 0.2fr 0.5fr;
  gap: 5px;
  margin-left: 8px;
  align-items: center;
}

#cancel {
  background-color: white;
  border: 1px solid #98a1a8;
  color: #98a1a8;
  width: 40px;
}

.add-btn {
  background-color: #f0f0f0;
  color: #98a1a8;
  border: none;
}

.limit {
  display: flex;
  gap: 8px;
}
</style>
