<script context="module">import Badge, { badgeTypes } from './badge.svelte';
const types = badgeTypes.filter((type) => type !== 'count');
export const meta = {
    title: 'Badge',
    component: Badge,
    args: {
        count: 99,
        label: 'Badge',
    },
    argTypes: {
        label: { control: 'text' },
        count: { control: 'number', min: 0, max: 99999, step: 1 },
    },
    parameters: {
        controls: { exclude: ['type', 'badgeTypes', 'class'] },
    },
};
</script>

<script>import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <div class="flex flex-col gap-2">
    {#each types as type}
      <Badge {type} class="capitalize">{type.replace(/-/g, ' ')}</Badge>
    {/each}
    <Badge type="count">{args.count}</Badge>
  </div>
</Template>

<Story name="Default" />
