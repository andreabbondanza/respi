import { IRouteDefinition } from './interfaces/IRouterDefinition';
import { IApiController } from "./interfaces/IApiController";

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
            methodName: propertyKey
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
            methodName: propertyKey
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
            methodName: propertyKey
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
            methodName: propertyKey
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
            methodName: propertyKey
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
            methodName: propertyKey
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};