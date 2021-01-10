import { IRouteDefinition } from '../interfaces/IDecoratorDefinition';

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const PostMiddleware = (path: string): MethodDecorator =>
{
    // `target` equals our class, `propertyKey` equals our decorated method name
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void =>
    {
        if (!Reflect.hasMetadata('routes', target.constructor))
        {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as IRouteDefinition[];
        routes.push({
            requestMethod: 'post',
            path,
            methodName: propertyKey,
            type: "middleware"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const PutMiddleware = (path: string): MethodDecorator =>
{
    // `target` equals our class, `propertyKey` equals our decorated method name
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void =>
    {
        if (!Reflect.hasMetadata('routes', target.constructor))
        {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as IRouteDefinition[];
        routes.push({
            requestMethod: 'put',
            path,
            methodName: propertyKey,
            type: "middleware"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const PatchMiddleware = (path: string): MethodDecorator =>
{
    // `target` equals our class, `propertyKey` equals our decorated method name
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void =>
    {
        if (!Reflect.hasMetadata('routes', target.constructor))
        {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as IRouteDefinition[];
        routes.push({
            requestMethod: 'patch',
            path,
            methodName: propertyKey,
            type: "middleware"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const OptionsMiddleware = (path: string): MethodDecorator =>
{
    // `target` equals our class, `propertyKey` equals our decorated method name
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void =>
    {
        if (!Reflect.hasMetadata('routes', target.constructor))
        {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as IRouteDefinition[];
        routes.push({
            requestMethod: 'options',
            path,
            methodName: propertyKey,
            type: "middleware"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const DeleteMiddleware = (path: string): MethodDecorator =>
{
    // `target` equals our class, `propertyKey` equals our decorated method name
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void =>
    {
        if (!Reflect.hasMetadata('routes', target.constructor))
        {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as IRouteDefinition[];
        routes.push({
            requestMethod: 'delete',
            path,
            methodName: propertyKey,
            type: "middleware"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const GetMiddleware = (path: string): MethodDecorator =>
{
    // `target` equals our class, `propertyKey` equals our decorated method name
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void =>
    {
        if (!Reflect.hasMetadata('routes', target.constructor))
        {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as IRouteDefinition[];
        routes.push({
            requestMethod: 'get',
            path,
            methodName: propertyKey,
            type: "middleware"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};
