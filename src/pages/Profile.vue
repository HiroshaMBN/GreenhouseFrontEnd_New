<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="model"> </edit-profile-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "./Profile/EditProfileForm";
import UserCard from "./Profile/UserCard";
export default {
  components: {
    EditProfileForm,
    UserCard,
  },
  data() {
    return {
      model: {
        company: "GreenHouse Automation",
        email: "malithhirosha@gmail.com",
        username: "hirosha",
        firstName: "hirosha",
        lastName: "*",
        address: "*",
        city: "*",
        country: "sri lanka",
        about:
          "Advanced IOT automation platform",
      },
      user: {
        fullName: "hirosha",
        title: "Ceo/Co-Founder",
        description: `******`,
      },
    };
  },
};
</script>
<style></style>
