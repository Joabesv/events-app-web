<script setup lang="ts">
import { ref, watch } from "vue";
import { Close } from "@element-plus/icons-vue";

const endDateVisible = ref(false);
const initialDate = ref("");
const endDate = ref("");

const emit = defineEmits(["newInit", "newEnd"]);

watch(initialDate, (newInitialDate) => {
  emit("newInit", newInitialDate);
});

watch(endDate, (newEndDate) => {
  emit("newEnd", newEndDate);
});

function closeCalendar() {
  endDateVisible.value = false;
  endDate.value = "";
}
</script>
<template>
  <div class="calendarLayout">
    <div>
      <label class="formLabel">Data de início</label>
      <s-date-picker v-model="initialDate" :style="{ widht: '45%' }" />
    </div>
    <s-button
      v-if="!endDateVisible.valueOf()"
      label="+ data final"
      class="add-btn"
      @click="
        () => {
          endDateVisible = true;
        }
      "
    />
  </div>
  <div class="calendarLayout" v-if="endDateVisible.valueOf()">
    <div>
      <label class="formLabel">Data final</label>
      <s-date-picker v-model="endDate" :style="{ widht: '45%' }" />
    </div>
    <el-button id="cancel" @click="closeCalendar"
      ><el-icon><Close /></el-icon
    ></el-button>
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

#cancel {
  background-color: white;
  border: 1px solid #98a1a8;
  color: #98a1a8;
  width: 40px;
  margin-top: 4px;
}

.add-btn {
  background-color: #f0f0f0;
  color: #98a1a8;
  border: none;
}
</style>
