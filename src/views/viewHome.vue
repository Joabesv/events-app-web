<script setup lang="ts">
import { ref } from "vue";
// import imagemVazio from '../assets/vazioTudoCerto.svg'
const events = ref([1]);
const nextEvents = ref([1, 2]);
const eventsInProgress = ref([1]);

function editEvent(event: any) {
  console.log(event);
}
</script>
<template>
  <div>
    <s-nav-bar titulo="Gestão de eventos" />

    <s-container class="s-home-container">
      <h4>Eventos</h4>

      <!-- Página Vazia -->
      <!-- <s-card>
        <s-vazio
          :imagem="imagemVazio"
          :titulo="'Parece que você não tem mais nenhum evento confirmado na agenda'"
          class="s-home-vazio-container"
        />
      </s-card> -->

      <s-card
        v-if="events.length > 0 || nextEvents.length > 0"
        class="turmas-lista-status"
      >
        <div v-if="events.length > 0">
          <div class="h7-link">Em andamento</div>
          <div class="turmas-container">
            <SCardTurma
              :key="1"
              :turma="'Hachathon Sophia+byLayers'"
              :disciplina="'Rua Euclides Miragaia, Centro - São José dos Campos'"
              :hora-inicial="'08:00'"
              :hora-final="'17:30'"
              @click="editEvent(event)"
            />
          </div>
        </div>

        <div v-if="nextEvents.length > 0">
          <div class="h7">Próximas</div>

          <div class="turmas-container">
            <div class="h7">14/08/2023</div>
            <SCardTurma
              :key="1"
              :turma="'Evento dia dos pais'"
              :disciplina="'Escola Liceu'"
              :hora-inicial="'10:30'"
              :hora-final="''"
              variant="secondary"
              @click="editEvent(event)"
            />
          </div>
        </div>
      </s-card>
      <s-button-menu label="Todos os eventos"/>
      <s-button-menu label="Criar evento" variant="primary-green" @click="$router.push('/event')"/>
    </s-container>
  </div>
  <!-- v-for="event in eventsInProgress.length > 0
                ? nextEvents.slice(0, 3)
                : nextEvents.slice(0, 4)" -->
</template>
<style scoped>
.s-home-container {
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  row-gap: 8px;
}

.s-home-container h4 {
  margin-bottom: 0;
}

h5 {
  text-align: center;
}
</style>
