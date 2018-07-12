import 'dom4';
import moduleName from 'es6-shim';

const context = require.context('.', true, /\.spec$/);

context.keys().forEach(context);
