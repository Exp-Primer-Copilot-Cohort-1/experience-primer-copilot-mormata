function skillsMember() {
  return {
    skills: ['HTML', 'CSS', 'JS'],
    showSkills: function() {
      this.skills.forEach((skill) => {
        console.log(`${skill}`);
      });
    },
  };
}