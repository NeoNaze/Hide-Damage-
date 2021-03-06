const Command = require('command')

module.exports = function noDamage(dispatch) {
    const command = Command(dispatch)
    let enabled = true
    command.add('damage', () => {
        enabled = !enabled
        command.message('Damage '+(enabled?'invisible':'shown')+'.')
    })
    dispatch.hook('S_EACH_SKILL_RESULT', (event) => {
      if (!enabled) return
    event.damage=0
    return true
    })
}