
import Player from './components/player'

const components = [Player]
const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export { Player as LivePlayer }
export default install
