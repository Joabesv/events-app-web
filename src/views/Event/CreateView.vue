<script setup lang="ts">
import { reactive } from "vue";
import CalendarForm from "../../components/CalendarForm.vue";
import HorarioForm from "../../components/HorarioForm.vue";
import PriceForm from "../../components/PriceForm.vue";
import LimitForm from "../../components/LimitForm.vue";
import { Location, Link } from "@element-plus/icons-vue";
let form = reactive({});
</script>
<template>
  <s-nav-bar
    titulo="Criar evento"
    :voltar="
      () => {
        $router.push('/');
      }
    "
  />
  <div class="page-container">
  <s-container>
    <s-card :style="{ marginBottom: '16px' }">
      <div>
        <label class="formLabel">Título</label>
        <s-input
          v-model="form.nome"
          size="large"
          placeholder="Escreva aqui :)"
        ></s-input>
      </div>
      <CalendarForm
        @newInit="
          (value) => {
            form.initialDate = value;
          }
        "
        @newEnd="
          (value) => {
            form.endDate = value;
          }
        "
      />
      <HorarioForm
        @newInit="
          (value) => {
            form.initialHour = value;
          }
        "
        @newEnd="
          (value) => {
            form.endHour = value;
          }
        "
      />
        <PriceForm
          @newInit="
            (value) => {
              form.ingresso = value;
            }
          "
          style="margin-bottom: 4px;"
        />
        <LimitForm
          @newInit="
            (value) => {
              form.limitePessoa = value;
            }
          "
        />
      <div style="margin-top: 8px;">
        <label class="formLabel">Local</label>
        <s-input
          v-model="form.endereco"
          placeholder="Digite o endereço"
          :prefix-icon="Location"
        />
      </div>
      <div
        :style="{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }"
      >
        <label class="formLabel">Gerar comunicado com IA</label>
        <s-switch v-model="form.ia" />
      </div>
      <el-input
        v-model="form.texto"
        :rows="3"
        :style="{ marginBottom: '22px' }"
        type="textarea"
        placeholder="Texto do comunicado"
      />
      <div>
        <label class="formLabel">Enviar para</label>
        <s-input v-model="form.destino" size="large" placeholder=""></s-input>
      </div>
      <div>
        <el-upload
          class="upload-demo"
          drag
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        >
          <span>
            <el-icon><Link /></el-icon>
            Adicionar anexo
          </span>
          <template #tip>
            <div class="el-upload__tip">max file size: 1MB</div>
          </template>
        </el-upload>
      </div>
    </s-card>
    
  </s-container>
  <div class="send-button">
    <s-button-menu
      label="Enviar"
      variant="primary-green"
      @click="
        () => {
          console.log(form);
        }
      "
    />
</div>
</div>
</template>
<style scoped>
.formLabel {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 12px !important;
}
.send-button {
    position: sticky;
    bottom: 0;
    padding: 16px;
    background-color: white;
}

.page-container {
    height: 100vh;
}
</style>