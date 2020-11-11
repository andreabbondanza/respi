export class Logger
{
    private _env: string = "development";
    public get showLog()
    {
        return this._env === "development";
    }
    public constructor(env: string | undefined)
    {
        if (env)
            this._env = env;
    }

    private getTrace()
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
            stack = stack.split('\n').map(function (line: string) { return line.trim(); });
            stack = stack.splice(stack[0] == 'Error' ? 2 : 1);
            if (stack.length > 2)
            {
                const fun: string = stack[1].split(" ")[1];
                const file: string = stack[1].split(" ")[2].split("/dist/")[1];
                const output = fun + " : " + file.removeLastCharacter();                
                return output;
            }
        }
        return undefined;
    }
    /**
     * 
     * @param val log value if showLog is enabled
     */
    public log(val: string)
    {
        if (this.showLog)
        {
            console.log("------------------");
            console.log(this.getTrace());
            console.log(val);
            console.log("------------------");
        }
    }
}