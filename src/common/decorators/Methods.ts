import { IRouteDefinition } from '../interfaces/IDecoratorDefinition';

/**
 * Decorator for ApiController
 * @param baseUrl the basic url for this controller
 */
export const Controller = (baseUrl: string = ''): ClassDecorator =>
{
    return (target: any) =>
    {
        Reflect.defineMetadata('baseUrl', baseUrl, target);
        if (!Reflect.hasMetadata('routes', target))
        {
            Reflect.defineMetadata('routes', [], target);
        }
        if (!Reflect.hasMetadata('ctype', target))
        {
            Reflect.defineMetadata('ctype', [], target);
        }
    };
};

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const Get = (path: string): MethodDecorator =>
{
    // `target` equals our class, `propertyKey` equals our decorated method name
    return (target: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor): void =>
    {
        if (!Reflect.hasMetadata('routes', target.constructor))
        {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as Array<IRouteDefinition>;
        routes.push({
            requestMethod: 'get',
            path,
            methodName: propertyKey,
            type: "api"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};



/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const Post = (path: string): MethodDecorator =>
{
    // `target` equals our class, `propertyKey` equals our decorated method name
    return (target: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor): void =>
    {
        if (!Reflect.hasMetadata('routes', target.constructor))
        {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as Array<IRouteDefinition>;
        routes.push({
            requestMethod: 'post',
            path,
            methodName: propertyKey,
            type: "api"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};


/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const Put = (path: string): MethodDecorator =>
{
    // `target` equals our class, `propertyKey` equals our decorated method name
    return (target: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor): void =>
    {
        if (!Reflect.hasMetadata('routes', target.constructor))
        {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as Array<IRouteDefinition>;
        routes.push({
            requestMethod: 'put',
            path,
            methodName: propertyKey,
            type: "api"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const Patch = (path: string): MethodDecorator =>
{
    // `target` equals our class, `propertyKey` equals our decorated method name
    return (target: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor): void =>
    {
        if (!Reflect.hasMetadata('routes', target.constructor))
        {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as Array<IRouteDefinition>;
        routes.push({
            requestMethod: 'patch',
            path,
            methodName: propertyKey,
            type: "api"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};



/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const Options = (path: string): MethodDecorator =>
{
    // `target` equals our class, `propertyKey` equals our decorated method name
    return (target: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor): void =>
    {
        if (!Reflect.hasMetadata('routes', target.constructor))
        {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as Array<IRouteDefinition>;
        routes.push({
            requestMethod: 'options',
            path,
            methodName: propertyKey,
            type: "api"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};



/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const Delete = (path: string): MethodDecorator =>
{
    // `target` equals our class, `propertyKey` equals our decorated method name
    return (target: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor): void =>
    {
        if (!Reflect.hasMetadata('routes', target.constructor))
        {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as Array<IRouteDefinition>;
        routes.push({
            requestMethod: 'delete',
            path,
            methodName: propertyKey,
            type: "api"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};


