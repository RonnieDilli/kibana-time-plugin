import 'ui/angular-bootstrap';
import 'plugins/kibana-time-plugin/lib/angular-bootstrap/css/btn-group.less';
import 'plugins/kibana-time-plugin/lib/angular-bootstrap/css/carousel.less';
import 'plugins/kibana-time-plugin/lib/angular-bootstrap/js/carousel.js';
import 'plugins/kibana-time-plugin/bower_components/bootstrap-addons/dist/css/bootstrap-addons.css';
import 'plugins/kibana-time-plugin/bower_components/bootstrap-addons/dist/js/bootstrap-addons.js';
import 'plugins/kibana-time-plugin/time.less';
import 'plugins/kibana-time-plugin/timeController';

import { AngularVisController } from 'ui/vis/vis_types/angular_vis_type';
import { visFactory } from 'ui/vis/vis_factory';
import { setup as visualizations } from '../../../src/legacy/core_plugins/visualizations/public/np_ready/public/legacy';

import visTemplate from 'plugins/kibana-time-plugin/time.html';
import optionsTemplate from 'plugins/kibana-time-plugin/timeOptions.html';

// register the provider with the visTypes registry
visualizations.types.registerVisualization(TimeVisProvider);

function TimeVisProvider() {
    return visFactory.createBaseVisualization({
        name: 'time',
        title: 'Time widget',
        icon: 'clock',
        description: 'Add time inputs to your dashboards.',
        visualization: AngularVisController,
        visConfig: {
            template: visTemplate,
            defaults: {
                enable_quick: false,
                enable_relative: false,
                enable_absolut: true,
                enable_animation: false,
            }
        },
    editorConfig: {
        optionsTemplate: optionsTemplate
    },
    requestHandler: 'none',
    responseHandler: 'none'
    });
}
