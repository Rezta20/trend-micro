<template>
  <div class="background">
    <div class="card-outside-wrapper">
      <div class="back-btn"><i class="fas fa-arrow-left"></i> Back</div>

      <div class="main-content">
        <div class="sub-title">Start from free</div>
        <h1 class="title">Create an account</h1>
        <!-- buttons -->
        <div class="social-media">
          <SocialMediaButton logo="google" text="Sign up with Google " />
          <SocialMediaButton logo="facebook" text="Sign up with Facebook " />
        </div>
        <!-- description -->
        <div class="description">
          <p class="content">Or use your email for registration</p>
          <div class="line" />
        </div>
        <!-- inputs -->
        <div class="inputs">
          <div class="name-wrapper">
            <div class="inputs-label">
              <input
                type="text"
                name="first-name-input"
                id="first-name-input"
                placeholder="First Name"
                :v-model="account.firstName"
              />
              <label
                :class="{ 'display:block': account.firstName }"
                for="first-name-input"
                >First Name</label
              >
            </div>
            <div class="inputs-label">
              <input
                type="text"
                name="last-name-input"
                id="last-name-input"
                placeholder="Last Name"
              />
              <label for="last-name-input">Last Name</label>
            </div>
          </div>

          <div class="inputs-label">
            <input type="text" name="email" id="email" placeholder="E-mail" />
            <label for="email" class="email-top-adjust">E-mail</label>
          </div>

          <div class="password-wrapper inputs-label">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <label for="password">Password</label>
            <font-awesome-icon icon="fa-solid fa-eye" class="icon" />
          </div>
        </div>
      </div>
      <font-awesome-icon icon="fa-solid fa-circle-check" />
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

  data() {
    return {
      account: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
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

    .inputs {
      font-size: 14px;
      position: relative;
      input {
        background-color: $background-blue;
        border: none;
        border-radius: 5px;
        height: 55px;
        display: flex;
        padding-left: 12px;
        margin-top: 10px;
        width: 100%;
        box-sizing: border-box;

        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: $description-gray;
          opacity: 1;
        }
        :-ms-input-placeholder {
          /* Internet Explorer
10-11 */
          color: $description-gray;
        }
        ::-ms-input-placeholder {
          /* Microsoft Edge
*/
          color: $description-gray;
        }

        &:focus {
          padding-top: 18px;
        }

        &:focus::-webkit-input-placeholder {
          color: transparent;
        }

        &:focus::-ms-input-placeholder {
          color: transparent;
        }

        &:focus::-ms-input-placeholder {
          color: transparent;
        }
      }

      .title {
        font-size: 10px;
        font-weight: 400;
        width: 70px;
        height: 10px;
        position: absolute;
        color: $description-gray;
      }

      .name-wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;

        div {
          width: 48%;
          position: relative;
        }
      }
      .inputs-label {
        position: relative;
        input {
          &:focus + label {
            display: block;
          }
        }
        label {
          display: none;
          position: absolute;
          color: $description-gray;
          font-size: 10px;
          top: 16px;
          left: 12px;
        }

        .email-top-adjust {
          top: 10px;
        }
      }

      .password-wrapper {
        display: flex;
        align-items: center;

        .icon {
          margin: 12px 0 0 -30px;
          font-size: 14px;
          color: $eye-gray;
        }
      }
    }
  }
}
</style>
