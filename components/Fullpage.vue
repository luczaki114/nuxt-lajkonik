<template>
    <div ref="{id}" :id="id" class="full-page">
        <slot></slot>
    </div>
</template>

<style>
	.full-page {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

<script>
export default {
  props: {
	  id: {
		  type: String,
		  required: true
	  }
  }
}
</script>
