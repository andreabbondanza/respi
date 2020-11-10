/**
 * An error that occour when Api in App isn't initialized
 */
export class ApiError extends Error
{
    public constructor(message: string)
    {
        super(message);
        this.message = message;
        this.name = ApiError.name;
    }
}