<script context="module">export const TABS = {};
</script>

<script>import { writable } from 'svelte/store';
import { onDestroy, setContext } from 'svelte';
const tabs = [];
const panels = [];
const activeTab = writable(null);
const activePanel = writable(null);
setContext(TABS, {
    registerTab: (tab) => {
        tabs.push(tab);
        activeTab.update((current) => current || tab);
        onDestroy(() => {
            const i = tabs.indexOf(tab);
            tabs.splice(i, 1);
            activeTab.update((current) => current === tab ? tabs[i] || tabs[tabs.length - 1] : current);
        });
    },
    registerPanel: (panel) => {
        panels.push(panel);
        activePanel.update((current) => current || panel);
        onDestroy(() => {
            const i = panels.indexOf(panel);
            panels.splice(i, 1);
            activePanel.update((current) => current === panel ? panels[i] || panels[panels.length - 1] : current);
        });
    },
    selectTab: (tab) => {
        const i = tabs.indexOf(tab);
        activeTab.set(tab);
        activePanel.set(panels[i]);
    },
    activeTab,
    activePanel,
});
</script>

<div class="tabs" {...$$restProps}>
  <slot />
</div>
