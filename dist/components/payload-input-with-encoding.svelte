<script context="module">const encoding = ['json/plain', 'json/protobuf'];
export const isPayloadInputEncodingType = (x) => encoding.includes(x);
</script>

<script>import {} from 'svelte/store';
import { v4 as uuid } from 'uuid';
import Card from '../holocene/card.svelte';
import Input from '../holocene/input/input.svelte';
import RadioGroup from '../holocene/radio-input/radio-group.svelte';
import RadioInput from '../holocene/radio-input/radio-input.svelte';
import { translate } from '../i18n/translate';
import PayloadInput from './payload-input.svelte';
export let id = uuid();
export let input;
export let encoding;
export let messageType;
export let error = false;
export let loading = false;
export let label = translate('workflows.input');
export let editing = true;
$: {
    if ($encoding === 'json/plain' && messageType) {
        messageType = '';
    }
}
</script>

<div>
  <h5 class="pb-1 text-sm font-medium">{label}</h5>
  <Card class="flex flex-col gap-2">
    <PayloadInput bind:input bind:loading {error} {id} {editing} />
    <div
      class="flex items-end gap-2 {editing ? 'justify-between' : 'justify-end'}"
    >
      {#if editing}
        <div class="flex w-full flex-col gap-2">
          <RadioGroup
            description={translate('workflows.encoding')}
            bind:group={encoding}
            name="encoding"
          >
            <RadioInput id="json/plain" value="json/plain" label="json/plain" />
            <RadioInput
              id="json/protobuf"
              value="json/protobuf"
              label="json/protobuf"
            />
          </RadioGroup>
          {#if $encoding === 'json/protobuf'}
            <Input
              label={translate('workflows.message-type')}
              bind:value={messageType}
              {error}
              id="messageType"
            />
          {/if}
        </div>
      {/if}
      <slot name="action" />
    </div>
  </Card>
</div>
