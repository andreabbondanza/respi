import { IProducesDefinition } from "../interfaces/IDecoratorDefinition";

/**
 * Decorator for routing methods
 * @param mimeType The response content type
 */
export const Produces = (cType: string): MethodDecorator =>
{
    // `target` equals our class, `propertyKey` equals our decorated method name
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void =>
    {
        if (!Reflect.hasMetadata('ctype', target))
        {
            Reflect.defineMetadata('ctype', [], target);
        }
        const routes = Reflect.getMetadata('routes', target.constructor) as Array<IProducesDefinition>;
        routes.push({
            requestMethod: 'post',
            contentType: cType,
            methodName: propertyKey,
            type: "produces"
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};