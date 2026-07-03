// Configuração do Babel mais recente (Babel 7+)
// const presets = ["@babel/preset-env"]

// Configuração do Babel para suportar navegadores antigos (como o Internet Explorer 11)
const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                ie: "11"
            }
        }
    ]
]

module.exports = { presets }