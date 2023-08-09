<script setup lang="ts">
import { ref, watch } from "vue";
import { Close } from "@element-plus/icons-vue";
import { vMaska } from "maska";

const endHourVisible = ref(false);
const initHour = ref("");
const endHour = ref("");

const emit = defineEmits(["newInit", "newEnd"]);

watch(initHour, (newInit) => {
  emit("newInit", newInit);
});

watch(endHour, (newEnd) => {
  emit("newEnd", newEnd);
});

function closeHour() {
  endHourVisible.value = false;
  endHour.value = "";
}
</script>
<template>
  <div>
    <label class="formLabel">Horário</label>
    <div :id="!endHourVisible ? 'horarioLayoutclosed' : 'horarioLayoutopened'">
      <s-input
        v-model="initHour"
        placeholder="00:00"
        v-maska
        data-maska="##:##"
      />
      <s-button
        v-if="!endHourVisible.valueOf()"
        label="+ horário de término"
        class="add-btn"
        @click="
          () => {
            endHourVisible = true;
          }
        "
      />
      <span
        v-if="endHourVisible.valueOf()"
        :style="{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '18px',
        }"
      >
        <p>às</p>
      </span>
      <s-input
        v-if="endHourVisible.valueOf()"
        v-model="endHour"
        placeholder="00:00"
        v-maska
        data-maska="##:##"
      />
      <el-button v-if="endHourVisible.valueOf()" id="cancel" @click="closeHour"
        ><el-icon><Close /></el-icon
      ></el-button>
    </div>
  </div>
</template>
<style scoped>
.formLabel {
  font-weight: bold;
  font-size: 16px;
}
#horarioLayoutclosed {
  display: flex;
  gap: 10px;
}

#horarioLayoutopened {
  display: grid;
  grid-template-columns: 0.2fr 0.05fr 0.2fr 0.5fr;
  gap: 5px;
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
</style>
