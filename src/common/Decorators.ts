import { IRouteDefinition } from './interfaces/IRouterDefinition';

/**
 * Decorator for ApiController
 * @param baseUrl the basic url for this controller
 */
export const controller = (baseUrl: string = ''): ClassDecorator =>
{
    return (target: any) =>
    {
        Reflect.defineMetadata('baseUrl', baseUrl, target);
        if (!Reflect.hasMetadata('routes', target))
        {
            Reflect.defineMetadata('routes', [], target);
        }
    };
};

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const get = (path: string): MethodDecorator =>
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
export const getMiddleware = (path: string): MethodDecorator =>
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
            type: "middleware"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const post = (path: string): MethodDecorator =>
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
export const postMiddleware = (path: string): MethodDecorator =>
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
            type: "middleware"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const put = (path: string): MethodDecorator =>
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
export const putMiddleware = (path: string): MethodDecorator =>
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
            type: "middleware"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const patch = (path: string): MethodDecorator =>
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
export const patchMiddleware = (path: string): MethodDecorator =>
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
            type: "middleware"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const options = (path: string): MethodDecorator =>
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
export const optionsMiddleware = (path: string): MethodDecorator =>
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
            type: "middleware"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};

/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const del = (path: string): MethodDecorator =>
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


/**
 * Decorator for routing methods
 * @param path the url for the method
 */
export const delMiddleware = (path: string): MethodDecorator =>
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
            type: "middleware"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};