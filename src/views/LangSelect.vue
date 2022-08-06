<script setup>
import DKLayout from "@/components/DKLayout.vue";
import DKListSelect from "@/components/DKListSelect.vue";
import DKBottomRightButtons from "@/components/DKBottomRightButtons.vue";
import DKBottomActions from "@/components/DKBottomActions.vue";
</script>

<script>
import lang_data from "../lang_select.json";
export default {
  data: function () {
    return {
      lang_data: lang_data,
      display_data: lang_data.map((v) => ({ body: v.lang })),
      selection: 0,
    };
  },
  methods: {
    select: function (idx) {
      this.$emit("update:lang", this.lang_data[idx].id);
    },
  },
};
</script>

<template>
  <DKLayout>
    <section>
      <DKListSelect
        :options="display_data"
        v-model:selected="selection"
      ></DKListSelect>
    </section>
    <DKBottomActions>
      <DKBottomRightButtons>
        <button class="button" @click="select(selection)">
          {{ lang_data[selection]["next"] }}
        </button>
      </DKBottomRightButtons>
    </DKBottomActions>
  </DKLayout>
</template>

<style scoped></style>
