import Plugin from 'src/plugin-system/plugin.class';
import AOS from '../../node_modules/aos';

export default class AosAnimation extends Plugin {

    init() {
        this._initAos()
    }

    _initAos() {
        AOS.init();
    }

}
