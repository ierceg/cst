export {default as Parser} from './Parser';
export {default as visitorKeys} from './visitorKeys';

export {default as Element} from './elements/Element';
export {default as Node} from './elements/Node';
export {default as Token} from './elements/Token';
export {default as Fragment} from './elements/Fragment';
export {default as ModuleDeclaration} from './elements/ModuleDeclaration';
export {default as ModuleSpecifier} from './elements/ModuleSpecifier';

export {default as types} from './elements/elementIndex';

export {default as plugins} from './plugins/pluginsIndex';

import ScopesApi from './plugins/scopes/ScopesApi';

export const api = {
    ScopesApi
};
