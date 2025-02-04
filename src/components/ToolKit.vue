<template>
    <div>
        <button>Sound On</button>
        <button>FullScreen mode</button>
        <button class="help-button">?</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
@import "../assets/base.css";
    button {
        width: 100%; 
        height: max-content;
        margin: 3px;
        padding : 5px;
        padding: var(--vt-p-button); 
        border: 5px; 
        border-radius: 5px; 
        background-color: var(--mt-blue-15);
        color: var(--mt-blue-4)
    }
    .help-button {
        width: 40px;
        height: 40px;
        border-radius: 40px;
    }
    div {
        display: flex;
        flex-direction: column;
        width: 150px;
        align-items: center;
        
    }
</style>