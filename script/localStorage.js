export function GetFromStorage(name)
{
    return localStorage.getItem(name);
}

export function SetToStorage(name, value)
{
    localStorage.setItem(name, value);
}