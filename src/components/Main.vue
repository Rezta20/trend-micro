<template>
  <div class="background">
    <div class="card-outside-wrapper">
      <div class="back-btn"><i class="fas fa-arrow-left"></i> Back</div>

      <div class="main-content">
        <div class="sub-title">Start from free</div>
        <h1 class="title">Create an account</h1>
        <div class="social-media">
          <SocialMediaButton logo="google" text="Sign up with Google " />
          <SocialMediaButton logo="facebook" text="Sign up with Facebook " />
        </div>
        <div class="description">
          <p class="content">Or use your email for registration</p>
          <div class="line" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMediaButton from "@/components/SocialMediaButton.vue";

export default {
  name: "Main",
  components: {
    SocialMediaButton,
  },
};
</script>

<style lang="scss">
@import "@/assets/variable.scss";

* {
  padding: 0px;
  margin: 0px;
}

.background {
  display: flex;
  height: 100vh;
  font-family: $font;
  background-color: $background-blue;
}

.card-outside-wrapper {
  margin: auto;
  width: 570px;
  padding: $base-padding;
  border-radius: $base-radius;
  background-color: $white;

  .back-btn {
    width: 60px;
    margin: $base-margin;
  }

  .main-content {
    margin: 20px 80px;

    .sub-title {
      font-weight: 400;
      font-size: $base-font-size * 1.1;
    }

    .title {
      font-weight: 600;
      font-size: $base-font-size * 2;
      margin-top: $base-margin * 0.5;
    }

    .social-media {
      display: flex;
      justify-content: space-between;
    }

    .description {
      position: relative;
      display: flex;
      width: 100%;

      .content {
        font-weight: 500;
      }
      .line {
        position: absolute;
        width: 150px;
        right: 0px;
        top: 11px;
        border-top: solid 1px black;
      }
    }
  }
}
</style>
