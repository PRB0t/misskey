<template>
<span class="mk-nav">
	<a :href="aboutUrl">%i18n:@about%</a>
	<i>・</i>
	<a :href="repositoryUrl">%i18n:@repository%</a>
	<i>・</i>
	<a :href="feedbackUrl" target="_blank">%i18n:@feedback%</a>
	<i>・</i>
	<a :href="devUrl">%i18n:@develop%</a>
	<i>・</i>
	<a href="https://twitter.com/misskey_xyz" target="_blank">Follow us on %fa:B twitter%</a>
</span>
</template>

<script lang="ts">
import Vue from 'vue';
import { docsUrl, statsUrl, statusUrl, devUrl, repositoryUrl, feedbackUrl, lang } from '../../../config';

export default Vue.extend({
	data() {
		return {
			aboutUrl: `${docsUrl}/${lang}/about`,
			statsUrl,
			statusUrl,
			devUrl,
			repositoryUrl: repositoryUrl || `https://github.com/syuilo/misskey`,
			feedbackUrl: feedbackUrl || `https://github.com/syuilo/misskey/issues/new`
		}
	}
});
</script>

<style lang="stylus" scoped>
.mk-nav
	a
		color inherit
</style>
