<script setup>
import DKStripButton from "@/components/DKStripButton.vue";
import DKBottomActions from "@/components/DKBottomActions.vue";
import DKStepButtons from "@/components/DKStepButtons.vue";
import DKListSelect from "@/components/DKListSelect.vue";
</script>

<script>
export default {
  data: function () {
    return {
      selected: null,
      gparted: false,
      partitions: [],
      loading: false,
    };
  },
  computed: {
    new_disk: function () {
      return !this.partitions || this.partitions.length < 1;
    },
    valid: function () {
      return !this.gparted && (this.new_disk || this.selected != null);
    },
  },
  methods: {
    launch_gparted: function () {
      this.gparted = true;
      this.$ipc.call("exec", ["gparted"]).then(this.list_partitions);
    },
    list_partitions: function () {
      this.loading = true;
      this.gparted = true;
      this.$ipc.call("list_partitions", []).then((data) => {
        this.partitions = data;
        this.gparted = false;
        this.loading = false;
      });
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ $t("part.title") }}</h1>
    <section v-if="!new_disk">
      <p>{{ $t("part.p1") }}</p>
      <section>
        <DKListSelect
          :no_margin="true"
          v-model:selected="selected"
          :options="partitions"
        >
          <template #item="option">
            <div style="width: 100%">
              <span class="column-60">{{ option.path }}</span>
              <span class="column-20">{{
                option.fs_type || "Unformatted"
              }}</span>
              <span class="column-20">{{ option.size }}</span>
            </div>
          </template>
        </DKListSelect>
      </section>
    </section>

    <section v-if="new_disk">
      <p>{{ $t("part.p2") }}</p>
      <ul>
        <i18n-t keypath="part.l1" tag="li">
          <strong>128MiB</strong>
        </i18n-t>
        <i18n-t keypath="part.l2" tag="li">
          <strong>20GiB</strong>
        </i18n-t>
      </ul>
      <p>
        {{ $t("part.p3") }}
      </p>
    </section>
  </div>
  <DKBottomActions v-if="!gparted">
    <DKStripButton @click="launch_gparted" :text="$t('part.b1')">
      <img src="@/assets/drive-harddisk-root-symbolic.svg" height="18" />
    </DKStripButton>
    <DKStepButtons :can_proceed="valid" />
  </DKBottomActions>
</template>

<style scoped>
.column-20 {
  width: 20%;
  display: inline-block;
}

.column-60 {
  width: 60%;
  display: inline-block;
}
</style>
