<template>
	<nav>
		<ul>
			<li> {{text}} </li>
			<li> {{text2}} </li>
			<li> {{text3}} </li>
		</ul>
	</nav>
</template>

<script>

export default {
	name: 'MainNav',
	data() {
		return {
			text: 'Home',
			text2: 'About',
			text3: 'Concact'
		}
	},
}
</script>

<style scoped>
	nav { width: 100%; background-color: #2a2a2a}
	ul {
		width: 70%;
		display: flex; 
		justify-content: space-between; 
		align-items: center
	}
	li {padding: 25px; color: #808080}

</style>