export interface IRouteDefinition {
    // Path to our route
    path: string;
    // HTTP Request method (get, post, ...)
    requestMethod: 'get' | 'post' | 'delete' | 'options' | 'put' | 'patch';
    // Method name within our class responsible for this route
    methodName: string | Symbol;
    // Callback type
    type: 'middleware' | 'api';
  }