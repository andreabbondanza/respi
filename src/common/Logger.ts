export class Logger
{
    private _env: string = "development";
    /**
     * Indicate if show log
     */
    public get showLog(): boolean
    {
        return this._env === "development";
    }

    public constructor(env: string | undefined)
    {
        if (env)
            this._env = env;
    }

    /**
     * Log stuff
     * @param val log value if showLog is enabled
     */
    public log(val: string)
    {
        if (this.showLog)
        {
            console.log("------------------");
            console.log(this.getTrace());
            console.log(val);
        }
    }

    private getTrace(): string | undefined
    {
        let stack: any = null;
        try
        {
            throw new Error('');
        } catch (error)
        {
            stack = error.stack || '';
        }
        if (stack)
        {
            stack = stack.split('\n').map((line: string) => line.trim());
            stack = stack.splice(stack[0] === 'Error' ? 2 : 1);
            if (stack.length > 2)
            {
                const fun: string = stack[1].split(" ")[1];
                console.log(stack[1].split(" ")[2]);
                let file: string = stack[1].split(" ")[2].split("/dist/")[1];
                if (!file)
                {
                    file = stack[1].split(" ")[2].split("\\dist\\")[1];
                }

                const output = fun + " : " + file.removeLastCharacter();
                return output;
            }
        }
        return undefined;
    }
}
