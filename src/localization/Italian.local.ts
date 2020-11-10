import { Language } from "language-manager-ts";

export class Italian extends Language
{
    public language = () => "it";
    public dictionary = {
        "Hello!": "Ciao"
    }
}