<template lang="pug">
div
  v-container.py-0
    div.d-flex.align-center.mb-6
      v-card(
        @click="cancel"
      ).prev-page-btn.mr-4
        v-icon(color="#121133") mdi-chevron-left
      h2(class="title mr-16").text-uppercase Создать опрос
    div.d-flex.flex-column.content
      v-card(
        link
        @click="click_to_input_file"
        :style="'background-image: url(' + background_image + ')'"
      ).background-image
        div(
          v-if="!background_image"
        ).d-flex.align-center.justify-center.flex-column
          div.background-image-icon.mt-2
            v-icon(:size="40") mdi-plus
          div.mt-2 Изображение
        div(
          @click="remove_background_image"
          v-if="background_image"
        ).background-image-remove
          v-icon(
            :size="28"
            color="error"
          ) mdi-delete
      div
        v-text-field(
          solo
          v-model="title"
          label="Заголовок"
          hide-details
        ).portal-field
      div
        v-textarea(
          solo
          v-model="small_description"
          label="Описание"
          hide-details
        ).portal-field
      div(style="gap: 24px;").d-flex.align-center.flex-wrap
        v-btn(
          elevation="0"
          large
          @click="add_checkbox"
        ).btn-add-fields
          v-icon(left) mdi-plus
          | Добавить Checkbox
        v-btn(
          elevation="0"
          large
          @click="add_textfield"
        ).btn-add-fields
          v-icon(left) mdi-plus
          | Добавить Textfield
      div(
        style="gap: 24px;" 
        v-if="textfields.length || checkboxes.length"
      ).d-flex.align-center.flex-column
        div(v-if="error").warning-fields.pa-4
          | {{ error }}
        div(
          v-for="(textfield, index) in textfields"
          :key="index"
          style="gap: 24px; width: 100%;"
        ).d-flex.align-center.flex-column.fields
          v-text-field(
            solo
            v-model="textfield.label"
            label="Заголовок вопроса"
            hide-details
          ).portal-field
          v-text-field(
            solo
            v-model="textfield.text"
            label="Вопрос"
            hide-details
          ).portal-field
        div(v-if="error_checkboxes").warning-fields.pa-4
          | {{ error_checkboxes }}
        div(
          v-for="(checkbox, index) in checkboxes"
          :key="index"
          style="width: 100%;"
        ).d-flex.align-center.flex-column.fields
          v-text-field(
            solo
            v-model="checkbox.label"
            label="Заголовок checkbox"
            hide-details
          ).portal-field
          v-checkbox(
            solo
            v-model="checkbox.status"
            label="Checkbox"
            hide-details
          ).portal-field
      div(style="gap: 24px;").d-flex.align-center.bottom-btns
        v-btn(
          elevation="0"
          large
          :disable="create_button_disable"
        ).btn-add-fields
          | Создать
        v-btn(
          elevation="0"
          large
          @click="cancel"
        ).btn-add-fields
          | Отмена
  // Input с которого можно загрузить фото
  input(
    type="file"
    @change="add_images()"
    accept="image/jpeg, image/png, image/svg, image/jpg"
    ref="inputImage"
    style="display: none;"
  )
</template>

<script>
export default {
  name: "PortalPollCreateView",
  data() {
    return {
      background_image: null,
      background_image_for_server: null,
      title: null,
      small_description: null,
      textfields: [],
      checkboxes: [],
      error: null,
      error_checkboxes: null,
    };
  },
  watch: {
    error() {
      setTimeout(() => {
        this.error = null;
      }, 5000);
    },
    error_checkboxes() {
      setTimeout(() => {
        this.error_checkboxes = null;
      }, 5000);
    },
  },
  methods: {
    create_button_disable() {},
    add_images() {
      const file = this.$refs.inputImage.files[0];

      if (!file) {
        // Файл не выбран, обработайте ошибку или покажите сообщение пользователю
        return;
      }

      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/svg",
        "image/jpg",
      ];

      if (!allowedTypes.includes(file.type)) {
        // Неверный тип файла. Обработайте ошибку или отобразите сообщение пользователю
        return;
      }

      const reader = new FileReader();

      reader.addEventListener("load", () => {
        // Преобразование файла изображения в строку base64
        this.background_image = reader.result;
        this.background_image_for_server = file;
      });
      reader.readAsDataURL(file);
    },
    remove_background_image() {
      // Вызвать предупреждающий диалог
      this.$store.commit("set_poll_create_delete_dialog", true);
    },
    click_to_input_file() {
      this.$refs.inputImage.click();
    },
    add_textfield() {
      const textfieldObject = {
        label: null,
        text: null,
      };

      if (this.textfields.length === 0) {
        this.textfields.push(textfieldObject);
      } else {
        if (
          this.textfields[this.textfields.length - 1].label === null &&
          this.textfields[this.textfields.length - 1].text === null
        ) {
          this.error = "Заполните существующее поле";
        } else {
          this.error = null;

          this.textfields.push(textfieldObject);
        }
      }
    },
    add_checkbox() {
      const checkboxObject = {
        label: null,
        status: null,
      };

      if (this.checkboxes.length === 0) {
        this.checkboxes.push(checkboxObject);
      } else {
        if (this.checkboxes[this.checkboxes.length - 1].label === null) {
          this.error_checkboxes = "Заполните существующее поле";
        } else {
          this.error_checkboxes = null;

          this.checkboxes.push(checkboxObject);
        }
      }
    },
    cancel() {
      this.background_image = null;
      this.background_image_for_server = null;
      this.title = null;
      this.fields = [];
      this.checkboxes = [];

      this.$router.push("/portal-of-education/polls");
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  font-weight: 700;
  font-size: 36px !important;
  line-height: 44px;
  letter-spacing: 0.02em;
  color: #121133 !important;
}

.warning-fields {
  color: #842029;
  background-color: #f8d7da;
  border: 1px solid #f5c2c7;
  border-radius: 4px;
}

.fields {
  & > * {
    width: 100%;
  }
}

.bottom {
  &-btns {
    & > * {
      flex: 1 1;
    }
  }
}

.btn-add-fields {
  box-shadow: 0 0 8px 0 #ededed !important;
  background-color: #fff !important;
  border-radius: 15px !important;
  overflow: hidden;
}

.content {
  gap: 24px;
}

.background-image {
  box-shadow: 0 0 8px 0 #ededed !important;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  height: 320px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &-icon {
    height: 100px;
    width: 100px;
    border: 2px solid #ededed;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-remove {
    height: 50px;
    width: 50px;
    position: absolute;
    border: 2px solid #ededed;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    align-items: center;
    top: 24px;
    cursor: pointer;
    right: 24px;
    z-index: 2;
    justify-content: center;
  }
}

.prev-page-btn {
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50% !important;
  overflow: hidden;
  background-color: #fff !important;
  box-shadow: 0 0 8px 0 #ededed !important;
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 28px !important;
  }
}
</style>
