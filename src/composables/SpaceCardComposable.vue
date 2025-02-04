<template>
    <div>
        <div>
            <SpaceCard class="space-card" :card-title="spaceCardComposableTitle"/>
            <p>{{ spaceCardComposableDescription }}</p>
        </div>
        <ToolKit class="toolkit"/>
    </div>
    
</template>
<script setup lang="ts">
import SpaceCard from '@/components/SpaceCard.vue';

const props = defineProps < {
    spaceCardComposableTitle?: String
    spaceCardComposableDescription?: String
} > ();
</script>
<style lang="css">
    @import '../assets/base.css';
div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 700px
    }
    p {
        color : var(--mt-blue-15)
    }
</style>