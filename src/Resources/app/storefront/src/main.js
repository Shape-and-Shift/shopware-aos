import AosAnimation from './aos-animation/aos-animation.plugin';

const PluginManager = window.PluginManager;
PluginManager.register('AosAnimation', AosAnimation);

if (module.hot) {
    module.hot.accept();
}
