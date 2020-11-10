export class PoolData
{
    private _data: any = {};
    /**
     * Add new data to pool
     * @param key data id
     * @param data data
     */
    public push(key: string, data: any)
    {
        this._data[key] = data;
    }
    /**
     * Get data from pool
     * @param key data id
     */
    public get<T>(key: string): T | undefined
    {
        return this._data[key];
    }
}