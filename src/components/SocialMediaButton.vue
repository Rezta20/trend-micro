<template>
  <div>
    <button class="wrapper">
      <div class="icon">
        <div v-if="logo === 'google'">
          <font-awesome-icon icon="fa-brands fa-google" />
        </div>
        <div v-if="logo === 'facebook'">
          <font-awesome-icon icon="fa-brands fa-facebook-f" />
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
    padding-right: 8px;
    font-size: 22px;
  }

  p {
    font-size: 13px;
  }

  &:hover {
    background-color: $icon-color;
    color: $white;
    box-shadow: 0px 6px 15px rgba(60, 113, 255, 0.4);
    .icon {
      color: $white;
    }
  }
}
</style>
