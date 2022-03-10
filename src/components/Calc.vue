<script setup lang="ts">

import {onMounted, proxyRefs, reactive, ref} from "vue";

  import {keydown} from "@utils/keydown";
  import config from "@config";

  import Button from "./Button.vue";
  import ClearButton from "./Clear.vue";
  import DeleteButton from "./Delete.vue";
  import api from "@utils/api";

  let current = ref('');
  let result = ref('');

  const callback = (action: {key: string, value: string | number, active: 'default', check?(current: string): Boolean}) => {
    let { value } = current;
    const isCurrent = !action?.check || (action.check && action.check(current.value));

    if(isCurrent) current.value = `${value + action.value.toString()}`;
    result.value = '';
  }

  const callbackDelete = () => {
    const { value } = current;

    current.value = '';
    for(let i = 0; i <= value.length - 2; i++) {
      current.value += value[i];
    }

    result.value = '';
    current.value = '';
  }

  const callbackAccept = async () => {
    const { value } = current;

    const { data: response } = await api.post('/calc', {
      equal: value
    });

    if(response?.success) result.value = response?.data;
    else result.value = 'ERROR';
  }

  const handlerClear = () => {
    result.value = '';
    current.value = '';
  }

  onMounted(() => {
    keydown(
        config.keydown,
        callback,
        callbackDelete,
        callbackAccept
    )
  })

</script>


<template>
  <div class="calc">
    <div class="calc__input">
      <h1 style="color: white;">{{current}}</h1>
      <div class="calc__result" v-if="!!result">
        = {{result}}
      </div>
    </div>
    <div class="calc__working working">
      <div class="working__row df aic jcsb">
        <ClearButton @clear="handlerClear" />
        <DeleteButton @clear="callbackDelete" />
      </div>
      <div class="working__buttons df aic">
        <div class="working__numbers">
          <div
              class="working--btn"
              v-for="item in Object.keys(config.keydown)?.filter(_item => _item?.match('[1-9]'))"
          >
            <Button
                :data="config.keydown[item]"
                @clickButton="callback"
            />
          </div>
        </div>
        <div class="working__dops">
          <div
              class="working__dop"
              v-for="item in Object.keys(config.keydown)?.filter(_item => _item?.match('[-+*/()]'))"
          >
            <Button
                :data="config.keydown[item]"
                @clickButton="callback"
            />
          </div>
        </div>
      </div>
      <div class="working__submit df aic jcc" @click="callbackAccept">
        =
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>

  .calc {
    width: 400px;
    height: 500px;
    background: gray;
    padding: 0;
    margin: 0;
    border-radius: 8px;
    overflow: hidden;

    &__input {
      width: 100%;
      height: 100px;
      background: black;
      color: white;
      text-align: right;
      border: 1px solid white;
      border-radius: 8px 8px 0 0;

      & h1 {
        font-size: 24px;
        font-weight: 500;
      }
    }

    & .working {
      height: 400px;
      width: 100%;
      display: flex;
      flex-direction: column;

      &__numbers {
        width: 300px;
        display: grid;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
      }

      &__dops {
        width: 200px;
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(3, 100px);
      }

      &__submit {
        width: 100%;
        flex-grow: 3;
        background: #434343;
        color: white;
        font-size: 24px;
        font-weight: 700;
        cursor: pointer;
        transition: .3s;
        opacity: .8;

        &:hover {
          opacity: 1;
          background: #2D2D2D;
        }
      }
    }

  }

</style>