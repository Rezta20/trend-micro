<template>
  <div>
    <button class="wrapper">
      <div class="icon">
        <div v-if="logo === 'google'">
          <i class="fab fa-google icon"></i>
        </div>
        <div v-if="logo === 'facebook'">
          <i class="fab fa-facebook-f"></i>
        </div>
      </div>
      <p>{{ text }}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "SocialMediaButton",
  components: {},
  props: {
    logo: {
      type: String,
      default: "",
    },
    text: { type: String, default: "" },
  },
};
</script>

<style lang="scss">
@import "@/assets/variable.scss";

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px $button-border;
  border-radius: $base-radius * 0.5;
  background-color: $white;
  box-sizing: border-box;
  width: 195px;
  height: 55px;
  margin: $base-margin 0;

  .icon {
    color: $icon-color;
    padding-right: 6px;
    font-size: 22px;
  }

  p {
    font-size: 13px;
  }
}
</style>
