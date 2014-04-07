module.exports = ->
  @config "qunit",
    options:
      "--web-security": "no"

    files: ["tests/*.html"]

  @loadNpmTasks "grunt-contrib-qunit"

  @registerTask "default", [
    "qunit"
  ]
