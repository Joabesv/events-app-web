<script setup lang="ts">
import { ref } from 'vue';
import imagemVazio from '../../assets/vazioTudoCerto.svg'

const events = ref([1])

function editEvent(event) {
    console.log(event)
}
</script>

<template>
  <s-nav-bar
    titulo="Eventos"
    :voltar="
      () => {
        $router.push('/');
      }
    "
  />
  <s-container>
      <!-- Página Vazia -->
      <SVazio
        v-if="events.length == 0"
        :imagem="imagemVazio"
        titulo="Parece que você não tem nenhum evento"
      />

      <!-- Página Completa -->
      <div
        v-if="events?.length > 0"
        class="s-cards-container"
      >
      <div class="h7">14/08/2023</div>
      <!-- v-for="lista in listasChamadaRenderizada" -->
        <SCardTurmaAulaDia
          
          :key="1"
          :turma="'Hackathon Sophia+byLayers'"
          :status="'Sim'"
          :disciplina="'Rua Euclides Miragaia, 433 - Centro'"
          :data-lista-chamada="'11/08/2023'"
          :hora-inicio="'08:00'"
          :hora-final="'17:30'"
          @click="editEvent(event)"
        />
      </div>
  </s-container>
</template>
<style scoped>
.h7{
    margin-bottom: 16px;
    font-size: 16px;
}
</style>