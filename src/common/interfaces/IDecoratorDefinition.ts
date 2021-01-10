export interface IDecoratorDefinition
{
  // HTTP Request method (get, post, ...)
  requestMethod: 'get' | 'post' | 'delete' | 'options' | 'put' | 'patch';
  // Method name within our class responsible for this route
  methodName: string | symbol;
  // Callback type
  type: 'middleware' | 'api' | 'produces';
}

export interface IRouteDefinition extends IDecoratorDefinition
{
  // Path to our route
  path: string;
}

export interface IProducesDefinition extends IDecoratorDefinition
{
  // what prouces
  contentType: string;
}
